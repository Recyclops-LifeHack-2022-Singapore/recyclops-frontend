import { ImageData } from '@/store/image/imageSlice';
import ApiService, { ApiData } from '@/api/ApiService';
import { base64FromPath } from '@ionic/react-hooks/filesystem';
import { b64toBlob } from '@/utilities/blob';

export default class ImageService {
  private static getImageUrl() {
    return 'predict';
  }

  public static async predictData(imageData: ImageData | null): Promise<ApiData> {
    if (!imageData) return Promise.reject('Null Image');
    const formData = new FormData();
    const base64String = await base64FromPath(imageData.preview);
    // Split the base64 string in data and contentType
    const block = base64String.split(';');
    // Get the content type of the image
    const contentType = block[0].split(':')[1]; // In this case "image/gif"
    // get the real base64 content of the file
    const realData = block[1].split(',')[1]; // In this case "R0lGODlhPQBEAPeoAJosM...."

    // Convert it to a blob to upload
    const blob = b64toBlob(realData, contentType);
    // Create a FormData and append the file with "file" as parameter name
    formData.append('file', blob);
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
