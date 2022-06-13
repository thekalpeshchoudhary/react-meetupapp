import Backdrop from "../components/Backdrop";
import Modal from "../components/Modal";
import { useState } from "react";

const Todo = (props) => {
	const [ modalState, modalStateChange ] = useState(false);
	
	function handleDel(){
		modalStateChange(!modalState);
	}

  return (
    <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button onClick={handleDel} className="btn">Delete</button>
        </div>
				{ modalState && <Modal onClick={handleDel}/> }
				{ modalState && <Backdrop onClick={handleDel} /> }
    </div>
  )
}

export default Todo