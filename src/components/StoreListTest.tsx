import { Button } from "@mantine/core"
import { useEffect, useState } from "react"
import { getLists, saveLists } from "../repository"

type Props = { listKey: string }

export const StoreListTest: React.FC<Props> = ({ listKey }) => {
  const [lists, setLists] = useState(getLists(listKey))
  const addList = () => {
    const newBoard = { key: `test_key_${lists.length}`, name: `test_value_${lists.length}` }
    setLists([...lists, newBoard])
  }

  useEffect(() => {
    console.log({ ...lists })
    setLists(getLists(listKey))
  }, [listKey])

  useEffect(() => {
    saveLists(listKey, lists)
  }, [lists])

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
