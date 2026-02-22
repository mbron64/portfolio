// Blog functionality - loads posts from markdown files
const blogPosts = [
    {
        id: 'why-bees-need-ai',
        title: 'Why Bees Need AI (And Why AI Needs Bees)',
        date: 'December 10, 2025',
        preview: 'Reflecting on building BuzzHive and what monitoring 50,000 tiny creatures taught me about sensor fusion, anomaly detection, and the limits of prediction.',
        file: 'blog/why-bees-need-ai.md'
    },
    {
        id: 'hallucinations-feature-not-bug',
        title: 'What if Hallucinations Are a Feature, Not a Bug?',
        date: 'November 15, 2025',
        preview: 'A contrarian take on LLM "failures" and why the line between creativity and confabulation might be blurrier than we think.',
        file: 'blog/hallucinations-feature-not-bug.md'
    },
    {
        id: 'from-physics-to-ai',
        title: 'From Physics to AI: Why I Switched (Sort Of)',
        date: 'October 3, 2025',
        preview: 'Thoughts on transitioning from an Engineering Physics undergrad to AI research, and why the two are more connected than you might think.',
        file: 'blog/from-physics-to-ai.md'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const postList = document.getElementById('post-list');
    const blogContainer = document.getElementById('blog-container');
    const blogContent = document.getElementById('blog-content');
    
    // Check if we're viewing a specific post
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post');
    
    if (postId) {
        // Show specific post
        const post = blogPosts.find(p => p.id === postId);
        if (post) {
            loadPost(post);
        }
    } else {
        // Show post list
        renderPostList();
    }
    
    function renderPostList() {
        if (postList) {
            let html = '';
            blogPosts.forEach(post => {
                html += `
                    <div class="blog-post-preview">
                        <h3><a href="blog.html?post=${post.id}">${post.title}</a></h3>
                        <p class="post-date">${post.date}</p>
                        <p>${post.preview}</p>
                    </div>
                `;
            });
            postList.innerHTML = html;
        }
    }
    
    async function loadPost(post) {
        try {
            const response = await fetch(post.file);
            const markdown = await response.text();
            const html = DOMPurify.sanitize(marked.parse(markdown));
            
            postList.style.display = 'none';
            blogContainer.style.display = 'block';
            blogContent.innerHTML = `
                <p class="post-date">${post.date}</p>
                ${html}
                <p><a href="blog.html">← Back to all posts</a></p>
            `;
        } catch (error) {
            console.error('Error loading post:', error);
            blogContent.innerHTML = '<p>Error loading post. Please try again.</p>';
        }
    }
});
