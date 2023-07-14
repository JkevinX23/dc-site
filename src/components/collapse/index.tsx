// eslint-disable-next-line import/no-extraneous-dependencies
import { Collapse } from 'antd';
import React from 'react';

import * as S from './styles';

const CollapseComponent = ({
  items,
  defaultActiveKey,
}: {
  items: { title: string; content: JSX.Element }[];
  defaultActiveKey?: string[];
}) => {
  const mappedItem = items.map((item, index) => {
    return {
      key: index,
      label: item.title,
      children: item.content,
    };
  });

  return (
    <S.CollapseContainer>
      <Collapse
        accordion
        items={mappedItem}
        defaultActiveKey={defaultActiveKey}
      />
    </S.CollapseContainer>
  );
};

export default CollapseComponent;
