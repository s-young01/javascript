import Component from "./components/component.js";
import TodoHeader from "./components/TodoHeader.js";
import TodoLists from "./components/TodoLists.js";

// app 클래스 생성
export default class App extends Component {
    setup() {
        console.log("setup");
        this.state = {
            inputText : "",
            todoLists : [
                {
                    no : 1,
                    content : '할 일1',
                    isDone : false
                },
                {
                    no : 2,
                    content : '할 일2',
                    isDone : false
                },
                {
                    no : 3,
                    content : '할 일3',
                    isDone : false
                }
            ]
        }
        console.log(this.state);
    }
    template(){
        return `
        <div id="inertTodo"></div>
        <div id="listTodos"></div>
        `;
    }
    mounted() {
        // 새로운 변수에 addTodoList를 담아줌 
        const {addTodoList} = this; // 이 때 this는 App객체 
        const todoHeader = document.querySelector("#inertTodo");
        const todolist = document.querySelector("#listTodos");
        // new객체 : 생성자 호출 => constructor(target, props)
        // target자리에는 todoHeader / props 자리에는 {addTodoList : addTodoList.bind(this)}가 담김
        // todoHeader에 있는 버튼을 사용하기 위해 만들어 줌
        new TodoHeader(todoHeader, {addTodoList : addTodoList.bind(this)}); // 이 때 this는 App자신이 됨
        // target자리에는 todoList / props 자리에는 {lists : this.state.todoLists}가 담김
        // todoList에 있는 li를 불러오기 위해 만들어 줌 
        new TodoLists(todolist, {lists : this.state.todoLists}); // lists에 todoLists의 배열을 담아줌 
    }
    
    addTodoList(content) {
        // this.state에 있는 todoLists라는 배열을 새로운 변수를 만들어서 담아줌
        const {todoLists} = this.state; // 이 때 this는 App객체 
        console.log(todoLists);
        console.log(this);
        // 이 때 this는 App객체 
        this.setState({
            // todoLists : [] => setState에 넘겨주는 객체 값 
            // 원래 있던 배열 값에 새로운 배열을 추가해줌 
            todoLists : [
                ...todoLists,
                {
                    no : 4,
                    content : content,
                    isDone : false
                }
            ]
        })
    }
}