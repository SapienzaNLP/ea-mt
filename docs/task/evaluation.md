---
sidebar_label: 'Evaluation'
sidebar_position: 4
---

# Evaluation

For this edition of the shared task, we will be using the harmonic mean of two evaluation metrics:
- [COMET](#comet) (Cross-lingual Optimized Metric for Evaluation of Translation), a metric for evaluating the quality of machine translation systems.
- M-ETA (Manual Entity Translation Accuracy), a metric for evaluating the accuracy of entity translation in machine translation systems.


### Final Score
The final evaluation score will be the harmonic mean of the two scores, i.e.:
```
Final Score = 2 * (COMET * M-ETA) / (COMET + M-ETA)
```
This score will ensure that the systems are evaluated based on both the quality of the translation and the accuracy of entity translation.

## Overview of the Evaluation Metrics
Here is a brief overview of the evaluation metrics used in the shared task:

### COMET
COMET is a metric for evaluating the quality of machine translation systems. It is based on the idea of comparing the output of a machine translation system to the output of a human translation system. COMET uses a pre-trained model to generate a score for each translation, which is then used to evaluate the quality of the translation.
- You can find more information about COMET [here](https://github.com/Unbabel/COMET).

### M-ETA
M-ETA (Manual Entity Translation Accuracy) is a metric for evaluating the accuracy of entity translation in machine translation systems. At a high level, given a set of gold entity translations and a set of predicted entity translations, M-ETA computes the proportion of correctly translated entities in the predicted entity translations.
- You can find more information about M-ETA [here](https://aclanthology.org/2024.emnlp-main.914/)


## Evaluation Data
The evaluation data will be released after the evaluation period starts. Note that the evaluation data will not contain the target references. However, you can use the sample and validation data, which contain the ground truth and are available in the [data section](/docs/task/data#downloads), to evaluate your systems.

### How to format your predictions
Your predictions should be in JSONL format, where each line in the file contains a JSON object. Each JSON object should contain the following fields:
- `id`: Unique identifier corresponding to the source text ID
- `source_language`: Source language, always `"English"` for this task
- `target_language`: Target language, see below for the list of target languages
- `text`: Source text, same as the `source` field in the data
- `prediction`: Your translation for the `text`

#### List of target languages
Use these values for the `target_language` field in your predictions:
- `"Arabic"` or `"ar"`
- `"Chinese (Traditional)"` or `"zh"`
- `"French"` or `"fr"`
- `"German"` or `"de"`
- `"Italian"` or `"it"`
- `"Japanese"` or `"ja"`
- `"Korean"` or `"ko"`
- `"Spanish"` or `"es"`
- `"Thai"` or `"th"`
- `"Turkish"` or `"tr"`

## Evaluation Notebooks
To help participants evaluate their systems, we provide the following evaluation notebooks:
- [COMET Evaluation Notebook](https://github.com/SapienzaNLP/ea-mt-eval/blob/main/notebooks/comet_eval.ipynb)
- [M-ETA Evaluation Notebook](https://github.com/SapienzaNLP/ea-mt-eval/blob/main/notebooks/entity_eval.ipynb)

### How to use the notebooks
You can use the evaluation notebooks to evaluate your systems on the sample and validation data. The notebooks will guide you through the evaluation process and provide you with the evaluation scores.

#### Prerequisites
Download the data and set up the environment as described below before running the notebooks. We set up the notebooks to use the data from the `data` folder in the repository.

```
# Clone the repository
git clone https://github.com/SapienzaNLP/ea-mt-eval
cd ea-mt-eval
```

#### Setup the environment for the notebooks
We recommend using `conda` to manage the environment and dependencies. If you don't have `conda` installed, you can download it [here](https://docs.conda.io/en/latest/miniconda.html).

1. Create a virtual environment:
```bash
# Create a new environment
conda create -n ea-mt-eval python=3.10

# Activate the environment
conda activate ea-mt-eval
```

2. Install requirements:
```bash
pip install -r requirements.txt
```

#### Data for the notebooks

The data should be organized in the following structure:
```plaintext
data/
├── predictions/
│   └── <model_name>/
│       └── validation/
│           ├── ar_AE.jsonl
│           ├── de_DE.jsonl
│           └── ...
└── references/
    ├── sample/
    ├── test/
    └── validation/
```

You can download the `data` folder from the [Data section](/docs/task/data#downloads) of the website.


#### Running the notebooks
You can run the notebooks using Jupyter Notebook or Jupyter Lab. To start the Jupyter Notebook server, run the following command:
```
jupyter notebook
```

This will open a new tab in your browser with the Jupyter Notebook interface. You can navigate to the `notebooks` folder and open the evaluation notebooks to start evaluating your systems.