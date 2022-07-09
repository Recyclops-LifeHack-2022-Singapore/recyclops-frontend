/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

// The shape of the JSON response.data from API endpoints.
export interface ApiData {
  class_name: string;
  confidence: number;
}

// Type T refers to the type of the data in response.data
export type ApiResponse = AxiosResponse<ApiData>;

export default class ApiService {
  public static authTokenKey = 'accessToken';

  public static async request(requestConfig: AxiosRequestConfig, contentType = 'application/json'): Promise<any> {
    try {
      const config: AxiosRequestConfig = {
        ...requestConfig,
        baseURL: baseUrl,
        headers: {
          'Content-Type': contentType,
          ...requestConfig.headers,
        },
      };

      const response: ApiResponse = await axios(config);
      return response.data;
    } catch (error: any) {
      return Promise.reject(error.response);
    }
  }
}
