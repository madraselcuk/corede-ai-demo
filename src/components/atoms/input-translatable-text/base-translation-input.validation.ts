import { IBaseTranslation, Language } from '@common_package'
import { z } from 'zod'

export function createBaseTranslationSchema(
  required: boolean = false,
): z.ZodType<IBaseTranslation | undefined> | z.ZodType<IBaseTranslation> {
  const baseSchema = z.object({
    [Language.en]: z.string(),
    [Language.tr]: z.string(),
    [Language.de]: z.string().optional(),
    [Language.es]: z.string().optional(),
    [Language.fr]: z.string().optional(),
    [Language.it]: z.string().optional(),
    [Language.pt]: z.string().optional(),
    [Language.ru]: z.string().optional(),
  }) as z.ZodType<IBaseTranslation>

  return required ? baseSchema : baseSchema.optional()
}
