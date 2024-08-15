var list = document.querySelector('.comments')
var commentText = document.querySelector('.comment__text')
var push = document.querySelector('.comment__push')
var userText = document.getElementById('user-comment')
var userComment = document.querySelector('.comment-user')

push.addEventListener('click', function () {
    userComment.style.display = 'flex'
    userText.textContent = commentText.value
    commentText.value = ' '
})
