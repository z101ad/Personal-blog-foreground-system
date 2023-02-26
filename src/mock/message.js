import mock from 'mockjs'
import qs from 'querystring'
//分页获取留言
mock.mock(/^\/api\/message(\?.+)?$/, 'get', function (options) {
  const query = qs.parse(options.url)
  return mock.mock({
    code: 0,
    msg: '',
    data: {
      total: 102,
      [`rows|${query.limit}`]: [
        {
          id: '@guid',
          nickname: '@cname',
          content: '@cparagraph(3,8)',
          createDate: "@date('T')",
          'avatar|1': [
            'https://i03piccdn.sogoucdn.com/0e3d9a00df0a01aa',
            'https://i01piccdn.sogoucdn.com/694a528d769ced80',
            'https://i02piccdn.sogoucdn.com/08d0b5990c47dbcf',
            'https://i04piccdn.sogoucdn.com/062759014032d4ee'
          ]
        }
      ]
    }
  })
})

//提交留言
mock.mock('/api/message', 'post', {
  code: 0,
  msg: '',
  data: {
    id: '@guid',
    nickname: '@cname',
    content: '@cparagraph(3,8)',
    createDate: "@date('T')",
    'avatar|1': [
      'https://i03piccdn.sogoucdn.com/0e3d9a00df0a01aa',
      'https://i01piccdn.sogoucdn.com/694a528d769ced80',
      'https://i02piccdn.sogoucdn.com/08d0b5990c47dbcf',
      'https://i04piccdn.sogoucdn.com/062759014032d4ee'
    ]
  }
})
