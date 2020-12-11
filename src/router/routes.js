
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'dashboard', component: () => import('pages/Dashboard.vue') },
      { path: 'farmers', component: () => import('pages/Farmers.vue') },
      { path: 'farmer/profile/:farmer_id', component: () => import('pages/FarmerProfile.vue'), name: "Farmer Profile" },
      { path: 'farmer/form', component: () => import('pages/FarmerForm.vue'), name: 'Farmer Form' },
      { path: 'settings', component: () => import('pages/Settings.vue') },
      { path: 'users', component: () => import('pages/Users.vue') },
    ],
    meta: { authOnly: true }
  },
  {
    path: '/login',
    component: () => import("layouts/Login.vue"),
    //meta: { guestOnly: true }
  },
  {
    path: '/register',
    component: () => import("layouts/Register.vue"),
    //meta: { guestOnly: true }
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
