import Component from "./component.js";

export default class TodoHeader extends Component {
    template() {
        return `
        <h1>To Do List</h1>
        <div>
            <input type="text" class="appender" />
            <button id="addBtn">+</button>
        </div>
        `;
    }
    setEvent() {
        const {addTodoList} = this.props;
        document.querySelector("#addBtn").addEventListener("click", () => {
            addTodoList(document.querySelector(".appender").value);
        });
    }
}