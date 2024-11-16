import { z } from 'zod';

export const emailSchema = z.object({
  name: z.string().min(1, {
    message: 'Molimo  unesite ime',
  }),
  email: z
    .string()
    .min(1, { message: 'Molimo unesite email adresu' })
    .email({ message: 'Nepravilan format email adrese' }),
  message: z.string().min(1, { message: 'Molimo unesite poruku' }),
});

export type EmailSchemaInput = z.infer<typeof emailSchema>;
