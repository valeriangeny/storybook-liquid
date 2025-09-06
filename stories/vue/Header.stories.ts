import type { Meta, StoryObj } from '@storybook/vue3';
import MyHeader from './Header.vue';

const meta: Meta<typeof MyHeader> = {
  title: 'Vue Components/Header (Example)',
  component: MyHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The original Storybook example header component - now properly organized under Vue components.'
      }
    }
  },
  tags: ['autodocs'],
  render: (args: any) => ({
    components: { MyHeader },
    setup() {
      return { args };
    },
    template: '<MyHeader :user="args.user" @login="args.onLogin" @logout="args.onLogout" @createAccount="args.onCreateAccount" />',
  }),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {
  args: {
    user: null,
  },
};