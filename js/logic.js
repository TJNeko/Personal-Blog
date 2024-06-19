const toggleMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
};

const handleBackButtonClick = () => {
    window.location.href = 'index.html';
};

const loadBlogPosts = () => {
    const blogPostsContainer = document.getElementById('blog-posts');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    blogPostsContainer.innerHTML = ''; 

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');

        const titleElement = document.createElement('h2');
        titleElement.textContent = post.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = post.content;

        const authorElement = document.createElement('p');
        authorElement.textContent = `Author: ${post.username}`;

        postElement.appendChild(titleElement);
        postElement.appendChild(contentElement);
        postElement.appendChild(authorElement);

        blogPostsContainer.appendChild(postElement);
    });
};

const initializePage = () => {
    const modeToggle = document.getElementById('mode-toggle');
    const backBtn = document.querySelector('.back-btn');

    modeToggle.addEventListener('change', toggleMode);

    backBtn.addEventListener('click', handleBackButtonClick);

    loadBlogPosts();
};

window.addEventListener('load', initializePage);