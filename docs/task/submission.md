---
sidebar_label: 'Submit Your Results!'
sidebar_position: 5
---

# Submit Your Results!

Thank you for participating in the Entity-Aware Machine Translation (EA-MT) task for SemEval-2025! We are excited to see your submissions and evaluate your systems.

* Link to the [CodaBench shared task page](https://www.codabench.org/competitions/5242/)

## Before We Start

In short, the goals of your contribution are two:
1. Develop your solution to the EA-MT task and submit your predictions for the evaluation.
  - You can use any LLM or MT model, or develop your own system.
  - You can focus on a subset of the target languages.
2. Write a simple system paper describing your approach, the techniques you used, the results you obtained, and the lessons you learned.
  - We will provide a template for the system paper and detailed instructions on how to write it at the end of January 2025.

## CodaBench

We are using [CodaBench](https://codabench.org/) for the submission and evaluation of the shared task. CodaBench is a platform for collaborative evaluation of code and data. It provides a unified interface for submitting your systems, running evaluations, and comparing results with other participants.

### Sign Up on CodaBench

To submit your results, you need to sign up on CodaBench. Here are the steps to sign up:

1. Go to the [CodaBench website](https://codabench.org/).
2. Click on the "Sign Up" button (top right corner in the navigation bar if you are not logged in).
3. Fill in the required details to create an account.
4. Verify your email address to activate your account.

## Submit Your Results

Once you have signed up on CodaBench, you can submit your results for the EA-MT task.

### Step 0: Go the Shared Task Page

Go to the [EA-MT shared task page](https://www.codabench.org/competitions/5242/) on CodaBench. Make sure you are logged in to your account and agree to the terms of the shared task.

### Step 1: Prepare a Submission Folder
Create a folder named `test`. This folder will contain your predictions for the test data.

**Note**: Make sure that the name of the folder is `test`, otherwise the scoring script may not be able to find your predictions.

### Step 2: Generate Predictions
Obtain the test data from our [Data page](/docs/task/data#downloads).

Generate predictions for the test data using your model and save them to a file named `<language_code>.jsonl`, where `<language_code>` is the target language code. The target language code should be one of the following:
- `ar_AE` for Arabic
- `zh_TW` for Chinese (Traditional)
- `fr_FR` for French
- `de_DE` for German
- `it_IT` for Italian
- `ja_JP` for Japanese
- `ko_KR` for Korean
- `es_ES` for Spanish
- `th_TH` for Thai
- `tr_TR` for Turkish

Each file should be a JSONL file containing the predictions for the test data in the following format:
```
{"id": "Q10357223_0", "source_language": "English", "target_language": "Italian", "text": "What are some characteristics of the White Queen?", "prediction": "Quali sono alcune caratteristiche della Regina Bianca?"}
```

Required fields:
- `id`: Unique identifier corresponding to the source text ID
- `source_language`: Source language, always `"English"` for this task
- `target_language`: Target language
- `text`: Source text
- `prediction`: Your translation for the `text`

**NOTE:** You can generate a subset of the predictions for the target languages, i.e., you don't necessarily have to translate all the instances. However, each missing instance will be given a score of 0 (zero) in the evaluation.

### Step 3: Place Predictions in the Submission Folder

At the end of this step, you should have a file named `<language_code>.jsonl` for each target language in the `test` folder, like this:
```
test/
├── ar_AE.jsonl
├── zh_TW.jsonl
├── fr_FR.jsonl
├── de_DE.jsonl
├── it_IT.jsonl
├── ja_JP.jsonl
├── ko_KR.jsonl
├── es_ES.jsonl
├── th_TH.jsonl
└── tr_TR.jsonl
```

**NOTE**:
- If the predictions file for a target language is empty or missing, the scoring script will assign a score of 0 for that language. Don't worry if you are not able to generate predictions for all target languages! **If your goal or focus is on a subset of the target languages, you can submit predictions only for those languages**: it will still be a valid submission and a valuable contribution.
- It is important that the file names match the language codes exactly, otherwise the scoring script may not be able to find your predictions.

### Step 4: Create a Submission .zip File

Create a .zip file containing the `test` folder. The .zip file should have the following structure:
```
submission.zip
└── test/
    ├── ar_AE.jsonl
    ├── zh_TW.jsonl
    ├── fr_FR.jsonl
    ├── de_DE.jsonl
    ├── it_IT.jsonl
    ├── ja_JP.jsonl
    ├── ko_KR.jsonl
    ├── es_ES.jsonl
    ├── th_TH.jsonl
    └── tr_TR.jsonl
```

**NOTE**:
- If you only want to submit predictions for a subset of the target languages, you can include only the relevant files in the `test` folder.
- The name of the .zip file can be anything you like, as long as the name of the folder inside the .zip file (once extracted) is `test`.

### Step 5: Submit Your Predictions

Upload the .zip file to the evaluation server to submit your predictions. You can submit your predictions multiple times before the deadline.

To upload your submission:
1. Go to the "My Submissions" tab in the competition page;
2. Fill in the submission information: this is important for you to keep track of your submissions and for us to understand your submission;
3. Upload the .zip file containing your predictions.

### Step 6: Check The Status of Your Submission

After uploading your submission, you can check its status at the bottom of the "My Submissions" tab (the score may take a few minutes to appear; you may need to refresh the page).

Once the status is "Finished", you can check the details of your submission, including the logs. In case something went wrong, the logs will provide information on the error.
To read the logs, click on the row corresponding to your submission, then the "logs" tab, and finally click on the "scoring logs" section.

### FAQs

#### How do I check the score of my submission?
CodaBench will show you the M-ETA score for each target language in your submission. You can check the score for each target language in the "My Submissions" tab by also looking at the logs of your submission.

#### How many submissions can I make?
We have a limit of 999 submissions per day per participant and 9999 submissions in total. You can submit your predictions multiple times before the deadline.

#### Is there a leaderboard?
For the evaluation phase, you will be able to check the results of your own submissions, but you won't be able to see the results of other participants. The leaderboard will be available after the evaluation phase is complete.

### Questions

If you have any questions, please post them in the Google Group: [SemEval 2025 - Task 2: EA-MT](https://groups.google.com/a/uniroma1.it/g/semeval-2025-task-2-ea-mt).