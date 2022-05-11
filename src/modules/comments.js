const comments = () => {
    const rewiewsBlock = document.getElementById('reviews')
    const rewiewsContainer = document.querySelector('.comments-container')
    const commentsItems = document.querySelectorAll('.comment-item')

    let userAvatars = rewiewsBlock.querySelectorAll('.avatar')
    let userNames = rewiewsBlock.querySelectorAll('.text-normal')
    let userComments = rewiewsBlock.querySelectorAll('.user-comment')

    const render = ({dataItem, commentItem, image}) => {
        const commentText = commentItem.querySelector('.user-comment')
        const userName = commentItem.querySelector('.text-normal')
        const userAvatar = commentItem.querySelector('.avatar')

        commentText.textContent  = dataItem.comment
        userName.textContent = dataItem.author

        if (image == '') {
            image = '3.png'
        }
        userAvatar.src = `images/users/${image}`
    }

    const commentsChange = () => {
        
    }

    commentsChange()

    const getToComment = (data) => {
        commentsItems.forEach((commentItem, i) => {
            data.comments.forEach((dataItem, index) => {
                if (index == i) {
                    let image = dataItem.image
                    render({dataItem, commentItem, image})
                }
            })
        })
        
        
    }

    fetch('comments.json')
        .then(response => response.json())
        .then(data => {
            getToComment(data)
        })
}

export default comments