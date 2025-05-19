import * as z from 'zod'

export interface ContactFormInputs {
  fullName: string
  email: string
  subject: string
  message: string
}

export const formSchema = z.object({
  fullName: z.string().min(2, { message: 'İsim en az 2 karakter olmalıdır' }),
  email: z.string().email({ message: 'Geçerli bir e-posta adresi giriniz' }),
  subject: z.string().min(3, { message: 'Konu en az 3 karakter olmalıdır' }),
  message: z.string().min(10, { message: 'Mesaj en az 10 karakter olmalıdır' })
}) 