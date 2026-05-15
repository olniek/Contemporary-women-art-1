import { expect, test } from "@playwright/test";

import {
  getActiveQuizQuestions,
  newEmptyAnswers,
  seriesArtists,
  topicsBySeries,
} from "../js/data.js";

test("getActiveQuizQuestions length matches newEmptyAnswers for photography topics", () => {
  for (const topic of topicsBySeries.photography) {
    const bank = getActiveQuizQuestions(topic);
    const empty = newEmptyAnswers(topic);
    expect(empty.length, "answer buffer must match active quiz bank size").toBe(
      bank.length
    );
    expect(empty.every((x) => x === "")).toBe(true);
    expect(bank.length).toBe(5);
  }
});

test("live photography topics have complete content and valid image paths", async ({
  request,
}) => {
  for (const topic of topicsBySeries.photography) {
    expect(topic.title, "topic needs a title").toBeTruthy();
    expect(topic.description, `${topic.id} needs a description`).toBeTruthy();
    expect(topic.thesis, `${topic.id} needs a thesis`).toBeTruthy();
    expect(topic.keyIdeas, `${topic.id} needs key ideas`).toBeTruthy();
    expect(topic.result?.learnedIdeas?.length, `${topic.id} needs takeaways`).toBeGreaterThanOrEqual(3);

    expect(topic.artistIndexes?.length, `${topic.id} needs five card indexes`).toBe(5);
    for (const artistIndex of topic.artistIndexes || []) {
      const artist = seriesArtists.photography[artistIndex];
      expect(artist, `${topic.id} artist index ${artistIndex} must exist`).toBeTruthy();
      expect(artist.name, `${topic.id} artist ${artistIndex} needs a name`).toBeTruthy();
      expect(artist.workTitle, `${artist.name} needs a work title`).toBeTruthy();
      expect(artist.workYear, `${artist.name} needs a work year`).toBeTruthy();
      expect(artist.medium, `${artist.name} needs a medium`).toBeTruthy();
      expect(artist.credit, `${artist.name} needs a credit note`).toBeTruthy();
      expect(artist.imageAlt, `${artist.name} needs alt text`).toBeTruthy();

      const imageUrl = artist.image.replace(/^\.\./, "");
      const response = await request.get(imageUrl);
      expect(response.ok(), `${artist.name} image path should exist: ${artist.image}`).toBe(true);
    }

    const bank = getActiveQuizQuestions(topic);
    for (const question of bank) {
      expect(question.text, `${topic.id} question needs prompt`).toBeTruthy();
      expect(question.choices.length, `${topic.id} question needs 3 options`).toBe(3);
      expect(question.correctValue, `${topic.id} question needs answer`).toBeTruthy();
      expect(question.explanation, `${topic.id} question needs explanation`).toBeTruthy();
      expect(question.insight, `${topic.id} question needs insight`).toBeTruthy();
    }
  }
});
