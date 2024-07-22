var tr = 20, //行数
    td = 20, //列数
    tw = 25, //行宽
    th = 25, //列高
    score = 0, //分数
    myTK = document.querySelector('#myTK'), //获取我方坦克
    board = document.querySelector('#board'); //获取面板
if (screen.width < 500) {
    tr = 20, //行数
        td = 20, //列数
        tw = 15, //行宽
        th = 15; //列高
    board.style.width = tr * tw + 'px';
    board.style.height = td * th + 'px';
    myTK.innerHTML = '>';
}


function getStyle(obj, name) { //获取样式的函数
    if (obj.currentstyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, false)[name];
    }
}

function startMove2(obj, json, fnEnd) { //运动函数
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        for (var attr in json) {
            var cur = 0;
            var isStop = true;
            if (attr == 'opacity') {
                cur = parseFloat(getStyle(obj, attr)) * 100;

            } else {
                //cur 某对象的属性
                cur = parseInt(getStyle(obj, attr));
            }
            var speed = 0;
            if (json[attr] - cur > 0) {
                speed = 3;
            } else {
                speed = -3;
            }
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (Math.abs(json[attr] - cur) > Math.abs(speed)) { isStop = false; }
            if (attr == 'opacity') {
                obj.style[attr] = (cur + speed) / 100;
            } else {
                obj.style[attr] = cur + speed + 'px';
            }
            for (var i = 0; i < tks.length; i++) {
                if (coll(obj, tks[i].tk)) {

                    board.removeChild(tks[i].tk);
                    tks.splice(i, 1);
                    board.removeChild(obj);
                    clearInterval(obj.timer);
                    score++;

                    document.querySelector('#score').innerHTML = '得分：' + score;
                    if (tks.length == 0) {
                        alert('你赢了，得分:' + score + ',\n注意坦克哦！');
                        for (let i = 0; i < score + 1; i++) {
                            add();
                        }
                        game.isOver();

                    }
                    return;
                }

            }
            var qiangs = board.querySelectorAll('.qiang');
            for (var i = 0; i < qiangs.length; i++) {
                if (coll(qiangs[i], obj)) {
                    board.removeChild(obj);
                    clearInterval(obj.timer);
                    return;
                }

            }
            if (isStop) {
                clearInterval(obj.timer);
                if (fnEnd) {
                    fnEnd();
                }
            }
        }
    }, 30);
}

function myCreat(thing) {
    thing.style.width = tw + 'px';
    thing.style.height = th + 'px';
    thing.style.position = 'absolute';
    thing.style.left = Math.floor(Math.random() * 20) * tw + 'px';
    thing.style.top = Math.floor(Math.random() * 20) * th + 'px';

}


var direction = 'right'; //坦克的方向
var pos = {}; //坦克的位置

function boom() { //产生子弹的函数
    var biu = document.createElement('div');
    biu.style.position = 'absolute';
    biu.style.width = 1 / 5 * tw + 'px';
    biu.style.height = 1 / 5 * th + 'px';
    biu.style.top = pos.y + 2 / 5 * th + 'px';
    biu.style.left = pos.x + 2 / 5 * tw + 'px';
    biu.style.backgroundColor = 'blue';

    board.appendChild(biu);
    //判断子弹位置，子弹产生在当前方向的中心
    if (direction == 'left') {
        startMove2(biu, { left: -biu.offsetWidth }, function() {
            board.removeChild(biu);
        });
    } else if (direction == 'up') {
        startMove2(biu, { top: -biu.offsetHeight }, function() {
            board.removeChild(biu);
        });
    } else if (direction == 'right') {
        startMove2(biu, { left: board.offsetWidth }, function() {
            board.removeChild(biu);
        });
    } else if (direction == 'down') {
        startMove2(biu, { top: board.offsetHeight }, function() {
            board.removeChild(biu);
        });
    }
}
var left = right = up = down = 0;
let speed = 5; //坦克的移动速度

var timer4, timer3, timer2, timer1;

document.querySelector('#fire').ontouchstart = function() {
    pos = { x: myTK.offsetLeft, y: myTK.offsetTop };

    boom();
};
var qiangs = document.getElementsByClassName('qiang'); //获取橙色的方块（墙）

document.querySelector('.l1').ontouchend =
    document.querySelector('.l2').ontouchend =
    document.querySelector('.l3').ontouchend =
    document.querySelector('.l4').ontouchend = function() {
        clearInterval(timer1);
        clearInterval(timer2);
        clearInterval(timer3);
        clearInterval(timer4);
    };
