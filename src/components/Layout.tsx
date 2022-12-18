import { AppShell } from "@mantine/core"
import React from "react"
import Header from "./Header"
import { Navbar, NavbarBoardProps } from "./Navbar"

type Props = {
  children: React.ReactNode
  navbarProps: NavbarBoardProps
}

export const Layout: React.FC<Props> = ({ children, navbarProps }) => (
  <AppShell
    padding="md"
    navbar={<Navbar TitleArea={navbarProps.TitleArea} ListArea={navbarProps.ListArea} />}
    header={<Header />}
    styles={(theme) => ({
      main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },
    })}
  >
    {children}
  </AppShell>
)
