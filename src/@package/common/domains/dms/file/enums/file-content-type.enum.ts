import { FileExtension } from './file-extension.enum';
import { FileMimeType } from './file-mime-type.enum';

export enum FileContentType {
  image = 'image',
  document = 'document',
  video = 'video',
  archive = 'archive',
}

export const mimeTypeToContentType: { [key in FileMimeType]: FileContentType } =
  {
    [FileMimeType.jpeg]: FileContentType.image,
    [FileMimeType.png]: FileContentType.image,
    [FileMimeType.pdf]: FileContentType.document,
    [FileMimeType.doc]: FileContentType.document,
    [FileMimeType.docx]: FileContentType.document,
    [FileMimeType.xls]: FileContentType.document,
    [FileMimeType.xlsx]: FileContentType.document,
    [FileMimeType.ppt]: FileContentType.document,
    [FileMimeType.pptx]: FileContentType.document,
    [FileMimeType.txt]: FileContentType.document,
    [FileMimeType.mp4]: FileContentType.video,
    [FileMimeType.zip]: FileContentType.archive,
  };

export const mimeTypeToExtension: { [key in FileMimeType]: FileExtension } = {
  [FileMimeType.jpeg]: FileExtension.jpg,
  [FileMimeType.png]: FileExtension.png,
  [FileMimeType.pdf]: FileExtension.pdf,
  [FileMimeType.doc]: FileExtension.doc,
  [FileMimeType.docx]: FileExtension.docx,
  [FileMimeType.xls]: FileExtension.xls,
  [FileMimeType.xlsx]: FileExtension.xlsx,
  [FileMimeType.ppt]: FileExtension.ppt,
  [FileMimeType.pptx]: FileExtension.pptx,
  [FileMimeType.txt]: FileExtension.txt,
  [FileMimeType.mp4]: FileExtension.mp4,
  [FileMimeType.zip]: FileExtension.zip,
};