document.querySelector('.l1').ontouchstart = function() {
    clearInterval(timer1);

    function t1() {

        pos = { x: myTK.offsetLeft, y: myTK.offsetTop };
        myTK.style.transform = 'rotate(-90deg)';

        if (pos.y > 0) {
            direction = 'up';
            myTK.style.top = myTK.offsetTop - speed + 'px';
            for (let i = 0; i < qiangs.length; i++) {
                if (coll(myTK, qiangs[i])) {
                    myTK.style.top = myTK.offsetTop + speed + 'px';
                    break;
                }
            }
        }

    }
    t1();
    timer1 = setInterval(t1, 50);
    return false;


};

document.querySelector('.l2').ontouchstart = function() {
    clearInterval(timer2);

    function t2() {
        pos = { x: myTK.offsetLeft, y: myTK.offsetTop };
        myTK.style.transform = 'rotate(0deg)';

        if (pos.x < board.offsetWidth - myTK.offsetWidth) {
            direction = 'right';
            myTK.style.left = myTK.offsetLeft + speed + 'px';
            for (let i = 0; i < qiangs.length; i++) {
                if (coll(myTK, qiangs[i])) {
                    myTK.style.left = myTK.offsetLeft - speed + 'px';
                    break;
                }
            }
        }
    }
    t2();
    timer2 = setInterval(t2, 50);
    return false;


};
document.querySelector('.l3').ontouchstart = function() {
    clearInterval(timer3);

    function t3() {
        pos = { x: myTK.offsetLeft, y: myTK.offsetTop };
        myTK.style.transform = 'rotate(90deg)';

        if (pos.y < board.offsetHeight - myTK.offsetHeight) {
            direction = 'down';
            myTK.style.top = myTK.offsetTop + speed + 'px';
            for (let i = 0; i < qiangs.length; i++) {
                if (coll(myTK, qiangs[i])) {
                    myTK.style.top = myTK.offsetTop - speed + 'px';

                    break;
                }

            }
        }
    }
    t3();
    timer3 = setInterval(t3, 50);
    return false;


};

document.querySelector('.l4').ontouchstart = function() {
    clearInterval(timer4);

    function t4() {

        pos = { x: myTK.offsetLeft, y: myTK.offsetTop };
        myTK.style.transform = 'rotate(180deg)';

        if (pos.x > 0) {
            direction = 'left';
            myTK.style.left = myTK.offsetLeft - speed + 'px';
            for (let i = 0; i < qiangs.length; i++) {
                if (coll(myTK, qiangs[i])) {
                    myTK.style.left = myTK.offsetLeft + speed + 'px';

                    break;
                }

            }
        }
    }
    t4();
    timer4 = setInterval(t4, 50);
    return false;


};


document.oncontextmenu = function() {
    return false;
};
document.onkeydown = function(e) { //电脑端按键
    let oEvent = e || event;
    let speed = 5;
    pos = { x: myTK.offsetLeft, y: myTK.offsetTop };
    if (oEvent.keyCode == 13) { //按enter
        boom();
    }

    if (oEvent.keyCode == 37 && pos.x > 0 && left == 0) { //按左键
        direction = 'left';
        myTK.style.left = myTK.offsetLeft - speed + 'px';
        myTK.style.transform = 'rotate(180deg)';
        right = up = down = 1;
        for (let i = 0; i < qiangs.length; i++) {
            if (coll(myTK, qiangs[i])) {
                myTK.style.left = myTK.offsetLeft + speed + 'px';
                break;
            }
        }
    } else
    if (oEvent.keyCode == 38 && pos.y > 0 && up == 0) { //按上键
        direction = 'up';
        myTK.style.top = myTK.offsetTop - speed + 'px';
        myTK.style.transform = 'rotate(-90deg)';
        left = right = down = 1;
        for (let i = 0; i < qiangs.length; i++) {
            if (coll(myTK, qiangs[i])) {
                myTK.style.top = myTK.offsetTop + speed + 'px';
                break;
            }
        }
    } else
    if (oEvent.keyCode == 39 && pos.x < board.offsetWidth - myTK.offsetWidth && right == 0) { //按右键
        direction = 'right';
        myTK.style.left = myTK.offsetLeft + speed + 'px';
        myTK.style.transform = 'rotate(0deg)';
        left = up = down = 1;
        for (let i = 0; i < qiangs.length; i++) {
            if (coll(myTK, qiangs[i])) {
                myTK.style.left = myTK.offsetLeft - speed + 'px';
                break;
            }
        }
    } else
    if (oEvent.keyCode == 40 && pos.y < board.offsetHeight - myTK.offsetHeight && down == 0) { //按下键
        direction = 'down';
        myTK.style.top = myTK.offsetTop + speed + 'px';
        myTK.style.transform = 'rotate(90deg)';
        left = right = up = 1;
        for (let i = 0; i < qiangs.length; i++) {
            if (coll(myTK, qiangs[i])) {
                myTK.style.top = myTK.offsetTop - speed + 'px';
                break;
            }
        }
    };

    document.oncontextmenu = function() {
        return false;
    };
}

