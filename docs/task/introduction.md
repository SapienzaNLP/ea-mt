---
sidebar_label: 'Introduction'
sidebar_position: 1
---

# Introduction
This is a 2-minute introduction to our task, Entity-Aware Machine Translation (EA-MT), for SemEval-2025.

## What is SemEval?
**SemEval** is a long-standing series of international natural language processing (NLP) research workshops whose mission is to advance the current state of the art in semantic analysis and to help create high-quality annotated datasets in a range of increasingly challenging problems in natural language semantics.

:::note More on SemEval
You can find more information about SemEval on the [official website](https://semeval.github.io/).
:::

## EA-MT: Entity-Aware Machine Translation
Let's dive into our SemEval-2025 task, **Entity-Aware Machine Translation (EA-MT)**.

![Background Image](/img/background-blurred.jpg)

### What is it about?
We invite participants to develop machine translation systems that can accurately translate text that includes potentially challenging named entities in the source language. **The task is to translate a given input sentence from the source language (English) to the target language, where the input sentence contains named entities that may be challenging for machine translation systems to handle**. The named entities may be entities that are rare, ambiguous, or unknown to the machine translation system. The task is to develop machine translation systems that can accurately translate such named entities in the input sentence to the target language.

### Why is it important?
We believe that the ability to accurately translate named entities is crucial for machine translation systems to be effective in real-world scenarios. Named entities are entities that are referred to by *proper names*, such as people, organizations, locations, dates, and more. Named entities are often challenging even for human translators, as sometimes there are *cultural or domain-specific references* that are not easily translatable. This happens more often for some entity types or categories, such as movies, books, TV series, products, and more.

### How can you participate?
There are several ways to participate in the EA-MT task:
- **Fine-tune an existing model**: You can fine-tune an existing MT model or LLM on the provided training data. For example:
    - You can use popular pre-trained models, such as [MarianMT](https://huggingface.co/transformers/model_doc/marian.html), [M2M-100](https://huggingface.co/facebook/m2m100_418M), [T5](https://huggingface.co/transformers/model_doc/t5.html), and more.
    - You can use popular LLMs, such as Llama-3, Qwen-2, and more.

- **Develop your own machine translation system**: You can develop your own machine translation system using your preferred tools and techniques.
    - You can add named entity recognition (NER), entity linking (EL), or other modules to your machine translation system to improve the translation of named entities.
    - You can use data augmentation techniques to improve the performance of your machine translation system.
    
- **Use external systems**: You can use external systems, APIs, or services to improve the performance of your machine translation system.
    - You can use GPT-4, Gemini, Claude or other commercial LLMs and build on top of them.

### Is my system good enough?
The final result is not the only thing that matters: we know that comparing a small BERT-based model with GPT4o or Gemini is not "fair". This shared task is not about winning, but about learning, and sharing. For example:
- *Did you find that a simple model works almost as well as a complex one but is much faster?*
- *Did you try a new data augmentation technique?*
- *Did you experiment with a new architecture?*
- *Did you try to fine-tune a model on a new dataset?*
- *Did you try to combine different models?*
- *Did you try to use external systems to improve your model?*
- *What is the extent of the improvement you achieved by combining different techniques?*

For example, sometimes it may be more interesting to see a super fast model that is 10% worse than the best model, but that can be used in real-world scenarios. Or there may be techniques that are more effective for certain types of named entities, or for certain language pairs.

#### Negative Results
Negative results are also welcome! If you tried something and it didn't work, that's valuable information too. It can help others avoid the same pitfalls and save time in the future.

### Write a system paper
We encourage participants to write a system paper describing their approach, the techniques they used, the results they obtained, and the lessons they learned. The system paper will be submitted to the SemEval workshop for review and publication: this is a great opportunity to showcase your work with the NLP community.
- We will provide a template for the system paper, and we will give you detailed instructions on how to write it at the end of January 2025.

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

:::note
This edition of EA-MT will focus on translating from English to the target languages mentioned above. We may consider adding more language pairs in future editions.
:::

## Next steps
Please, stay tuned for more updates on the EA-MT task for SemEval-2025. We will be releasing more information on the dataset, evaluation metrics, and submission guidelines soon. If you have any questions, feel free to reach out to us.

:::tip Join the Google Group
We invite you to join our Google Group for the latest updates and discussions: [SemEval 2025 - Task 2: EA-MT](https://groups.google.com/a/uniroma1.it/g/semeval-2025-task-2-ea-mt).
:::
