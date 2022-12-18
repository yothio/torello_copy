import { BoardType } from "../type/Data"

export const getBoards = (): Array<BoardType> => {
  const item = localStorage.getItem("torello_copy_list")
  if (item == null) {
    console.log("Error: Board not found")

    return []
  }

  const lists = JSON.parse(item) as Array<BoardType>
  return lists
}

export const saveBoards = (boards: BoardType[]) => {
  localStorage.setItem(createKey, JSON.stringify(boards))
}

const createKey = "torello_copy_list"
