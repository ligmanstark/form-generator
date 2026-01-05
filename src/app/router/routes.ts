import type { TRoutes } from './_type/TRoutes'

export const routes: TRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/FirstFormPage/FirstFormPage.vue'),
  },
  {
    path: '/second-form',
    name: 'second-form',

    component: () => import('@pages/SecondaryFormPage/SecondaryFormPage.vue'),
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('@/pages/Privacy.vue'),
  },
]
