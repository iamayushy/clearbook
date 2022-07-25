import { MantineProvider, ColorSchemeProvider,  } from '@mantine/core';
import {App} from './App';
import {useLocalStorage} from '@mantine/hooks'
import { Login } from './Login/Login';
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
          <Login/>
        </MantineProvider>
      </ColorSchemeProvider>
    )
}
export {Theme}
