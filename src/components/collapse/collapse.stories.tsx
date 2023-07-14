import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';

const meta = {
  title: 'Components/collapse',
  component: Component,
  tags: ['collapse'],
  parameters: {
    layout: 'fullscreen',
    themes: {
      default: 'dark',
    },
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof Component>;

export const MainWithReactComponent = {
  args: {
    items: [
      {
        title: 'Title 1',
        content: <p> Content 1</p>,
      },
    ],
  },
} satisfies Story;
