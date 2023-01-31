import { ComponentMeta, ComponentStory } from '@storybook/react';
import { THeader } from '.';
import { global, reset } from '../../../assets/global/global';
import { Global } from '@emotion/react';


export default {
    title: 'Components/Table/Header',
    component: THeader,
    argTypes: {
        bgColor: { control: 'color' },
        color: { control: 'color' },
    },
} as ComponentMeta<typeof THeader>;

const Template: ComponentStory<typeof THeader> = (args) => (
    <>
        <Global styles={reset} />
        <Global styles={global} />
        <THeader {...args} />
    </>
)



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

export const WithSort = Template.bind({});
WithSort.args = {
    width: '200px',
    children: 'Text',
    sortable: true,
};