import request from './request'

//获取首页轮播图
export const getBanner = () => {
  return request.get('/api/banner')
}
//获取博客分类
export const getBlogType = () => {
  return request.get('/api/blogtype')
}
//获取所有博客
export const getBlog = (options={})=> {
  const page = options.page || 1
  const limit = options.limit || 10
  const categoryid = options.categoryid || -1
  const keyword = options.keyword || ''
  return request.get('/api/blog', {
    params: { page, limit, categoryid, keyword }
  })
}
//获取单个博客内容
export const getBlogItem = (id)=>{
  return request.get(`/api/blog/${id}`)
}
//提交评论
export const postComment = (options)=>{
  options.blogId = options.blogId || -1
  return request.post('/api/comment',options)
}

//分页获取评论
export const getComment = (options={})=>{
  options.page = options.page || 1
  options.limit = options.limit || 10
  options.blogid = options.blogid || -1
  options.keyword = options.keyword || ""
  return request.get('/api/comment',{params: options})
}

//获取全局设置
export const getSetting = ()=>{
  return request.get("/api/setting")
}

//获取关于我数据
export const getAbout = ()=>{
  return request.get("/api/about")
}

//获取项目数据
export const getProject = ()=>{
  return request.get("/api/project")
}

//获取分页留言
export const getMessage = (options={})=>{
  options.page = options.page || 1
  options.limit = options.limit || 10
  options.keyword = options.keyword || ""
  return request.get("/api/message",{params:options})
}

//提交留言
export const postMessage = (options={})=>{
  return request.post("/api/message",options)
}