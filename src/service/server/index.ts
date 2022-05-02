import { http } from "./http";

import { RequestConfig } from "../type";

interface CommonRequestConfig<T> extends RequestConfig {
  data?: T;
}

interface CommonResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

const serverRequest = <D, T = any>(data: CommonRequestConfig<D>) => {
  const { method = "GET" } = data;
  if (method.toUpperCase() === "GET") {
    data.params = data.data;
  }
  return http.request<CommonResponse<T>>(data);
};

export { serverRequest };
