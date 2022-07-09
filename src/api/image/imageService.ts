import { ImageData } from '@/store/image/imageSlice';
import ApiService, { ApiData } from '@/api/ApiService';

export default class ImageService {
  private static getImageUrl() {
    return 'predict';
  }

  public static async createResource(imageData: ImageData): Promise<ApiData> {
    const formData = new FormData();
    formData.append('file', imageData.preview);
    try {
      const response = await ApiService.request(
        {
          url: `${this.getImageUrl()}`,
          method: 'POST',
          data: formData,
        },
        'multipart/form-data',
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
