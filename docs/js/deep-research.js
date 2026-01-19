// Deep Research page functionality
// Loads and displays deep research query outputs

document.addEventListener('DOMContentLoaded', function() {
    const postList = document.getElementById('post-list');
    const blogContainer = document.getElementById('blog-container');
    const blogContent = document.getElementById('blog-content');
    const toc = document.getElementById('toc');

    // Define deep research outputs
    const research = [
        // Add your research outputs here in this format:
        // { title: 'Research Title', file: 'deep-research/filename.md', date: '2025-01-18' }
    ];

    if (research.length === 0) {
        postList.innerHTML = '<p>Deep research outputs coming soon. Check back for in-depth explorations of AI, beekeeping, and technology.</p>';
        return;
    }

    // Render research list
    function renderResearchList() {
        postList.innerHTML = research.map((item, index) => `
            <a href="#" class="post-link" data-index="${index}">
                <span class="post-title">${item.title}</span>
                <span class="post-date">${item.date}</span>
            </a>
        `).join('');

        // Add click handlers
        document.querySelectorAll('.post-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                loadResearch(research[this.dataset.index]);
            });
        });
    }

    // Load and display a research output
    async function loadResearch(item) {
        try {
            const response = await fetch(item.file);
            const markdown = await response.text();
            const html = DOMPurify.sanitize(marked.parse(markdown));
            
            blogContent.innerHTML = html;
            postList.style.display = 'none';
            blogContainer.style.display = 'flex';
            
            generateTOC();
        } catch (error) {
            console.error('Error loading research:', error);
            blogContent.innerHTML = '<p>Error loading research. Please try again.</p>';
        }
    }

    // Generate table of contents from headings
    function generateTOC() {
        const headings = blogContent.querySelectorAll('h1, h2, h3');
        toc.innerHTML = '';
        
        headings.forEach((heading, index) => {
            const id = `heading-${index}`;
            heading.id = id;
            
            const link = document.createElement('a');
            link.href = `#${id}`;
            link.textContent = heading.textContent;
            link.className = `toc-${heading.tagName.toLowerCase()}`;
            
            toc.appendChild(link);
        });
    }

    renderResearchList();
});

