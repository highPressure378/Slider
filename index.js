const galleryContainer = document.querySelector('.gallery-container');
const galleryItem = document.querySelectorAll('.gallery-item');
const galleryControlar = document.querySelector('.gallery-controlar');


class slider{

   constructor(container,items,controlar){
      this.sliderContainer = container;
      this.sliderArray = [...items];
      this.sliderControlar = controlar;
   }

   galleryUpdate(){
      this.sliderArray.forEach(el =>{
         el.classList.remove('gallery-item-1');
         el.classList.remove('gallery-item-2');
         el.classList.remove('gallery-item-3');
         el.classList.remove('gallery-item-4');
         el.classList.remove('gallery-item-5');
      });
      this.sliderArray.slice(0,5).forEach((el,i) =>{
         el.classList.add(`gallery-item-${i+1}`);
      });
   }

   setDirection(direction){
      if(direction.className == 'arrow'){
         this.sliderArray.unshift(this.sliderArray.pop());
      }
      else{
         this.sliderArray.push(this.sliderArray.shift());
      }
      this.galleryUpdate();
   }

   useControls(){
      const tirgeet = [...galleryControlar.childNodes];
      tirgeet.forEach(control =>{
         control.addEventListener('click',e =>{
            this.setDirection(control);
         })
      })
   }
}


const call = new slider(galleryContainer,galleryItem);
call.useControls();