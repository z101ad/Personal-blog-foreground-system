import mock from 'mockjs'
mock.mock("/api/aside","get",{
    code:0,
    msg:"",
    data: [
        { name: 'home', icon: 'home', text: '首页', to: '/', exact: true },
        { name: 'blog', icon: 'blog', text: '文章', to: '/blog', exact: false },
        { name: 'about', icon: 'about', text: '关于我', to: '/about', exact: true },
        { name: 'project', icon: 'code', text: '项目&效果', to: '/project', exact: true },
        { name: 'message', icon: 'chat', text: '留言板', to: '/message', exact: true }
      ]
})