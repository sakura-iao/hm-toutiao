//获取token，并且对其进行处理
//以对象形式存储在sessionStorage中
const KEY = 'hm-toutiao'
//存储用户信息
const setUser = (user) => {
    window.sessionStorage.setItem(KEY,JSON.stringify(user))
}
 //获取用户信息
const getUser = () => {
    //考虑到之前 有未存储过的用户登录，所以获取值为null
     return JSON.parse(window.sessionStorage.getItem(KEY)||'{}')
}
 //删除用户信息
const delUser = () => {
     window.sessionStorage.removeItem(KEY)
}
 //导出以上三个函数
export default {
    setUser,
    getUser,
    delUser
}