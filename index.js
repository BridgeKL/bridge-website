const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dots = document.querySelectorAll('.dot')
console.log(slides.length)

let index = 0
slides.forEach((slide,index)=>{
  slide.style.left=`${index*300+20}px`
});
const removeDotsOpacity = () =>{
    dots.forEach((dot)=>{
      dot.style.opacity='.2';
    });
  }
removeDotsOpacity();
dots[0].style.opacity='1'


const moveSlide = () =>{
    slides.forEach((slide)=>{
      slide.style.transform=`translateX(-${index*340}px)`;
    });
  }

nextBtn.addEventListener('click',()=>{
    if(index===slides.length-1) index=-1;
    index++;
    removeDotsOpacity();
    dots[index].style.opacity='1'
    moveSlide();
});

prevBtn.addEventListener('click',()=>{
    if(index===0) index=slides.length;
    index--;
    removeDotsOpacity();
    dots[index].style.opacity='1'
    moveSlide();
  });

dots.forEach((dot,i)=>{
dot.addEventListener("click",(e)=>{
    index=i;
    removeDotsOpacity();
    e.target.style.opacity='1'
    moveSlide();
})
});

const autoPlaySlide = () =>{
  if(index===slides.length-1) index= -1;
  index++;
  removeDotsOpacity();
  dots[index].style.opacity='1'
  moveSlide();
}


const slides1 = document.querySelectorAll('.slide1');
const prevBtn1 = document.getElementById('prev-btn1');
const nextBtn1 = document.getElementById('next-btn1');
const dots1 = document.querySelectorAll('.dot1')
console.log(slides.length)

let index1 = 0
slides1.forEach((slide1,index1)=>{
  slide1.style.left=`${index1*100}vw`
});
const moveSlide1 = () =>{
    slides1.forEach((slide1)=>{
      slide1.style.transform=`translateX(-${index1*100}vw)`;
    });
  }

const autoPlaySlide1 = () =>{
  if(index1===slides.length-1) index1= -1;
  index1++;
  moveSlide1();
}

window.onload=()=>{
  setInterval(autoPlaySlide1,3000);
}