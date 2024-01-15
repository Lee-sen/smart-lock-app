const Mock = require('mockjs');

const userinfo = Mock.mock('/dev-api/user/login', {
    code: 200,
    message: 'Login success',
    token: '@guid',
    user: {
        username: '@cname()',
        password: '@string("number", 10)',
    }
})

const captchalimage = Mock.mock('/dev-api/user/captchaImage', {
    code: 200,
    message: 'Captcha image',
    result: {
        uuid: '@guid',
        img: '@image("200x100", "#FFF", "@cname()")',
    }
})
const configkey = Mock.mock('/dev-api/system/config/configKey', {
    code: 200,
    data: {
        key: '@string("number", 10)',
        value: '@string("number", 10)',
        description: '@string("number", 10)',
    }
})
const menu = Mock.mock('/dev-api/user/menu/getRouters', {
    code: 200,
    message: '菜单',
    result: [
        {
            code: 200,
            message: '获取菜单列表成功',
            result: [
                {
                    path: '/2',
                    element: null,
                }
            ]
        }
    ]
})
const menuList = Mock.mock('/dev-api/system/menu/list', {
    code: 200,
    message: '菜单',
    result: [
        {
            code: 200,
            message: '获取菜单列表成功',
            result: [
                {
                    path: '/1',
                    component: null,
                }
            ]
        }
    ]
})

const peopleMock = Mock.mock('dev-api/system/people', {
    code: 200,
    message: '人员列表',
    result: [
        {
            code: 200,
            message: '获取人员列表成功',
            result: [
                {
                    id: '@id',
                    name: '张三',
                    phone: '@string("number", 10)',
                    address: '@string("number", 10)',
                    sex: 'male',

                }
            ]
}]});

export { menuList, userinfo, configkey, captchalimage, menu, peopleMock };