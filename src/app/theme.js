import '@fontsource/saira-semi-condensed/300.css';
import '@fontsource/saira-semi-condensed/400.css';
import '@fontsource/saira-semi-condensed/600.css';

import { extendTheme } from '@chakra-ui/react';

const fonts = {
  heading: `'Saira Semi Condensed', sans-serif`,
  body: `'Saira Semi Condensed', sans-serif`,
};

const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: false,
  },
  fonts,
  colors: {
    primary: {
      100: '#469597',
      200: '#5BA199',
      300: '#BBC6C8',
      400: '#E5E3E4',
      500: '#DDBEAA',
      600: '#d4f2ef4f',
    }
  }
});

export default theme;
