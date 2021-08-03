const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    const inputTextHandler = (e) =>  {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        //Prevent Default to avoild refresh and keep input values
        e.preventDefault();
        setTodos([
            //This explain: If I have Todos already in the list, just pass it. Take the information in input and add id and incompleted
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        //Add blank value again to reset without refresh
        setInputText('');
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };

    return(
        <form>
            <input value={inputText} 
            onChange={inputTextHandler} 
            type="text" 
            className="todo-input" 
            />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;