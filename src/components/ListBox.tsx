import { Box, Stack, UnstyledButton } from "@mantine/core"
import React from "react"
import { ListType } from "../type/Data"
import { TaskBox } from "./TaskBox"
import { Droppable } from "react-beautiful-dnd"

type ListBoxProps = {
  list: ListType
  index: number
}

export const ListBox: React.FC<ListBoxProps> = ({ list, index }) => {
  return (
    <Droppable droppableId={index.toString()} type="tasks" key={list.title}>
      {(provided) => (
        <Box
          sx={(theme) => ({
            width: 300,
            maxHeight: "100%",
            backgroundColor: "white",
            textAlign: "center",
            paddingTop: theme.spacing.lg,
            paddingBottom: theme.spacing.xs,
            paddingLeft: theme.spacing.lg,
            paddingRight: theme.spacing.lg,
            borderRadius: theme.radius.md,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: theme.colors.gray[1],
            },
          })}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {list.title}

          <Stack spacing={"md"}>
            {list.tasks.length == 0 ? (
              <></>
            ) : (
              list.tasks.map((task, index) => {
                return <TaskBox key={task.createDate.toString()} task={task} index={index} />
              })
            )}
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
                justifyContent: "space-between",
              })}
            >
              タスクを追加する
            </UnstyledButton>
          </Stack>
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  )
}
