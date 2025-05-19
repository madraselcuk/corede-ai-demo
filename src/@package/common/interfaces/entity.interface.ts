export interface IEntity {
  _id: string;
}

export interface IInsertEntity {
  _id: string;
}

export interface IInsertOptionalEntity {
  _id?: string;
}
export interface IOptionalEntity {
  _id?: string;
}

export interface INamedEntity {
  _id: string;
  name: string;
}

/**
 * @field `icon` will be name of the icon from icon package
 * @field `color` will be the color of the icon
 */
export interface INamedEntityWithIcon {
  _id: string;
  name: string;
  color: string;
  icon: string;
}
