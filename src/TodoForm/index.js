import React, { Fragment } from "react";
import { TodoContext } from "../TodoContext";
import { CreateTodoButton } from "../CreateTodoButton";
import "./TodoForm.css";

function TodoForm() {
  const { addTodo, openModal, setOpenModal } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          placeholder="Cortar la cebolla para el almuerzo"
        />
        <div className="TodoForm-buttonContainer">
          <button
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
          >
            Añadir
          </button>
        </div>
      </form>
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}

export { TodoForm };
