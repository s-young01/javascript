import Component from "./Components/Component.js";
import ContentInput from "./Components/ContentInput.js";
import Lists from "./Components/Lists.js";

export default class App extends Component {
    setup(){
        // state에 students라는 배열이 담김 !
        this.state = {
            students : [
                {
                    no : 1,
                    contents : "stu1",
                    active : false
                },
                {
                    no : 2,
                    contents : "stu2",
                    active : false
                },
                {
                    no : 3,
                    contents : "stu3",
                    active : false
                }
            ]
        }
        console.log(this);
    }
    template(){
        return `
        <div id="contentAdd"></div>
        <div id="studentLists"></div>
        <div id="viewBtn"></div>
        `;
    }
    mounted(){
        // 객체 구조 분해 할당 (객체 안에 있는 배열만 받아 옴)
        const {students} = this.state;
        const {addStudent, deleteStudent, changeBtn} = this;
        // contentAdd를 선택하는 변수를 만들고 
        const contentAppender = document.querySelector("#contentAdd");
        // ContentInput 객체의 target자리에 변수 담아줌 
        // ContentInput 객체의 props자리에 addStudent메소드 담아줌
        new ContentInput(contentAppender, {
            // addStudent.bind => .bind()를 써줌으로 객체가 App객체를 바라보게 함
            addStudent : addStudent.bind(this) // 이때 this는 App 객체 
        });
        // studentLists를 선택하는 변수를 만들고 
        const stuLists = document.querySelector("#studentLists");
        // Lists 객체의 target자리에 변수 담아줌 
        // Lists 객체의 props 자리에 state가 담긴 배열 담아줌
        new Lists(stuLists, {students : students,
            // props자리에 deleteStudent 함수를 추가 
            deleteStudent : deleteStudent.bind(this),
            // props자리에 changeBtn 함수를 추가 
            changeBtn : changeBtn.bind(this)});
    }
    addStudent(contents) {
        const {students} = this.state;
        // no 중 가장 큰 숫자 찾아서 1을 더한 값을 할당
        // students배열 객체의 no 의 값들만 새로운 배열로 리턴 [1,2,3] => [2,3,4] (+1 해줘서)
        const no = Math.max(0, ...students.map(s => s.no)) + 1;
        // 스프레드 구문 써서 배열 펼쳐줌 [2,3,4] => 2,3,4
        // Math.max(0,2,3,4) => no = 4
        this.setState ({
            students : [
                // setState에 원래 있던 배열안에 새로운 객체를 추가 함 
                ...students,
                {
                    no : no, // no에는 4가 담겨있음 
                    contents : contents,
                    active : false
                }
            ]
        })
    }
    deleteStudent(no) {
        const {students} = this.state;
        // 원래 배열이 가지고 있는 no와 삭제된 객체가 가지고 있는 no가 다를 때 리턴
        const newStudents = students.filter(stu => stu.no !== no);
        console.log(newStudents);
        this.setState ({students : newStudents});
    }
    changeBtn(active) {
        const {students} = this.state;
        const newBtn = students.map(btn => btn.active !== ture);
        console.log(newBtn);
        this.setState(newBtn);
    }
}