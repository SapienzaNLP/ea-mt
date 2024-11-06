# Entity-Aware Machine Translation (EA-MT)

This repository contains the source code for the website of the Entity-Aware Machine Translation (EA-MT) project.

The website is available at [https://SapienzaNLP.github.io/ea-mt](https://SapienzaNLP.github.io/ea-mt).

## Table of Contents

- [SemEval-2025](#semeval-2025)
- [Important Dates](#important-dates)
- [Task Description](#task-description)
    - [What is the task about?](#what-is-the-task-about)
    - [Why is the task important?](#why-is-the-task-important)
    - [Examples](#examples)
    - [Language Pairs](#language-pairs)
- [How to run, modify and deploy the website](#how-to-run-modify-and-deploy-the-website)
  - [Installation](#installation)
  - [Local Development](#local-development)
  - [Build](#build)
  - [Deployment](#deployment)

## SemEval-2025

SemEval is a series of international natural language processing (NLP) research workshops whose mission is to advance the current state of the art in semantic analysis and to help create high-quality annotated datasets in a range of increasingly challenging problems in natural language semantics. You can find more information about SemEval on the [official website](https://semeval.github.io/).

EA-MT is Task 2 in SemEval 2025. You can read more about the other tasks on the [SemEval 2025 website: task list](https://semeval.github.io/SemEval2025/tasks.html).

## Important Dates

Here are the important dates for the shared task:
- Sample data ready: **15 July 2024**
- Training data ready: **October 2024**
- Evaluation start: **Beginning of January 2025**
- Evaluation end: by **Beginning of February 2025**
- System paper submission due: **End of February 2025**
- Notification to authors: **31 March 2025**
- Camera ready due: **21 April 2025**
- SemEval workshop: **Summer 2025** (co-located with a major NLP conference)

> **Note**: The dates are subject to change. All deadlines are 23:59 UTC-12 ("anywhere on Earth").

## Task Description

The goal of **Entity-Aware Machine Translation (EA-MT)** is to improve the translation of text containing named entities in machine translation.

### What is the task about?
We invite participants to develop machine translation systems that can accurately translate text that includes potentially challenging named entities in the source language. **The task is to translate a given input sentence from the source language (English) to the target language, where the input sentence contains named entities that may be challenging for machine translation systems to handle**. The named entities may be entities that are rare, ambiguous, or unknown to the machine translation system. The task is to develop machine translation systems that can accurately translate such named entities in the input sentence to the target language.

### Why is the task important?
We believe that the ability to accurately translate named entities is crucial for machine translation systems to be effective in real-world scenarios. Named entities are entities that are referred to by *proper names*, such as people, organizations, locations, dates, and more. Named entities are often challenging even for human translators, as sometimes there are *cultural or domain-specific references* that are not easily translatable. This happens more often for some entity types or categories, such as movies, books, TV series, products, and more.

### Examples
Here are some examples of sentences that you may encounter in the EA-MT task:

#### Example 1: English to French
* **English Sentence**: "I watched the movie 'The Shawshank Redemption' last night."
* **French Sentence**: "J'ai regardé le film 'Les Évadés' hier soir."

#### Example 2: English to Italian
* **English Sentence**: "I bought a new book called 'The Catcher in the Rye'."
* **Italian Sentence**: "Ho comprato un nuovo libro chiamato 'Il Giovane Holden'."

#### Example 3: English to Chinese
* **English Sentence**: "I watched the TV series 'Breaking Bad' last week."
* **Chinese Sentence**: "我上周看了电视剧《绝命毒师》。"

#### Example 4: English to Korean
* **English Sentence**: "Who is the author of the book 'The Great Gatsby'?"
* **Korean Sentence**: "'위대한 개츠비'의 저자는 누구입니까?"

### Language Pairs
The EA-MT task will focus on the following language pairs:
* English to Arabic
* English to Chinese
* English to French
* English to German
* English to Italian
* English to Japanese
* English to Korean
* English to Spanish
* English to Thai
* English to Turkish

> **Note**: This edition of the EA-MT task will focus on translating from English to the target languages mentioned above. Future editions may include other language pairs.


## How to run, modify and deploy this website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


## License
All the code in this repository is released under the Apache 2.0 License. See [LICENSE](LICENSE) for details.

The data and other resources used in this project are released under the Creative Commons Attribution-ShareAlike 4.0 International License. See [LICENSE.data.txt](LICENSE.data.txt) for details.


## Acknowledgments
> Simone Conia gratefully acknowledges the support of Future AI Research ([PNRR MUR project PE0000013-FAIR](https://fondazione-fair.it/en/)), which fully funds his fellowship at Sapienza University of Rome since October 2023.