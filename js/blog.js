const fetchBlogPosts = async () => {
    try {
        const data = await response.json();
        const blogPostsContainer = document.getElementById('blog-posts');

        blogPostsContainer.innerHTML = '';

        data.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('blog-post');

            const titleElement = document.createElement('h2');
            titleElement.textContent = post.title;

            const contentElement = document.createElement('p');
            contentElement.textContent = post.content;

            const authorElement = document.createElement('p');
            authorElement.textContent = `Author: ${post.author}`;

            postElement.appendChild(titleElement);
            postElement.appendChild(contentElement);
            postElement.appendChild(authorElement);

            blogPostsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
};


document.addEventListener("DOMContentLoaded", () => {
    const modeToggle = document.getElementById("mode-toggle");


    modeToggle.addEventListener("change", () => {
        if (modeToggle.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});

    fetchBlogPosts();
});
window.addEventListener('load', fetchBlogPosts);