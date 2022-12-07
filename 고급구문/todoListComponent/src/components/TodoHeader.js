import Component from "./component.js";

export default class TodoHeader extends Component {
    // 화면에 나타나게 해주는 친구 
    template() {
        return `
        <h1>To Do List</h1>
        <div>
            <input type="text" class="appender" />
            <button id="addBtn">+</button>
        </div>
        `;
    }
    // 이벤트 연결 해주는 친구 
    setEvent() {
        const {addTodoList} = this.props; // props자리에 {addTodoList : addTodoList.bind(this)}가 담김
        document.querySelector("#addBtn").addEventListener("click", () => {
            addTodoList(document.querySelector(".appender").value);
            
        });
    }
}