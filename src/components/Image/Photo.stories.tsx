import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Photo } from ".";

export default {
    title: 'Components/Image',
    component: Photo,
} as ComponentMeta<typeof Photo>;

const Template: ComponentStory<typeof Photo> = (args) => <Photo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: 'https://randomuser.me/api/portraits/men/66.jpg',
}