import React from "react"
import { TaskType } from "../type/Data"
import { Box } from "@mantine/core"
import { Draggable } from "react-beautiful-dnd"

type TaskBoxProps = {
  task: TaskType
  index: number
}

export const TaskBox: React.FC<TaskBoxProps> = ({ task, index }) => {
  const { title, content } = task
  return (
    <Draggable draggableId={index.toString()} index={index}>
      {(provided) => (
        <Box
          sx={(theme) => ({
            maxWidth: "100%",
            backgroundColor: theme.colors.blue[2],
            textAlign: "center",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: theme.colors.blue[4],
            },
          })}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          {title}
        </Box>
      )}
    </Draggable>
  )
}
