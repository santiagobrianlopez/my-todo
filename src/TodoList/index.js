import React from "react";
import './TodoList.css';

function TodoList(props){
    // console.log(props)
    return(
        <section className="TodoList">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};