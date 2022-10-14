import { TextInput, TextInputPropsRoot } from './TextInput';
import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Padrão" />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextInputPropsRoot>;

export const Default: StoryObj<TextInputPropsRoot> = {};
export const WithoutIcon: StoryObj<TextInputPropsRoot> = {
  args: {
    children: <TextInput.Input placeholder="Padrão" />
  }
};
