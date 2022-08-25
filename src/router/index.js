import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/front/IndexView.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/front/HomeView.vue'),
        meta: {
          title: '首頁',
        },
      }, {
        path: '/about',
        name: 'About',
        component: () => import('@/views/front/AboutView.vue'),
        meta: {
          title: '關於',
        },
      }, {
        path: '/recipes',
        name: 'Recipes',
        component: () => import('@/views/front/RecipesView.vue'),
        meta: {
          title: '韓餐食譜',
        },
      }, {
        path: '/recipe/:id',
        name: 'Recipe',
        component: () => import('@/views/front/RecipeView.vue'),
      }, {
        path: '/booking',
        name: 'Bookings',
        component: () => import('@/views/front/BookingsView.vue'),
        meta: {
          title: '預約私房菜',
        },
      }, {
        path: '/booking/:id',
        name: 'Booking',
        component: () => import('@/views/front/BookingView.vue'),
        meta: {
          title: '私房菜明細',
        },
      },
    ],
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue'),
    meta: {
      title: '登入',
    },
  }, {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/ErrorView.vue'),
    meta: {
      title: '404 Not Found',
    },
  }, {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/admin/DashboardView.vue'),
    meta: {
      title: '後台管理',
    },
    children: [
      {
        path: 'products',
        component: () => import('@/views/admin/RecipesView.vue'),
        meta: {
          title: '列表管理',
        },
      }, {
        path: 'product',
        component: () => import('@/views/admin/RecipeView.vue'),
        meta: {
          title: '食譜管理',
        },
      }, {
        path: 'bookings',
        component: () => import('@/views/admin/BookingsView.vue'),
        meta: {
          title: '預約管理',
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
