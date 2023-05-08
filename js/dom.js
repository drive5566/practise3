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


dt.addEventListener('mouseover',function(){
    dd.style.display ='block'
})

var a = document.querySelector('.hotwrods li')
var lili = a.children

// for(i = 0 ; i < a.length ; i++){
// a[i].addEventListener('mouseover',function(){
//     this.className ='style_red'
// })
// }



