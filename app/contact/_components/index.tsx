'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  type ChangeEvent,
  type KeyboardEvent,
  useRef,
  useTransition,
} from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Socials } from '@/app/contact/_components/socials';
import { sendMail } from '@/app/contact/action';
import { Container } from '@/components/shared/wrappers/container';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { type EmailSchemaInput, emailSchema } from '@/lib/utils/email.schema';

export function Contact() {
  const form = useForm<EmailSchemaInput>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const { ref } = form.register('message');
  const [isPending, startTransition] = useTransition();

  const adjustTextareaHeight = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${event.target.scrollHeight}px`;
    }
  };

  const preventBreakRow = async (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      await form.handleSubmit(onSubmit)();
    }
  };

  const onSubmit = (data: EmailSchemaInput) => {
    startTransition(async () => {
      try {
        const response = await sendMail(data);
        if (!response.success) {
          throw new Error('Failed to send email!');
        }
        toast.success(response.message);
      } catch (error) {
        toast.error(error instanceof Error ? error.message : 'Unknown Error');
      } finally {
        form.reset();
        if (textAreaRef.current) textAreaRef.current.style.height = 'auto';
      }
    });
  };

  return (
    <div>
      <section className="relative z-0 flex h-[500px] items-center justify-center">
        <div
          className="absolute left-0 top-0 z-0 size-full bg-cover bg-fixed bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: 'url(/hero5.jpg)',
          }}
        />
        <h1 className="z-10 text-center text-6xl font-bold italic text-accent-foreground">
          Kontaktirajte nas!
        </h1>
      </section>

      <Container className="mb-0">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="relative -top-20 m-auto flex flex-col gap-4 rounded-md bg-card p-10 md:w-2/3"
          >
            <div className="flex flex-col gap-4 md:flex-row">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-accent-foreground">
                      Ime i prezime: *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="w-full" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-accent-foreground">
                      E-mail: *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-accent-foreground">
                    Poruka: *
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Message us..."
                      rows={5}
                      onKeyDown={(event) => preventBreakRow(event)}
                      onInput={adjustTextareaHeight}
                      {...field}
                      ref={(element) => {
                        ref(element);
                        textAreaRef.current = element;
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="bg-accent-foreground/80 text-white hover:bg-accent-foreground/70"
              disabled={isPending}
            >
              {isPending ? 'Slanje u toku...' : 'Posalji poruku'}
            </Button>
          </form>
        </Form>

        <Socials />
      </Container>
      <h2 className="mb-10 mt-0 text-center text-3xl font-bold italic text-accent-foreground">
        Pronadjite nas na mapi
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d301.760559400094!2d19.89387787601092!3d44.208453247934024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759eb3334289783%3A0xdf54d31d84ab42d0!2sRan%C4%8D%20Favonius!5e0!3m2!1sen!2srs!4v1731695064023!5m2!1sen!2srs"
        title="map"
        width="100%"
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
