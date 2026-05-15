import { expect, test } from "@playwright/test";

import { getActiveQuizQuestions, topicsBySeries } from "../js/data.js";

const topicPromptChecks: Array<{
  seriesId: keyof typeof topicsBySeries;
  topicId: string;
  mustInclude: string;
}> = [
  {
    seriesId: "sculpture",
    topicId: "body",
    mustInclude: "Kiki Smith's Tale",
  },
  {
    seriesId: "sculpture",
    topicId: "space",
    mustInclude: "Ursula von Rydingsvard",
  },
  {
    seriesId: "sculpture",
    topicId: "material",
    mustInclude: "El Anatsui's large draped works",
  },
  {
    seriesId: "videoArt",
    topicId: "pioneeringSingle",
    mustInclude: "Ulrike Rosenbach",
  },
  {
    seriesId: "videoArt",
    topicId: "narrativeIdentity",
    mustInclude: "Dara Birnbaum",
  },
  {
    seriesId: "videoArt",
    topicId: "installationEnvironment",
    mustInclude: "Pipilotti Rist's installations",
  },
];

function topicById(
  seriesId: keyof typeof topicsBySeries,
  topicId: string
) {
  const topic = topicsBySeries[seriesId].find((t) => t.id === topicId);
  if (!topic) throw new Error(`Missing topic ${seriesId}/${topicId}`);
  return topic;
}

test("sculpture and video topics use dedicated quiz banks", () => {
  for (const { seriesId, topicId, mustInclude } of topicPromptChecks) {
    const topic = topicById(seriesId, topicId);
    const prompts = getActiveQuizQuestions(topic).map((q) => q.text);
    expect(prompts.length).toBe(5);
    expect(
      prompts.some((p) => p.includes(mustInclude)),
      `${seriesId}/${topicId} should include prompt containing: ${mustInclude}`
    ).toBe(true);
    expect(
      prompts.some((p) =>
        p.includes("A contemporary photograph restages a Madonna")
      ),
      `${seriesId}/${topicId} must not use legacy bank`
    ).toBe(false);
  }
});
