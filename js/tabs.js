const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');
const title = document.querySelectorAll('.design__title');

for (const tab of tabsHandlerElems){
    tab.addEventListener('click', () => {
        console.log(tab.dataset.tabsHandler);
        tabsHandlerElems.forEach(item => {
            if(tab === item){
                item.classList.add('design-list__item_active');
            }else{
                item.classList.remove('design-list__item_active');
            }
        })
        tabsFieldElems.forEach(i => {
            if(tab.dataset.tabsHandler === i.dataset.tabsField){
                i.classList.remove('hidden')
            }else{
                i.classList.add('hidden')
            }
            
        })
        title.forEach(item => {
            item.classList.toggle('hidden')
        })
    })
}