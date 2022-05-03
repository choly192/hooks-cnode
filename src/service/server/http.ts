import HttpRequest from "../httpRequest";

const BASE_URL = "https://cnodejs.org/api/v1";

export const http = new HttpRequest({
  baseURL: BASE_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    //request interceptor
    requestInterceptors: (config) => {
      console.log("实例请求拦截器");
      return config;
    },
    responseInterceptors: (response) => {
      console.log("实例响应拦截器");
      return response;
    },
  },
});
