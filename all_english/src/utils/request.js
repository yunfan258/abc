import axios from 'axios'
// import { reject } from 'core-js/fn/promise'
const instance = axios.create({
  baseURL: 'http://rap2api.taobao.org/app/mock/284214',
  timeout: '10000'
})
export const get = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, data).then((response) => {
      resolve(response)
    }, err => {
      reject(err)
    })
  })
}
export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      resolve(response)
    }, err => {
      reject(err)
    })
  })
}
