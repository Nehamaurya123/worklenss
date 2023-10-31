export enum GENDER {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
  NOT_TO_SAY = 'NOT_TO_SAY'
}
export const GENDER_LIST = Object.keys(GENDER);

export enum  CHECK_USER{
  INCOMPLETE = 'INCOMPLETE',
  REGISTERED = 'REGISTERED',
  UNREGISTERED = 'UNREGISTERED',
};

export enum ANSWER_TYPE {
 YES='YES',
 NO='NO'
}
export const ANSWER_TYPE_LIST=Object.keys(ANSWER_TYPE);

export const SORT_ORDER = {
  ASC: 'ASC',
  DESC: 'DESC',
};

export const SORT_ORDER_LIST = (() => Object.keys(SORT_ORDER))();

export const RESPONSE = {
  SUCCESS: true,
  ERROR: false,
};

export const OTP_PURPOSE = {
  LOGIN: 'LOGIN',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
};

export const OTP_PURPOSE_LIST = Object.keys(OTP_PURPOSE);

export enum STORY_TYPE {
  LINK = 'LINK',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  VIDEO_LINK = 'VIDEO_LINK'
}
export const STORY_TYPE_LIST = Object.keys(STORY_TYPE);

export enum ACTION_TYPE {
  LIKE = 'LIKE',
  CARE = 'CARE',
}
export const ACTION_TYPE_LIST = Object.keys(ACTION_TYPE);

export enum POINT_ACTION_TYPE {
 POST_STORY='POST_STORY',
  LIKE_STORY='LIKE_STORY',
  CARE_STORY='CARE_STORY',
   ASK_SARTHY='ASK_SARTHY',
    ACTIVITY='ACTIVITY'
}
export const POINT_ACTION_TYPES_LIST = Object.keys(POINT_ACTION_TYPE);

export const TYPE = {
  SELF: 'SELF',
  ALL: 'ALL',
};
export const TYPE_LIST = (() => Object.keys(TYPE))();

export const STATUSES = {
  JOURNEY:  {
    COMPLETED: true,
    ONGOING: false
  }
}

export const SEQUENCE_MAX = {
  ICON: 11,
  COLOR: 7 
}
