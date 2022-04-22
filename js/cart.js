//Добавление товара в корзину

window.addEventListener('click', function(event){

    if(event.target.hasAttribute('data-cart')){
        
        const card = event.target.closest('.main__oil-block')
        
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.main__oil-block__img').getAttribute('src'),
            price: card.querySelector('.bottom__price').innerText,
            title: card.querySelector('.main__oil-block__title').innerText,
            couner: card.querySelector('[data-counter]').innerText
        }
        console.log(productInfo)

        
    }

})