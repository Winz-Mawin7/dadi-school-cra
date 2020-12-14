import { Course } from 'model/courses';

function removeCourseById(courses: Array<Course>, courseId: string) {
  return courses.filter((course) => course.id !== courseId);
}

export { removeCourseById };
