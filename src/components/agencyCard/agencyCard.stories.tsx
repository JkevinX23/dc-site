import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';

const meta = {
  title: 'Components/agencyCard',
  component: Component,
  tags: ['agencyCard'],
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
    agencyLogo: 'https://via.placeholder.com/150',
    agencyName: 'Agência de Teste',
    agencyLocation: 'São Paulo - SP',
    agencyRating: 4.5,
    isFollowing: false,
  },
} satisfies Story;
