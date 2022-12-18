import { Layout } from "./components/Layout"
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd"
import { useState } from "react"
import { createTask, testCreateTask } from "./repository"
import { BoardType, ListType } from "./type/Data"
import { NavbarHeader } from "./components/NavBar/NavbarHeader"
import { BoardItem } from "./components/BoardItem"
import { NavbarBoardProps as BoardListsProps } from "./components/NavBar/Navbar"
import { Box, Flex, ScrollArea, Text } from "@mantine/core"
import { ListBox } from "./components/ListBox"

function App() {
  // Board
  const [boards, setBoard] = useState<BoardType[]>([])
  const [selectedBoardNum, setSelectedBoardNum] = useState<number>(0)
  const addBoardFunc = (title: string) => {
    const newBoards = [
      ...boards,
      {
        title: title + boards.length,
        lists: [
          { tasks: [testCreateTask(), createTask("abc", "content", new Date("2022-11-22"), [])], title: "Todo" },
          { tasks: [createTask("123", "content", new Date("2022-11-23"), [])], title: "Doing" },
          { tasks: [], title: "Done" },
          { tasks: [], title: "title1" },
          { tasks: [], title: "title2" },
          { tasks: [], title: "title3" },
          { tasks: [], title: "title4" },
          { tasks: [], title: "title5" },
          { tasks: [], title: "title6" },
          { tasks: [], title: "title7" },
          { tasks: [], title: "title8" },
        ],
        labels: [],
      },
    ]
    console.log(newBoards)
    setBoard(newBoards)
  }
  const changeSelectedBoardNum = (index: number) => {
    setSelectedBoardNum(index)
  }

  const onListDragEnd = (result: DropResult) => {
    console.log("srcDroppableId: " + result.source.droppableId)
    console.log("dstDroppableId: " + result.destination?.droppableId)
    console.log("srcIndex: " + result.source.index)
    console.log("dstIndex: " + result.destination?.index)

    if (result.type == "lists") {
      const items = [...boards[selectedBoardNum].lists]
      const newBoard = [...boards]
      const deleteItem = items.splice(result.source.index, 1)
      if (!result.destination) return
      items.splice(result.destination.index, 0, deleteItem[0])

      newBoard[selectedBoardNum].lists = items
      setBoard(newBoard)
    } else if (result.type == "tasks") {
      if (!result.destination) return
      const srcListNum = Number(result.source.droppableId)
      const dstListNum = Number(result.destination.droppableId)
      const srcTaskNum = Number(result.source.index)
      const dstTaskNum = Number(result.destination.index)
      if (srcListNum != dstListNum) {
        // 異なるリストへ移動
        const srcItems = [...boards[selectedBoardNum].lists[srcListNum].tasks]
        const dstItems = [...boards[selectedBoardNum].lists[dstListNum].tasks]
        const newBoard = [...boards]
        const deleteItem = srcItems.splice(srcTaskNum, 1)
        dstItems.splice(dstTaskNum, 0, deleteItem[0])

        boards[selectedBoardNum].lists[srcListNum].tasks = srcItems
        boards[selectedBoardNum].lists[dstListNum].tasks = dstItems
        setBoard(newBoard)
      } else {
        // 同じリスト内で入れ替え
        const items = [...boards[selectedBoardNum].lists[srcListNum].tasks]
        const newBoard = [...boards]
        const deleteItem = items.splice(srcTaskNum, 1)
        items.splice(dstTaskNum, 0, deleteItem[0])

        newBoard[selectedBoardNum].lists[srcListNum].tasks = items
        setBoard(newBoard)
      }
    }
  }

  const navbar: BoardListsProps = {
    TitleArea: <NavbarHeader onClickAdd={addBoardFunc} />,
    ListArea: (
      <Box>
        {boards.map((board, index) => {
          return <BoardItem key={index} title={board.title} index={index} itemSelect={changeSelectedBoardNum} />
        })}
      </Box>
    ),
  }

  return (
    <Layout navbarProps={navbar}>
      <DragDropContext onDragEnd={onListDragEnd}>
        <ScrollArea type="scroll" style={{ height: "100%" }}>
          <Droppable droppableId="board" direction="horizontal" type="lists">
            {(provided) => (
              <Flex className="ListArea" {...provided.droppableProps} ref={provided.innerRef} gap="md">
                {boards.length == 0 ? (
                  <Text>ボードがありません</Text>
                ) : (
                  boards[selectedBoardNum].lists.map((list, index) => {
                    return (
                      <Draggable key={list.title} draggableId={list.title} index={index}>
                        {(provided) => (
                          <div className="listItem" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            {<ListBox key={list.title} list={list} index={index} />}
                          </div>
                        )}
                      </Draggable>
                    )
                  })
                )}
                {provided.placeholder}
              </Flex>
            )}
          </Droppable>
        </ScrollArea>
      </DragDropContext>
    </Layout>
  )
}

export default App
