import { SelectItemProps } from '@/components/interface'

export interface UserOption extends SelectItemProps {
  name?: string
  surname?: string
  fullName?: string
  email?: string
  phone?: string
  avatar?: string
  role?: string
  department?: string
}
