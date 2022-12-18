import { Text, UnstyledButton } from "@mantine/core"
import React from "react"

type BoardItemProps = {
  title: string
  index: number
  itemSelect: (newLists: number) => void
}

export const BoardItem: React.FC<BoardItemProps> = ({ title, index, itemSelect }) => {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingTop: theme.spacing.lg,
        paddingBottom: theme.spacing.lg,
        borderRadius: theme.radius.sm,
        color: theme.black,

        "&:hover": {
          backgroundColor: theme.colors.gray[0],
        },
      })}
      onClick={() => itemSelect(index)}
    >
      <Text size="sm">{title}</Text>
    </UnstyledButton>
  )
}
