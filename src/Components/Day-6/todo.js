import React from 'react'
import '../../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button , Card , Form } from 'react-bootstrap'


const Todo = ({index , todo , removeTodo , markTodo }) => {
    console.log(todo.title);
    return(
        <div className="todo">
            <span style={{textDecoration:todo.isComplete ?"line-through":""}}>{todo.title}</span>
            <div>
                <Button onClick={()=>{markTodo(index)}} variant="outline-success">Complete</Button>
                <Button onClick={()=>{removeTodo(index)}} variant="outline-danger">Remove</Button>
            </div>
        </div>
    )
}

const FormTodo = ({maketodo}) => {
        const [val,setval] =React.useState("");

        const handlesubmit = (e) =>{
            e.preventDefault();
            if(!val) return;
            maketodo(val);
            setval("");
        }

    return (
        <div>
            <Form onSubmit = {handlesubmit}>
                <Form.Group>
                    <Form.Label><b>Add Todo Task</b></Form.Label>
                    <Form.Control type="text" className="input" value={val} onChange={e=> setval(e.target.value)} placeholder="Add task you want to do"></Form.Control>
                </Form.Group>
                <br/>
                <Button variant="primary mb-3" type="submit" >
                    AddTask
                </Button>
            </Form>
        </div>
    )
}


const App = () => {
    const [todos , setTodos] = React.useState([{
        title:"sample todo",
        isComplete:false
    }])
    const addTodo = newtodo =>{
          const temptodos = [...todos ,{
            title:newtodo,
            isComplete:false
          }];
          setTodos(temptodos)
    }

    const markTodo = index =>{
        const temptodos = [...todos];
        temptodos[index].isComplete = true;
        setTodos(temptodos)
  }
  const removeTodo = index =>{
    const temptodos = [...todos];
    temptodos.splice(index , 1);
    setTodos(temptodos)
}
    return (
         <div className="app">
             <div className="container">
                 <h1 className="text-center mb-4">ToDo List In React</h1>
                 <FormTodo maketodo={addTodo}/> 
                 <div>
                     {todos.map((todo , index)=>(
                        //  console.log(todo.title , index)
                         <Card>
                             <Card.Body>
                             <Todo 
                          key={index}
                          index ={index}
                          todo = {todo}
                          removeTodo ={removeTodo}
                          markTodo = {markTodo}
                          /> 
                         </Card.Body>
                         </Card>
                     ))}
                </div>
            </div>
         </div>
    )
}
export default App;