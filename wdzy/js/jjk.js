// var img4=document.getElementById('images').children[4];

// var img4=document.querySelector('#images>a:nth-child(4)');

// var img4=document.getElementsByClassName('hiddenImg')[3];

// var img4=document.getElementsByTagName('a')[4];


// console.log(img4);

// img4.style.document="clock";
// img0.style.document="none";

var imagesA=document.getElementById("images").children;
// console.log(imagesA);
//行内样式实现显示样式
// 隐藏26行
// imagesA[0].style.display="none";
//显示30行
// imagesA[4].style.display="block";

//通过更换CSS类名来实现更换样式
// imagesA[0].className="hiddenImg";

// imagesA[4].className="displayImg";

//利用计时器间隔1s，显示1张图像，其余图像隐藏。
var currentNo=0;
function changeImg(){
   //排他原理，先去掉同类
    for(var i=0;i<imagesA.length;i++ )
    {
       imagesA[i].className="hiddenImg";
       console.log(imagesA[i]);
    }
    // 或
    // for(const item of imagesA){
    //     item.className="hiddenImg";
    // }


    imagesA[currentNo].className="displayImg";


    if(currentNo<7){currentNo++ ;}
    else
    {
        currentNo=0;

    }
    // console.log(currentNo);

}

var timer=window.setInterval(changeImg,1000)

function startChange(){
timer=window.setInterval(changeImg,1000)
}
function stopChange(){
   window.clearInterval(timer);
}



var imagesdiv=document.getElementById("images");
console.log(imagesdiv);
imagesdiv.addEventListener('mouseover',stopChange);
imagesdiv.addEventListener('mouseout',startChange);