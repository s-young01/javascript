import Component from "./Component.js";

export default class Lists extends Component {
    template(){
        // 객체 구조 분해 할당 (객체 안에서 배열만 받아 옴)
        const {students} = this.props;
        console.log(students);
        // button에 삼항연산자로 students배열 안에 있는 active의 값이
        // true면 비활성 / flase면 활성이 되도록 작성
        return `
        <ul>
            ${students.map(stu => `<li data-no="${stu.no}">
            ${stu.contents}
            <button>${stu.active ? '비활성' : '활성'}</button>
            <button class="deleteBtn" data-no="${stu.no}">삭제</button>
            </li>`).join("")}
        </ul>
        `;
    }
    setEvent() {
        const {deleteStudent} = this.props;
        this.target.addEventListener("click", (e) => {
            // classList.contains() => 괄호안의 이름의 클래스가 있으면 true / 없으면 false
            if(e.target.classList.contains("deleteBtn")) {
                // console.dir() -> 자세히 보기
                console.dir(e.target);
                // 배열에서 삭제하기 
                // 문자열 -> 숫자열
                deleteStudent(Number(e.target.dataset.no));
            }
        })
    }
    setEvent() {
        const {changeBtn} = this.props;
        this.target.addEventListener("click", (e) => {
            if(e.target.classList.toggle("changeBtn")) {
                console.dir(e.target);
                
            }
        })
    }
}