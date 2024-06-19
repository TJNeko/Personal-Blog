const blogForm = document.getElementById('blog-form');
const formError = document.getElementById('form-error');

blogForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (username.trim() === '' || title.trim() === '' || content.trim() === '') {
        formError.classList.remove('hidden');
    } else {
        formError.classList.add('hidden');
        savePostToLocalStorage(username, title, content);
        window.location.href = 'blog.html';
    }
});

const savePostToLocalStorage = (username, title, content) => {
    const postData = {
        username,
        title,
        content
    };
    
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(postData);
    localStorage.setItem('posts', JSON.stringify(posts));
};