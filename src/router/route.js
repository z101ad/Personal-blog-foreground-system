import Error from '@/view/Error'

export const routes = [
  {
    path:"/",
    redirect:"/home"
  },
  {
    name: 'home',
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/view/home'),
    meta: { title: '首页' }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "blog" */ '@/view/blog'),
    meta: { title: '博客列表' }
  },
  {
    path: '/blog/cate/:cateId',
    name: 'cateBlog',
    component: () => import(/* webpackChunkName: "blog" */ '@/view/blog'),
    meta: { title: '博客列表' }
  },
  {
    path: '/blog/:id',
    name: 'blogItem',
    component: () =>
      import(/* webpackChunkName: "blogItem" */ '@/view/blog/detail'),
    meta: { title: '博客详情' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/view/about'),
    meta: { title: '关于我' }
  },
  {
    path: '/project',
    name: 'project',
    component: () => import(/* webpackChunkName: "project" */ '@/view/project'),
    meta: { title: '项目&效果' }
  },
  {
    path: '/message',
    name: 'message',
    component: () => import(/* webpackChunkName: "message" */ '@/view/message'),
    meta: { title: '留言板' }
  },
  {
    path: '*',
    component: Error
  }
]
