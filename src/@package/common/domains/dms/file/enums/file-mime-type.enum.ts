import { enumValues } from "../../../../util";

export enum FileMimeType {
  jpeg = "image/jpeg", // .jpg / .jpeg
  png = "image/png", // .png
  pdf = "application/pdf", // .pdf
  doc = "application/msword", // .doc
  docx = "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
  xls = "application/vnd.ms-excel", // .xls
  xlsx = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
  ppt = "application/vnd.ms-powerpoint", // .ppt
  pptx = "application/application/vnd.openxmlformats-officedocument.presentationml.presentation", // .pptx
  txt = "text/plain", // .txt
  mp4 = "video/mp4", // .mp4
  zip = "application/zip", // .zip
}

export const fileMimeTypes: string[] = enumValues(FileMimeType);
