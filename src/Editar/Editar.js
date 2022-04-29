import React from 'react'
import { TodoContext } from "../TodoContext";
import "./Editar.css";

const  Editar = () => {
    const { addTodo} = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState("");
    const onChange = (event) => {
      setNewTodoValue(event.target.value);
    };
    const onSubmit = (event) => {
      event.preventDefault();
      addTodo(newTodoValue);
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
              type="submit"
              className="TodoForm-button TodoForm-button--add"
            >
              Añadir
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
 
export default Editar;