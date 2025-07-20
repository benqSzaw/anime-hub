import type { CheckboxField, TextField } from 'payload';

import { formatSlugHook } from './formatSlug';

type Overrides = {
  slugOverrides?: Partial<TextField>;
  checkboxOverrides?: Partial<CheckboxField>;
  titleOverrides?: Partial<TextField>;
};

type Slug = (
  fieldToUse?: string,
  overrides?: Overrides,
) => [TextField, CheckboxField, TextField];

export const SlugField: Slug = (fieldToUse = 'title', overrides = {}) => {
  const { slugOverrides, checkboxOverrides, titleOverrides } = overrides;

  const checkBoxField: CheckboxField = {
    name: 'slugLock',
    type: 'checkbox',
    defaultValue: true,
    admin: {
      hidden: true,
      position: 'sidebar',
      disableListColumn: true,
      disableListFilter: true,
    },
    ...checkboxOverrides,
  };

  // @ts-expect-error - ts mismatch Partial<TextField> with TextField
  const slugField: TextField = {
    required: true,
    name: 'slug',
    type: 'text',
    unique: true,
    index: true,
    label: 'Slug',
    ...(slugOverrides || {}),
    hooks: {
      // Kept this in for hook or API based updates
      beforeValidate: [formatSlugHook(fieldToUse)],
    },
    admin: {
      position: 'sidebar',
      ...(slugOverrides?.admin || {}),
      components: {
        Field: {
          path: '@/collections/fields/slug/SlugComponent#SlugComponent',
          clientProps: {
            fieldToUse,
            checkboxFieldPath: checkBoxField.name,
          },
        },
      },
    },
  };

  // @ts-expect-error - ts mismatch Partial<TextField> with TextField
  const titleField: TextField = {
    required: true,
    name: 'title',
    type: 'text',
    label: 'Title',
    ...(titleOverrides || {}),
  };

  return [slugField, checkBoxField, titleField];
};
