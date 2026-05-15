# User Flow (Topic-Based Experience)

## Goal
Help users understand contemporary female artists through curated topics,
then test their understanding with a focused quiz.

---

## Core Experience

Landing
→ Select Series (Photography is live; other media are marked coming soon)
→ Select Topic (e.g. Christian figures in contemporary art, staged selves)
→ Explore Artworks (5 cards)
→ Start Quiz
→ Answer Questions (based on the topic)
→ Result

---

## Flow Breakdown

### Landing
User understands the concept and enters the experience.

↓

### Select Series
User chooses a medium. Photography is the current live MVP path.
Painting, Sculpture, and Performance are visible as coming-soon directions
until they have real women-artist content and topic-specific quizzes.

↓

### Select Topic
User selects a specific curatorial theme.

Example:
"How contemporary female artists reinterpret Christian figures"

↓

### Explore Artworks
User views a sequence of artworks (cards):
- image
- artist name
- short description
- key insight

No questions yet — pure exploration.
The quiz button is locked until the user flips at least two cards, so the
assessment follows real observation instead of a skip-through.

↓

### Start Quiz
User transitions from exploration → testing understanding.

↓

### Quiz (Topic-based)
User answers questions about:
- patterns across artworks
- themes and interpretations
- differences between approaches

↓

### Result
User sees:
- score
- key ideas reinforced
- practiced interpretation skills
- saved favorite insights, if any
- option to continue

---

## Notes

- Exploration and Quiz are separate phases
- Artworks are grouped by topic, with each topic selecting its own five-card artist set
- Quiz evaluates understanding of the topic, not individual works
- This creates a stronger learning arc: see → understand → reflect → test

## Decisions (confirmed)

- **Favorites** — keep (hearts on cards + Favorites list).
- **Flip cards** — keep (image on front; name, description, key insight on back).
- **Five-card grid** — keep (responsive grid, not a swipe carousel).
- **Coming-soon media** — keep Painting, Sculpture, and Performance visible but disabled until curated women-artist topics replace the practice content in `topicsBySeries` and `seriesArtists`.

---

## Implementation in `project/index.html` (current build)

- **States:** `landing` → `start` (select series) → `topic` (choose topic) → `explore` (explore five cards) → `question` → `afterQuestion` → `result`. **`favorites`** is available from exploration.
- **Topics:** `topicsBySeries` defines the live Photography topics and each topic’s `artistIndexes` selects the five cards shown in exploration.
- **Quiz:** Photography uses topic-specific questions. Practice topics still exist in data but are not selectable from the live UI.
- **Exploration:** Five **flip cards** in a **grid** (not a swipe carousel). Favorites, dual hearts, and Wikipedia **Learn more** are kept for engagement. Continue to quiz unlocks after two flipped cards. Favorites only show entries from the current live series.
