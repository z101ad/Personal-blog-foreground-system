import mock from 'mockjs'
mock.mock("/api/project","get",{
    code:0,
    meg:"",
    "data|10-20":[{
        imgSrc:"@image(200x170,@color,#fff,@natural)",
        projectHref:"@url",
        title:"@ctitle(5,20)",
        githubHref:"@url",
        "desc|3":["@cparagraph(3,5)"]
    }]
})