document.onkeyup = function() {
    left = right = up = down = 0;
};

function TK(str) { //产生敌军坦克构造函数
    this.creat(str);
    this.arr = ['left', 'up', 'fire', 'down', 'right'];
    this.dir = Math.round(Math.random() * 4);
    this.speed = 5;
    this.biu = [];

}
TK.prototype.creat = function(str) {
    this.tk = document.createElement('div');
    this.tk.innerHTML = str + '>';
    this.tk.className = 'tk';
    this.tk.direction = 'right';
    this.x = Math.floor(Math.random() * 20);
    this.y = Math.floor(Math.random() * 20);
    this.tk.pos = { x: this.x, y: this.y };
    this.tk.style.left = this.x * th + 'px';
    this.tk.style.top = this.y * tw + 'px';
    board.appendChild(this.tk);
}
TK.prototype.move = function() { //敌军坦克移动函数
    this.arr = ['left', 'up', 'fire', 'down', 'right'];
    this.dir = Math.round(Math.random() * 4);
    this.pos = { x: this.tk.offsetLeft, y: this.tk.offsetTop };
    if (this.arr[this.dir] == 'fire') { //按enter
        var i = 0;
        this.fire(i);
        i++;
    } else
    if (this.arr[this.dir] == 'left' && this.pos.x > 0) { //按左键
        this.direction = 'left';
        this.tk.style.transform = 'rotate(180deg)';

        this.tk.style.left = this.tk.offsetLeft - this.speed + 'px';
        for (let i = 0; i < qiangs.length; i++) {
            if (coll(this.tk, qiangs[i])) {
                this.tk.style.left = this.tk.offsetLeft + this.speed + 'px';
                break;
            }
        }
    } else
    if (this.arr[this.dir] == 'up' && this.pos.y > 0) { //按上键
        this.direction = 'up';
        this.tk.style.transform = 'rotate(-90deg)';

        this.tk.style.top = this.tk.offsetTop - this.speed + 'px';
        for (let i = 0; i < qiangs.length; i++) {
            if (coll(this.tk, qiangs[i])) {
                this.tk.style.top = this.tk.offsetTop + this.speed + 'px';

                break;
            }
        }
    } else
    if (this.arr[this.dir] == 'right' && this.pos.x < board.offsetWidth - this.tk.offsetWidth) { //按右键
        this.direction = 'right';
        this.tk.style.transform = 'rotate(0deg)';

        this.tk.style.left = this.tk.offsetLeft + this.speed + 'px';
        for (let i = 0; i < qiangs.length; i++) {
            if (coll(this.tk, qiangs[i])) {
                this.tk.style.left = this.tk.offsetLeft - this.speed + 'px';

                break;
            }
        }
    } else
    if (this.arr[this.dir] == 'down' && this.pos.y < board.offsetHeight - this.tk.offsetHeight) { //按下键
        this.direction = 'down';
        this.tk.style.transform = 'rotate(90deg)';

        this.tk.style.top = this.tk.offsetTop + this.speed + 'px';
        for (let i = 0; i < qiangs.length; i++) {
            if (coll(this.tk, qiangs[i])) {
                this.tk.style.top = this.tk.offsetTop - this.speed + 'px';

                break;
            }
        }
    };
}


