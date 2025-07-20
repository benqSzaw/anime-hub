import { RichText as RichTextPayload } from '@payloadcms/richtext-lexical/react';
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { cn } from '@/lib/ui';

type Props = {
  className?: string;
  data: SerializedEditorState;
};

function RichText({ data, className }: Props) {
  return (
    <RichTextPayload
      data={data}
      className={cn('prose dark:prose-invert max-w-none', className)}
    />
  );
}

export { RichText };
