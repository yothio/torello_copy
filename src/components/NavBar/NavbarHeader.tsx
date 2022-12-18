import { ActionIcon, Box, Group } from "@mantine/core"
import React from "react"

type NavbarHeaderProps = {
  onClickAdd: (title: string) => void
}

export const NavbarHeader: React.FC<NavbarHeaderProps> = ({ onClickAdd }) => {
  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `1px solid ${theme.colors.gray[4]}`,
      })}
    >
      <Group position="apart">
        Board List
        <ActionIcon variant="default" size={30} onClick={() => onClickAdd("Board")}>
          +
        </ActionIcon>
      </Group>
    </Box>
  )
}
