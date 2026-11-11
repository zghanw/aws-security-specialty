'use strict';
// Everything specific to this exam. app.js, check.js and style.css are the same file in every practice site.
{
  const guide = 'https://docs.aws.amazon.com/aws-certification/latest/security-specialty-03/security-specialty-03.html';
  const link = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;
  window.EXAM = {
    code: 'SCS-C03',
    name: 'AWS Certified Security - Specialty',
    key: 'scs', // localStorage prefix; index.html's theme script uses it too
    repo: 'https://github.com/zghanw/aws-security-specialty',
    guide,
    pass: 750,
    strip: 'Exam: 65 questions · 170 min · 750/1000 to pass',
    domains: {
      1: { name: 'Detection', weight: 16 },
      2: { name: 'Incident Response', weight: 14 },
      3: { name: 'Infrastructure Security', weight: 18 },
      4: { name: 'Identity and Access Management', weight: 20 },
      5: { name: 'Data Protection', weight: 18 },
      6: { name: 'Security Foundations and Governance', weight: 14 },
    },
    // Real exam format: 65 questions (50 scored, 15 unscored) in 170 minutes. The mock scores all 65.
    mock: {
      count: 65, minutes: 170, title: 'Mock exam',
      note: `The format follows the ${link(guide, 'official exam guide')}. The real exam has 15 unscored questions mixed in; here all 65 count.`,
    },
    // Verified against the official SCS-C03 exam guide (version 1.0) and certification page, 2026-11-11.
    facts: `
      <li><b>Format:</b> 65 questions in 170 minutes, USD 300. 50 questions are scored and 15 are unscored, and you can't tell which is which.</li>
      <li>Question types: multiple choice (1 correct out of 4) and multiple response (2 or more correct out of 5 or more; you must pick all of them to get credit). The exam guide also lists ordering and matching questions, which this site doesn't include.</li>
      <li>Scaled score 100 to 1,000; <b>750 to pass</b>. Scoring is compensatory, so you don't need to pass each domain. There's no penalty for guessing, so answer every question.</li>
      <li>SCS-C03 replaced SCS-C02 on 2 Dec 2025. Detection and Incident Response are now separate domains, and Identity and Access Management grew to 20%.</li>
      <li>New in SCS-C03: guardrails for generative AI applications, OCSF data and third-party WAF rules, inter-node encryption in transit, imported key material, masking of sensitive data, and keys and certificates across Regions.</li>`,
    resources: `
      <li>${link(guide, 'SCS-C03 exam guide')}, including the in-scope and out-of-scope service lists</li>
      <li>${link('https://aws.amazon.com/certification/certified-security-specialty/', 'AWS Certified Security - Specialty certification page')}</li>
      <li>${link('https://skillbuilder.aws/category/exam-prep/security-specialty-SCS-C03', 'Exam prep plan on AWS Skill Builder')}, which includes the Official Practice Question Set (sign-in required)</li>`,
  };
}
