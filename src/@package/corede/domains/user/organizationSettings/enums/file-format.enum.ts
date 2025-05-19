import { FileMimeType } from "@common_package";

export enum FileFormat {
  jpeg = "jpeg", // .jpg / .jpeg
  png = "png", // .png
  pdf = "pdf", // .pdf
  doc = "doc", // .doc
  docx = "docx", // .docx
  xls = "xls", // .xls
  xlsx = "xlsx", // .xlsx
  ppt = "ppt", // .ppt
  pptx = "pptx", // .pptx
  txt = "txt", // .txt
  mp4 = "mp4", // .mp4
  zip = "zip", // .zip
}

export class FileFormatTransformer {
  static transformToFileMimeType(format: FileFormat): FileMimeType {
    switch (format) {
      case FileFormat.jpeg:
        return FileMimeType.jpeg;

      case FileFormat.png:
        return FileMimeType.png;

      case FileFormat.pdf:
        return FileMimeType.pdf;

      case FileFormat.doc:
        return FileMimeType.doc;

      case FileFormat.docx:
        return FileMimeType.docx;

      case FileFormat.xls:
        return FileMimeType.xls;

      case FileFormat.xlsx:
        return FileMimeType.xlsx;

      case FileFormat.ppt:
        return FileMimeType.ppt;

      case FileFormat.pptx:
        return FileMimeType.pptx;

      case FileFormat.txt:
        return FileMimeType.txt;

      case FileFormat.mp4:
        return FileMimeType.mp4;

      case FileFormat.zip:
        return FileMimeType.zip;

      default:
        throw Error("Invalid file format");
    }
  }

  static transformToFileMimeTypeList(formats: FileFormat[]): FileMimeType[] {
    return formats.map((f) => this.transformToFileMimeType(f));
  }

  static transformFromFileMimeType(format: FileMimeType): FileFormat {
    switch (format) {
      case FileMimeType.jpeg:
        return FileFormat.jpeg;

      case FileMimeType.png:
        return FileFormat.png;

      case FileMimeType.pdf:
        return FileFormat.pdf;

      case FileMimeType.doc:
        return FileFormat.doc;

      case FileMimeType.docx:
        return FileFormat.docx;

      case FileMimeType.xls:
        return FileFormat.xls;

      case FileMimeType.xlsx:
        return FileFormat.xlsx;

      case FileMimeType.ppt:
        return FileFormat.ppt;

      case FileMimeType.pptx:
        return FileFormat.pptx;

      case FileMimeType.txt:
        return FileFormat.txt;

      case FileMimeType.mp4:
        return FileFormat.mp4;

      case FileMimeType.zip:
        return FileFormat.zip;

      default:
        throw Error("Invalid file format");
    }
  }

  static transformFromFileMimeTypeList(formats: FileMimeType[]): FileFormat[] {
    return formats.map((f) => this.transformFromFileMimeType(f));
  }
}
