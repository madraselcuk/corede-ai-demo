import { IBaseError } from "@common_package";

export const organizationInputError: IBaseError = {
  code: 100,
  name: "OrganizationInputError",
  message: {
    tr: "Hem yeni sirket hem de varolan sirket bilgisi girilemez",
    en: "Both existing and new organization information can not be provided together",
  },
};

export const organizationIdForNewOrganizationInputError: IBaseError = {
  code: 100,
  name: "OrganizationIdForNewOrganizationInputError",
  message: {
    tr: "Yeni bir sirket icin varolan bir organizasyon bilgisi girilemez",
    en: "For a new organization, info about an existing organization can not be provided",
  },
};

export const departmentForNewOrganizationInputError: IBaseError = {
  code: 100,
  name: "DepartmentForNewOrganizationInputError",
  message: {
    tr: "Yeni bir sirketin departmani olamaz",
    en: "New organization can not have a department",
  },
};

export const organizationInputNotFoundError: IBaseError = {
  code: 100,
  name: "OrganizationInputNotFoundError",
  message: {
    tr: "Organizasyon bilgisi bulunamdi",
    en: "Organization information could not be found",
  },
};

export const newOrganizationCanNotHaveRoleInputError: IBaseError = {
  code: 100,
  name: "NewOrganizationCanNotHaveRoleInputError",
  message: {
    tr: "Yeni bir organizasyon ile olusturan kullaniciya role atanamaz",
    en: "Role can not be assigned to a user who creates a new organization",
  },
};

export const newOrganizationCanNotHavePermissionInputError: IBaseError = {
  code: 100,
  name: "NewOrganizationCanNotHavePermissionInputError",
  message: {
    tr: "Yeni bir organizasyon ile olusturan kullaniciya izin atanamaz",
    en: "Permission can not be assigned to a user who creates a new organization",
  },
};

export const userCanNotDeleteOneself: IBaseError = {
  code: 100,
  name: "UserCanNotDeleteOneself",
  message: {
    en: "User can not delete oneself",
    tr: "Kullanici kendisini silemez.",
  },
};
