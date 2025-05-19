import axios, { AxiosProgressEvent, AxiosRequestConfig } from "axios"

export interface IUploadImageToS3Params {
  presignedUrl: string
  file: File
  privateRead?: boolean
  setProgress?: (progress: number) => void
}

export async function uploadImageToS3({
  presignedUrl,
  file,
  privateRead,
  setProgress
}: IUploadImageToS3Params): Promise<void> {
  try {
    const config: AxiosRequestConfig<File> = {
      method: "PUT",
      maxBodyLength: Infinity,
      url: presignedUrl,
      headers: {
        "Content-Type": file.type,
        "x-amz-acl": !privateRead ? "public-read" : undefined
      },
      data: file,
      onUploadProgress: (event: AxiosProgressEvent) => {
        if (event.lengthComputable && event.total) {
          const progress = Math.round((event.loaded / event.total) * 100)
          setProgress && setProgress(progress)
        }
      }
    }

    const response = await axios(config)
    if (!response) {
      throw new Error("upload image failed")
    }
  } catch (error: any) {
    throw new Error(`upload image failed: error: ${error.message}`)
  }
}

export async function uploadImageToS3WithThumbnail(params: {
  image: IUploadImageToS3Params
  thumbnailImage?: IUploadImageToS3Params
}) {
  try {
    await uploadImageToS3({
      presignedUrl: params.image.presignedUrl,
      file: params.image.file
    })

    if (params.thumbnailImage) {
      await uploadImageToS3({
        presignedUrl: params.thumbnailImage.presignedUrl,
        file: params.thumbnailImage.file
      })
    }
  } catch (error: any) {
    throw new Error(
      `upload image and thumbnail failed: error: ${error.message}`
    )
  }
}
