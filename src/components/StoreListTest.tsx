import { Button } from "@mantine/core"
import { useEffect, useState } from "react"
import { getLists, saveLists } from "../repository"

type Props = { listKey: string }

export const StoreListTest: React.FC<Props> = ({ listKey }) => {
  const [lists, setLists] = useState(getLists(listKey))
  const addList = () => {
    const newBoard = { key: `test_key_${lists.length}`, name: `test_value_${lists.length}` }
    setLists([...lists, newBoard])
    saveLists(listKey, lists)
  }

  useEffect(() => {
    console.log({ ...lists })
    setLists(getLists(listKey))
  }, [listKey])

  return (
    <div>
      <h2>{listKey}</h2>
      <Button onClick={addList}>ListdAdd</Button>

      {lists.map((list) => (
        <h3 key={list.key}>{list.name}</h3>
      ))}
    </div>
  )
}
