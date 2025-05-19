import { z } from "zod"

export const fileMetadataZodValidation = z.object({
  fileId: z.string(),
  name: z.string(),
  mimeType: z.string(),
  isPrivate: z.boolean(),
  s3Key: z.string()
})
