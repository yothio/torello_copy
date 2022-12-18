type BoardStoreType = {
  key: string
  value: string
}

export const getBoards = () => {
  const item = localStorage.getItem("torello_copy_list")
  if (item == null) {
    console.log("Error: Board not found")

    return []
  }

  const lists = JSON.parse(item) as BoardStoreType[]
  return lists
}

export const saveBoards = (boards: BoardStoreType[]) => {
  localStorage.setItem(createKey, JSON.stringify(boards))
}

const createKey = "torello_copy_list"
