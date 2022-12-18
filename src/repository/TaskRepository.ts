import { LabelType, TaskType } from "../type/Data"

export const testCreateTask = () => {
  return createTask("test", "", new Date(), [])
}

export const createTask = (title: string, content: string, limitDate: Date, labels: LabelType[]): TaskType => ({
  title,
  content,
  limitDate,
  createDate: limitDate,
  labels,
})

export const getTask = (key: string): TaskType | undefined => {
  const item = localStorage.getItem(key)
  if (item == null) {
    console.log("Error: task not found")

    return
  }

  const task = JSON.parse(item) as TaskType
  return task
}

export const setTask = (task: TaskType) => {
  const key = createKey("Task", task.createDate)

  localStorage.setItem(key, JSON.stringify(task))
}

export const createKey = (keyType: "Task" | "List" | "Board", createDate: Date) => `${keyType}-${createDate.toDateString()}`
