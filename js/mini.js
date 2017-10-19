var lis=document.querySelectorAll('ul:first-child>li')
var imgs=document.querySelectorAll('ul:last-child>li')
lis.forEach(function (value,index) {
    value.onclick=function () {
        for(i=0;i<lis.length;i++){
            lis[i].classList.remove('active')
            imgs[i].classList.remove('active')
        }
        this .classList.add('active')
        imgs[index].classList.add('active')
    }


})
