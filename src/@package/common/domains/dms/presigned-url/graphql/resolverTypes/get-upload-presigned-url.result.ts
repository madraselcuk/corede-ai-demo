import { IFileMetadata } from "../../../file";
import { IUploadPresignedUrlOutput } from "../../interfaces/upload-presigned-url.output.interface";

export interface IGetUploadPresignedUrlResult {
  /**
   * presigned url to upload private file
   */
  presignedUrl: IUploadPresignedUrlOutput;

  /**
   * the information about file. This will be assigned to field of the file after upload is successful.
   */
  fileMetadata: IFileMetadata;
}
