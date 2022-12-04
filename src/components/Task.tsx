import React from "react"
import { TaskType } from "../type/Data"

export const Task: React.FC<TaskType> = ({ title }) => {
  return <div>{title}</div>
}
