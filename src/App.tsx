import { Layout } from "./components/Layout"
import { Task } from "./components/Task"
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd"
import { useState } from "react"
import { createTask, testCreateTask } from "./repository"
import { BoardType, ListType } from "./type/Data"
import { NavbarHeader } from "./components/NavbarHeader"
import { BoardItem } from "./components/BoardItem"
import { NavbarBoardProps as BoardListsProps } from "./components/Navbar"
import { Box, Flex, ScrollArea } from "@mantine/core"
import { ListBox } from "./components/ListBox"

function App() {
  // Board
  const [boards, setBoard] = useState<BoardType[]>([])
  const addBoardFunc = (title: string) => {
    const newBoards = [
      ...boards,
      {
        title: title + boards.length,
        lists: [
          { tasks: [], title: "Todo" },
          { tasks: [], title: "Doing" },
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

  // List
  const [lists, setLists] = useState<ListType[]>([])
  const updateLists = (index: number) => {
    setLists([...boards[index].lists])
    console.log(lists)
  }
  const onListDragEnd = (result: DropResult) => {
    const items = [...lists]
    const deleteItem = items.splice(result.source.index, 1)
    if (!result.destination) return
    items.splice(result.destination.index, 0, deleteItem[0])

    setLists(items)
    // TODO: BoardListが更新できていない
  }

  const navbar: BoardListsProps = {
    TitleArea: <NavbarHeader onClickAdd={addBoardFunc} />,
    ListArea: (
      <Box>
        {boards.map((board, index) => {
          return <BoardItem key={index} title={board.title} index={index} itemSelect={updateLists} />
        })}
      </Box>
    ),
  }

  // Task
  const [tasks, setTasks] = useState([testCreateTask(), createTask("abc", "content", new Date("2022-11-22"), [])])

  return (
    <Layout navbarProps={navbar}>
      <DragDropContext onDragEnd={onListDragEnd}>
        <ScrollArea type="scroll" style={{ height: "100%" }}>
          <Droppable droppableId="droppableId" direction="horizontal">
            {(provided) => (
              <Flex className="ListArea" {...provided.droppableProps} ref={provided.innerRef}>
                {lists.map((list, index) => {
                  return (
                    <Draggable key={list.title} draggableId={list.title} index={index}>
                      {(provided) => (
                        <div className="listItem" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                          {<ListBox key={list.title} list={list} />}
                        </div>
                      )}
                    </Draggable>
                  )
                })}
              </Flex>
            )}
          </Droppable>
        </ScrollArea>
      </DragDropContext>
    </Layout>
  )
}

export default App
