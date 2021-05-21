document.addEventListener('DOMContentLoaded', () => {

    const feautureLinkElems = document.querySelectorAll('.feature__link');
    const feautureSubElems = document.querySelectorAll('.feature-sub');
    
  /*   for (let i=0; i < feautureLinkElems.length; i++){
        feautureLinkElems[i].addEventListener('click', () =>{
            if(feautureLinkElems[i].classList.contains('feature__link_active')) {
                feautureLinkElems[i].classList.remove('feature__link_active');
                feautureSubElems[i].classList.add('hidden');
            }else{
                feautureLinkElems[i].classList.add('feature__link_active');
                feautureSubElems[i].classList.remove('hidden');
            }
                feautureLinkElems[i].classList.toggle('feature__link_active');
                feautureSubElems[i].classList.toggle('hidden');
            
        })
    }
 */
    feautureLinkElems.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if(btn.classList.contains('feature__link_active')){
                btn.classList.remove('feature__link_active');
                feautureSubElems[index].classList.add('hidden');
            }else{
                feautureLinkElems.forEach((feautureLinkElem) => {
                    feautureLinkElem.classList.remove('feature__link_active');
                })
                feautureSubElems.forEach((feautureSubElem) => {
                    feautureSubElem.classList.add('hidden');
                })
                    btn.classList.add('feature__link_active');
                    feautureSubElems[index].classList.remove('hidden');
            }
             
        })
        })
        
});

