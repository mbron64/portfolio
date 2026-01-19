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

