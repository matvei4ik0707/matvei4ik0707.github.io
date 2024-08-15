var btn = document.getElementById('button')
var block = document.getElementById('congratulations')

btn.addEventListener('click', function () {
    if (block.style.display === 'none') {
        block.style.display = 'flex'
    } else {
        block.style.display = 'none'
    }
})