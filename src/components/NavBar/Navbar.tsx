import { Navbar as MatineNavbar, ScrollArea } from "@mantine/core"

export type NavbarBoardProps = {
  TitleArea: React.ReactNode
  ListArea: React.ReactNode
}

export const Navbar: React.FC<NavbarBoardProps> = ({ TitleArea, ListArea }) => {
  return (
    <MatineNavbar width={{ base: 300 }} p="xs">
      {/* Navbar content */}
      <MatineNavbar.Section mt="xs">{TitleArea}</MatineNavbar.Section>
      <MatineNavbar.Section grow component={ScrollArea} mx="-xs" px="xs">
        {ListArea}
      </MatineNavbar.Section>
    </MatineNavbar>
  )
}
