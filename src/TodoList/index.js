import React from "react";
import './TodoList.css';

function TodoList(props){
    const renderFunc = props.children || props.render;
    
    return(
        <section className="TodoList">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmpityTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length)&& props.onEmpitySearchResults()}

            {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}

            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};