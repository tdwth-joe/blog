document.addEventListener('DOMContentLoaded', function() {
    var showArticle = function() {
        document.querySelector('.article-content').style.display = 'block';
    };

    var closeArticle = function() {
        document.querySelector('.article-content').style.display = 'none';
    };

    var readButtons = document.querySelectorAll('.read-article-btn');
    for (var i = 0; i < readButtons.length; i++) {
        readButtons[i].addEventListener('click', showArticle);
    }

    var closeButton = document.querySelector('.account');
    closeButton.addEventListener('click', closeArticle);
});
