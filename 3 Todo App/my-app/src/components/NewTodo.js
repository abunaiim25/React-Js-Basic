import React,{useState} from 'react'
import style from './newTodo.module.css'

const NewTodo = (props) => {

    const [todo, setTodo] = useState({title : "", desc : ""});

   // const {title, desc} = todo;

    const handleChange =(event) =>{
        const name = event.target.name;
        setTodo((oldTodo) => {
            return {...oldTodo, [name]: event.target.value}
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(todo);
        props.onAddTodo(todo); //data pass child to parent
        setTodo({ title: "", desc: ""}); //after submit empty
    }


    return (
        <form onSubmit={handleSubmit}>

            <div  className={style.form_field}>
                <label htmlFor='title'>Title: </label>
                <input type="text" id="title" name="title" placeholder='NewTodo' value={todo.title} onChange={handleChange}/>
            </div>

            <div  className={style.form_field}>
                <label htmlFor='desc'>Description: </label>
                <textarea type="text" id="desc" name="desc"  placeholder='NewTodo' value={todo.desc} onChange={handleChange}/>
            </div>

            <button type='submit'>Add Todo</button>

        </form>
    )
}

export default NewTodo