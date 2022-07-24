import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  useMantineColorScheme,
  ActionIcon,
  Grid
} from '@mantine/core';

import { FaSun, FaMoon } from 'react-icons/fa'

const App = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
          <Text>Application navbar</Text>
        </Navbar>
      }

      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <div style={{width:'100%'}}>
            <Text
              size='xl'
              weight="bold">
              CLEAR BOOK
            </Text>
            </div>


            <ActionIcon
              variant="filled"
              size='lg'
              color={dark ? 'blue' : 'blue'}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"

            >

              {dark ? <FaSun  size={20} /> : <FaMoon size={20} />}

            </ActionIcon>



          </div>


        </Header>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>


    </AppShell>
  );
}

export { App }
