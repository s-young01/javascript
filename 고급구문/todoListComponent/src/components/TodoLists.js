import Component from "./component.js";

export default class todoLists extends Component {
    // 화면에 나타나게 해주는 친구 
    template() {
        const {lists} = this.props; // props자리에 {lists : this.state.todoLists}가 담김 
        console.log(lists);
        return `
        <ul>
            ${lists.map(li => `<li>${li.content}</li>`).join("")}
        </ul>
        `;
    }
}