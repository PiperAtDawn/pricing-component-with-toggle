var checkbox = document.querySelector('input[name=pricing]');

checkbox.addEventListener('change', function() {
    if (this.checked){
        pricedown()
    }
    else {
        priceup()
    }
})

let priceup = () => {
    var price = document.querySelectorAll('strong')
    price[0].innerHTML = "$199.99";
    price[1].innerHTML = "$249.99";
    price[2].innerHTML = "$399.99";
}

let pricedown = () => {
    var price = document.querySelectorAll('strong')
    price[0].innerHTML = "$19.99";
    price[1].innerHTML = "$24.99";
    price[2].innerHTML = "$39.99";
}