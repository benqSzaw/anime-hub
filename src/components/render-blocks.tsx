import React, { Fragment } from 'react';

import type { Page } from '@/payload-types';

import { CTAComponent } from '@/blocks/cta/component';
import { ContentComponent } from '@/blocks/content/component';

const blockComponents = {
  cta: CTAComponent,
  content: ContentComponent,
};

type Props = {
  blocks: Page['layout'];
};

function RenderBlocks(props: Props) {
  const { blocks } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;
  if (!hasBlocks) return <></>;

  return (
    <Fragment>
      {blocks.map((block, index) => {
        const { blockType } = block;
        if (!(blockType && blockType in blockComponents)) return <></>;
        const Block = blockComponents[blockType];
        if (!Block) return <></>;
        return (
          <Fragment key={index}>
            {/* @ts-expect-error there may be some mismatch between the expected types here */}
            <Block {...block} />
          </Fragment>
        );
      })}
    </Fragment>
  );
}

export { RenderBlocks };
