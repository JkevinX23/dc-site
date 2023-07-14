import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Templates/ProductSection',
  component: Component,
  tags: ['forms'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof Component>;

export const MainWithReactComponent = {
  args: {
    children: <div>Children node</div>,
  },
} satisfies Story;
