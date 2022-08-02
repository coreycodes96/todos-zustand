import todoStore from "../../zustand/store"
import CompleteTodo from "../CompleteTodo/CompleteTodo"
import DeleteTodo from "../DeleteTodo/DeleteTodo"

const TodoList = () => {
    const todos = todoStore((state) => state.todos)

    return (
        <>
            {todos.length > 0 ? (
                todos.map(todo => (
                    <div
                        key={todo.id}
                        className="my-10 mx-auto p-2 w-4/5 flex justify-between items-center bg-gray-200 rounded"
                    >
                        <p className={`w-full ${todo.complete ? 'line-through' : 'no-underline'}`}>{todo.body}</p>
                        <div className="flex">
                            <DeleteTodo
                                id={todo.id}
                            />

                            <CompleteTodo
                                id={todo.id}
                                complete={todo.complete}
                            />
                        </div>
                    </div>
                ))
            ) : (
                <div className="w-full h-96 flex justify-center items-center">
                    <h3 className="text-3xl text-gray-700">No Todos</h3>
                </div>
            )}
        </>
    );
}

export default TodoList;