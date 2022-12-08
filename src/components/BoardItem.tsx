import { Text, UnstyledButton } from "@mantine/core"
import React from "react"

type BoardItemProps = {
  title: string
}

export const BoardItem: React.FC<BoardItemProps> = ({ title }) => {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.black,

        "&:hover": {
          backgroundColor: theme.colors.gray[0],
        },
      })}
    >
      <Text size="sm">{title}</Text>
    </UnstyledButton>
  )
}
