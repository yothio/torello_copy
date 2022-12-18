import { Button } from "@mantine/core"
import { useEffect, useState } from "react"
import { getBoards } from "../repository"
import { saveBoards } from "../repository/Board"
import { StoreListTest } from "./StoreListTest"

export const StoreBoardTest = () => {
  const [boards, setBoards] = useState(getBoards())
  const [listKey, setListKey] = useState(boards[0]?.key)
  console.log({ ...boards })

  const addBoard = () => {
    const newBoard = { key: `test_key_${boards.length}`, value: `test_value_${boards.length}` }
    setBoards([...boards, newBoard])
    saveBoards(boards)
  }

  const boardClick = (bordKey: string) => {
    setListKey(bordKey)
  }
  useEffect(() => {}, [listKey])

  return (
    <div>
      <Button onClick={addBoard}>BoardAdd</Button>
      {boards.map((bord) => (
        <h1 key={bord.key} onClick={() => boardClick(bord.key)}>
          {bord.value}
        </h1>
      ))}
      <StoreListTest listKey={listKey} />
      testhogehoge
    </div>
  )
}
