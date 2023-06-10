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
});

export default theme;
