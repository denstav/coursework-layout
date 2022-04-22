window.addEventListener('click', function(event){
    
    let counter;

    //Проверка на клик на кнопки
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){

        const counterWrapper = event.target.closest('.main__oil-block__items')
        counter = counterWrapper.querySelector('[data-counter]')

    }
    //Проверка на кнопку +
    if(event.target.dataset.action === 'plus'){

        counter.innerText = ++counter.innerText
    }

    //Проверка на кнопку -
    if(event.target.dataset.action === 'minus'){

        if(parseInt(counter.innerText) > 1){
            counter.innerText= --counter.innerText
        }
        
    }
})