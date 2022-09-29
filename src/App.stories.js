// Stories for testing `App` go here
// See https://storybook.js.org/docs/react/writing-stories/introduction#how-to-write-stories
import React from "react";

import App from "./App";

export default {
  title: "App",
  component: App,
};

const Template = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {
  isThanksMsg: false,
};

export const Clicked = Template.bind({});
Clicked.args = {
  isThanksMsg: true,
};
