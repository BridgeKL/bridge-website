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
    if(index===slides.length-1) return index;
    index++;
    removeDotsOpacity();
    dots[index].style.opacity='1'
    moveSlide();
});

prevBtn.addEventListener('click',()=>{
    if(index===0) return index;
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