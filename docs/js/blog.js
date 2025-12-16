// Blog functionality
const blogPosts = [
    {
        id: 'hallucinations-feature-not-bug',
        title: 'What if Hallucinations Are a Feature, Not a Bug?',
        date: 'November 15, 2025',
        preview: 'A contrarian take on LLM "failures" and why the line between creativity and confabulation might be blurrier than we think.',
        content: `
# What if Hallucinations Are a Feature, Not a Bug?

Hot take: We might be thinking about LLM hallucinations all wrong.

## The Standard Narrative

The story goes like this: LLMs hallucinate because they're "just" predicting the next token. They don't have "real" understanding, so they make stuff up. This is a bug we need to fix.

I used to believe this completely. Then I started thinking about human creativity.

## A Different Lens

When a novelist invents a character, are they hallucinating? When a scientist proposes a hypothesis that hasn't been tested, are they confabulating?

The uncomfortable truth is that human creativity often involves generating things that don't (yet) exist—connecting dots in novel ways, extrapolating beyond the training data of our experiences.

## The Research Angle

This is partly what motivated our Agents4Science paper on leveraging "AI creativity" for scientific discovery. What if, instead of always suppressing hallucinations, we could *channel* them?

The key is context:
- **Factual queries**: Hallucinations are bad. If I ask "What year was Einstein born?", I want accuracy.
- **Generative tasks**: "Hallucinations" might be exactly what we want. "Brainstorm 10 novel research directions" benefits from creative extrapolation.

## The Hard Part

The challenge is building systems that know the difference. That's where retrieval-augmented generation, multi-agent verification, and oversight mechanisms come in.

We don't want to eliminate the generative capacity of LLMs. We want to *ground* it—let the model be creative when appropriate, but anchor it to evidence when accuracy matters.

## What I'm Working On

My research on truthfulness in LLMs isn't about making models boring. It's about giving them—and us—better tools to distinguish "confidently creative" from "confidently wrong."

Because the goal isn't an AI that never takes risks. It's an AI that knows when it's taking them.

---

*This is an evolving thought. I'd love to hear pushback—am I wrong? Email me.*
        `
    },
    {
        id: 'why-bees-need-ai',
        title: 'Why Bees Need AI (And Why AI Needs Bees)',
        date: 'December 10, 2025',
        preview: 'Reflecting on building BuzzHive and what monitoring 50,000 tiny creatures taught me about sensor fusion, anomaly detection, and the limits of prediction.',
        content: `
# Why Bees Need AI (And Why AI Needs Bees)

When I tell people I'm building AI-powered beehives, I usually get one of two reactions: "That's so cool!" or "...why?"

The second question is actually the more interesting one.

## The Problem

Beekeepers lose 30-50% of their colonies every year. That's not a typo. Imagine if farmers lost half their cattle annually—we'd call it a crisis. For bees, it's just... Tuesday.

The causes are complex: varroa mites, pesticides, climate change, habitat loss. But here's the thing—most colony deaths are preventable *if you catch the warning signs early enough*. The problem is that those signs are subtle: a 2°C temperature shift, a change in hum frequency, a slight weight fluctuation.

Humans can't monitor this 24/7. But sensors can. And AI can find patterns humans miss.

## What We Built

BuzzHive combines temperature, humidity, weight, and acoustic sensors with ML models trained on healthy vs. struggling colonies. When something's off, beekeepers get an alert on their phone.

Simple concept. Surprisingly hard execution.

## What I Learned

1. **Real-world ML is humbling.** Our models work great in the lab. Then a bee decides to build comb directly on a sensor.

2. **Domain expertise matters more than model architecture.** The best insights came from beekeepers with 30 years of experience, not from hyperparameter tuning.

3. **Edge cases are the whole game.** The difference between "colony is preparing to swarm" and "colony is dying" can look identical to an algorithm.

## The Bigger Picture

Working on BuzzHive has shaped how I think about AI more broadly. We talk a lot about LLMs and chatbots, but some of the most impactful AI applications might be in domains we rarely discuss—agriculture, ecology, conservation.

Bees pollinate 80% of flowering plants and one-third of our food supply. If AI can help keep them alive, that matters.

And honestly? Debugging a neural network while wearing a bee suit is a uniquely grounding experience.

---

*If you're interested in smart beekeeping or want to chat about IoT + ML, reach out!*
        `
    },
    {
        id: 'from-physics-to-ai',
        title: 'From Physics to AI: Why I Switched (Sort Of)',
        date: 'October 3, 2025',
        preview: 'Thoughts on transitioning from an Engineering Physics undergrad to AI research, and why the two are more connected than you might think.',
        content: `
# From Physics to AI: Why I Switched (Sort Of)

"Wait, you did Engineering Physics? How did you end up in AI?"

I get this question a lot. Here's the honest answer: I didn't really switch. I just followed the problems.

## The Physics Mindset

Physics trains you to think in terms of systems, constraints, and emergent behavior. You learn that complex phenomena often arise from simple rules applied at scale. You get comfortable with uncertainty and approximation.

Sound familiar?

## The Connection

Modern AI—especially deep learning—is basically applied statistical physics with better marketing. Concepts like:
- Energy landscapes and optimization
- Phase transitions in learning dynamics  
- Information theory and entropy
- Emergent behavior from simple components

These aren't metaphors. They're direct mathematical connections.

## Why AI, Why Now

I switched focus because AI felt like where the most interesting *unsolved* physics-style problems live right now. Questions like:
- Why do overparameterized models generalize?
- What's the geometry of representation spaces?
- How do capabilities emerge from scale?

These are physics questions wearing a computer science costume.

## The Math Background Helps

My double major in Mathematical Sciences wasn't planned—I just kept taking math classes because they were useful for physics. Turns out, that background is exactly what you need for ML theory.

Measure theory for probability. Functional analysis for optimization. Topology for understanding representation spaces. It all connects.

## Advice for Physics Students Curious About AI

1. **Don't abandon your intuitions.** The physics way of thinking—dimensional analysis, symmetry arguments, limiting cases—works in ML too.

2. **Learn the engineering side.** Physics trains you to derive. ML requires you to also implement. Get comfortable with PyTorch.

3. **Find problems that excite you.** AI is huge. The physics-to-AI pipeline is crowded with people doing theory. Consider applications where physical intuition matters—robotics, scientific ML, sensor systems.

## Looking Back

I don't regret the "detour" through physics. If anything, it gave me a different perspective than people who went straight into CS. Sometimes being an outsider is an advantage.

---

*Fellow physics refugees: I see you. Let's grab coffee and complain about how ML papers don't have enough dimensional analysis.*
        `
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
            postList.style.display = 'none';
            blogContainer.style.display = 'block';
            blogContent.innerHTML = marked.parse(post.content);
        }
    } else {
        // Show post list
        if (postList) {
            let html = '<h2>Blog Posts</h2>';
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
});


