import Component from "./Component.js";

export default class ContentInput extends Component {
    template(){
        return `
        <input type="text" class="appender" />
        `;
    }
    setEvent(){
        // 객체 구조 분해 할당
        const {addStudent} = this.props;
        this.target.addEventListener("keyup", (e) => {
            // e의 key값이 enter키가 아닐 때 -> 함수 종료 
            if(e.key !== "Enter") return; 
            addStudent(e.target.value);
            console.log(e);
        })
    }
}