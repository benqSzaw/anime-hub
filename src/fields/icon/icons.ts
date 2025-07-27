export type IconValue =
  | 'facebook'
  | 'twitter'
  | 'instagram'
  | 'linkedin'
  | 'youtube'
  | 'github'
  | 'reddit'
  | 'pinterest';

type Icon = {
  label: string;
  value: IconValue;
};

export const icons: Icon[] = [
  {
    label: 'Facebook',
    value: 'facebook',
  },
  {
    label: 'Twitter',
    value: 'twitter',
  },
  {
    label: 'Instagram',
    value: 'instagram',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin',
  },
  {
    label: 'YouTube',
    value: 'youtube',
  },
  {
    label: 'GitHub',
    value: 'github',
  },
  {
    label: 'Reddit',
    value: 'reddit',
  },
  {
    label: 'Pinterest',
    value: 'pinterest',
  },
];
