
//小米明星单品选项卡
window.onload=function () {
    var box = document.querySelector(`.banner-main`)
    var lis = document.querySelectorAll(`.foucs-link`),
        left = document.querySelector(`.left-arrow`),
        right = document.querySelector(`.right-arrow`);
    var width = parseInt(getComputedStyle(lis[0], null).width);
    var point = document.querySelectorAll(`.tg-point li`)
    var now = 0,// 当前的下标
        next = 0;//下一个的下标
    var flag = true;

    function flg() {   //控制开关
        flag = true
    }

    function le() {  //图片由右向左进行
        animate(lis[now], {opacity: 0}, flg);
        animate(lis[next], {opacity: 1}, flg);
    }

    function ri() {   //图片由左向右进行
        animate(lis[now], {opacity: 0}, flg);
        animate(lis[next], {opacity: 1}, flg);
    }

    function add() {  //轮播点添加变化
        point[now].classList.remove(`on`);
        point[next].classList.add(`on`);
        now = next
    }

    function move(way=`l`) {
        if (way == `l`) {
            next = now + 1;
            if (next > lis.length - 1) {
                next = 0;
            }
            le()
        } else if (way == `r`) {
            next = now - 1;
            if (next < 0) {
                next = lis.length - 1;
            }
            ri()
        }
        add()
    }

    var t = setInterval(move, 3000);
    box.onmouseover = function () {
        clearInterval(t);
    }
    box.onmouseout = function () {
        t = setInterval(move, 3000)
    };
    left.onclick = function () {
        if (flag) {
            flag = false;
            move(`r`);
        }
    }
    right.onclick = function () {
        if (flag) {
            flag = false;
            move();
        }
    }
    point.forEach(function (value, index) {
        value.onclick = function () {
            if (flag) {
                flag = false;
                next = index;
                if (now < index) {
                    le();
                    add();
                } else if (now > index) {
                    ri();
                    add();
                } else {
                    flag = true;
                }
            }
        }
    })


    function xiaolunbo(a,b,c,d,e,f) {
        let box=document.querySelector(a),
            tu=document.querySelector(b),
            img=document.querySelectorAll(c),
            dian=document.querySelectorAll(d),
            left=document.querySelector(e),
            right=document.querySelector(f),
            w=parseInt(getComputedStyle(box,null).width);
        let now=0,next=0,flag=true;
        function move(way=`l`) {
            if(way==`l`){
                next=now+1;
                if(next>=img.length){
                    next=0
                }
                img[next].style.left=w+`px`;
                animate(img[now],{left:-w});
                animate(img[next],{left:0},function () {
                    flag=true
                });
            }else if(way==`r`){
                next=now-1;
                if(next<0){
                    next=img.length-1
                }
                img[next].style.left=-w+`px`;
                animate(img[now],{left:w});
                animate(img[next],{left:0},function () {
                    flag=true
                });
            }
            for(var i=0;i<dian.length;i++){
                dian[i].classList.remove(`active`)
            }
            dian[next].classList.add(`active`)
            now=next;
        };
        left.onclick=function () {
            if(flag){
                flag=false;
                move(`r`)
            }
        };
        right.onclick=function () {
            if(flag){
                flag=false;
                move(`l`)
            }
        };
        dian.forEach(function (value,index) {
            value.onclick=function () {
                if(flag){
                    flag=false;
                    if(now<index){
                        img[index].style.left=w+`px`;
                        animate(img[now],{left:-w});
                        animate(img[index],{left:0},function () {
                            flag=true
                        });
                    }else if(now>index) {
                        img[index].style.left=-w+`px`;
                        animate(img[now],{left:w});
                        animate(img[index],{left:0},function () {
                            flag=true
                        });
                    }else {
                        flag=true
                    }
                    for(var i=0;i<dian.length;i++){
                        dian[i].classList.remove(`active`)
                    }
                    dian[index].classList.add(`active`)
                    now=index;
                }
            }
        });
    }
    xiaolunbo(`.r2`,`.books`,`.books>li`,`.point3>li`,`.point91`,`.point92`);
    xiaolunbo(`.r21`,`.title1`,`.title1>li`,`.point4>li`,`.p911`,`.p921`);
    xiaolunbo(`.r22`,`.game`,`.game>li`,`.p3>li`,`.p912`,`.p922`);
    xiaolunbo(`.r23`,`.apply`,`.apply>li`,`.p4>li`,`.p913`,`.p923`);

    var title = document.querySelectorAll(`.title`);
    var child = document.querySelectorAll(`.child`);
    title.forEach(function (value, index) {
        value.onmouseover = function () {
            for (var j = 0; j < title.length; j++) {
                child[j].classList.remove(`child-active`);
            }
            child[index].classList.add(`child-active`);
        }
        value.onmouseout = function () {
            child[index].classList.remove(`child-active`);
        }
    })

    var more = document.querySelectorAll(`.more > p	`);
    var starList = document.querySelectorAll(`.xm-carousel-wrapper > ul`);
    more.forEach(function (value, index) {
        value.onclick = function () {
            for (var i = 0; i < more.length; i++) {
                more[i].classList.remove(`active`);
                starList[i].classList.remove(`activee`);
            }
            this.classList.add(`active`);
            starList[index].classList.add(`activee`);
        }
    });
    //小米明星单品选项卡结束
    //家电选项卡
    var moreHome = document.querySelectorAll(`.more-home > li > p`);
    var homeList = document.querySelectorAll(`.box-body`);
    moreHome.forEach(function (value, index) {
        value.onmouseover = function () {
            for (var j = 0; j < moreHome.length; j++) {
                moreHome[j].classList.remove(`active-home`);
                homeList[j].classList.remove(`activea`);
            }
            this.classList.add(`active-home`);
            homeList[index].classList.add(`activea`);
        }
    })
    // 家电选项卡结束
    //搭配区域选项卡
    var accHome = document.querySelectorAll(`.acc-home > li > p`);
    var accList = document.querySelectorAll(`.box-body1`);
    accHome.forEach(function (value, index) {
        value.onmouseover = function () {
            for (var j = 0; j < accHome.length; j++) {
                accHome[j].classList.remove(`active-home`);
                accList[j].classList.remove(`activea`);
            }
            this.classList.add(`active-home`);
            accList[index].classList.add(`activea`);
        }
    })
    //智能区域选项卡
    var smartHome = document.querySelectorAll(`.smart-more > li > p`);
    var smartList = document.querySelectorAll(`.box-body2`);
    smartHome.forEach(function (value, index) {
        value.onmouseover = function () {
            for (var j = 0; j < smartHome.length; j++) {
                smartHome[j].classList.remove(`active-home`);
                smartList[j].classList.remove(`activea`);
            }
            this.classList.add(`active-home`);
            smartList[index].classList.add(`activea`);
        }
    })
    //配件区域选项卡
    var matchHome = document.querySelectorAll(`.match-more > li > p`);
    var matchList = document.querySelectorAll(`.box-body3`);
    matchHome.forEach(function (value, index) {
        value.onmouseover = function () {
            for (var j = 0; j < matchHome.length; j++) {
                matchHome[j].classList.remove(`active-home`);
                matchList[j].classList.remove(`activea`);
            }
            this.classList.add(`active-home`);
            matchList[index].classList.add(`activea`);
        }
    })
    //周边区域选项卡
    var aroundHome = document.querySelectorAll(`.around-more > li > p`);
    var aroundList = document.querySelectorAll(`.box-body4`);
    aroundHome.forEach(function (value, index) {
        value.onmouseover = function () {
            for (var j = 0; j < aroundHome.length; j++) {
                aroundHome[j].classList.remove(`active-home`);
                aroundList[j].classList.remove(`activea`);
            }
            this.classList.add(`active-home`);
            aroundList[index].classList.add(`activea`);
        }
    })

    var navList = document.querySelectorAll(`.nav-list > li > a >span`);
    var nav_wrap = document.querySelectorAll(`.nav_wrap_product .nav_wrap_p_main > .ul1`);
    var nav1 = document.querySelector(`.nav_wrap_product`)
    navList.forEach(function (value, index) {
        value.onmouseenter = function () {
            animate(nav1, {height: 230}, 100)
            nav_wrap[index].style.display = 'block'
        }
        value.onmouseleave = function () {
            animate(nav1, {height: 0}, 100)
            nav_wrap[index].style.display = 'none'
        }
    })
}

