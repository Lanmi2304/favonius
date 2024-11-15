import { z } from 'zod';

export const emailSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().min(1).email(),
  message: z.string().min(1),
});

export type EmailSchemaInput = z.infer<typeof emailSchema>;
