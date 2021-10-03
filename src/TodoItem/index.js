import React from "react";
import './TodoItem.css';
import {Modal} from '../Modal';
import {TodoNote} from '../TodoNote';
import Check from '../check.svg';
import Delete from '../close.svg';


function TodoItem(props){
    

    const [openModal2, setOpenModal2] = React.useState(false);


    const onClickButton = () => {
       setOpenModal2(prevState => !prevState);
    };
    
    return(
       <div className="divTodoItem">
            <li className="TodoItem"
            >
            {!!openModal2 &&
                            <Modal text='hola'>
                                <TodoNote
                                    key={props.text} 
                                    text={props.text} 
                                    textArea={props.textArea}
                                    completed={props.completed}
                                    setOpenModal2={setOpenModal2}
                                />
                            </Modal>
            }
                    <div
                        onClick={onClickButton}
                    >
                        <p 
                        className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
                        >{props.text}</p>
                    </div>
            </li>
            
           <img 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
                onClick={props.onComplete}
                src={Check}
                alt='Check'></img>
            <img 
            className="Icon Icon-delete" 
            onClick={props.onDelete}
            src={Delete}
            alt='Delete'></img>
       </div>
    );
}

export {TodoItem};