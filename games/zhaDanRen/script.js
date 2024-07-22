let body = document.querySelector("body"),
    board = document.querySelector("#board"),
    controlOut = document.querySelector("#conrolOut"),
    controlIn = document.querySelector("#conrolIn"),
    fireBtn = document.querySelector("#fire"),
    startBtn = document.querySelector("#start"),
    pauseBtn = document.querySelector("#pause"),
    tr = 15, //行数
    td = 21, //列数
    tw = 30, //宽
    th = 30; //高
function myAlert(comment) {
    let oD = document.createElement('div');
    oD.style.position = 'fixed';
    oD.style.padding = '30px';
    oD.style.backgroundColor = 'gray';
    oD.style.opacity = '0.6';

    oD.style.textAlign = 'center';
    oD.innerHTML = comment;
    body.appendChild(oD);

    oD.style.top = screen.height / 2 - oD.offsetHeight / 2 + 'px';

    oD.style.left = screen.width / 2 - oD.offsetWidth / 2 + 'px';
    setTimeout(() => {
        oD.parentNode.removeChild(oD);
    }, 3000);

}

function coll(obj1, obj2) { //判断相交函数
    let T1 = obj1.offsetTop,
        B1 = T1 + obj1.clientHeight,
        L1 = obj1.offsetLeft,
        R1 = L1 + obj1.clientWidth;

    let T2 = obj2.offsetTop,
        B2 = T2 + obj2.clientHeight,
        L2 = obj2.offsetLeft,
        R2 = L2 + obj2.clientWidth;
    return !(B1 <= T2 || R1 <= L2 || T1 >= B2 || L1 >= R2);
}
class Board { //地图类
    constructor(d, w, a) {
        // this.personNumber = 1;
        this.doorNumber = d; //门的数量
        // this.stoneNumber = 1;
        this.woodNumber = w; //木头数量
        this.woods = []; //木头数组
        this.animalNumber = a; //怪物数量
        this.animals = []; //怪物数组
        this.infoArr2 = []; //存放信息的二维数组
        this.creatPerson(); //创建玩家
        this.creatBoard(); //创建地图
        for (let i = 0; i < a; i++) { //创建怪物
            this.animals.push(new Animal(3));
        }
        this.creatWood(this.woodNumber); //创建木头
        this.creatDoor(); //创建门

        this.truePerson = new Person(6, 1);


    }
    creatBoard() { //创建地图
        for (let i = 0; i < tr; i++) {
            this.arr = [];
            for (let j = 0; j < td; j++) {
                this.div = document.createElement("div");
                if (i % 2 == 1 && j % 2 == 1) {
                    this.div.className = "stone";
                    this.arr.push(this.div);
                } else {
                    this.div.className = "normal";
                    this.arr.push(this.div);
                }
                board.appendChild(this.div);
            }
            this.infoArr2.push(this.arr);
        }
    }
    creatPerson() { //创建人的方法
        this.person = document.createElement("div");
        this.person.className = "person";
        board.appendChild(this.person);
    }
    creatWood(n) { //创建木头方法
        for (let i = 0; i < n;) {
            this.x = Math.floor(Math.random() * tr);
            this.y = Math.floor(Math.random() * td);
            if (this.x + this.y > 1 && this.infoArr2[this.x][this.y].className == "normal") {
                this.infoArr2[this.x][this.y].className = "wood";
                this.woods.push(this.infoArr2[this.x][this.y]);
                i++;
            }
        }
    }
    creatDoor() { //创建门的方法
        this.x = Math.floor(Math.random() * this.woods.length);
        this.door = document.createElement("div");
        this.door.className = "door";
        this.door.style.left = this.woods[this.x].offsetLeft + "px";
        this.door.style.top = this.woods[this.x].offsetTop + "px";

        board.appendChild(this.door);
    }
}
class Person { //玩家类
    constructor(s, b) {

        this.speed = s; //玩家移动速度
        this.bombNumber = b; //玩家炸弹数
        this.pos = { x: 0, y: 0 }; //玩家位置对象
        this.move();
        this.fire();


    }
    move() { //玩家移动方法
        this.person = board.querySelector(".person");
        this.animals = board.getElementsByClassName("animal");
        this.stones = Array.from(board.querySelectorAll(".stone"));
        this.door = board.querySelector(".door");
        document.addEventListener("keydown", (e) => {
            this.woods = Array.from(board.getElementsByClassName("wood"));
            this.twoArr = this.stones.concat(this.woods);
            if (coll(this.person, this.door)) {
                myAlert('你赢了');
            }
            if (e.keyCode == 37 && this.pos.x - this.speed >= 0) {
                this.pos.x = this.pos.x - this.speed;
                this.person.style.left = this.pos.x + "px";

                for (let x of this.twoArr) {
                    if (coll(this.person, x) == true) {
                        this.pos.x = this.pos.x + this.speed;
                        this.person.style.left = this.pos.x + "px";
                        break;
                    }
                }

            } else if (e.keyCode == 38 && this.pos.y - this.speed >= 0) {
                this.pos.y = this.pos.y - this.speed;
                this.person.style.top = this.pos.y + "px";
                for (let x of this.twoArr) {
                    if (coll(this.person, x) == true) {
                        this.pos.y = this.pos.y + this.speed;
                        this.person.style.top = this.pos.y + "px";
                        break;
                    }
                }
            } else if (e.keyCode == 39 && this.pos.x + this.speed <= td * tw - tw) {
                this.pos.x = this.pos.x + this.speed;
                this.person.style.left = this.pos.x + "px";
                for (let x of this.twoArr) {
                    if (coll(this.person, x) == true) {
                        this.pos.x = this.pos.x - this.speed;
                        this.person.style.left = this.pos.x + "px";
                        break;
                    }
                }
            } else if (e.keyCode == 40 && this.pos.y + this.speed <= tr * th - th) {
                this.pos.y = this.pos.y + this.speed;
                this.person.style.top = this.pos.y + "px";
                for (let x of this.twoArr) {
                    if (coll(this.person, x) == true) {
                        this.pos.y = this.pos.y - this.speed;
                        this.person.style.top = this.pos.y + "px";
                        break;
                    }
                }
            }

        })
    }
    fire() { //玩家放炸弹函数
        document.addEventListener("keydown", (e) => {
            if (e.keyCode == 13) {
                this.bombs = [];
                this.bombs.push(new Bomb(1, 3000, this.pos, this.person));
            }
        });
    }
}
class Bomb { //炸弹类
    constructor(p, t, pos, per) {
        this.woods = Array.from(board.getElementsByClassName("wood"));

        this.person = per;
        this.power = p; //炸弹威力
        this.time = t; //炸弹爆炸时间
        this.bomb = document.createElement("div");
        this.bomb.className = "bomb";
        this.posX = Math.round(pos.y / 30) * 30;
        this.posY = Math.round(pos.x / 30) * 30;
        this.bomb.style.top = this.posX + "px";
        this.bomb.style.left = this.posY + "px";
        board.appendChild(this.bomb);
        this.animals = document.getElementsByClassName("animal");
        setTimeout(() => {
            this.boom();
        }, t);
    }
    boom() { //炸弹爆炸函数
        this.fireFlowerX = document.createElement("div");
        this.fireFlowerX.className = "fireFlower";
        this.fireFlowerX.style.top = this.bomb.offsetTop + "px";
        this.fireFlowerX.style.left = this.bomb.offsetLeft - tw * this.power + "px";
        this.fireFlowerX.style.width = tw + 2 * this.power * tw + "px";


        this.fireFlowerY = document.createElement("div");
        this.fireFlowerY.className = "fireFlower";
        this.fireFlowerY.style.left = this.bomb.offsetLeft + "px";
        this.fireFlowerY.style.height = th + 2 * this.power * th + "px";
        this.fireFlowerY.style.top = this.bomb.offsetTop - th * this.power + "px";

        board.removeChild(this.bomb);
        if ((this.posX / 30) % 2 == 0 && (this.posY / 30) % 2 == 0) {
            board.appendChild(this.fireFlowerX);
            board.appendChild(this.fireFlowerY);
            if (coll(this.person, this.fireFlowerX) || coll(this.person, this.fireFlowerY)) {
                // alert("die");
                board.removeChild(this.person);

            }
            for (let x of this.woods) {
                if (coll(x, this.fireFlowerX) || coll(x, this.fireFlowerY)) {
                    // alert("die");
                    x.className = "normal";
                }
            }
            for (let x of this.animals) {
                if (coll(x, this.fireFlowerX) || coll(x, this.fireFlowerY)) {
                    board.removeChild(x);
                }
            }
            setTimeout(() => {
                board.removeChild(this.fireFlowerX);
                board.removeChild(this.fireFlowerY);
            }, 500);
        }
        if ((this.posY / 30) % 2 == 1) {
            board.appendChild(this.fireFlowerX);
            if (coll(this.person, this.fireFlowerX)) {
                // alert("die");
                board.removeChild(this.person);

            }
            for (let x of this.woods) {
                if (coll(x, this.fireFlowerX)) {
                    // alert("die");
                    x.className = "normal";
                }
            }
            for (let x of this.animals) {
                if (coll(x, this.fireFlowerX)) {
                    board.removeChild(x);
                }
            }
            setTimeout(() => {
                board.removeChild(this.fireFlowerX);
            }, 500);
        }
        if ((this.posX / 30) % 2 == 1) {
            board.appendChild(this.fireFlowerY);

            if (coll(this.person, this.fireFlowerY)) {
                board.removeChild(this.person);

                // alert("die");
            }
            for (let x of this.woods) {
                if (coll(x, this.fireFlowerY)) {
                    // alert("die");
                    x.className = "normal";
                }
            }
            for (let x of this.animals) {
                if (coll(x, this.fireFlowerY)) {
                    board.removeChild(x);
                }
            }
            setTimeout(() => {
                board.removeChild(this.fireFlowerY);
            }, 500);
        }
    }
}
class Animal { //怪物类
    constructor(s) {
        this.animal = document.createElement("div");
        this.animal.className = "animal";
        this.normals = document.getElementsByClassName("normal");
        this.randomNum = Math.floor(Math.random() * this.normals.length)
        this.animal.style.left = this.normals[this.randomNum].offsetLeft + "px";
        this.animal.style.top = this.normals[this.randomNum].offsetTop + "px";
        board.appendChild(this.animal);
        this.pos = { x: this.animal.offsetLeft, y: this.animal.offsetTop }; //怪物位置
        this.speed = s * 10; //怪物移动速度
        this.move();
    }
    move() { //怪物移动函数
        this.person = board.querySelector(".person");

        this.stones = Array.from(board.querySelectorAll(".stone"));

        this.timer = setInterval(() => {
            this.woods = Array.from(board.getElementsByClassName("wood"));
            this.bombs = Array.from(board.getElementsByClassName("bomb"));
            this.twoArr = this.stones.concat(this.woods).concat(this.bombs);
            this.keyCode = Math.floor(Math.random() * 4);
            // for (let i = 0; i < 10; i++) {
            if (coll(this.animal, this.person)) {
                board.removeChild(this.person);
            }
            if (this.keyCode == 0 && this.pos.x - this.speed >= 0) {
                this.pos.x = this.pos.x - this.speed;
                this.animal.style.left = this.pos.x + "px";

                for (let x of this.twoArr) {
                    if (coll(this.animal, x) == true) {
                        this.pos.x = this.pos.x + this.speed;
                        this.animal.style.left = this.pos.x + "px";
                        break;
                    }
                }

            } else if (this.keyCode == 1 && this.pos.y - this.speed >= 0) {
                this.pos.y = this.pos.y - this.speed;
                this.animal.style.top = this.pos.y + "px";

                for (let x of this.twoArr) {
                    if (coll(this.animal, x) == true) {
                        this.pos.y = this.pos.y + this.speed;
                        this.animal.style.top = this.pos.y + "px";
                        break;
                    }
                }
            } else if (this.keyCode == 2 && this.pos.x + this.speed <= td * tw - tw) {
                this.pos.x = this.pos.x + this.speed;
                this.animal.style.left = this.pos.x + "px";

                for (let x of this.twoArr) {
                    if (coll(this.animal, x) == true) {
                        this.pos.x = this.pos.x - this.speed;
                        this.animal.style.left = this.pos.x + "px";
                        break;
                    }
                }
            } else if (this.keyCode == 3 && this.pos.y + this.speed <= tr * th - th) {
                this.pos.y = this.pos.y + this.speed;
                this.animal.style.top = this.pos.y + "px";

                for (let x of this.twoArr) {
                    if (coll(this.animal, x) == true) {
                        this.pos.y = this.pos.y - this.speed;
                        this.animal.style.top = this.pos.y + "px";
                        break;
                    }
                }
            }

            // }


        }, 200)

    }
}
class Game {
    constructor() {

    }
    start() { //游戏开始方法
        this.trueBoard = new Board(1, 20, 5);
        // this.creatBoard();
    }
}
let trueGame = new Game();
trueGame.start();