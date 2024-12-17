import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import * as jest from "@storybook/jest";

import React, { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../src/i18n";

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "vi", title: "Vietnamese" },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    window: jest,
    type: globalTypes,
  },
};

export default preview;

export const decorators = [
  (Story, context) => {
    const { locale } = context.globals;

    // When the locale global changes
    // Set the new locale in i18n
    useEffect(() => {
      i18n.changeLanguage(locale);
    }, [locale]);

    return (
      <Suspense fallback={<div>loading translations...</div>}>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </Suspense>
    );
  },
];
