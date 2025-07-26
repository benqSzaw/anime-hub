import { Field } from 'payload';
import { icons } from '@/fields/icon/icons';

type Props = {
  required?: boolean;
};

export function IconField(props: Props): Field {
  const { required = false } = props;
  return {
    name: 'icon',
    type: 'select',
    label: 'Icon',
    options: icons,
    required,
  };
}
