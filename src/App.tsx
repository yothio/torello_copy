import { Layout } from "./components/Layout"
import { Task } from "./components/Task"
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd"
import { useState } from "react"
import { createTask, testCreateTask } from "./repository"
import { BoardType, ListType } from "./type/Data"
import { NavbarHeader } from "./components/NavbarHeader"
import { BoardItem } from "./components/BoardItem"
import { NavbarBoardProps } from "./components/Navbar"
import { Box } from "@mantine/core"

function App() {
  // Board
  const [boards, setBoard] = useState<BoardType[]>([])
  const addBoardFunc = (title: string) => {
    const newBoards = [...boards, { title: title + boards.length, lists: [], labels: [] }]
    console.log(newBoards)
    setBoard(newBoards)
  }
  const navbar:NavbarBoardProps = {
    TitleArea: <NavbarHeader onClickAdd={addBoardFunc}/>,
    BoardList: 
      <Box>
        {
          boards.map((board, index) => {
            return (<BoardItem key={index} title={board.title}/>)
          })
        }
      </Box>
  }

  // List
  const [lists, setLists] = useState<ListType>()

  // Task
  const [tasks, setTasks] = useState([testCreateTask(), createTask("abc", "content", new Date("2022-11-22"), [])])
  const onDragEndTest = (result: DropResult) => {
    const items = [...tasks]
    const deleteItem = items.splice(result.source.index, 1)
    if (!result.destination) return
    items.splice(result.destination.index, 0, deleteItem[0])

    setTasks(items)
  }

  return (
    <Layout navbarProps={navbar}>
      <div>
        <DragDropContext onDragEnd={onDragEndTest}>
          <Droppable droppableId="droppableId">
            {(provided) => (
              <div className="testListArea" {...provided.droppableProps} ref={provided.innerRef}>
                {tasks.map((task, index) => {
                  return (
                    <Draggable key={task.createDate.toString()} draggableId={task.createDate.toString()} index={index}>
                      {(provided) => (
                        <div className="testItem" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <Task {...task} />
                        </div>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </Layout>
  )
}

export default App
