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
import { resetAction } from '@/lib/auth-actions';

const formSchema = z
  .object({
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

function ResetForm({ token }: { token: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      repeatPassword: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { success, error } = await resetAction(token, values.password);
    if (success) {
      // TODO show success message in UI or smth
    } else {
      form.setError('root', { type: 'manual', message: error });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New password</FormLabel>
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
              <FormLabel>Repeat new password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormRootError />
        <Button className="w-full" type="submit">
          Reset Password
        </Button>
      </form>
    </Form>
  );
}

export { ResetForm };