TK.prototype.fire = function(i) { //敌军坦克开火函数,产生子弹
    this.biu[i] = document.createElement('div');
    this.biu[i].className = 'bius';
    this.biu[i].direction = 'right';
    this.biu[i].style.position = 'absolute';
    this.biu[i].style.width = tw / 5 + 'px';
    this.biu[i].style.height = th / 5 + 'px';
    this.biu[i].style.left = this.pos.x + 2 / 5 * tw + 'px';
    this.biu[i].style.top = this.pos.y + 2 / 5 * th + 'px';
    this.biu[i].style.backgroundColor = 'red';
    board.appendChild(this.biu[i]);
    //判断子弹位置，子弹产生在当前方向的中心前方
    if (this.direction == 'left') {
        this.biu[i].direction = 'left';
        this.startMove2(this.biu[i], { left: -this.biu[i].offsetWidth });
    } else if (this.direction == 'up') {
        this.biu[i].direction = 'up';
        this.startMove2(this.biu[i], { top: -this.biu[i].offsetHeight });
    } else if (this.direction == 'right') {
        this.biu[i].direction = 'right';
        this.startMove2(this.biu[i], { left: board.offsetWidth });
    } else if (this.direction == 'down') {
        this.biu[i].direction = 'down';
        this.startMove2(this.biu[i], { top: board.offsetHeight });
    }
};
TK.prototype.startMove2 = function startMove2(obj, json) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        for (var attr in json) {
            this.cur = 0;
            this.isStop = true;
            if (attr == 'opacity') {
                this.cur = parseFloat(getStyle(obj, attr)) * 100;

            } else {
                //cur 某对象的属性
                this.cur = parseInt(getStyle(obj, attr));
            }
            this.speed = 0;
            if (json[attr] - this.cur > 0) {
                this.speed = 3;
            } else {
                this.speed = -3;
            }
            this.speed = this.speed > 0 ? Math.ceil(this.speed) : Math.floor(this.speed);
            if (coll(obj, myTK)) {
                alert('你死了');

                board.removeChild(obj);
                clearInterval(obj.timer);
                game.isOver();
                return;
            }
            var qiangs = board.querySelectorAll('.qiang');
            for (var i = 0; i < qiangs.length; i++) {
                if (coll(qiangs[i], obj)) {
                    board.removeChild(obj);
                    clearInterval(obj.timer);
                    return;
                }
            }
            if (Math.abs(json[attr] - this.cur) > Math.abs(this.speed)) { this.isStop = false; }
            if (attr == 'opacity') {
                obj.style[attr] = (this.cur + this.speed) / 100;
            } else {
                obj.style[attr] = this.cur + this.speed + 'px';
            }
            if (this.isStop) {
                clearInterval(obj.timer);
                board.removeChild(obj);
            }
        }
    }, 30);
}
var tks = [];
var tk1 = new TK('');
var tk2 = new TK('');
var tk3 = new TK('');
var tks = [tk1, tk2, tk3];

function coll(obj1, obj2) {
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

function add() {
    var tk = new TK('');
    tks.push(tk);
}

function reduce() {
    if (tks.length > 0) {
        board.removeChild(tks[tks.length - 1].tk);
        tks.pop();
    }
}

function Game() {
    this.timer = null;
}
Game.prototype.start = function() {
    var cao = board.querySelector('.cao');
    var qiang = board.querySelector('.qiang');
    if (!cao) {
        for (var i = 0; i < sums; i++) {
            creatCao();
        }
    }
    if (!qiang) {
        for (var i = 0; i < sums; i++) {
            creatQiang();
        }
    }
    clearInterval(this.timer);
    this.timer = setInterval(function() {
        for (let i = 0; i < tks.length; i++) {
            tks[i].move();
        }

    }, 400);
}



Game.prototype.pause = function() {
    clearInterval(this.timer);
}
Game.prototype.isOver = function() {
    clearInterval(this.timer);
    score = 0;
    document.querySelector('#score').innerHTML = '得分：' + score;
    pause.style.display = 'none';
    start.style.display = 'Block';
    myCreat(myTK);
    game.start();

}
game = new Game();

function creatCao() { //产生草
    var cao = document.createElement('div');
    myCreat(cao);
    cao.className = 'cao';
    cao.style.zIndex = '1';
    board.appendChild(cao);
    cao.style.backgroundColor = 'green';
    myCreat(myTK);
}

function creatQiang() { //产生墙
    var qiang = document.createElement('div');
    myCreat(qiang);
    qiang.className = 'qiang';
    board.appendChild(qiang);
    qiang.style.backgroundColor = 'orange';
}
var pause = document.querySelector('#pause'),
    start = document.querySelector('#start'),
    addV = document.querySelector("#add"),
    reduceV = document.querySelector("#reduce");

const sums = 20; //草的个数
pause.style.display = 'none';
game.start();
start.onclick = function() {
    game.start();

    start.style.display = 'none';
    pause.style.display = 'Block';

};

pause.onclick = function() {
    game.pause();

    pause.style.display = 'none';
    start.style.display = 'Block';
};
addV.onclick = function() {
    add();
};
reduceV.onclick = function() {
    reduce();
};