import { useState } from 'react';
import { ApiData } from '@/api/ApiService';

export interface isSuccess {
  isSuccess: boolean;
}

export function useApi<T>(apiPromise: (id?: number) => Promise<ApiData<T>>) {
  const [isLoading, setIsLoading] = useState(false);

  async function fetchApi(id?: number): Promise<ApiData<T> & isSuccess> {
    try {
      const response = await apiPromise(id);
      console.log(response);
      return { ...response, isSuccess: true };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      return { ...error?.data, isSuccess: false };
    } finally {
      setIsLoading(false);
    }
  }

  async function callApi(id?: number) {
    if (!isLoading) {
      setIsLoading(true);
      const response = await fetchApi(id);
      return response;
    }
    return { message: 'Internal Server Error', isSuccess: false };
  }

  return [callApi] as const;
}
