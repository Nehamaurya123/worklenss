export enum EMAIL_TYPE {
  LOGIN = 'LOGIN',
  VARIFICATION = 'VARIFICATION',
  FORGOTE_PASSWORD = 'FORGOTE_PASSWORD',
}
export const EMAIL = Object.keys(EMAIL_TYPE);

export enum ACCESS_TYPE {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
}

export const ACCESS_TYPE_LIST = Object.keys(ACCESS_TYPE);

export enum GENDERS {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export const GENDERS_LIST = Object.keys(GENDERS);

export const SORT_ORDER = {
  ASC: 'ASC',
  DESC: 'DESC',
};

export enum STATUS{
  ACTIVE='ACTIVE',
  INACTIVE='INACTIVE',
  DELETED='DELETED',
}
