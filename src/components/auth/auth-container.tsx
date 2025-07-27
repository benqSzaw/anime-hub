import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
};

function AuthContainer(props: Props) {
  const { title, children, footer } = props;
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>
          <h1>{title}</h1>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="justify-center text-center text-sm">
        {footer}
      </CardFooter>
    </Card>
  );
}

export { AuthContainer };
