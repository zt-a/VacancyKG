export enum UserTypeEnum {
  EMPLOYER = 'employer',
  JOBSEEKER = 'jobSeeker',
}

export interface UserAttributes {
  id: number;
  fullName: string;
  email: string;
  password: string;
  userType: UserTypeEnum;
}

export interface UserProfileAttributes {
  id: number;
  image?: string;
  age?: number;
  phone?: string;
  address?: string;
  birthday?: Date;
  description?: string;
  whatsapp?: string;
  telegram?: string;
  instagram?: string;
  facebook?: string;
  linkeden?: string;
  github?: string;
  twitter?: string;
  vk?: string;
  contact?: string;
  website?: string;
  userId: number;
}
