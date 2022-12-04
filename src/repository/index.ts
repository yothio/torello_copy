import { Label, Task } from "../type/Data"

export const testCreateTask = () => {
  return createTask("", "", new Date(), [])
}

export const createTask = (title: string, content: string, limitDate: Date, labels: Label[]): Task => ({
  title,
  content,
  limitDate,
  createDate: new Date(),
  labels,
})

export const getTask = (key: string): Task | undefined => {
  const item = localStorage.getItem(key)
  if (item == null) {
    console.log("Error: task not found")

    return
  }

  const task = JSON.parse(item) as Task
  return task
}

export const setTask = (task: Task) => {
  const key = createKey("Task", task.createDate)

  localStorage.setItem(key, JSON.stringify(task))
}

export const createKey = (keyType: "Task" | "List" | "Board", createDate: Date) => `${keyType}-${createDate.toDateString()}`
