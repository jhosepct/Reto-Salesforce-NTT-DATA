import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TCell } from ".";


export default {
    title: 'Components/Table/Cell',
    component: TCell,
    argTypes: {
        bgColor: { control: 'color' },
        color: { control: 'color' },
        align: { control: { type: 'select', options: ['left', 'center', 'right'] } }
    },
} as ComponentMeta<typeof TCell>;

const Template: ComponentStory<typeof TCell> = (args) => <TCell {...args} />;

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
