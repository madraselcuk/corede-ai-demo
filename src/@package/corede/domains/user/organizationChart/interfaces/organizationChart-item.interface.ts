import { IFileMetadata } from '@common_package';

export interface IOrganizationChartUser {
  _id: string;
  name?: string;
  surname?: string;
  profileImage?: IFileMetadata;
  department?: {
    _id: string;
    name: string;
  };
}

export interface IOrganizationChartItem {
  user: IOrganizationChartUser;
  children?: Array<IOrganizationChartItem>;
}
