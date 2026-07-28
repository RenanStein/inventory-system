export default function initEditProduct() {
    const divDesc = [...document.querySelectorAll('.products-description-item')];

    const elemento = divDesc.forEach((event) => {
        event.addEventListener('click', (element) => {
            const span = element.target.querySelector('span');
            if(span != null) {
            const input = document.createElement('input');

            input.classList.add('products-description-input')
            element.target.classList.remove('products-description-item')
            input.value = span.textContent;

            span.replaceWith(input)
            input.focus();
            input.select();
            }
    })
    })

    console.log(elemento)
    
}