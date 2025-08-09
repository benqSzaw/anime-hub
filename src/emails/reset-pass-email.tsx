import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Text,
} from '@react-email/components';
import { styles } from '@/emails/styles';
import { getServerURL } from '@/lib/utils';

interface Props {
  username: string;
  token: string;
}

const Template = ({ username, token }: Props) => (
  <Html>
    <Head />
    <Body style={styles.body}>
      <Container>
        <Img
          src={`${getServerURL()}/logo-circle.png`}
          alt="Anime Hub Logo"
          width="100"
          height="100"
          style={styles.image}
        />
        <Heading style={styles.heading}>Hi {username}</Heading>
        <Text style={styles.paragraph}>Reset your password on Anime Hub.</Text>
        <Link style={styles.link} href={`${getServerURL()}/reset/?t=${token}`}>
          Please click this link to reset password for your account
        </Link>
        <Text style={styles.mutedText}>
          If you did not request this, please ignore this email and your
          password will remain unchanged.
        </Text>
        <Text style={styles.footer}>Anime Hub</Text>
      </Container>
    </Body>
  </Html>
);

Template.PreviewProps = {
  username: 'JohnDoe',
  token: '1234567890abcdef',
} as Props;

export default Template;
