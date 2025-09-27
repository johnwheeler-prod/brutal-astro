---
title: "A double edged skill: AI in hiring and the resume filtering paradox"
pubDate: "September 26, 2025"
author: John Wheeler
tags:
  - Web Development
  - AI
imgUrl: '../../assets/a_double_edged_skill/open-ai.jpg'
description: Explore how AI is reshaping hiring, from resume filtering tools to recruiter skepticism, and why job seekers and employers face a paradox when AI skills are both required and penalized.
layout: '../../layouts/BlogPost.astro'
---

# A double edged skill: AI in hiring and the resume filtering paradox

## A changing landscape in AI with respect to hiring

Start writing about job postings requiring AI skills, but adding filters to remove AI optimized resumes (filtering out resume’s with bolded keywords, etc.)

Stream of consciousness thoughts that need organizing:Auto-rejections from companies using AI to parse and filter resumesA growing sentiment on LinkedIn from a variety of voices saying things like:”bolded keywords on the resume immediately let me know the resume is AI generated or augmented, and I immediately reject it”A growing sentiment in job postings asking whether you use AI to augment your work and increase your productivity: seems like a double standardA total lack of visibility into how AI tools actually parse and filter resumes: hint, it’s not an algorithm based on keywords, because LLMs are not algorithms, they’re complex language generators that often and confidently get the answer wrongTie back to a previous article I wrote about the growing AEO discipline compared to/augmenting technical SEO (different answers for the same prompts across multiple users, user embeddings to tune answer synthesis, etc).

The fundamental question: is someone in the wrong? Is there a lesson on exactly how much to use AI to optimize for ATS?

## 1\. The changing hiring landscape

*   A little over a year ago, while I was in the depths of job applications, resume optimizations, and cover letter writing, I noticed an emerging trend. A yes or no checkbox or dropdown with something to the effect of “Do you use AI tools like ChatGPT or Claude to improve your personal productivity?”
    
*   A little while after, LinkedIn started to blow up with the “I can tell when your resume is AI optimized” rhetoric
    
*   Of course there is some balance there, between letting an LLM take a pass to optimize for ATS, and writing a resume with no AI guidance whatsoever, but the line between acceptable and unacceptable is becoming increasingly blurry
    
*   LinkedIn discourse increasingly claims that bolded keywords, em dashes, and consistent bullet point length reeks of AI intervention, and those resumes are _**manually**_ rejected after passing the ATS initial filters
    

## 2\. The resume filter problem

*   The issue starts in a familiar place, AI tools that claim to filter resumes optimally for a job description have little visibility into how they actually work
    
*   Recruiters understandably believe the headlines: these tools will objectively present you with the best candidates with little to no early stage intervention (by the way, this is a deterministic vs. probabilistic issue which I’ve talked about in earlier articles: [https://www.johnwheelerproduction.com/blog/1-answer-engine-obscurity/](https://www.johnwheelerproduction.com/blog/1-answer-engine-obscurity/))
    
*   Candidates are told to customize resumes for every job posting, but don’t use AI to do so, because we can all tell and you’ll get rejected for heavy handed AI use
    

## 3\. The double standard in job postings

*   Job descriptions themselves increasingly ask: “Do you use AI to increase your productivity?”, but the hiring process continues to punish AI use
    
*   Clear communication is lacking in this field, through no fault of either candidates or hiring managers and recruiters
    
*   AI is such a rapidly changing landscape that it’s really tough to unify on a set of standards before the rules change again
    

## 4\. The myth of the algorithm: determinism vs. probabilism

*   Many recruiters and candidates still assume resume screeners work like old-school ATS: deterministic keyword filters
    
*   But modern AI-powered systems aren’t running clean, standardized calculations, they’re making probabilistic guesses about whether a resume “looks like” a good fit by measuring cosine similarity between a resume and the job description
    

**Personal opinion:** I haven’t used resume filtering tools, but if they take into account a user embedding to represent the hiring manager or the recruiter, these issues will only continue to get worse. The tuning of a model to a user embedding will further obscure the actual job requirements and make the ability to optimize a resume for cosine similarity nearly impossible without a detailed profile of the recruiter or hiring manager.

*   Ignoring the potential issues that could arise from user embeddings, there are still some fundamental misunderstandings **that make candidates and recruiters work against each other rather than together**
    
*   AI tools have obscured processes that work in series and parallel and create barely predictable responses. Neither the candidates nor the hiring managers know what’s going to get spit out of the AI resume filter.
    

**By the way:** because these AI resume filtering tools are built on pre-existing language models, the engineers who built the tools also barely know what the results will look like because the training data, model dimensions, and other factors are all proprietary. Company Name AI resume filter is almost certainly plugged directly into ChatGPT, and Company Name engineers don’t get any extra info on how ChatGPT actually works.

## 5\. The fundamental question

Who is in the wrong here? (if anyone)

*   Candidates use AI to stand out because job descriptions encourage AI use to increase productivity
    
*   Recruiters use anecdotal signals to filter out any resumes they can because they’re drowning in applications in a job market where innumerable talented folks are looking for work at the same time
    
*   Company leadership pushes recruiters to become more efficient and to use AI tools for filtering, and team managers looking for new team members include AI literacy in their requirements or nice-to-haves.
    

## 6\. What’s the takeaway?

Unfortunately, I don’t have a great answer. No one is really to blame here. There are way more qualified candidates than there are job openings. Recruiters have 1000 applications dropped on every posting and need a way to filter through them all. They might filter out the very very best candidate by accident with an AI tool, but with so much volume, someone who fits will almost always get the job. Candidates are trying to separate themselves by any means necessary in a market where routinely 300 qualified applications doesn’t guarantee an offer.

What’s worse, the goalposts for both sides will continue to move. Models will get faster, they’ll hallucinate less, and they’ll become more reliable (for hirers and candidates).

## 7\. What I can recommend (for the next 30 minutes, until the standards change again):

If you use AI to parse resumes, be extremely specific. An extra 20 minutes specifying requirements could help you ensure the perfect candidate is included in a sea of great candidates

If you use AI to optimize your resume and application answers, be sure to keep your natural language alive in the answers. Be the last touch in the process. Let AI edit, but you always need the last pass at writing. Read your application top to bottom before submitting _**every time.**_

For both sides, keep in mind that standards are changing. You can differentiate yourself by staying up to date. Remember that quality is better than quantity. Hiring managers can present better candidates with a few more minutes tuning their AI filtering tools. Candidates can increase the effectiveness of their applications with a few more minutes of thoughtful reading and editing.

Always remember: **hiring managers/recruiters and candidates are on the same side.** You both want the position to be filled with someone who deserves it.