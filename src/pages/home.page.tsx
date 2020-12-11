import React, { useEffect, useState } from 'react';
import { Table, Button, Avatar } from 'antd';
import { ColumnsType } from 'antd/lib/table';

import { Course, courses as data } from 'model/courses';
import { getTeacherById } from 'services/teacher.service';
import { removeCourseById } from 'services/course.service';

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
        <>
          <Avatar size='default' src={teacher.imageUrl} style={{ marginRight: 20 }} />
          {teacher.firstname} {teacher.lastname}
        </>
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
    render: (courseId: string) => (
      <Button type='primary' shape='round' danger onClick={() => data.filter((course) => course.id !== courseId)}>
        Delete
      </Button>
    ),
  },
];

const Home: React.FC = (props) => {
  console.log(JSON.stringify(props, null, 2));
  const [courses, setCourses] = useState<any>(null);
  useEffect(() => {
    setCourses(data);
  }, [courses]);

  return (
    <>
      <Table columns={columns} pagination={{ position: ['topRight'] }} dataSource={courses} />;
    </>
  );
};

export default Home;
