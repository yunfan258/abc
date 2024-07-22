let score,
    speed,
    t1,
    t2,
    divScore = document.querySelector('#score'),
    btnStart = document.querySelector('#start'),
    btnPause = document.querySelector('#pause'),
    body = document.querySelector('body');


function creatDiv(parent) {
    oDiv = document.createElement('div');
    parent.appendChild(oDiv);
}

function init() {
    for (let i = 0; i < 5; i++) {
        document.querySelector('.div' + i).innerHTML = '';
    }
    speed = 3;
    score = 0;
    pause();
    divScore.innerHTML = '得分：0';
    btnStart.style.display = 'block';
    btnPause.style.display = 'none';
}

function start() { //开启定时器
    timer1();
    timer2(speed);
    t1 = setInterval(timer1, (1000 - speed * 30));
    t2 = setInterval(timer2, 30, speed);
}

function pause() { //关闭定时器
    clearInterval(t1);
    clearInterval(t2);
}

function myAlert(comment) {
    let oD = document.createElement('div');
    oD.style.position = 'absolute';
    oD.style.padding = '30px';
    oD.style.backgroundColor = 'gray';

    oD.style.top = oD.offsetHeight / 2 + 'px';

    oD.style.left = body.offsetWidth / 2 - oD.offsetWidth / 2 + 'px';

    oD.style.textAlign = 'center';
    oD.innerHTML = comment;
    body.appendChild(oD);
    setTimeout(() => {
        oD.parentNode.removeChild(oD);
    }, 3000);

}

function timer1() {
    var i = Math.floor(Math.random() * 5);
    creatDiv(document.querySelector('.div' + i));
}

function timer2(s) {
    for (let j = 0; j < 5; j++) {
        oDivs = document.querySelector('.div' + j).getElementsByTagName('div');
        for (let k = 0; k < oDivs.length; k++) {
            oDivs[k].style.top = oDivs[k].offsetTop + s + 'px';
            if (window.screen.width > 700) {
                oDivs[k].onmouseover = function() {
                    this.parentNode.removeChild(this);
                    if (speed < 5) {
                        speed += 0.1;
                    } else if (speed < 7) {
                        speed += 0.05;
                    } else if (speed < 10) {
                        speed += 0.02;
                    } else {
                        speed += 0.01;
                    }
                    pause();
                    start();
                    score++;
                    divScore.innerHTML = '得分：' + score;
                };
            }

            if (window.screen.width <= 700) { //适配手机端
                oDivs[k].ontouchstart = function() {
                    this.parentNode.removeChild(this);
                    if (speed < 8) {
                        speed += 0.5;
                    } else if (speed < 15) {
                        speed += 0.2;
                    } else if (speed < 20) {
                        speed += 0.02;
                    } else {
                        speed += 0.01;
                    }
                        pause();
                        start();

                    score++;
                    divScore.innerHTML = '得分：' + score;
                };
            }
            if (oDivs[k].offsetTop >= 500) {
                let comment = 'game over!你的分数是：' + score;
                myAlert(comment);
                pause();
                init();
            }
        }
    }
}

init();

btnStart.onclick = function() {
    start();
    this.style.display = 'none';
    btnPause.style.display = 'block';
};
btnPause.onclick = function() {
    pause();
    this.style.display = 'none';
    btnStart.style.display = 'block';
};