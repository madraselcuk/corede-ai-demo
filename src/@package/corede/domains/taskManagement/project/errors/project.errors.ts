import { IBaseError } from '@common_package'

export const projectNotFound: IBaseError = {
  code: 100,
  name: 'ProjectNotFound',
  message: {
    tr: `Proje bulunamadı`,
    en: `Project not found`,
  },
}

export const parentProjectNotFound: IBaseError = {
  code: 100,
  name: 'ParentProjectNotFound',
  message: {
    tr: `Ana proje bulunamadı`,
    en: `Parent project not found`,
  },
}

export const mainProjectNotFound: IBaseError = {
  code: 100,
  name: 'MainProjectNotFound',
  message: {
    tr: `Ana proje bulunamadı`,
    en: `Main project not found`,
  },
}

export const assigneeNotFound: (assigneeId: string) => IBaseError = (
  assigneeId,
) => ({
  code: 100,
  name: 'AssigneeNotFound',
  message: {
    tr: `Atanan kişi bulunamadı (ID: ${assigneeId})`,
    en: `Assignee not found (ID: ${assigneeId})`,
  },
})

export const followerNotFound: (followerId: string) => IBaseError = (
  followerId,
) => ({
  code: 100,
  name: 'FollowerNotFound',
  message: {
    tr: `Takipçi kişi bulunamadı (ID: ${followerId})`,
    en: `Follower not found (ID: ${followerId})`,
  },
})
