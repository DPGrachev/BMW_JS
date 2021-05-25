document.addEventListener('DOMContentLoaded', () => {

    const feautureLinkElems = document.querySelectorAll('.feature__link');
    const feautureSubElems = document.querySelectorAll('.feature-sub');
    

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

