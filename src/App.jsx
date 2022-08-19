import React, { useContext, useState } from 'react';
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
  ScrollArea,
  Menu
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { SortAscending, Trash } from 'tabler-icons-react';

import { FaSun, FaMoon } from 'react-icons/fa'
import { Name } from './Components/Name';
import { AuthContext } from './Context/AuthContext';
import { UserButton } from './Components/UserButton';
import { SortingList } from './Components/SortingList';

const App = () => {
  const [open, handlers] = useDisclosure(false)
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  const { userDetails, handleLogout } = useContext(AuthContext)
  const date = new Date()
  const year = date.getFullYear()
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
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 320 }}>
          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
            <Name />
          </Navbar.Section>
          <Navbar.Section>

            <Menu
            opened={open}
            onOpen={handlers.open}
            onClose={handlers.close}
            position="top"
            control={
              <UserButton
              name={userDetails.name}
              email = {userDetails.email}
              image = {userDetails.image}
              />
            }
            >
            <Menu.Item onClick={() => handleLogout()} color="red" icon={<Trash size={14} />}>Logout</Menu.Item>

            </Menu>
          </Navbar.Section>
        </Navbar>
      }

      footer={
        <Footer height={60} p="md">
          © Clearbook ♥️ {year}. All rights reserved. 💓
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

            <div style={{ width: '100%' }}>
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

              {dark ? <FaSun size={20} /> : <FaMoon size={20} />}

            </ActionIcon>



          </div>


        </Header>
      }
    >
        <SortingList/>


    </AppShell>
  );
}

export { App }
