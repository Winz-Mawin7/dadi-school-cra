import React, { useEffect, useState } from 'react';
import { Table, Button, Avatar, Popconfirm, Space, Typography } from 'antd';
import { ColumnsType } from 'antd/lib/table';

import { Course, courses as data } from 'model/courses';
import { getTeacherById } from 'services/teacher.service';

const Home: React.FC = () => {
  const [courses, setCourses] = useState<Array<Course>>([]);

  useEffect(() => {
    setCourses(data);
  }, []);

  function handleDelete(courseId: string): void {
    setCourses(courses.filter((course) => course.id !== courseId));
  }

  const columns: ColumnsType<Course> = [
    {
      key: 'id',
      title: 'ID',
      dataIndex: 'id',
    },
    {
      key: 'subject',
      title: 'Subject',
      dataIndex: 'subject',
    },
    {
      key: 'teacher',
      title: 'Teacher',
      dataIndex: 'teacher',
      render: (teacherId: string) => {
        const teacher = getTeacherById(teacherId);
        return (
          <Space size='middle'>
            <Avatar size='default' src={teacher?.imageUrl} />
            <Typography>
              {teacher?.firstname} {teacher?.lastname}
            </Typography>
          </Space>
        );
      },
    },
    {
      key: 'price',
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'id',
      align: 'center',
      render: (courseId: string) => (
        <Space size='middle'>
          <>
            <Popconfirm title='Sure to delete?' onConfirm={() => handleDelete(courseId)}>
              <Button key={courseId} type='primary' shape='round' danger>
                Delete
              </Button>
            </Popconfirm>
            <Button key={courseId} type='primary' shape='round'>
              Edit
            </Button>
          </>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} rowKey={(record) => record.id} pagination={{ position: ['topRight'] }} dataSource={courses} loading={!courses} />;
};

export default Home;
