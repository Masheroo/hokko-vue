import { createRouter, createWebHistory } from 'vue-router'
import ConcreteCourse from "@/components/concrete-course/ConcreteCourse.vue";
import Courses from "@/components/courses/Courses.vue";
import Lesson from "@/components/lesson/Lesson.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/concrete-course',
      name: 'Concrete Course',
      component: ConcreteCourse
    },
    {
      path: '/concrete-course/lesson',
      name: 'Lesson',
      component: Lesson
    }
  ]
})

export default router
