import { IconValue } from '@/fields/icon/icons';
import { ReactNode } from 'react';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaReddit,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import type { IconBaseProps } from 'react-icons';

type Props = {
  icon: IconValue;
} & IconBaseProps;

function CmsIcon({ icon, ...rest }: Props) {
  const iconComponents: Record<IconValue, ReactNode> = {
    facebook: <FaFacebook {...rest} />,
    twitter: <FaTwitter {...rest} />,
    instagram: <FaInstagram {...rest} />,
    linkedin: <FaLinkedin {...rest} />,
    youtube: <FaYoutube {...rest} />,
    github: <FaGithub {...rest} />,
    reddit: <FaReddit {...rest} />,
    pinterest: <FaPinterest {...rest} />,
  };
  return iconComponents[icon];
}

export { CmsIcon };
