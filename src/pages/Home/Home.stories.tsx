import { ComponentStory } from "@storybook/react";
import { Home } from ".";
import { Global } from "@emotion/react";
import { global, reset } from "../../assets/global/global";

export default {
    title: 'Pages/Home',
    component: Home
}

const Template: ComponentStory<typeof Home> = (args) => (
    <>
        <Global styles={reset} />
        <Global styles={global} />
        <Home />
    </>
)

export const Default = Template.bind({})