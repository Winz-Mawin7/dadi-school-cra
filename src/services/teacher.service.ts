import { Teacher, teachers } from 'model/teachers';

function getTeacherById(teacherId: string): Teacher | undefined {
  return teachers.find((teacher) => teacher.id === teacherId);
}

export { getTeacherById };
