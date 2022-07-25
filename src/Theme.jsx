import { MantineProvider, ColorSchemeProvider,  } from '@mantine/core';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { userAuth } from './FirebseConfig';
import {App} from './App';
import {useLocalStorage} from '@mantine/hooks'
import { Login } from './Login/Login';
import {useContext, useState } from 'react';
import {AuthContext} from './Context/AuthContext'
const Theme = () => {
    const [authState, setAuthState] = useState(false)
    const [colorScheme, setColorScheme] = useLocalStorage({
        key:'mantine-color-scheme',
        defaultValue:'light',
        getInitialValueInEffect: true,
    });

    const toggleColorScheme = (value) =>
      setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    const {isAuth} = useContext(AuthContext)

      return(
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          {isAuth  ? <App/> : <Login/>}
        </MantineProvider>
      </ColorSchemeProvider>
    )
}
export {Theme}
