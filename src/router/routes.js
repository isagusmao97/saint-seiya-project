
const routes = [
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    
    children: [
      { path: '', component: () => import('pages/Home.vue') }, 
      {
        path: "/pages/maincharacters",
        component: () => import("src/pages/MainCharacters.vue"),
      },
    ],
    
    
    
  },
  

  
  
  

]

export default routes
