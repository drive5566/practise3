window.addEventListener('load',function(){



var nav = document.querySelector('.navitem-ul')
var li = nav.children


console.log(li);
for(i = 0 ; i < li.length ; i++){
    li[i].addEventListener('mouseover',function() {
        this.children[1].style.display = 'block'
    })
    li[i].onmouseout = function(){
        this.children[1].style.display = 'none'
    }
}

var dt = document.querySelector('.dt')
var dd = document.querySelector('.dd')
var phone = document.querySelector('.phone')


let a
dt.addEventListener('mouseover',function(){
    dd.style.display ='block'
    clearInterval(a)
    a = setInterval(shin,500)

})
function shin (){
    if(phone.style.color == 'black'){
        phone.style.color = 'white'
    }else{
        phone.style.color = 'black'
    }
}



    // 1獲取元素
    var side = document.querySelector('.side')
    var boxhd = document.querySelector('.box_hd')
    var main = document.querySelector('.main')
    var sidetop = side.offsetTop - main.offsetTop


    // 2頁面滾動事件 scroll
    document.addEventListener('scroll',function(){
        // console.log(11);
        // window.pageYoffset 頁面被捲去的頭部
        // console.log(window.pageYOffset); 

        if(window.pageYOffset >= boxhd.offsetTop){
            side.style.display=('none')
        }else{
            side.style.display=('block')

        }

        if(window.pageYOffset >= main.offsetTop){
            side.style.position = ('fixed')
            side.style.top = sidetop + 'px'
        }else{
            side.style.position = ('absolute')
           
            side.style.top = '250px' 

        }

    })


})




// 輪播圖
var arrow_l = document.querySelector('.arrow_l');
var arrow_r = document.querySelector('.arrow_r');
var focus = document.querySelector('.focus');
var black = document.querySelector('.black')



focus.addEventListener('mouseenter', function () {
    arrow_l.style.display = 'block'
    arrow_r.style.display = 'block'
    clearInterval(timer)
})
focus.addEventListener('mouseleave', function () {
    arrow_l.style.display = 'none'
    arrow_r.style.display = 'none'
    timer = setInterval(function () {
        // 手動調用點擊事件
        arrow_r.click()
    }, 3000)


})
// 動態生成小圈圈 有幾張圖片就生成幾個
var ul = focus.querySelector('ul')
var ol = document.querySelector('.circle')
var focusWidth = focus.offsetWidth;
for (i = 0; i < ul.children.length - 1; i++) {
    var li = document.createElement('li')
    // 紀錄當前小圈圈的索引號 通過自訂義屬性來做
    li.setAttribute('index', i)
    // 把小li插到ol裡
    ol.appendChild(li)
}
// 小圈圈的排他思想 我們可以直接在此生成
li.addEventListener('click', function () {
    for (i = 0; i < ol.children.length; i++) {
        ol.children[i].className = '';
    }
    this.className = 'black'

    // 電擊小圈圈 移動圖片 移動的是ul
    // ul的移動距離= 小圈圈的索引號 乘以 圖片的寬度 注意是負值
    // 當我們點擊了某個小li 就拿到當前小li的索引號
    var index = this.getAttribute('index')
    //    當我們點擊了某個小li 就要把這個li的索引號給num
    num = index;
    //    當我們點擊了某個小li 就要把這個li的索引號給circle
    circle = index
    console.log(index);
    console.log(focusWidth);

    animate(ul, -index * focusWidth)

})
// 克隆第一張圖片(li)放到ul最後面
// var first = ul.children[0].cloneNode(false)
// ul.appendChild(first)

// 點擊右測按鈕 圖片滾動一張
let num = 0
// circle是控制小圓圈的撥放
let circle = 0
// flag 等於節流閥 控制事件動作的開與關
var flag = true

arrow_r.addEventListener('click', function () {
    if (flag) {
        flag = false //關閉節流閥
    // 如果走到了最後一張圖片 此時UL要快速復原 LEFT改為0
        if (num == ul.children.length - 1) {
            ul.style.left = 0
            num = 0
        }
        num++;
        animate(ul, -num * focusWidth,function(){
            flag = true
        })

        // 點擊右測按鈕 小圓圈跟著一起變化 可以再申明一個變量控制小圓圈的變量

        circle++;
        if (circle == ol.children.length) {
            circle = 0
        }
        for (i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'black'

    }
})

// 左側按鈕
arrow_l.addEventListener('click', function () {
   if(flag){
    flag = false
     // 如果走到了最後一張圖片 此時UL要快速復原 LEFT改為最後一張
     if (num == 0) {
        ul.style.left = -(ul.children.length - 1) * focusWidth + 'px'
        num = ul.children.length - 1
    }
    num--;
    animate(ul, -num * focusWidth,function(){
        flag = true
    })

    // 點擊按鈕 小圓圈跟著一起變化 可以再申明一個變量控制小圓圈的變量

    circle--;
    if (circle < 0) {
        circle = ol.children.length - 1
    }
    for (i = 0; i < ol.children.length; i++) {
        ol.children[i].className = '';
    }
    ol.children[circle].className = 'black'

   }

})





var timer = setInterval(function () {
    // 手動調用點擊事件
    arrow_r.click()
}, 4000)






// ol.children[0].className = 'black'




function animate(obj, target, callback) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10; //加入緩動動畫公式
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer)
            if (callback) {
                callback()
            }
        } else {
            obj.style.left = obj.offsetLeft + step + 'px'
        }
    }, 15)
}





