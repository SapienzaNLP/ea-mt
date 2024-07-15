# Entity-Aware Machine Translation (EA-MT)

This repository contains the source code for the website of the Entity-Aware Machine Translation (EA-MT) project.

The website is available at [https://SapienzaNLP.github.io/ea-mt](https://SapienzaNLP.github.io/ea-mt).

## Table of Contents

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


## How to run, modify and deploy the website

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
