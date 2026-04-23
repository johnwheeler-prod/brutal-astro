---
title: "Of all the AI topics, why AEO?"
pubDate: "April 18, 2026"
author: John Wheeler
tags:
  - AEO
  - AI
imgUrl: '../../assets/why_aeo/daniel-forsman-Ph4ZJrwf4x8-unsplash.jpg'
description: Why AEO has become an obsession — a personal history of research, from library card catalogs to AI agents, and what equitable access to information could actually mean.
---

# Of all the AI topics, why AEO?

I write about AEO a lot. People occasionally ask me why. There's no shortage of AI topics worth caring about: code generation, autonomous agents, the labor market implications of all of the above. I get it.

The honest answer is that search is personal to me in a way those other topics aren't.

## A family history of research

There's a 13-year age gap between me and my oldest sibling. My sister, my two older brothers, and I grew up in the same house, same parents, but across very different technological eras.

My oldest siblings wrote research papers at the library. They went to the physical building, used the card catalog, pulled books off shelves, and pieced together arguments from encyclopedias and nonfiction works. The sources had to be physical, because that was mostly what existed.

By the time myself (the youngest) and my next oldest brother got to high school, we had a minimum book source requirement, but we usually could find those books online. Sometimes the full text was available digitally and you didn't even need to check it out. In addition to books though, we had access to peer-reviewed articles, academic publications, digital databases. We still couldn't use Wikipedia (our teachers drew a hard line there), but we could do real research from a desktop computer that was in the dining room for some reason.

