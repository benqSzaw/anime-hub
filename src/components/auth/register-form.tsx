'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormRootError,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PASS_MAX_LENGTH, PASS_MIN_LENGTH } from '@/lib/access';
import { registerAction } from '@/lib/auth-actions';
import { redirect } from 'next/navigation';

const formSchema = z
  .object({
    username: z
      .string()
      .min(2, {
        message: 'Username must be at least 2 characters.',
      })
      .max(32, {
        message: 'Username must be at most 32 characters.',
      }),
    email: z.email({
      error: 'Invalid email address.',
    }),
    password: z
      .string()
      .min(PASS_MIN_LENGTH, {
        message: `Password must be at least ${PASS_MIN_LENGTH} characters.`,
      })
      .max(PASS_MAX_LENGTH, {
        message: `Password must be at most ${PASS_MAX_LENGTH} characters.`,
      }),
    repeatPassword: z.string(),
  })
  .refine(data => data.password === data.repeatPassword, {
    path: ['repeatPassword'],
    message: 'Passwords do not match',
  });

function RegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { success, error } = await registerAction(values);
    if (success) {
      redirect('/confirm');
    } else {
      form.setError('root', {
        type: 'manual',
        message: error,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" autoComplete="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repeatPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Repeat password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormRootError />
        <Button className="w-full" type="submit">
          Register
        </Button>
      </form>
    </Form>
  );
}

export { RegisterForm };
