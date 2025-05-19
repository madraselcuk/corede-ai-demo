import { IBaseError } from "@common_package";

export const invalidDataInImportedExcelFileError: IBaseError = {
  code: 400,
  name: 'InvalidDataInImportedExcelFile',
  message: {
    en: 'Data in imported excel file is invalid',
    tr: 'Excel dosyasindaki verilerde hata bulunmaktadir.',
  },
};

export const noContentInImportedExcelFileError: IBaseError = {
  code: 400,
  name: 'NoContentInImportedExcelFile',
  message: {
    en: 'No data is found in imported excel file',
    tr: 'Excel dosyasinda veri bulunmamaktadir',
  },
}