import { Course, courses } from 'model/courses';

function removeCourseById(courseId: string): Array<Course> {
  return courses.filter((course) => course.id !== courseId);
}

export { removeCourseById };
