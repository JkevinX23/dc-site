import { Select, Tag } from 'antd';
import { PresetColors } from 'antd/es/theme/internal';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';
import React, { useEffect, useState } from 'react';

const getRandomColor = (): any => {
  const randomIndex = Math.floor(Math.random() * PresetColors.length);
  return PresetColors[randomIndex]! as any;
};

type MyCustomTagProps = CustomTagProps & {
  options: any;
};

const tagRender = (props: MyCustomTagProps) => {
  const { label, value, options, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Tag
      color={options?.find((option: any) => option.value === value)?.color}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
};

const DriverDropdown = ({ options }: { options: { value: string }[] }) => {
  const [customOptions, setOptions] = useState<any>();

  useEffect(() => {
    setOptions(
      options?.map((option: any) => ({
        ...option,
        color: getRandomColor(),
      }))
    );
  }, []);
  return (
    <Select
      mode="multiple"
      showArrow
      tagRender={(props) => tagRender({ ...props, options: customOptions })}
      style={{ width: '100%' }}
      options={customOptions}
    />
  );
};

export default DriverDropdown;
