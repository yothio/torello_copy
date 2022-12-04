import { AppShell } from "@mantine/core"
import React from "react"
import Header from "./Header"
import Navbar from "./Navbar"

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => (
  <AppShell
    padding="md"
    navbar={<Navbar />}
    header={<Header />}
    styles={(theme) => ({
      main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] },
    })}
  >
    {children}
  </AppShell>
)
