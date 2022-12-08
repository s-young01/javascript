// Ball 객체 만들기 
export class Ball {
    constructor(r, canvasWidth, canvasHeight, bar, blocks) {
        // 공의 x,y좌표 값 , 반지름 값
        this.x = 0;
        this.y = 0;
        this.r = r; // 12가 담겨있음 
        // 공의 속도(시작)값
        this.speedX = Math.floor(Math.random() * 7) + 4; // 랜덤으로 4 ~ 7 까지
        this.speedY = -7;
        // 공 색
        this.color = "#FAC05E";
        // 캔버스 너비,높이 값
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        // 바 
        this.bar = bar;
        // 블럭
        this.blocks = blocks;
        // 점수 
        this.score = 0;
        // 게임 시작 
        this.isGameStart = false;
    }

    // 바와 충돌 했을 때 메소드 
    crushBar() {
        const minX = this.bar.x - this.r; // 최소 x좌표 값 => 바의 x좌표 - 공의 반지름 값
        const maxX = this.bar.x + this.bar.width + this.r; // 최대 x좌표 값 => 바의 x좌표 + 바의 전체 너비 + 공의 반지름 값
        const minY = this.bar.y - this.r; // 최소 y좌표 값 => 바의 y좌표 - 공의 반지름 값
        // 공의 x좌표 값 => 최소 x좌표 값보다 크거나 같고, 최대 x좌표 값보다 작거나 같고, 공의 y좌표 값이 최소 y좌표 값보다 크거나 같을 때 
        if(this.x >= minX && this.x <= maxX && this.y >= minY) {
            this.y = this.bar.y - this.r; // 공의 y좌표는 바의 y죄표 - 공의 반지름 값
            this.speedY *= -1; // y속도에 -1을 곱함(-값 유지)
        }
    }

    //문자열 출력메소드 
    drawText(ctx, text, x, y, font, color, align) {
        if(font) ctx.font = font;
        if(color) ctx.fillStyle = color;
        if(align) ctx.textAlign = align;
        ctx.fillText(text, x, y);
        
    }

    // 캔버스 벽과 충돌했을 때 메소드
    crushCanvas() {
        if(this.x <= this.r) {
            this.x = this.r;
            this.speedX *= -1;
        } else if(this.x + this.r >= this.canvasWidth) {
            this.x = this.canvasWidth - this.r;
            this.speedX *= -1;
        }
        if(this.y <= this.r) {
            this.y = this.r;
            this.speedY *= -1;
        }

        // 캔버스 바닥에 충돌했을 때 메소드 (게임 오버)
        if(this.y + this.r >= this.canvasHeight) {
            this.y = this.bar.y - this.r;
            this.isGameStart = false;
            // 바의 위치 원 위치로 
            this.bar.x = 190
            // 블럭 리셋

            // 게임 오버 텍스트 , 최종 점수 텍스트 
            // this.drawText(ctx, "Game Over", this.canvasWidth / 2, this.canvasHeight / 2, "26px FUNFLOWSURVIVORKR", "white", "center");
        }
    }
    // 블럭에 충돌했을 때 메소드 (블럭 1개가 깨질 때 점수+50)
    crushBlock(){
        this.blocks = this.blocks.reduce((prev,block) => {
            const minX = block.x - this.r;
            const maxX = block.x + block.width + this.r;
            const minY = block.y - this.r;
            const maxY = block.y + block.height + this.r;

            if(this.x >= minX && this.x <= maxX
                && this.y >= minY && this.y <= maxY) {
                    const distX = Math.min(Math.abs(this.x - minX), Math.abs(this.x - maxX));
                    const distY = Math.min(Math.abs(this.y - minY), Math.abs(this.y - maxY));
                    // 위 아래 충돌했을 때 
                    if(distX >= distY) {
                        this.speedY *= -1;
                        this.y += this.speedY;
                        this.score += 50;
                        console.log(this.score);
                    } else {
                        this.speedX *= -1;
                        this.x += this.speedX;
                    }
                } else {
                    // 충돌하지 않을 때 다시 그려줌
                    prev.push(block);
                }
                return prev;
        }, []);
    }
    // 블럭을 모두 깼을 때 메소드 (모든 애니메이션 멈춤)

    
    // 캔버스에 그려주는 메소드
    draw(ctx, blocks){
        // 게임 시작이 아닐 때 (공이 바 위에 붙어 있게)
        if(!this.isGameStart) {
            // 공의 x좌표 값은 바의 x좌표 + 바의 전체 너비의 반 
            this.x = this.bar.x + this.bar.width / 2;
            // 공의 y좌표 값은 바의 y좌표 - 공의 반지름 값
            this.y = this.bar.y - this.r;
            // 캔버스에 텍스트 넣어주기
            this.drawText(ctx, "Break Out !", this.canvasWidth / 2, this.canvasHeight / 2, "26px FUNFLOWSURVIVORKR", "white", "center");
            this.drawText(ctx, "Press the Space Bar to Game Start", this.canvasWidth / 2, this.canvasHeight / 2 + 50, "18px FUNFLOWSURVIVORKR", "white", "center");
            this.drawText(ctx, "Control key :  ←  ,  →  ", this.canvasWidth / 2, this.canvasHeight / 2 + 80, "14px FUNFLOWSURVIVORKR", "white", "center");
            
        // 게임 시작 했을 때
        } else { 
            // 공의 x좌표 값은 x좌표에서 x의 속도 값을 더함 
            this.x += this.speedX;
            // 공의 y좌표 값은 y좌표에서 y의 속도 값을 더함
            this.y += this.speedY;
            // 점수 올라가는 텍스트 

        }

        // 모든 메소드들 호출해서 캔버스에 그려주기 
        this.crushBar();
        this.crushCanvas(this.drawText);
        this.crushBlock();

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,0,2 * Math.PI);
        ctx.fill();

        // 블럭들을 화면에 그려주기 위해 forEach사용 
        this.blocks.forEach((block) => {
            block.draw(ctx);
        })
    }
}