<div align="center">

# SCS-C03 Practice

Free practice questions and a timed mock exam for the **AWS Certified Security - Specialty (SCS-C03)** exam.<br>
300 original scenario questions, 50 for each domain, a rationale for every option, no signup, no ads.

**[Start practicing](https://zghanw.github.io/aws-security-specialty/)** · [Report a wrong answer](https://github.com/zghanw/aws-security-specialty/issues/new/choose) · [Contribute a question](CONTRIBUTING.md)

<a href="https://zghanw.github.io/aws-security-specialty/"><img alt="Live site" src="https://img.shields.io/website?url=https%3A%2F%2Fzghanw.github.io%2Faws-security-specialty%2F&label=live%20site&up_message=online&down_message=offline"></a>
<a href="https://github.com/zghanw/aws-security-specialty/actions/workflows/check.yml"><img alt="Question bank check" src="https://github.com/zghanw/aws-security-specialty/actions/workflows/check.yml/badge.svg"></a>
<a href="https://github.com/zghanw/aws-security-specialty/commits/main"><img alt="Last commit" src="https://img.shields.io/github/last-commit/zghanw/aws-security-specialty"></a>
<a href="LICENSE"><img alt="MIT license" src="https://img.shields.io/github/license/zghanw/aws-security-specialty"></a>

<br><br>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/screenshots/question-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="docs/screenshots/question-light.png">
  <img alt="A scenario question with the explanation shown after answering" src="docs/screenshots/question-light.png" width="760">
</picture>

</div>

## Why this exists

I value free education. I strongly believe that practice should be free for anyone who learns with their whole heart and is willing to take the time to learn and practice.

Good SCS-C03 practice material usually sits behind a paywall, and dumps of real exam questions teach you nothing (and break the AWS Certification Program Agreement). This site gives you 300 original questions built on the current exam guide, each with an explanation for every option, so you learn why an answer is right and why the others fall short. It's free, and it will stay free.

## What's inside

| Domain | Exam weight | Questions |
|---|---:|---:|
| 1. Detection | 16% | 50 |
| 2. Incident Response | 14% | 50 |
| 3. Infrastructure Security | 18% | 50 |
| 4. Identity and Access Management | 20% | 50 |
| 5. Data Protection | 18% | 50 |
| 6. Security Foundations and Governance | 14% | 50 |

- Practice one domain at a time. After each answer, every option shows why it's right or wrong.
- Take a mock exam in the real format: 65 questions in 170 minutes, split by the official domain weights.
- Get both multiple-choice and multiple-response questions, like the real exam.
- Build on the long-standing security skills that make up most of the bank, with some questions on the topics new to SCS-C03: generative AI guardrails, OCSF data, inter-node encryption, imported key material, and data masking.
- Review each result with your answer and the correct answer labeled.
- Come back to the questions you missed. They're saved in your browser.
- Use it on a phone or a laptop, in light or dark mode.

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/screenshots/mock-dark.png">
    <img alt="Mock exam with a timer and a question navigator" src="docs/screenshots/mock-light.png" width="370">
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="docs/screenshots/results-dark.png">
    <img alt="Results page with a score for each domain" src="docs/screenshots/results-light.png" width="370">
  </picture>
</p>

## How the questions are written

Every question is original and written against the public [SCS-C03 exam guide](https://docs.aws.amazon.com/aws-certification/latest/security-specialty-03/security-specialty-03.html). None come from the real exam, paid courses, or dumps. Each one has a short security scenario, a clear requirement, and options of similar length where every wrong answer is a plausible action that fails one requirement. The right answer is not the longest option, and `check.js` enforces that on every change.

The questions were drafted with AI help, then checked one by one against the exam guide and AWS documentation.

Question bank last reviewed: November 2026, against exam guide version 1.0.

Think a question is wrong? [Open an issue](https://github.com/zghanw/aws-security-specialty/issues/new/choose) with the question ID shown above each question. You don't need to write any code.

## Official resources

- [SCS-C03 Exam Guide](https://docs.aws.amazon.com/aws-certification/latest/security-specialty-03/security-specialty-03.html), including the in-scope and out-of-scope service lists
- [AWS Certified Security - Specialty](https://aws.amazon.com/certification/certified-security-specialty/)
- [Exam prep for SCS-C03](https://skillbuilder.aws/category/exam-prep/security-specialty-SCS-C03) on AWS Skill Builder, including the Official Practice Question Set

## Run it locally

It's a static site with no build step and no dependencies.

```sh
git clone https://github.com/zghanw/aws-security-specialty.git
cd aws-security-specialty
python -m http.server 8000
```

Then open http://localhost:8000. Run `node check.js` to validate the question bank. CI runs the same check on every push.

## Contributing

Questions live in `data/d1.js` to `data/d6.js`, one file per domain, and exam details such as the domain weights live in `exam.js`. [CONTRIBUTING.md](CONTRIBUTING.md) covers the format and the ground rules. To suggest a question or report a wrong one, use the [issue forms](https://github.com/zghanw/aws-security-specialty/issues/new/choose).

If this helped you prepare, a star helps other candidates find it.

## More free AWS practice

- [AIB-C01 Practice](https://zghanw.github.io/aws-ai-business-strategist/) for the AWS Certified AI Business Strategist exam: 340 questions and a timed mock exam, built the same way.
- [SOA-C03 Practice](https://zghanw.github.io/aws-cloudops-engineer-associate/) for the AWS Certified CloudOps Engineer - Associate exam: 325 questions and a timed mock exam, built the same way.

## Disclaimer

This is an unofficial study aid, not affiliated with or endorsed by Amazon Web Services. AWS and AWS Certified are trademarks of Amazon.com, Inc. or its affiliates.

## License

[MIT](LICENSE)
