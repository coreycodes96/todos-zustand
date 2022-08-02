import create from 'zustand'
import { persist } from 'zustand/middleware'

const todoStore = create(persist((set) => ({
    todos: [],
    addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
    deleteTodo: (id) => set((state) => ({ todos: state.todos.filter(todo => todo.id !== id) })),
    completeTodo: (id) => set((state) => {
        const todos = state.todos
        const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, complete: todo.complete = !todo.complete } : todo)
        return { todos: updatedTodos }
    })
}), { name: 'todos' }));

export default todoStore;