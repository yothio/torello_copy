import { Box } from "@mantine/core"
import React from "react"
import { ListType } from "../type/Data"

type ListBoxProps = {
  list: ListType
}

export const ListBox: React.FC<ListBoxProps> = ({ list }) => {
  return (
    <Box
      sx={(theme) => ({
        width: 300,
        maxHeight: "100%",
        backgroundColor: "white",
        textAlign: "center",
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: theme.colors.gray[1],
        },
      })}
    >
      {list.title}
    </Box>
  )
}
