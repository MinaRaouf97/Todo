
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

const Home = () => {


    const [todos, setTodos] = useState([
        {
          text: "This is a sampe todo",
          isDone: false
        }
      ])
    const [todoPar, setTodoPar] = useState({
        todo: "",
    })

    useEffect(() => {


    }, [todos])

    const handleEvent = (e) => {
        if (e.target.name === "todoPar") {
            setTodoPar({
                ...todoPar,
                todo: e.target.value
            });

        }


    }

    const handelSubmit = (e) => {

        e.preventDefault();
        if (!todoPar.todo) return;
         const newTodos = [...todos, {text :todoPar.todo, isDone: false}];
        setTodos(newTodos)
        
        


    }


    const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
    
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };




    return (
        <div className="container-xxl">

            <div className="mb-3 ">
                <div className="row ">

                    <label htmlFor="todoPar" className="form-label">Todo </label>

                    <div className="col-md-7 col-sm-5">
                        <input
                            placeholder="Type your todo here"
                            type="text"
                            className="form-control"
                            id="todoPar"
                            name="todoPar"
                            onChange={(e) => handleEvent(e)}
                            value={todoPar.todo}

                        />

                    </div>

                    <button className="btn btn-primary col-md-1" onClick={(e) => handelSubmit(e)}>Add</button>

                </div>
            </div>


            <div >
                {todos.map((todo, index) => {
                    return (
                        <div key={index}>
                            <div className="row ">
                            <p className="col-md-4 m-2" style={{ textDecoration: todo.isDone ? "line-through" : "" }} >{todo.text}</p>
                            <div className="col-md-4">
                                <Button variant="outline-success m-2" onClick={() => markTodo(index)}>✓</Button>
                                <Button variant="outline-danger m-2" onClick={() => removeTodo(index)}>✕</Button>
                            </div>
                            </div>
                        </div>

                    )
                })

                }

            </div>

        </div>
    )
}


export default Home; 