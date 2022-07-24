import { MantineProvider, ColorSchemeProvider,  } from '@mantine/core';
import {App} from './App';
import {useLocalStorage} from '@mantine/hooks'
const Theme = () => {
    const [colorScheme, setColorScheme] = useLocalStorage({
        key:'mantine-color-scheme',
        defaultValue:'light',
        getInitialValueInEffect: true,
    });
    const toggleColorScheme = (value) =>
      setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    return(
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <App/>
        </MantineProvider>
      </ColorSchemeProvider>
    )
}
export {Theme}
