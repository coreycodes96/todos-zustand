import { useState } from 'react'
import todoStore from '../../zustand/store'

const TodoInput = () => {
    const addTodo = todoStore((state) => state.addTodo)
    const [input, setInput] = useState('')

    const storeTodo = () => {
        const id = Math.floor(Math.random() * 100000000000)

        addTodo({
            id,
            body: input,
            complete: false,
        })

        setInput('')
    }

    return (
        <div className="my-10 mx-auto w-4/5 bg-gray-300 p-5">
            <input
                value={input}
                placeholder="Add Todo"
                onChange={({ target }) => setInput(target.value)}
                className="pl-2 w-full h-8 outline-gray-400"
            />
            <button
                onClick={() => storeTodo()}
                className="mt-2 p-2 w-full bg-gray-500 rounded text-xs text-white"
            >
                Add Todo
            </button>
        </div>
    );
}

export default TodoInput;