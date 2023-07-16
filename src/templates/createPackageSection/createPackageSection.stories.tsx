import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';

const meta = {
  title: 'Templates/createPackageSection',
  component: Component,
  tags: ['package'],
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
} satisfies Story;
