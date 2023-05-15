import { useState } from "react";
import { addNewToDo } from "../redux/actions";
import { useDispatch } from "react-redux";

const Form = () => {

const [text,setText] = useState("");

const dispatch = useDispatch();


    const onFormSubmit = (e) => {
             e.preventDefault();

            dispatch(addNewToDo(text));

            setText('');
    }

    const onInputChange = (e) => {
       setText(e.target.value);
    }

    return(
        <form className="form" onSubmit={onFormSubmit}> 
                             <input 
                             className="input"
                             placeholder="Enter new todo..." 
                             onChange={onInputChange}
                             value={text}
                             />
        </form>
    )
}
export default Form;