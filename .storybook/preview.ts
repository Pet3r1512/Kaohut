import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import * as jest from "@storybook/jest";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    window: jest,
  },
};

export default preview;
