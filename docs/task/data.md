---
sidebar_label: 'Data'
sidebar_position: 3
---

# Data

The data for the shared task is scheduled to be released in three stages: sample data, training data, and evaluation data. The sample data will be released first to give participants an idea of the data format and the task. The training data will be released next to allow participants to train their systems. The evaluation data -- without the target references -- will be released last for participants to evaluate their systems. The target references for the evaluation data will be released after the evaluation period ends.

* Jump to the ["Download" section](#download)

## Important Dates

- Sample data ready: **15 July 2024**
- Training data ready: **November 2024**
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
- Italian (`it`): sample, training, and evaluation data
- Spanish (`es`): sample, training, and evaluation data
- French (`fr`): sample, training, and evaluation data
- German (`de`): sample, training, and evaluation data
- Arabic (`ar`): sample, training, and evaluation data
- Japanese (`ja`): sample, training, and evaluation data
- Chinese (`zh`): sample and evaluation data
- Korean (`ko`): sample and evaluation data
- Thai (`th`): sample and evaluation data
- Turkish (`tr`): sample and evaluation data


## Format
Here is a brief overview of the data format for the shared task. The data will be provided in JSONL format, where each line in the file will contain a JSON object. 
Note that the format of the training data is different from the format of the sample and evaluation data.


### Sample/evaluation data format
Each row in the dataset contains the following fields:
```json
{
  "id": "Q2461698_0",
  "wikidata_id": "Q2461698",
  "entity_types": [
    "Fictional entity"
  ],
  "source": "Who are the main antagonistic forces in the World of Ice and Fire?",
  "targets": [
    {
      "translation": "Chi sono le principali forze antagoniste nel mondo delle Cronache del ghiaccio e del fuoco?",
      "mention": "mondo delle Cronache del ghiaccio e del fuoco"
    }
  ],
  "source_locale": "en",
  "target_locale": "it"
}
```
Where:
* `id` is a unique identifier for the row, usually in the format `<entity_id>_<q_id>`, where `<entity_id>` is the entity ID in Wikidata and `<q_id>` is the question ID (from 0 to 4).
* `wikidata_id` is the QID of the entity in Wikidata.
* `entity_types` is a list of types of the entity; not all entities have types.
* `source` is the source text in English.
* `targets` is a list of translations in the target language, where each translation contains:
    * `translation` is the translation of the source text in the target language.
    * `mention` is the mention of the entity in the translation.
* `source_locale` is the source language.
* `target_locale` is the target language.

In the example above, the entity is the "World of Ice and Fire" and the translation is "mondo delle Cronache del ghiaccio e del fuoco", which are not 1-to-1 translations as the Italian version also includes "delle Cronache" ("of the Chronicles"). You can check out more examples below.

#### Examples
* **Ring a Ring o' Roses** is translated as **Girotondo** in Italian:
  ```json
  {
    "id": "Q746666_0",
    "wikidata_id": "Q746666",
    "entity_types": [
      "Musical work"
    ],
    "source": "Can you sing the chorus of the folk song Ring a Ring o' Roses?",
    "targets": [
      {
        "translation": "Puoi cantare il ritornello della canzone popolare Girotondo?",
        "mention": "Girotondo"
      },
      {
        "translation": "Sai cantare il ritornello del girotondo, la canzone popolare?",
        "mention": "girotondo"
      }
    ],
    "source_locale": "en",
    "target_locale": "it"
  }
  ```

* **Mary of Burgundy** is translated as **Maria di Borgogna** and **Maximilian I** is translated as **Massimiliano I** in Italian:
  ```json
  {
    "id": "Q157073_0",
    "wikidata_id": "Q157073",
    "entity_types": [
      "Person"
    ],
    "source": "How long was Mary of Burgundy married to Emperor Maximilian I?",
    "targets": [
      {
        "translation": "Per quanto tempo Maria di Borgogna è stata sposata con l'imperatore Massimiliano I?",
        "mention": "Maria di Borgogna"
      },
      {
        "translation": "Per quanto tempo Maria di Borgogna è stata sposata con l'imperatore Massimiliano I",
        "mention": "Maria di Borgogna"
      }
    ],
    "source_locale": "en",
    "target_locale": "it"
  }
  ```

* **Little Women** is translated as **Mujercitas** in Spanish:
  ```json
  {
    "id": "Q850522_0",
    "wikidata_id": "Q850522",
    "entity_types": [
      "Movie"
    ],
    "source": "Who are the main characters in the movie Little Women?",
    "targets": [
      {
        "translation": "¿Quiénes son los personajes principales de la película Mujercitas?",
        "mention": "Mujercitas"
      }
    ],
    "source_locale": "en",
    "target_locale": "es"
  }
  ```

* **A Room of One's Own** is translated as **Una habitación propia** in Spanish:
  ```json
  {
    "id": "Q1204366_1",
    "wikidata_id": "Q1204366",
    "entity_types": [
      "Book"
    ],
    "source": "Who is the author of the book A Room of One's Own?",
    "targets": [
      {
        "translation": "¿Quién es el autor del libro Una habitación propia?",
        "mention": "Una habitación propia"
      },
      {
        "translation": "¿Quién es el autor del libro Una habitacion propia?",
        "mention": "Una habitacion propia"
      }
    ],
    "source_locale": "en",
    "target_locale": "es"
  }
  ```

### Training data format
The training data will be provided in a different format, where each row in the dataset contains the following fields:
```json
{
  "source": "Did Gone With The Wind come out before 1940?",
  "target": "Via col vento è uscito prima del 1940?",
  "entities": [
    "Q2875"
  ],
  "source_locale": "en",
  "target_locale": "it",
  "instance_id": "826528e6",
  "from": "mintaka",
}
```
Where:
* `source` is the source text in English.
* `target` is the translation of the source text in the target language.
* `entities` is a list of Wikidata IDs of the entities mentioned in the source text.
* `source_locale` is the source language.
* `target_locale` is the target language.
* `instance_id` is a unique identifier for the row.
* `from` is the source of the data.

#### Source of the data
The training data will be provided by different sources. The source of the data will be provided in the `from` field (currently, the only source is `mintaka` but we plan to add more sources in the future).


| Source | Description | Notes | License | Link |
| --- | --- | --- | --- | --- |
|`mintaka` | Mintaka is a multilingual question answering dataset based on Wikidata. | Entity subset. | CC-BY | [Mintaka](https://github.com/amazon-science/mintaka) |


## Downloads

* Sample data: [link (.zip file)](/data/semeval.sample.v2.zip)
* Training data: [link (.zip file)](/data/semeval.train.v2.zip)