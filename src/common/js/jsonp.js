import originJsonp from 'jsonp'

export default function jsonp (url, data, opts) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    /**
     * @description originJsonp
     * @param url 请求的地址
     * @param opts {param, timeout, prefix, name} param: 约定的callback名称，默认为callback
     * @param fn 请求后的回调 参数 1. err 请求成功err为null, 2.data 请求到的数据
     */
    originJsonp(url, opts, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

/**
 * @description url需要拼接的参数
 * @param {*} data Object
 * @returns 形如 name=jack&age=18 的参数字符串
 */
function param (data) {
  let url = ''
  for (let k in data) {
    url += (data[k] === undefined ? '' : `&${k}=${encodeURIComponent(data[k])}`)
    // 为什么要用 encodeURIComponent? 在特殊字符的各个字节前加上%, 避免后台解析时产生歧义, 保证数据传输的准确性以及防止Url注入带来的跨站点攻击
  }
  return url ? url.substr(1) : ''
}
