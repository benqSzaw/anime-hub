import React, { Fragment } from 'react';

import type { Page } from '@/payload-types';

import { CTAComponent } from '@/blocks/cta/component';

const blockComponents = {
  cta: CTAComponent,
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
            <Block {...block} />
          </Fragment>
        );
      })}
    </Fragment>
  );
}

export { RenderBlocks };
