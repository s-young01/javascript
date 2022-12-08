import { Block } from "./Block.js";
import { Bar } from "./bar.js";
import { Ball } from "./ball.js";

// App객체 만들기 (부모 클래스) 
class App {
    constructor() {
        this.canvas = document.querySelector("canvas");
        this.ctx = this.canvas.getContext("2d");

//////////////////// Block 설정 //////////////////////        

        // 블럭 너비, 높이 지정 
        const blockWidth = 50;
        const blockHeight = 20;        

        // 블럭변수에 빈 배열 만들기
        this.blocks = [];

        // 이중 for문으로 돌려주기 
        // 캔버스 너비에서 블럭 너비를 뺀 값과 같을 때 까지 반복 / 블럭 너비만큼 추가
        for(let i = 0; i <= this.canvas.width - blockWidth; i += blockWidth) {
            // 블럭 높이는 50부터 200까지 반복 / 블럭 높이만큼 추가 
            for(let j = 50; j <= 400; j += blockHeight) {
                // 블럭변수에 새로운 배열로 만들어서 Block객체 불러와 위치(i,j)값 담아주기
                this.blocks.push(new Block(i,j));
            }
        }

        // 바 변수에 Bar객체 불러와 위치 값 담아주기 
        this.bar = new Bar(190, this.canvas.width, this.canvas.height); // x좌표 값이 바가 정 가운데로 오게 설정 !

        ////// 볼 변수에 Ball객체 불러와 위치 값 담아주기 //////
        this.ball = new Ball(12, this.canvas.width, this.canvas.height, this.bar, this.blocks);

//////////////////// Bar 설정 //////////////////////               

        // 바의 속도 값 지정 
        const moveSpeed = 3;

        // 바에 키보드 이벤트 연결하기 
        window.addEventListener("keydown", (e) => {
            // 왼쪽 눌렀을 때 / 바의 x좌표가 -쪽으로 이동하는 속도 
            if(e.key === "ArrowLeft") {
                this.bar.speed -= moveSpeed;
            }
            // 오른쪽 눌렀을 때 / 바의 y좌표가 +쪽으로 이동하는 속도 
            if(e.key === "ArrowRight") {
                this.bar.speed += moveSpeed;
            }
            // 스페이스 바 눌렀을 때 게임 시작 !
            if(e.key == " ") {
                this.ball.isGameStart = true;
            }
        });
        // 키를 둘 중 하나라도 때고 있으면 움직이지 X
        window.addEventListener("keyup", (e) => {
            if(e.key === "ArrowLeft" || e.key === "ArrowRight") {
                this.bar.speed = 0;
            }
        });

        window.requestAnimationFrame(this.animate.bind(this)); 
    }
    
    // 메소드 생성
    // 화면에 그려주는 메소드 
   draw() {
        // 캔버스 색 채우기 
        this.ctx.fillStyle = "#3FA7D6"; // "#191D32"; 
        this.ctx.fillRect(0, 0,this.canvas.width, this.canvas.height);

        // Bar객체의 ctx값 그려주기 
        this.bar.draw(this.ctx);

        // Ball객체의 ctx값 그려주기
        this.ball.draw(this.ctx);
   }
   // 애니메이션 메소드 
   animate() {
        // App객체 그려주기 호출 
        this.draw();

        window.requestAnimationFrame(this.animate.bind(this));
   }
}

window.onload = () => {
    new App();
}