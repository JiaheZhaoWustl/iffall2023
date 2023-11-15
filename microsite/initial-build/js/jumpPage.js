// 页面跳转函数，作用：前面没给a标签  怕页面混乱  直接函数跳转
// `${}`  es6 模板语法   ${}用来解析参数    es5做法为： './' + path + '.html'
function jumpPage(path) {
    window.location.href = `./${ path }.html`
}