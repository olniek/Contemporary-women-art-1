# Create Topic Flow

Builds one complete topic module (explore → quiz → result)
using the existing project structure.

---

## Description

Use when the user wants to create or complete a topic.

This skill:
- generates structured topic data
- connects it to existing screens
- ensures working user flow

Do NOT use for:
- styling changes
- refactoring unrelated code
- adding new architecture

---

## Instructions

### 0. Read project context first

Before generating anything:

1. Locate:
   - state management (state variable, render logic)
   - existing screens (Explore, Quiz, Result)
   - data structure (if Topic already exists)

2. Reuse existing patterns:
   - naming
   - component structure
   - state transitions

---

### 1. Validate input

If missing:
- topic → ask user
- thesis → generate simple 1-line thesis

---

### 2. Create or update Topic object

Ensure structure:

Topic {
  id: string,
  title: string,
  thesis: string,
  artworks: [],
  quiz: [],
  result: {}
}

If Topic exists → update only missing fields  
Do NOT overwrite working data

---

### 3. Generate artworks

Create 5 items:

Each:
- image (placeholder ok)
- see
- how
- meaning

Constraints:
- max 12 words per field
- avoid repeating structure
- align with thesis

---

### 4. Generate quiz

Create 5 questions:

Each:
- prompt
- options[3]
- correctIndex
- explanation

Rules:
- test interpretation or pattern
- no factual questions
- options must be clearly distinct

---

### 5. Generate result

Return:

- score logic (correct / total)
- synthesis (1 sentence)
- strongestSkill (see / analyze / interpret / connect)
- nextFocus (1 suggestion)

---

### 6. Connect to flow (strict)

Use ONLY existing flow.

If state system exists:
→ reuse it

If not:

state = "landing"

Allowed states only:
landing → topic → explore → quiz → result

Do NOT introduce:
- routing libraries
- complex logic
- nested states

---

### 7. Screen behavior (minimal)

Explore:
- show 1 artwork at a time
- next button

Quiz:
- show 1 question
- select answer → next

Result:
- show score + synthesis

---

### 8. Stop conditions

Stop when:

- user can complete full flow
- no undefined data
- no broken navigation

---

## Templates

### Topic

const topic = {
  id: "topic-1",
  title: "",
  thesis: "",
  artworks: [],
  quiz: [],
  result: {}
};

---

### Question

{
  prompt: "",
  options: ["", "", ""],
  correctIndex: 0,
  explanation: ""
}

---

## Validation

Check:

1. [ ] 5 artworks exist
2. [ ] 5 questions exist
3. [ ] each question has 3 options
4. [ ] app runs without errors
5. [ ] user reaches result screen
6. [ ] restart works

---

## Error handling

If:
- data missing → generate minimal version
- screen missing → create simplest version
- state unclear → default to simple state variable

---

## Notes

- prioritize working flow over completeness
- keep UI minimal
- do not refactor unrelated files

---

## Mapping to this repository (`project/index.html`)

This project **implements the Topic object** (`thesis`, `artworks` [5× `see` / `how` / `meaning`], `quiz` [5× `prompt` / `options[3]` / `correctIndex` / `explanation`], `result` with `synthesis`, `strongestSkill`, `nextFocus`) inside **`topicsBySeries`**. When `quiz.length === 5`, the app uses that topic quiz instead of the generic `questions` array for scoring and progress.

**Flow differences from the strict list in §6 (allowed states):**

- **Prelude:** `landing` → **`start`** (select medium) → **`topic`** (choose topic) → **`series`** (explore). The skill’s `topic` screen is split across **medium** + **curatorial topic** for this product.
- **Explore:** The skill describes **one artwork at a time**; this app keeps a **five-card grid with flip** (confirmed product decision). `artworks` data documents the five-work arc and can feed future UI.
- **Quiz / result:** Implemented as **`question` → `afterQuestion` → `result`** with the same data shape as the skill’s single-question step plus explanation; topic `quiz` maps to that pipeline via `topicQuizToLegacyQuestions`.
- **Favorites** and **Wikipedia learn more** remain on the explore grid; they are outside the minimal skill but kept by design.