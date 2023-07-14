import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';

const meta = {
  title: 'Components/galleryThumbs',
  component: Component,
  tags: ['galleryThumbs'],
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
    children: <div>Children node</div>,
  },
} satisfies Story;
