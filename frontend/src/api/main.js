import request from '@/utils/request'
// import storage from 'store'

const mainApi = {
  outApi: '/v1/outApi',
  openDir: '/v1/example/openLocalDir',
  uploadFile: '/v1/example/uploadFile',
}

/**
 * outApi
 */
// export function outApi (parameter) {
//   parameter.data.token = storage.get(ACCESS_TOKEN)
//   parameter.data.uid = storage.get(USER_INFO) ? storage.get(USER_INFO).uid : ''
//   return request({
//     url: mainApi.outApi,
//     method: 'post',
//     data: parameter
//   })
// }

/**
 * openDir
 */
export function openDir (parameter) {
  return request({
    url: mainApi.openDir,
    method: 'post',
    data: parameter
  })
}

/**
 * uploadFile
 */
export function uploadFile (parameter) {
  return request({
    url: mainApi.uploadFile,
    method: 'post',
    data: parameter
  })
}