import React from 'react'
import { AppShell } from '@mantine/core';
import Navbar from './Navbar';
import Header from './Header';

type Props = {
  children: React.ReactNode
}

export const Layout:React.FC<Props> = (props) => {
  const { children } = props
  return (
    <AppShell
      padding="md"
      navbar={<Navbar/>}
      header={<Header/>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {children}
    </AppShell>
  )
}
