/* eslint-disable import/no-absolute-path */
import { useState } from 'react'
import { Todos } from './components/Todos'
import { type ListOfTodos, type TodoId, type Todo as TodoType } from './types'

const mocksData: ListOfTodos = [
  {
    id: '1',
    title: 'Learn Typescript',
    completed: true
  },
  {
    id: '2',
    title: 'Make more projects using Typescript',
    completed: false
  },
  {
    id: '3',
    title: 'Talk & Write in English more frequently',
    completed: false
  }
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mocksData)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos
      onToggleCompleteTodo={handleCompleted}
      onRemoveTodo={handleRemove}
      todos={todos}/>
    </div>
  )
}

export default App
