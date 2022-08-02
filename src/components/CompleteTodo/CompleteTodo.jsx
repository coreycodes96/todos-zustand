import todoStore from "../../zustand/store";

const CompleteTodo = ({ id, complete }) => {
    const completeTodo = todoStore((state) => state.completeTodo)

    return (
        <button
            onClick={() => completeTodo(id)}
            className="ml-2 p-1 bg-green-500 rounded text-white text-xs"
        >
            {complete ? 'Completed' : 'Incomplete'}
        </button>
    )
}

export default CompleteTodo;