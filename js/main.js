const hamburger = document.querySelector('#hamburger'); //取得
const headermenu = document.querySelector('#header-menu'); //取得
window.addEventListener('load', function () {
    let windowSize = window.innerWidth;
    if (windowSize < 1023) {
        headermenu.style.display == "none"; //スマホから見た時にハンバーガーメニューが開いているのでそれを閉じる（機能していない）
        hamburger.innerHTML = '<img src="img/batsu.svg" alt="switchbutton">' //上のstyleメソッドが機能しないので妥協策
    }
});
window.addEventListener('resize', function () { //ウィンドウリサイズ時に動くメソッド
    let windowSize = window.innerWidth; //ウィンドウ幅取得
    if (windowSize <= 1023) {
        headermenu.style.display = "none";
        hamburger.innerHTML = '<img src="img/maru.svg" alt="switchbutton">'
    } else if (windowSize > 1024) {
        headermenu.style.display = "flex";
    }
})

function foo(){//タッチ開始で動く関数
    if (headermenu.style.display == "none") {
        headermenu.style.display = "flex";
        hamburger.innerHTML = '<img src="img/batsu.svg" alt="switchbutton">'
    } else {
        headermenu.style.display = "none";
        hamburger.innerHTML = '<img src="img/maru.svg" alt="switchbutton">'
}};

let flag = true;
hamburger.addEventListener('touchstart', function () {//上の関数を使用した際発生するバグを解決するメソッド（二重クリック）
    flag = true;
    foo();
});
hamburger.addEventListener('click', function(){
    if(flag){
        flag = false;
    }else{
        foo();
    }
});