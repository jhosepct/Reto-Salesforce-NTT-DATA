import { ComponentMeta, ComponentStory } from '@storybook/react';
import { THeader } from '.';


export default {
    title: 'Components/Table/Header',
    component: THeader,
    argTypes: {
        bgColor: { control: 'color' },
        color: { control: 'color' },
        align: { control: { type: 'select', options: ['left', 'center', 'right'] } }
    },
} as ComponentMeta<typeof THeader>;

const Template: ComponentStory<typeof THeader> = (args) => <THeader {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Text',
    width: '200px',
};

export const Rigth = Template.bind({});

Rigth.args = {
    width: '200px',
    children: 'Text',
    align: 'right'
};

export const Left = Template.bind({});

Left.args = {
    width: '200px',
    children: 'Text',
    align: 'left'
};