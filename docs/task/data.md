---
sidebar_label: 'Data'
sidebar_position: 3
---

# Data

The data for the shared task is scheduled to be released in three stages: sample data, training data, and evaluation data. The sample data will be released first to give participants an idea of the data format and the task. The training data will be released next to allow participants to train their systems. The evaluation data -- without the target references -- will be released last for participants to evaluate their systems. The target references for the evaluation data will be released after the evaluation period ends.

* Jump to the ["Download" section](#download)

## Important Dates

- Sample data ready: **15 July 2024**
- Training data ready: **2 September 2024**
- Evaluation data ready: **10 January 2025**
- Evaluation data with target references ready: After the evaluation period ends

:::info
All deadlines are 23:59 UTC-12 ("anywhere on Earth").
:::

## Overview

The data for the shared task will be provided in JSONL format. The data will contain English source text and translations in multiple target languages. The data will also contain named entities mentioned in the translations. The data will be based on Wikidata entities.

### Languages
The data will be provided in the following languages:

#### Source languages
- English (`en`)

#### Target Languages
- Italian (`it`)
- Spanish (`es`)
- French (`fr`)
- German (`de`)
- Arabic (`ar`)
- Japanese (`ja`)
- Chinese (`zh`)
- Korean (`ko`)
- Thai (`th`)
- Turkish (`tr`)

## Format

The data will be provided in the following format, where each line in the file will be a JSON object with the following fields:
- `id`: A unique identifier for the data instance.
- `source_locale`: The locale of the source text; for this edition of the task, it is always English (`en`).
- `target_locale`: The locale of the target text.
- `source`: A single string containing the source text in English.
- `target`: A **list** of strings, i.e., possible translations, containing the target text in the target locale.
- `mention`: A **list** of strings, i.e., named entities, mentioned in the translation, one for each target translation.
- `metadata`: Additional metadata for the data instance (if available).

:::warning
The target text is provided as a list of strings to account for multiple valid translations.
:::

### Examples
Here are a few examples of the data format. These examples have been beautified to improve readability. However, the actual data will be provided in a single line.

#### Example 1
In this example, the named entity `Yu the Great` contains a "title" in the name, which is translated as `il Grande` in Italian, i.e., part of the name is translated to the target language.
```json
{
  "id": "Q627784_0",
  "source_locale": "en",
  "target_locale": "it"
  "source": "How is Yu the Great remembered and honored in Chinese history and culture today?",
  "target": [
    "Come viene ricordato e onorato attualmente Yu il Grande nella storia e nella cultura cinese?",
    "Come viene ricordato e onorato Yu il Grande nella storia e nella cultura cinese oggi?"
  ],
  "mention": [
    "Yu il Grande",
    "Yu il Grande"
  ],
  "metadata": {
    "wikidata_id": "Q627784",
  }
}
```

#### Example 2
In this example, the named entity `World of Ice and Fire` is translated as `mondo delle **Cronache** del ghiaccio e del fuoco` in Italian, i.e., the target name contains an additional word `Cronache` (`Cronicles`) that is not present in the source name.
```json
{
  "id": "Q2461698_2",
  "source_locale": "en",
  "target_locale": "it",
  "source": "What are some prominent locations in the World of Ice and Fire?",
  "target": [
    "Quali sono alcuni luoghi di spicco nel mondo delle Cronache del ghiaccio e del fuoco?",
    "Quali sono alcuni luoghi di rilievo nel mondo delle Cronache del ghiaccio e del fuoco?"
  ],
  "mention": [
    "mondo delle Cronache del ghiaccio e del fuoco",
    "mondo delle Cronache del ghiaccio e del fuoco"
  ],
  "metadata": {
    "wikidata_id": "Q2461698",
  }
}
```

#### Example 3
In this example, the named entity `Sweet Magnolias` is translated as `Il colore delle magnolie` in Italian, i.e., the target name is very different from the source name, as the literal translation would be `Dolci magnolie`.
```json
{
  "id": "Q56800842_1",
  "source_locale": "en",
  "target_locale": "it",
  "source": "How many seasons of Sweet Magnolias are available on Netflix?",
  "target": [
    "Quante stagioni de Il colore delle magnolie sono disponibili su Netflix?",
    "Quante stagioni del Il colore delle magnolie sono disponibili su Netflix?",
    "Quante stagioni di Il colore delle magnolie sono disponibili su Netflix?"
  ],
  "mention": [
    "Il colore delle magnolie",
    "Il colore delle magnolie",
    "Il colore delle magnolie"
  ],
  "metadata": {
    "wikidata_id": "Q56800842",
  }
}
```

## Download

* Sample data: [link (.zip file)](/data/sample.zip)