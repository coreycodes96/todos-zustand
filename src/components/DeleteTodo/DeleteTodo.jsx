import todoStore from "../../zustand/store";

const DeleteTodo = ({ id }) => {
    const deleteTodo = todoStore((state) => state.deleteTodo)

    return (
        <button
            onClick={() => deleteTodo(id)}
            className="mx-2 p-1 bg-red-500 rounded text-white text-xs"
        >
            Delete
        </button>
    )
}

export default DeleteTodo;