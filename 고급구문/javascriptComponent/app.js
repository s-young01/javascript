import Component from "./components/Component.js";

// app 클래스 선언 : 어떤 내용이 들어갈지 지정함
export default class App extends Component {
    setup() {
        this.state = {students : ["stu1","stu2","stu3","stu4"]}
    }
    template() {
        const {students} = this.state;
        return `
        <ul>
            ${students.map(stu => `<li>${stu}</li>`).join("")}
        </ul>
        <button id="add">추가</button>
        `;
    }
    setEvent() {
        const {students} = this.state;
        this.target.querySelector("#add").addEventListener("click", () => {
            this.setState({students : [...students, `stu${students.length + 1}`]})
        })
    }
}
