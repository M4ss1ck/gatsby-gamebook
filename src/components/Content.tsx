import React from 'react';
import { IContent } from '@/mytypes';

const Content: React.FC<IContent> = (props: IContent) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </>
  );
};

export default Content;
