import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ReactNode } from 'react';

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
  footer?: ReactNode;
};

function AuthContainer(props: Props) {
  const { title, description, children, footer } = props;
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>
          <h1 className="text-xl">{title}</h1>
        </CardTitle>
        {description && (
          <CardDescription>
            <p>{description}</p>
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="justify-center text-center text-sm">
        {footer}
      </CardFooter>
    </Card>
  );
}

export { AuthContainer };
