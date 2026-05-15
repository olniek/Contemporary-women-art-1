# Task 09 — Art-aligned quiz content

Ensure fallback and topic quizzes reinforce “contemporary art through women artists,” not generic trivia.

## Acceptance criteria

- Legacy `questions` array (when still used) uses prompts and distractors appropriate to the product mission; no unrelated math/geography items unless intentionally retained as dev fixtures (if so, gated from production).
- Each published topic intended for learners includes a `quiz` array that satisfies the selection rule from Task 08 (e.g. five items) **or** the rule is updated and topics are migrated.
- `keyIdeas`, `result`, and quiz `insight` fields do not contradict each other for the same topic.

## How to test

1. Content review: read all quiz prompts in [../../index.html](../../index.html) (or data files after Task 11) for tone and accuracy.
2. For one topic per series, complete quiz; confirm explanations read as art-historical / interpretive, not filler.
3. SME or curator spot-check optional: sign-off noted in PR.

## Definition of done

- All user-visible quiz content passes acceptance; placeholder trivia removed or never shipped.
- [../../docs/screens.md](../../docs/screens.md) updated if quiz length or flow changed.
