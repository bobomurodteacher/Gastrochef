let hero = document.querySelectorAll('.hero');
let next = document.querySelector('.right-btn');
let burger = document.querySelector('#burger');

let count=0;

function nextItem(){
    hero[count].classList.remove('active-hero');

  if(count < hero.length-1){
    count++;
  }else{
    count=0;
  }

  hero[count].classList.add('active-hero');
// console.log(count)

}
// function afterItem(){
//     hero[count].classList.remove('active-hero');
//   if(count > 0){
//     count--;
//   }else{
//     count  = hero.length-1;
//   }

//   hero[count].classList.add('active-hero');

// }
// document.addEventListener('click',(e)=>{
//        hero[e.target.id-1].classList.add('active-hero');
//        hero.forEach((item,i)=>{
//           if(e.target.id-1 !==i){
//             hero[i].classList.remove('active-hero');
//           }else{
//             hero[i].classList.add('active-hero');
//              count=i;
//           }
//        })
// });







// let son=0;
// burger.addEventListener('click', ()=> {
    
//     document.querySelector('nav').classList.toggle('block') ;
//      if(son==0){
//          document.querySelector('.burger-img').src='imgs/close.svg';
//         son++;
//      }else{
//       document.querySelector('.burger-img').src='imgs/burger.svg';
//         son=0;
//      }
// })













