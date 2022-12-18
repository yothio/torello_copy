type ListStoreType = { name: string; key: string }

export const getLists = (boardKey: string) => {
  const item = localStorage.getItem(boardKey)
  if (item == null) {
    console.log("Error: Board not found")

    return []
  }

  const lists = JSON.parse(item) as ListStoreType[]
  return lists
}

export const saveLists = (key: string, lists: ListStoreType[]) => {
  localStorage.setItem(key, JSON.stringify(lists))
}
