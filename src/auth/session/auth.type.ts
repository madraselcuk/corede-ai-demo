import { Role } from '@/constants/roles.enum'

export type SignedInUser = {
  email?: string
  name?: string
  surname?: string
  userId?: string
  profileImage?: string
  type?: string
  organization?: string
  role?: Role
}

export type Token = {
  accessToken?: string
  refreshToken?: string
}
