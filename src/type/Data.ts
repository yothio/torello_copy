export type Task = {
  title: string
  content: string
  limitDate: Date
  createDate: Date
  labels: Label[]
}

export type List = {
  tasks: Task[]
  title: string
}

export type Board = {
  title: string
  lists: List[]
  labels: Label[]
}

export type Label = {
  name: string
  color: number
}