Now, a high schooler has essentially every source ever written at their fingertips, and they can distill a synthesis from all of them. With something like [NotebookLM](https://notebooklm.google.com/), they can even constrain the retrieval pipeline to specific sources, which is honestly closer to how a researcher actually thinks than anything my siblings or myself had access to growing up.

That arc, from physically locating a book in a card catalog to kicking off a multi agent research pipeline, happened within a single family (granted, I was well out of high school before the [self attention mechanism](https://jalammar.github.io/illustrated-transformer/) was even developed which set the stage for deep neural networks and the LLMs of today). It feels both incremental and completely insane when you look at it all at once.

## What better tools actually unlock

Junior year, I wrote a paper about the environmental trade-offs of electric vehicles. I was trying to argue something meaningful about whether EVs were actually cleaner than gas cars, once you factored in battery mining, shipping, manufacturing footprint, and end-of-life disposal compared to the ongoing emissions from internal combustion. It was a genuinely interesting question.

I was not convincing. I couldn't even convince myself. I didn't have the right stats, and the ones I found were either incomplete, from sources I couldn't verify, or took more cross-referencing than a high schooler with a deadline (and a procrastination problem) could manage.

I'm confident I could do that research well today. Not because I'm smarter now (although I like to think I am), but because I'd have access to verifiable data, synthesized and cited, in a fraction of the time. That's thinking getting **accelerated**. There's a version of AI search I'm genuinely excited about, and it looks like that: the EV paper, done well, by a kid somewhere in the country with a laptop. Not for the speed of doing it, but for the thinking and the learning.

## The translation tax on traditional search

There was a cost to traditional search that we all paid and mostly stopped noticing.

Think about the last time you were sick and wanted to look something up. You didn't type what was actually in your head. You stripped it down to something Google could parse: "spring fatigue running congestion." Then you read two articles, realized they assumed context you didn't have, searched again with different phrasing, clicked through to a third article, and eventually stitched together something approximating an answer.

What you probably *wanted* to say was something closer to: *"I went for a run the other day and wasn't quite feeling like myself. My diet and fitness levels haven't really changed, but it is spring, and I find myself really congested at night. Is it normal to feel more fatigued than usual on a run just because of allergens?"*

That's how you'd talk to your doctor. The version you actually typed into Google was a translation artifact, not your real question, but a keyword approximation of it. [Researchers call this the delphic cost of search](https://arxiv.org/abs/2308.07525), which is the cognitive and time overhead of translating real intent into parseable keywords. It's what I mean when I say translation tax.

AI search removes that layer. [Natural language processing](https://www.ibm.com/topics/natural-language-processing) allows these systems to meet you at natural language rather than forcing you to meet the machine at keyword syntax. You ask the way you actually think, and you get something calibrated to what you actually meant.

It's practical in a way that's easy to underestimate. A few months ago my kitchen sink was dripping and I couldn't find any visible cracks in the pipes. I searched it, got an actual diagnostic, and eventually figured out it was the drain pop-up assembly, and specifically corrosion around the pivot joint. Two hours later, including two trips to Lowe's, it was fixed. That would have taken me considerably longer in a previous version of the internet. Perhaps even so much longer that I would have just let it drip forever until I eventually called an emergency plumber when the pipe exploded in the middle of the night or something.

## Why search specifically

Some people I talk to are puzzled that search is my AI focus, given how much else there is to be excited about.

But search is what most people actually use. Every day, people are searching for recipes, restaurant recommendations, instructions for changing a tire, why their washing machine is making a high-pitched noise. Software engineers used to search Stack Overflow and Medium for answers to compiler errors. Technical writers used to search for documentation and sources to pull together an article. Every field, every skill level, every kind of question, the bottom line is everyone searches.

The translation tax I described above? Everybody paid it. The cost is dropping fast. That's a broad impact in a way that code generation, for all its impressiveness, isn't. Most people don't write code. Everyone searches.

## What better search could actually mean

There's something meaningful here about **equitable access to information**.

Good search used to be a skill. You had to know how to phrase things, how to evaluate sources, how to triangulate across multiple unreliable results. People who grew up in environments that taught those skills (better schools, better libraries, more time) had a real advantage. High-fidelity research was, in practical terms, easier for some people than others.

AI search changes some of that. With proper guidance and leadership, it has genuine potential to reduce misinformation, provide access to high-quality research for people who historically struggled to access it, and increase transparency around how research and development actually get done. There's an equity argument here I find compelling, separate from any AEO angle.

## Where my optimism runs out (and should)

I want to be honest about two places I hold my enthusiasm carefully.

**The brain rot concern.** There's a critique of AI search that argues delegating synthesis to AI will gradually erode our ability to think critically ourselves. I don't find myself less able to reason since I started using these tools heavily, but I might be wrong about my own cognition. There's nothing exactly provable about self observation. I'll wait for the peer reviewed, randomized studies to draw conclusions there. My honest expectation is that real effects, positive and negative, will start to surface in research over the next few years, and I'm genuinely open to updating.

**YMYL content and the confidence problem.** For [Your Money or Your Life content](https://searchengineland.com/guide/ymyl) (medical, financial, legal advice) the stakes of a wrong answer are different. Google has invested meaningfully in quality standards for this category in traditional search, and those standards exist for real reasons. AI search presents as confident by default, and there's a [documented pattern where reward systems are miscalibrated](https://openai.com/index/why-language-models-hallucinate/) toward providing *an* answer rather than saying "I don't know" when confidence is actually low. The hallucination problem is improving, but it's not solved, and in YMYL contexts it can cause real harm. I'd like to see AI providers invest more in meaningful confidence calibration: actual signals about when a model is operating at the edges of its reliable knowledge.

## A note on the hope, and what it requires

The version of AI search I'm describing, accessible, equitable, honest about what it doesn't know, is achievable. Getting there requires some things that aren't guaranteed.

**Oversight, first.** The current pace of AI development is outrunning thoughtful policy, and that gap tends to create problems that take years to address.

**Environmental accountability, also first, and as a direct result of oversight.** The energy demands of AI infrastructure are real and growing. [U.S. coal generation rose more than 13 percent through much of 2025](https://www.eenews.net/articles/ai-energy-demand-by-the-numbers-and-how-it-might-affect-the-planet/), driven substantially by data center demand. Old, decommissioned coal plants are being brought back online to meet it. That's an unacceptable cost, and it sits antithetically alongside the promise of technology that's supposed to be accelerating human progress. Closing that loop, slowing growth to a pace renewable energy can actually meet, improving water cooling infrastructure, making data centers genuinely sustainable, is a prerequisite for the version of AI I'm hopeful about.

I'll believe in the fully optimistic version when I see it taking shape. Until then, I'm genuinely interested in the trajectory, I write about it because I think it matters, and my hope is tempered by the reality of how things are actually going.

---

I'm happy to answer questions or dig deeper on any of this. [Connect with me on LinkedIn](https://www.linkedin.com/in/john-wheeler-5697431b9/).

<!-- Photo by Daniel Forsman on Unsplash -->
