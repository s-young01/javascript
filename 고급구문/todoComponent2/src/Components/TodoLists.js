import Component from "./component.js";

export default class todoLists extends Component {
    template() {
        const {lists} = this.props;
        return `
        <ul>
            ${lists.map(li => `<li>${li.content}</li>`).join("")}
        </ul>
        `;
    }
}