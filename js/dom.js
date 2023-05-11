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


    




