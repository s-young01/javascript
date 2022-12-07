import Component from "./Components/component.js";
import TodoHeader from "./Components/TodoHeader.js";
import TodoLists from "./Components/TodoLists.js";

// app클래스 생성 
export default class App extends Component {
    setup() {
        this.state = {
            inputText : "",
            todoLists : [
                {
                    no : 1,
                    content : "",
                    isDone : false
                }
            ]
        }
    }
    template() {
        return `
        <div id="inerTodo"></div>
        <div id="listTodos"></div>
        `;
    }
    mounted() {
        const {addTodoList} = this;
        const todoHeader = document.querySelector("#inerTodo");
        const todoLists = document.querySelector("#listTodos");
        new TodoHeader(todoHeader, {addTodoList : addTodoList.bind(this)});
        new TodoLists(todoLists, {lists : this.state.todoLists});
    }

    addTodoList(content) {
        const {todoLists} = this.state;
        this.setState({
            todoLists : [
                ...todoLists,
                {
                    no : 2,
                    content : content,
                    isDone : false
                }
            ]
        })
    }
}