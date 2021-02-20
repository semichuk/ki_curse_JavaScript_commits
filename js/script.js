  'use strict';
 let button = document.querySelector(".button.large button");
//  button.onclick = () =>
//  {
//    alert('hello ki f');
//  }
// let i = 0;
//  const deleteElement = (e) =>
//  {

//   console.log(e.target);

//   i++;

//   if(i == 1)
//     {
//       button.removeEventListener('click', deleteElement)
//     }
// };

//  button.addEventListener('click',deleteElement
//  )
//  ;

 const link = document.querySelector('a'),
 bns = document.querySelectorAll('button')
 ;

link.addEventListener('click',(e)=> 
{
  e.preventDefault();
  console.log('error');
});

bns.forEach((item) => 
{
  item.addEventListener('click',() => {console.log('CLICK!!!!!!');});
})
