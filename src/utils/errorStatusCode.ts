import type { HttpStatusCode } from "axios";


export function errorStatusCode(error: HttpStatusCode) {
  switch (error) {
    case 400:
      return "服务器无法理解请求"
    case 401:
      return "未授权"
    case 403:
      return "禁止访问"
    case 404:
      return "未找到资源"
    case 500:
      return "服务器内部错误"
    case 502:
      return "网关错误"

  }

}
