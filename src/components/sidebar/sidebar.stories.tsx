import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';

const meta = {
  title: 'Components/sidebar',
  component: Component,
  tags: ['card'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof Component>;

export const MainWithReactComponent = {
  args: {
    backgrounds: { default: 'dark' },
    children: <div>Children node</div>,
  },
} satisfies Story;
