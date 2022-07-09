import { useState } from 'react';
import { ApiData } from '@/api/ApiService';

export interface isSuccess {
  isSuccess: boolean;
}

export function useApi(apiPromise: (id?: number) => Promise<ApiData>) {
  const [isLoading, setIsLoading] = useState(false);

  async function fetchApi(id?: number): Promise<ApiData & isSuccess> {
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
    return { class_name: '', confidence: 0, isSuccess: false };
  }

  return [callApi] as const;
}
