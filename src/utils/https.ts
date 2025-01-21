import axios, { HttpStatusCode, type Method } from 'axios'
import { errorStatusCode } from './errorStatusCode'
import { ElNotification } from 'element-plus'
import type { HttpData } from './http.type'
import { useShowLoadingStore } from '@/stores/show-loading/show-loading'
const store = useShowLoadingStore()

const https = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

https.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

https.interceptors.response.use(
  function (response) {
    store.showLoader()
    if (response.data.code !== HttpStatusCode.Ok) {
      let error = errorStatusCode(response.data.code)
      ElNotification({
        title: `Error ${response.data.code}`,
        message: `${response.data.msg ? response.data.msg : error}`,
        type: 'error',
      })
    }
    store.hideLoader()
    return response
  },
  function (error) {
    return Promise.reject(error)
  },
)

export default https

export function request<T, U>(url: string, method: Method, data?: U): Promise<HttpData<T>> {
  return https.request({
    url,
    method,
    data,
  })
}

export function get<T, U>(url: string, data?: U): Promise<HttpData<T>> {
  return https.get(url, { params: data })
}
export function post<T, U>(url: string, data?: U): Promise<HttpData<T>> {
  return https.post(url, data)
}
export function put<T, U>(url: string, data?: U): Promise<HttpData<T>> {
  return https.put(url, data)
}
export function del<T, U>(url: string, data?: U): Promise<HttpData<T>> {
  return https.delete(url, { params: data })
}

export async function uploadFile<T, U>(
  file: File,
  url: string,
  data?: U,
  onUploadProgress?: (percent: number) => void,
): Promise<HttpData<T>> {
  const formData = new FormData()
  formData.append('file', file)

  if (data) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        // 注意：在新版本的TypeScript中，建议使用 `Object.hasOwn` 方法替代 `hasOwnProperty`
        formData.append(key, JSON.stringify(data[key]))
      }
    }
  }

  try {
    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        // 确保 total 存在且不为0
        if (progressEvent.total && progressEvent.total !== 0) {
          let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          if (onUploadProgress) {
            onUploadProgress(percentCompleted)
          }
        } else {
          // 如果 total 不存在或者为0，你可以选择不更新进度或者给出默认值
          console.warn('Cannot determine the upload progress because total is not available.')
          if (onUploadProgress) {
            onUploadProgress(0) // 或者其它你认为合适的默认值
          }
        }
      },
    })
    return response.data // 返回响应数据
  } catch (error) {
    console.error('Error uploading file:', error)
    throw error // 可以根据需要重新抛出错误或返回错误信息
  }
}
