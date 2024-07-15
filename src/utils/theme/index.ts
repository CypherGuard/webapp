import { extendTheme } from '@chakra-ui/react';
import { themeConfig } from './config.tsx';

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  config: themeConfig,
});

export default theme;
