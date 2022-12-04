export type TaskType = {
  title: string
  content: string
  limitDate: Date
  createDate: Date
  labels: LabelType[]
}

export type ListType = {
  tasks: TaskType[]
  title: string
}

export type BoardType = {
  title: string
  lists: ListType[]
  labels: LabelType[]
}

export type LabelType = {
  name: string
  color: number
}
