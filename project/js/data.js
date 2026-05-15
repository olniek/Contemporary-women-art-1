/**
 * Curatorial content: series (medium), topics, artists, and quiz banks.
 * Migrated from the Claude code women artist 2 project and adapted to this app's data contract.
 */

export const legacyQuizQuestions = [
  {
    text: "A contemporary photograph restages a Madonna or saint. What is the most useful first question to ask?",
    choices: [
      {
        value: "0",
        label: "Who is allowed to look—and who is framed as worthy of being seen?",
        feedback: "Yes: this answer names the strongest interpretive pressure in the work."
      },
      {
        value: "1",
        label: "Whether the camera brand matches museum acquisition standards",
        feedback: "This is tempting, but it points away from the main visual and conceptual evidence."
      },
      {
        value: "2",
        label: "Whether the scene is a literal, factual record of an event",
        feedback: "This is tempting, but it points away from the main visual and conceptual evidence."
      }
    ],
    correctValue: "0",
    explanation: "Sacred figures in recent lens-based work usually rework power in looking: who performs holiness, who consumes the image, and what the staging admits about belief.",
    insight: "Let address and agency lead; technique almost always serves that argument rather than replacing it."
  },
  {
    text: "Why do curators often group women artists around themes instead of only by biography?",
    choices: [
      {
        value: "0",
        label: "Shared problems of form, politics, and reception cut across individual life stories",
        feedback: "Yes: this answer names the strongest interpretive pressure in the work."
      },
      {
        value: "1",
        label: "Birth years alone explain how artworks produce meaning",
        feedback: "This is tempting, but it points away from the main visual and conceptual evidence."
      },
      {
        value: "2",
        label: "Auction results are the primary tool for historical interpretation",
        feedback: "This is tempting, but it points away from the main visual and conceptual evidence."
      }
    ],
    correctValue: "0",
    explanation: "Thematic study keeps attention on how strategies travel—material choices, refusal, care, scale—without reducing artists to a single identity category.",
    insight: "A good theme names a pressure the works answer, not a box the artists are filed into."
  },
  {
    text: "An artist scrapes paint back to earlier layers. That gesture most often signals:",
    choices: [
      {
        value: "0",
        label: "Memory and doubt can live in what the surface refuses to show",
        feedback: "Yes: this answer names the strongest interpretive pressure in the work."
      },
      {
        value: "1",
        label: "The work is primarily about correcting a technical mistake",
        feedback: "This is tempting, but it points away from the main visual and conceptual evidence."
      },
      {
        value: "2",
        label: "Faster production is the main conceptual point",
        feedback: "This is tempting, but it points away from the main visual and conceptual evidence."
      }
    ],
    correctValue: "0",
    explanation: "Erasure and pentimento make time visible: the painting argues with its own past rather than presenting a single finished illusion.",
    insight: "Watch for what is withheld or reopened; absence is often as intentional as detail."
  },
  {
    text: "In sculpture, a polished plane meets a deliberately rough break. That contrast asks you to notice:",
    choices: [
      {
        value: "0",
        label: "Ethics of finish—what the maker smooths, reveals, or leaves risky to touch",
        feedback: "Yes: this answer names the strongest interpretive pressure in the work."
      },
      {
        value: "1",
        label: "Only the object’s weight in kilograms",
        feedback: "This is tempting, but it points away from the main visual and conceptual evidence."
      },
      {
        value: "2",
        label: "Color trends in interior design",
        feedback: "This is tempting, but it points away from the main visual and conceptual evidence."
      }
    ],
    correctValue: "0",
    explanation: "How matter is persuaded into form is part of the content: polish can flatter power; rupture can invite care, warning, or honesty about labor.",
    insight: "Let your body imagine walking around it—scale and touch are part of the meaning."
  },
  {
    text: "In performance, a simple action is repeated until the room’s attention shifts. The repetition is doing conceptual work when:",
    choices: [
      {
        value: "0",
        label: "Duration changes stakes—politeness, fatigue, or care become visible",
        feedback: "Yes: this answer names the strongest interpretive pressure in the work."
      },
      {
        value: "1",
        label: "The action is only decorative, with no change over time",
        feedback: "This is tempting, but it points away from the main visual and conceptual evidence."
      },
      {
        value: "2",
        label: "The score is random noise with no relation to bodies present",
        feedback: "This is tempting, but it points away from the main visual and conceptual evidence."
      }
    ],
    correctValue: "0",
    explanation: "Time-based work often tests what an audience will grant: patience, discomfort, or shared responsibility becomes part of the form.",
    insight: "Ask what changes between minute one and minute ten; the shift is usually the thesis."
  }
];

/**
 * Hand-written distractor feedback keyed by quiz prompt. Each entry is a 3-tuple
 * matching the prompt's `options` order. Used by topicQuizToLegacyQuestions so
 * authors only write feedback once per unique question even when a prompt is
 * reused across multiple topics within a series.
 *
 * When a prompt isn't in this map, a position-aware generic fallback is used.
 */
export const distractorFeedbackByPrompt = {
  "Cindy Sherman's Untitled Film Stills features which recurring subject?": [
    "Right—and the twist is that Sherman is never herself in any of them. The 'subject' is the archetype, not the woman.",
    "The city is rarely the subject in this series; Sherman keeps the camera close on a figure inside a constructed scene. The argument is about gendered types, not place.",
    "The pictures look like publicity stills, which is exactly the trap. No real actress appears—what you recognise is the visual language of Hollywood, restaged.",
  ],
  "Nan Goldin's The Ballad of Sexual Dependency began as what?": [
    "Yes—and the slideshow form is part of the politics: shown to the same circle it portrayed, set to music, never neutral or museum-distanced.",
    "The book is how most people meet the work today, but it came later. Starting with the book skips the live, communal context that shaped what Goldin could photograph.",
    "Goldin's intimacy with subjects can read as editorial, but the early work was non-commercial. Treating it as magazine assignment misses the consent and reciprocity at its core.",
  ],
  "Zanele Muholi describes their practice as 'visual activism'. This primarily refers to their work doing what?": [
    "Yes—Muholi treats the archive itself as activism: making images that mainstream record-keeping omitted.",
    "Muholi does push exposure in Somnyama Ngonyama, but the activism is about presence in the visual record, not technical manipulation. The politics lives in who is photographed, not in post-processing.",
    "South African history is the backdrop, but Muholi's work begins after apartheid's legal end, addressing the violence and erasure that continued. Reading it as protest documentation flattens the timeline.",
  ],
  "Dorothea Lange's Migrant Mother was taken during which historical event?": [
    "Yes—and remembering it was a federal commission (FSA) is part of the picture: documentary here is also state-funded persuasion.",
    "The Depression-era look can feel war-adjacent, but Migrant Mother predates WWII by years. Anchoring it to 1930s economic crisis matters for how the image was meant to function.",
    "The family had migrated from the Dust Bowl, so the option is partly true—but the FSA's commission, and the photograph's audience, were nation-wide Depression, not a single regional event.",
  ],
  "Francesca Woodman's photographs characteristically feature which quality?": [
    "Yes—the blur is the argument. Self-portrait becomes a question about whether the self stays put long enough to be seen.",
    "Woodman did photograph in New York late in her short life, but the signature is interior, architectural, slow-shutter—not street sharpness. The tempting answer maps the wrong genre onto her work.",
    "Her pictures are staged, so this almost works—but the staging is bare and found: peeling walls, empty rooms, her own body. Reading them as prop-rich studio work misses the deliberate stripping-back.",
  ],
  "Kiki Smith's Tale (1992) is notable for depicting the female body how?": [
    "Yes—Smith makes interior life and taboo processes visible rather than offering a polite, unified figure.",
    "Classical pedestal nudes smooth away the very processes Smith insists on showing.",
    "Hiding the face can be part of her work, but Tale's argument is about crawling, viscera, and refusal of decorum—not simple anonymity.",
  ],
  "Sarah Lucas's Au Naturel (1994) primarily uses what strategy?": [
    "Yes—readymades and crude wit deconstruct objectification without earnest protest slogans.",
    "Bronze fertility figures belong to a different sculptural genealogy than Lucas's mattresses and food.",
    "Medical illustration at scale is not how Lucas stages sexual politics in this work.",
  ],
  "Across Bourgeois, Smith, and Lucas, body sculpture in this topic most often refuses what?": [
    "Yes—each externalizes psychology, taboo, or desire; none offers a single decorous female image.",
    "Family and memory are central to Bourgeois, not absent from the topic.",
    "Non-traditional materials appear throughout; the shared refusal is about image, not material alone.",
  ],
  "Bourgeois linked the spider form to her mother's role as what?": [
    "Yes—weaving, care, and labor—not predation alone—tie Maman to her mother.",
    "Marble portraiture was not her mother's trade in Bourgeois's account.",
    "The Ballets Russes reference misreads the spider as mythic predator only.",
  ],
  "Ursula von Rydingsvard's cedar sculptures often evoke what surfaces?": [
    "Yes—gouged cedar reads as eroded land or hidden organs; scale is part of the argument.",
    "Machine-polished aluminum belongs to a different material politics.",
    "Neon signage is not how von Rydingsvard builds monument-scale cedar masses.",
  ],
  "Visitors to Lin's memorial characteristically see what in the polished granite?": [
    "Yes—the living viewer's reflection among the names makes mourning shared, not distant.",
    "Aerial maps are not what the chevron cut into the earth presents.",
    "Bronze action figures are precisely what Lin's design refuses.",
  ],
  "Spatial sculpture in this topic asks the viewer to do what first?": [
    "Yes—casts, cuts in earth, and monumental mass reorganize how your body relates to the work.",
    "A fixed label distance misses Whiteread, Lin, and von Rydingsvard's spatial arguments.",
    "Biography matters, but the first move here is bodily—through absence and scale.",
  ],
  "El Anatsui's large draped works are assembled primarily from what?": [
    "Yes—flattened bottle caps and foil map trade routes onto cloth-like surfaces.",
    "Hand-woven silk is not the primary substance of these fields.",
    "Concrete grids belong to a different sculptural language than Anatsui's draped metal.",
  ],
  "Anatsui's bottle-cap fields most directly reference which traditions?": [
    "Yes—kente-like patterning carries commodity history up close.",
    "European stained glass is not the primary reference for these shimmering fields.",
    "Origami folding is not how Anatsui builds monument-scale draped works.",
  ],
  "Material-led sculpture in this topic insists that what is never neutral?": [
    "Yes—substance and labor are part of the meaning for Hesse, Anatsui, and Leigh.",
    "Birth year alone does not carry the material argument these works make.",
    "Indoor display is secondary to what the materials remember and refuse.",
  ],
  "Ulrike Rosenbach's Don't Believe I Am an Amazon overlays live video of her face onto what?": [
    "Yes—Madonna iconography versus the living performing body is the confrontation.",
    "Protest news footage is not the overlay source in this work.",
    "Hollywood action stills misread Rosenbach's art-historical target.",
  ],
  "Shigeko Kubota's Duchampiana series is notable for placing video inside what kind of form?": [
    "Yes—embedded monitors in furniture and sculpture make your path through space part of the piece.",
    "Handheld viewfinders alone do not describe Kubota's architectural video objects.",
    "Facade projection keeps the screen at a distance Kubota deliberately collapses.",
  ],
  "Joan Jonas often incorporated which elements into early video performances?": [
    "Yes—mirrors, masks, and live feedback desynchronize body and mediated image.",
    "Dubbed Hollywood dialogue is not Jonas's early video strategy.",
    "Audience keypad voting is not how Jonas structured these performances.",
  ],
  "Shigeko Kubota was associated with which movement that treated everyday life and humor as art material?": [
    "Yes—Fluxus's cross-disciplinary spirit treats video as one material among many.",
    "Pop Art's commodity focus is not the primary lineage for Kubota's video sculptures.",
    "Arte Povera's poor materials overlap somewhat, but Fluxus names her network most directly.",
  ],
  "Dara Birnbaum's Technology/Transformation: Wonder Woman isolates which moment from the TV series?": [
    "Yes—the looped transformation sells female power as spectacular broadcast fantasy.",
    "The final fight scene is not what Birnbaum isolates and repeats.",
    "Credits alone miss the pyrotechnic transformation Birnbaum strips of narrative.",
  ],
  "Sadie Benning's early diary videos were shot with which device?": [
    "Yes—pixelvision from the PXL 2000 merges degraded image with queer teenage intimacy.",
    "16mm grain is not the signature look of Benning's early diaries.",
    "Studio broadcast cameras would erase the bedroom scale of these works.",
  ],
  "Amal Kenawy's Silence of the Lambs (2010) took place primarily where?": [
    "Yes—uninvited public crawling in Cairo streets confronts repression outside the gallery.",
    "Ticketed gallery entry misses the interventionist staging Kenawy used.",
    "State television sponsorship is not how this work entered public space.",
  ],
  "Birnbaum's Wonder Woman piece is an example of which strategy?": [
    "Yes—television clips become raw material for feminist re-cut critique.",
    "Direct cinema observation is not Birnbaum's method here.",
    "Abstract animation without figures is not what the loop presents.",
  ],
  "Benning's It Wasn't Love (1992) is associated with which thematic focus?": [
    "Yes—queer teenage desire through confessional pixelvision diary form.",
    "Plein-air landscape is not Benning's subject in this work.",
    "Midwest labor strikes are not the diary's focus.",
  ],
  "Pipilotti Rist's installations often project video onto which surfaces?": [
    "Yes—floor and ceiling projection immerse viewers inside the color field.",
    "Eye-level white walls preserve the detached cinema position Rist refuses.",
    "Outdoor billboards are not the primary installation surface in this argument.",
  ],
  "Hito Steyerl's How Not to Be Seen treats which phenomena as political material?": [
    "Yes—compression, format, and resolution are part of visibility and power.",
    "Oil varnish techniques belong to painting, not Steyerl's essay film logic.",
    "Concert-hall acoustics are outside this work's visual politics.",
  ],
  "Eija-Liisa Ahtila's multi-screen works require viewers to do what?": [
    "Yes—moving between projections assembles narrative distributed in space.",
    "VR headsets block the physical gallery path Ahtila's work depends on.",
    "A single assigned seat would negate the multi-screen edit.",
  ],
  "Rist's Ever Is Over All (1997) shows her doing what with a flower?": [
    "Yes—the slow-motion smash turns playful destruction into feminist spectacle.",
    "Community gardening is not the action in Ever Is Over All.",
    "Street-market flower selling is not what the work stages.",
  ],
  "Ahtila's Anne, Aki and God (1998) uses multiple screens primarily to depict what?": [
    "Yes—fragmented space mirrors disordered perception from inside psychosis.",
    "Weather alone does not require three synchronized narrative screens.",
    "Abstract color fields without figures are not what this installation presents.",
  ],
};

function genericFallbackFeedback(idx, correctIndex) {
  if (idx === correctIndex) {
    return "That reading tracks the strongest evidence in the work.";
  }
  if (idx === 0) {
    return "Plausible at first glance—but it leans on a surface reading that the work itself unsettles.";
  }
  if (idx === 1) {
    return "Tempting because it picks up a real feature of the work, but the central claim sits elsewhere.";
  }
  return "This draws on a common assumption about the medium. The work asks for closer attention to its specific staging.";
}

function topicQuizToLegacyQuestions(quiz, topic) {
  return (quiz || []).map((item) => {
    const promptFeedback = distractorFeedbackByPrompt[item.prompt];
    return {
      text: item.prompt,
      choices: (item.options || []).map((label, idx) => ({
        value: String(idx),
        label,
        feedback:
          item.feedback?.[idx] ||
          item.feedback?.[label] ||
          promptFeedback?.[idx] ||
          genericFallbackFeedback(idx, item.correctIndex ?? 0),
      })),
      correctValue: String(item.correctIndex ?? 0),
      explanation: item.explanation || "",
      insight:
        item.insight ||
        topic?.result?.nextFocus ||
        topic?.thesis ||
        "Notice how your next look shifts the pattern.",
    };
  });
}

export const seriesOptions = [
  {
    id: "photography",
    label: "Photography",
    description: "Lens-based work: portraiture, staging, documentary ethics, and images that rethink icons and the body.",
    status: "available"
  },
  {
    id: "painting",
    label: "Painting",
    description: "Surface, pigment, memory, and politics across abstraction, figuration, and narrative painting.",
    status: "available"
  },
  {
    id: "sculpture",
    label: "Sculpture",
    description: "Mass, material, space, and the body through sculpture, monuments, casting, and handmade form.",
    status: "available"
  },
  {
    id: "performance",
    label: "Performance",
    description: "Time, score, endurance, ritual, and audience as live artistic material.",
    status: "available"
  },
  {
    id: "videoArt",
    label: "Video Art",
    description: "Moving-image work: feedback, broadcast critique, installation, compression, and multi-screen narrative.",
    status: "available"
  }
];

export const topicsBySeries = {
  photography: [
    {
      id: "identity",
      title: "Identity",
      thesis: "Start with the gaze: who is seen, who is erased, and what the frame does to both.",
      description: "How contemporary photographers stage identity, community, and refusal—often turning the lens back on who gets to look.",
      previewImage: "../images/artists/zanele_muholi.jpg",
      previewImageAlt: "Photograph of Zanele Muholi.",
      keyIdeas: "Identity in recent photography is rarely a fixed label—it is negotiated through staging, seriality, and the politics of representation. Pay attention to who controls the camera and who bears the risk of visibility.",
      artistIndexes: [
        0,
        1,
        2,
        3,
        4
      ],
      artworks: [
        {
          see: "Somnyama Ngonyama (2012–ongoing)",
          how: "Visual Activism",
          meaning: "Muholi's self-portrait series Somnyama Ngonyama reclaims the Black gaze by manipulating exposure to hyperpigment their skin, turning the camera into an act of resistance."
        },
        {
          see: "The Ballad of Sexual Dependency (1986)",
          how: "Confessional Photography",
          meaning: "Goldin's The Ballad of Sexual Dependency is an intimate visual diary of her circle — capturing love, addiction, and violence with unflinching honesty in 1970s–80s New York."
        },
        {
          see: "Kitchen Table Series (1990)",
          how: "Conceptual Photography",
          meaning: "Weems's Kitchen Table Series uses a single domestic setting to explore the complexity of Black women's lives — relationships, solitude, power, and joy — through staged narrative sequences."
        }
      ],
      quiz: [
        {
          prompt: "Cindy Sherman's Untitled Film Stills features which recurring subject?",
          options: [
            "Herself staged as fictional female archetypes from cinema",
            "Abstract urban landscapes",
            "Documentary portraits of Hollywood actresses"
          ],
          correctIndex: 0,
          explanation: "Sherman plays every character herself, examining how cinema constructs femininity. The series contains 69 images — yet Sherman herself is never 'in' them as herself.",
          insight: "Compare two artists’ use of staging—what changes when the scene is domestic versus public?"
        },
        {
          prompt: "Nan Goldin's The Ballad of Sexual Dependency began as what?",
          options: [
            "A live slideshow shown in nightclubs set to music",
            "A book commissioned by a New York publisher",
            "A series of magazine commissions"
          ],
          correctIndex: 0,
          explanation: "It was a live slideshow screened in clubs like The Mudd Club, documenting Goldin's intimate circle in 1970s–80s New York. The book came later.",
          insight: "Compare two artists’ use of staging—what changes when the scene is domestic versus public?"
        },
        {
          prompt: "Zanele Muholi describes their practice as 'visual activism'. This primarily refers to their work doing what?",
          options: [
            "Documenting Black LGBTQIA+ lives in South Africa that mainstream media ignored",
            "Using digital manipulation to alter political photographs",
            "Photographing anti-apartheid protests in South Africa"
          ],
          correctIndex: 0,
          explanation: "Muholi coined the term to describe photography as a tool for social justice — specifically creating a visual archive of Black queer lives erased from public representation.",
          insight: "Compare two artists’ use of staging—what changes when the scene is domestic versus public?"
        },
        {
          prompt: "Dorothea Lange's Migrant Mother was taken during which historical event?",
          options: [
            "The Great Depression",
            "World War II",
            "The Dust Bowl migration alone"
          ],
          correctIndex: 0,
          explanation: "Taken in 1936 at a pea-pickers camp in California, it was commissioned by the Farm Security Administration to document conditions during the Great Depression.",
          insight: "Compare two artists’ use of staging—what changes when the scene is domestic versus public?"
        },
        {
          prompt: "Francesca Woodman's photographs characteristically feature which quality?",
          options: [
            "Blurred, ghostly self-portraits in decaying architectural spaces",
            "Sharply focused street photography in New York",
            "Staged studio portraits with elaborate props"
          ],
          correctIndex: 0,
          explanation: "Woodman used slow shutter speeds to create motion blur, making her own body merge with or disappear into the crumbling interiors she photographed — a visual metaphor for unstable selfhood.",
          insight: "Compare two artists’ use of staging—what changes when the scene is domestic versus public?"
        }
      ],
      result: {
        synthesis: "You practiced connecting single images to larger questions of power, care, and community.",
        strongestSkill: "Linking visual choices to social context without reducing artists to symbols.",
        nextFocus: "Compare two artists’ use of staging—what changes when the scene is domestic versus public?",
        learnedIdeas: [
          "Reading portraiture as argument, not neutral description",
          "Noticing how serial work builds meaning across repeated poses and settings",
          "Tracing how artists redirect or refuse the viewer’s expectations"
        ]
      }
    },
    {
      id: "documentary",
      title: "Documentary",
      thesis: "Ask what the picture wants from you as a viewer: empathy, action, or complicity.",
      description: "Witness, ethics, and the gap between event and image—when documentary work asks who the photograph serves.",
      previewImage: "../images/artists/dorothea_lange.jpg",
      previewImageAlt: "Black-and-white photograph (Migrant Mother): a weary mother rests her face on her hand; two children turn away from the camera.",
      keyIdeas: "Documentary photographs do not simply record reality—they shape how histories are remembered and funded. Ethical looking includes questioning assignment, editing, and circulation.",
      artistIndexes: [
        3,
        4,
        5,
        0,
        1
      ],
      artworks: [
        {
          see: "Migrant Mother (1936)",
          how: "Social Documentary",
          meaning: "Lange's Migrant Mother became the defining image of the Great Depression — a single photograph that galvanized public support for relief programs and changed how documentary photography was understood."
        },
        {
          see: "Nicaragua (1981)",
          how: "Photojournalism",
          meaning: "Meiselas embedded herself in the 1978–79 Nicaraguan revolution, creating images that blur the boundary between witness and participant — and raised lasting questions about photojournalistic ethics."
        },
        {
          see: "Small Wars (1999–2002)",
          how: "Documentary / War Photography",
          meaning: "Lê photographs military re-enactments and training exercises, using the gap between performance and reality to interrogate how America constructs and mythologizes war."
        }
      ],
      quiz: [
        {
          prompt: "Cindy Sherman's Untitled Film Stills features which recurring subject?",
          options: [
            "Herself staged as fictional female archetypes from cinema",
            "Abstract urban landscapes",
            "Documentary portraits of Hollywood actresses"
          ],
          correctIndex: 0,
          explanation: "Sherman plays every character herself, examining how cinema constructs femininity. The series contains 69 images — yet Sherman herself is never 'in' them as herself.",
          insight: "Ask what the picture wants from you as a viewer: empathy, action, or complicity."
        },
        {
          prompt: "Nan Goldin's The Ballad of Sexual Dependency began as what?",
          options: [
            "A live slideshow shown in nightclubs set to music",
            "A book commissioned by a New York publisher",
            "A series of magazine commissions"
          ],
          correctIndex: 0,
          explanation: "It was a live slideshow screened in clubs like The Mudd Club, documenting Goldin's intimate circle in 1970s–80s New York. The book came later.",
          insight: "Ask what the picture wants from you as a viewer: empathy, action, or complicity."
        },
        {
          prompt: "Zanele Muholi describes their practice as 'visual activism'. This primarily refers to their work doing what?",
          options: [
            "Documenting Black LGBTQIA+ lives in South Africa that mainstream media ignored",
            "Using digital manipulation to alter political photographs",
            "Photographing anti-apartheid protests in South Africa"
          ],
          correctIndex: 0,
          explanation: "Muholi coined the term to describe photography as a tool for social justice — specifically creating a visual archive of Black queer lives erased from public representation.",
          insight: "Ask what the picture wants from you as a viewer: empathy, action, or complicity."
        },
        {
          prompt: "Dorothea Lange's Migrant Mother was taken during which historical event?",
          options: [
            "The Great Depression",
            "World War II",
            "The Dust Bowl migration alone"
          ],
          correctIndex: 0,
          explanation: "Taken in 1936 at a pea-pickers camp in California, it was commissioned by the Farm Security Administration to document conditions during the Great Depression.",
          insight: "Ask what the picture wants from you as a viewer: empathy, action, or complicity."
        },
        {
          prompt: "Francesca Woodman's photographs characteristically feature which quality?",
          options: [
            "Blurred, ghostly self-portraits in decaying architectural spaces",
            "Sharply focused street photography in New York",
            "Staged studio portraits with elaborate props"
          ],
          correctIndex: 0,
          explanation: "Woodman used slow shutter speeds to create motion blur, making her own body merge with or disappear into the crumbling interiors she photographed — a visual metaphor for unstable selfhood.",
          insight: "Ask what the picture wants from you as a viewer: empathy, action, or complicity."
        }
      ],
      result: {
        synthesis: "You connected documentary to concrete choices in works by photography artists.",
        strongestSkill: "connect",
        nextFocus: "Compare two artists from documentary and name how each directs the viewer.",
        learnedIdeas: [
          "Separating testimony from spectacle in conflict and crisis imagery",
          "Following how captions and context shift a photograph’s meaning",
          "Asking who benefits when an image of crisis circulates"
        ]
      }
    },
    {
      id: "selfPortrait",
      title: "Self-Portrait",
      thesis: "Artists in self-portrait use photography to make power, memory, and spectatorship visible.",
      description: "Photography through self-portrait: key artists, works, and interpretive pressure points.",
      previewImage: "../images/artists/francesca_woodman.png",
      previewImageAlt: "Black-and-white self-portrait: figure hanging from a doorframe in a tiled room, arms raised.",
      keyIdeas: "Artists in self-portrait use photography to make power, memory, and spectatorship visible.",
      artistIndexes: [
        6,
        7,
        8,
        0,
        1
      ],
      artworks: [
        {
          see: "House Series (1975–76)",
          how: "Surrealist Photography",
          meaning: "Woodman made hundreds of photographs in decaying interiors, using slow shutter speeds to blur her own body into the architecture — exploring the female self as both present and dissolving."
        },
        {
          see: "Untitled Film Stills (1977–80)",
          how: "Postmodern Photography",
          meaning: "Sherman's Untitled Film Stills features herself as every character — each photograph a constructed archetype drawn from cinema's visual language of femininity, never once depicting 'Cindy Sherman'."
        },
        {
          see: "Waterbearer (1986)",
          how: "Conceptual Photography",
          meaning: "Simpson pairs photographs of Black women's bodies with fragmented text, refusing the viewer's gaze by showing subjects from behind — insisting on interiority over spectacle."
        }
      ],
      quiz: [
        {
          prompt: "Cindy Sherman's Untitled Film Stills features which recurring subject?",
          options: [
            "Herself staged as fictional female archetypes from cinema",
            "Abstract urban landscapes",
            "Documentary portraits of Hollywood actresses"
          ],
          correctIndex: 0,
          explanation: "Sherman plays every character herself, examining how cinema constructs femininity. The series contains 69 images — yet Sherman herself is never 'in' them as herself.",
          insight: "Keep connecting Self-Portrait to specific choices in the work."
        },
        {
          prompt: "Nan Goldin's The Ballad of Sexual Dependency began as what?",
          options: [
            "A live slideshow shown in nightclubs set to music",
            "A book commissioned by a New York publisher",
            "A series of magazine commissions"
          ],
          correctIndex: 0,
          explanation: "It was a live slideshow screened in clubs like The Mudd Club, documenting Goldin's intimate circle in 1970s–80s New York. The book came later.",
          insight: "Keep connecting Self-Portrait to specific choices in the work."
        },
        {
          prompt: "Zanele Muholi describes their practice as 'visual activism'. This primarily refers to their work doing what?",
          options: [
            "Documenting Black LGBTQIA+ lives in South Africa that mainstream media ignored",
            "Using digital manipulation to alter political photographs",
            "Photographing anti-apartheid protests in South Africa"
          ],
          correctIndex: 0,
          explanation: "Muholi coined the term to describe photography as a tool for social justice — specifically creating a visual archive of Black queer lives erased from public representation.",
          insight: "Keep connecting Self-Portrait to specific choices in the work."
        },
        {
          prompt: "Dorothea Lange's Migrant Mother was taken during which historical event?",
          options: [
            "The Great Depression",
            "World War II",
            "The Dust Bowl migration alone"
          ],
          correctIndex: 0,
          explanation: "Taken in 1936 at a pea-pickers camp in California, it was commissioned by the Farm Security Administration to document conditions during the Great Depression.",
          insight: "Keep connecting Self-Portrait to specific choices in the work."
        },
        {
          prompt: "Francesca Woodman's photographs characteristically feature which quality?",
          options: [
            "Blurred, ghostly self-portraits in decaying architectural spaces",
            "Sharply focused street photography in New York",
            "Staged studio portraits with elaborate props"
          ],
          correctIndex: 0,
          explanation: "Woodman used slow shutter speeds to create motion blur, making her own body merge with or disappear into the crumbling interiors she photographed — a visual metaphor for unstable selfhood.",
          insight: "Keep connecting Self-Portrait to specific choices in the work."
        }
      ],
      result: {
        synthesis: "You connected self-portrait to concrete choices in works by photography artists.",
        strongestSkill: "connect",
        nextFocus: "Compare two artists from self-portrait and name how each directs the viewer.",
        learnedIdeas: [
          "How self-portrait becomes visible through form and context.",
          "Why artist biographies matter most when tied to specific works.",
          "How quiz evidence should come from the object, not only the label."
        ]
      }
    }
  ],
  painting: [
    {
      id: "abstraction",
      title: "Abstraction",
      thesis: "Artists in abstraction use painting to make power, memory, and spectatorship visible.",
      description: "Painting through abstraction: key artists, works, and interpretive pressure points.",
      previewImage: "../images/artists/helen_frankenthaler.jpg",
      previewImageAlt: "Photograph of Helen Frankenthaler.",
      keyIdeas: "Artists in abstraction use painting to make power, memory, and spectatorship visible.",
      artistIndexes: [
        0,
        1,
        2,
        3,
        4
      ],
      artworks: [
        {
          see: "Mountains and Sea (1952)",
          how: "Color Field Painting",
          meaning: "Frankenthaler poured thinned paint directly onto unprimed canvas, inventing the soak-stain technique that defined Color Field painting. Her landmark Mountains and Sea transformed how a generation approached abstraction."
        },
        {
          see: "Untitled #1 (1988)",
          how: "Minimalism",
          meaning: "Martin's soft pencil grids on pale linen canvases are not cold minimalism but expressions of happiness and innocence — she described them as 'about beauty, and it's a simple subject.'"
        },
        {
          see: "The Seasons (1957)",
          how: "Abstract Expressionism",
          meaning: "Long overshadowed by her husband Jackson Pollock, Krasner's large-scale Abstract Expressionist works — including the collaged Night Journeys series made after his death — are now recognized as central to the movement."
        }
      ],
      quiz: [
        {
          prompt: "Helen Frankenthaler developed which painting technique central to Color Field painting?",
          options: [
            "Soak-stain — pouring thinned paint onto unprimed canvas",
            "Impasto — applying paint thickly with a palette knife",
            "Encaustic — painting with heated wax"
          ],
          correctIndex: 0,
          explanation: "Frankenthaler's soak-stain technique, developed in Mountains and Sea (1952), created luminous color that was of the canvas rather than on it — directly influencing Morris Louis and Kenneth Noland.",
          insight: "Keep connecting Abstraction to specific choices in the work."
        },
        {
          prompt: "Alice Neel is celebrated for painting subjects largely ignored by the mainstream art world. Which groups did she especially focus on?",
          options: [
            "Working-class New Yorkers, pregnant women, and LGBTQ+ individuals",
            "Wealthy Manhattan socialites",
            "Abstract Expressionist painters"
          ],
          correctIndex: 0,
          explanation: "Neel spent decades painting her Harlem and Upper West Side neighbors — a radical act of attention toward people the art world rendered invisible. Her late recognition came only after decades of neglect.",
          insight: "Keep connecting Abstraction to specific choices in the work."
        },
        {
          prompt: "Faith Ringgold's story quilts combine which two traditions?",
          options: [
            "West African textile tradition and American quilt-making",
            "Japanese woodblock printing and American folk art",
            "European oil painting and Native American beadwork"
          ],
          correctIndex: 0,
          explanation: "Ringgold began making quilts after museums refused to exhibit her protest paintings. The quilt format let her embed written narrative into a craft form with deep roots in Black women's culture.",
          insight: "Keep connecting Abstraction to specific choices in the work."
        },
        {
          prompt: "Jenny Saville's large-scale figurative paintings are known for depicting what?",
          options: [
            "The female body from confrontational, unconventional perspectives at monumental scale",
            "Landscapes of the Scottish Highlands",
            "Historical mythological scenes"
          ],
          correctIndex: 0,
          explanation: "Saville often paints herself or the female body from above or at extreme close range — flesh overflowing the frame — directly challenging the Western tradition of the idealized nude.",
          insight: "Keep connecting Abstraction to specific choices in the work."
        },
        {
          prompt: "Agnes Martin described her minimal grid paintings as expressing what?",
          options: [
            "Happiness, innocence, and classical beauty",
            "Industrial alienation and urban anxiety",
            "Political resistance and feminist anger"
          ],
          correctIndex: 0,
          explanation: "Martin wrote extensively that her paintings were about positive emotional states — joy, beauty, innocence. She resisted the Minimalist label, insisting her work was closer to Abstract Expressionism in intent.",
          insight: "Keep connecting Abstraction to specific choices in the work."
        }
      ],
      result: {
        synthesis: "You connected abstraction to concrete choices in works by painting artists.",
        strongestSkill: "connect",
        nextFocus: "Compare two artists from abstraction and name how each directs the viewer.",
        learnedIdeas: [
          "How abstraction becomes visible through form and context.",
          "Why artist biographies matter most when tied to specific works.",
          "How quiz evidence should come from the object, not only the label."
        ]
      }
    },
    {
      id: "figurative",
      title: "Figurative",
      thesis: "Artists in figurative use painting to make power, memory, and spectatorship visible.",
      description: "Painting through figurative: key artists, works, and interpretive pressure points.",
      previewImage: "../images/artists/alice_neel.jpg",
      previewImageAlt: "Photograph of Alice Neel.",
      keyIdeas: "Artists in figurative use painting to make power, memory, and spectatorship visible.",
      artistIndexes: [
        3,
        4,
        5,
        0,
        1
      ],
      artworks: [
        {
          see: "Andy Warhol (1970)",
          how: "Social Realism",
          meaning: "Neel painted the people mainstream art ignored: working-class New Yorkers, Black and Latino neighbors, pregnant women, and gay men — creating a radical portrait of 20th-century American life from the margins."
        },
        {
          see: "Propped (1992)",
          how: "Neo-Expressionism",
          meaning: "Saville paints the female body at monumental scale and from unconventional vantage points — looking down at flesh that overflows the frame — refusing the idealizing traditions of the nude."
        },
        {
          see: "Any Number of Preoccupations (2010)",
          how: "Figurative Painting",
          meaning: "Yiadom-Boakye paints fictional Black figures, composing them from imagination rather than life or reference. Her subjects suggest interiority without disclosure — neither portraits nor allegories."
        }
      ],
      quiz: [
        {
          prompt: "Helen Frankenthaler developed which painting technique central to Color Field painting?",
          options: [
            "Soak-stain — pouring thinned paint onto unprimed canvas",
            "Impasto — applying paint thickly with a palette knife",
            "Encaustic — painting with heated wax"
          ],
          correctIndex: 0,
          explanation: "Frankenthaler's soak-stain technique, developed in Mountains and Sea (1952), created luminous color that was of the canvas rather than on it — directly influencing Morris Louis and Kenneth Noland.",
          insight: "Keep connecting Figurative to specific choices in the work."
        },
        {
          prompt: "Alice Neel is celebrated for painting subjects largely ignored by the mainstream art world. Which groups did she especially focus on?",
          options: [
            "Working-class New Yorkers, pregnant women, and LGBTQ+ individuals",
            "Wealthy Manhattan socialites",
            "Abstract Expressionist painters"
          ],
          correctIndex: 0,
          explanation: "Neel spent decades painting her Harlem and Upper West Side neighbors — a radical act of attention toward people the art world rendered invisible. Her late recognition came only after decades of neglect.",
          insight: "Keep connecting Figurative to specific choices in the work."
        },
        {
          prompt: "Faith Ringgold's story quilts combine which two traditions?",
          options: [
            "West African textile tradition and American quilt-making",
            "Japanese woodblock printing and American folk art",
            "European oil painting and Native American beadwork"
          ],
          correctIndex: 0,
          explanation: "Ringgold began making quilts after museums refused to exhibit her protest paintings. The quilt format let her embed written narrative into a craft form with deep roots in Black women's culture.",
          insight: "Keep connecting Figurative to specific choices in the work."
        },
        {
          prompt: "Jenny Saville's large-scale figurative paintings are known for depicting what?",
          options: [
            "The female body from confrontational, unconventional perspectives at monumental scale",
            "Landscapes of the Scottish Highlands",
            "Historical mythological scenes"
          ],
          correctIndex: 0,
          explanation: "Saville often paints herself or the female body from above or at extreme close range — flesh overflowing the frame — directly challenging the Western tradition of the idealized nude.",
          insight: "Keep connecting Figurative to specific choices in the work."
        },
        {
          prompt: "Agnes Martin described her minimal grid paintings as expressing what?",
          options: [
            "Happiness, innocence, and classical beauty",
            "Industrial alienation and urban anxiety",
            "Political resistance and feminist anger"
          ],
          correctIndex: 0,
          explanation: "Martin wrote extensively that her paintings were about positive emotional states — joy, beauty, innocence. She resisted the Minimalist label, insisting her work was closer to Abstract Expressionism in intent.",
          insight: "Keep connecting Figurative to specific choices in the work."
        }
      ],
      result: {
        synthesis: "You connected figurative to concrete choices in works by painting artists.",
        strongestSkill: "connect",
        nextFocus: "Compare two artists from figurative and name how each directs the viewer.",
        learnedIdeas: [
          "How figurative becomes visible through form and context.",
          "Why artist biographies matter most when tied to specific works.",
          "How quiz evidence should come from the object, not only the label."
        ]
      }
    },
    {
      id: "political",
      title: "Political",
      thesis: "Artists in political use painting to make power, memory, and spectatorship visible.",
      description: "Painting through political: key artists, works, and interpretive pressure points.",
      previewImage: "../images/artists/faith_ringgold.jpg",
      previewImageAlt: "Photograph of Faith Ringgold.",
      keyIdeas: "Artists in political use painting to make power, memory, and spectatorship visible.",
      artistIndexes: [
        6,
        7,
        8,
        0,
        1
      ],
      artworks: [
        {
          see: "Tar Beach (1988)",
          how: "Narrative Art",
          meaning: "Ringgold's story quilts merge West African textile tradition with American quilt-making and narrative text — using a domestic craft historically associated with Black women to tell stories that museums once refused to exhibit."
        },
        {
          see: "A Subtlety (2014)",
          how: "Neo-Conceptualism",
          meaning: "Walker's large-scale black silhouettes stage grotesque tableaux of slavery's violence and sexual exploitation — using a genteel 19th-century art form to force confrontation with histories Americans prefer to obscure."
        },
        {
          see: "Horizontale (2003)",
          how: "Neo-Expressionism",
          meaning: "Brown's densely layered paintings hover between figuration and abstraction — bodies, landscapes, and violence blur together in surfaces that reward sustained looking and resist easy resolution."
        }
      ],
      quiz: [
        {
          prompt: "Helen Frankenthaler developed which painting technique central to Color Field painting?",
          options: [
            "Soak-stain — pouring thinned paint onto unprimed canvas",
            "Impasto — applying paint thickly with a palette knife",
            "Encaustic — painting with heated wax"
          ],
          correctIndex: 0,
          explanation: "Frankenthaler's soak-stain technique, developed in Mountains and Sea (1952), created luminous color that was of the canvas rather than on it — directly influencing Morris Louis and Kenneth Noland.",
          insight: "Keep connecting Political to specific choices in the work."
        },
        {
          prompt: "Alice Neel is celebrated for painting subjects largely ignored by the mainstream art world. Which groups did she especially focus on?",
          options: [
            "Working-class New Yorkers, pregnant women, and LGBTQ+ individuals",
            "Wealthy Manhattan socialites",
            "Abstract Expressionist painters"
          ],
          correctIndex: 0,
          explanation: "Neel spent decades painting her Harlem and Upper West Side neighbors — a radical act of attention toward people the art world rendered invisible. Her late recognition came only after decades of neglect.",
          insight: "Keep connecting Political to specific choices in the work."
        },
        {
          prompt: "Faith Ringgold's story quilts combine which two traditions?",
          options: [
            "West African textile tradition and American quilt-making",
            "Japanese woodblock printing and American folk art",
            "European oil painting and Native American beadwork"
          ],
          correctIndex: 0,
          explanation: "Ringgold began making quilts after museums refused to exhibit her protest paintings. The quilt format let her embed written narrative into a craft form with deep roots in Black women's culture.",
          insight: "Keep connecting Political to specific choices in the work."
        },
        {
          prompt: "Jenny Saville's large-scale figurative paintings are known for depicting what?",
          options: [
            "The female body from confrontational, unconventional perspectives at monumental scale",
            "Landscapes of the Scottish Highlands",
            "Historical mythological scenes"
          ],
          correctIndex: 0,
          explanation: "Saville often paints herself or the female body from above or at extreme close range — flesh overflowing the frame — directly challenging the Western tradition of the idealized nude.",
          insight: "Keep connecting Political to specific choices in the work."
        },
        {
          prompt: "Agnes Martin described her minimal grid paintings as expressing what?",
          options: [
            "Happiness, innocence, and classical beauty",
            "Industrial alienation and urban anxiety",
            "Political resistance and feminist anger"
          ],
          correctIndex: 0,
          explanation: "Martin wrote extensively that her paintings were about positive emotional states — joy, beauty, innocence. She resisted the Minimalist label, insisting her work was closer to Abstract Expressionism in intent.",
          insight: "Keep connecting Political to specific choices in the work."
        }
      ],
      result: {
        synthesis: "You connected political to concrete choices in works by painting artists.",
        strongestSkill: "connect",
        nextFocus: "Compare two artists from political and name how each directs the viewer.",
        learnedIdeas: [
          "How political becomes visible through form and context.",
          "Why artist biographies matter most when tied to specific works.",
          "How quiz evidence should come from the object, not only the label."
        ]
      }
    }
  ],
  sculpture: [
    {
      id: "body",
      title: "Body",
      thesis: "Walk around the form: what is inside the skin, and what culture refuses to name?",
      description: "Sculpture that makes the body visible—organs, desire, family memory, and taboo rendered as matter.",
      previewImage: "../images/artists/louise_bourgeois.jpg",
      previewImageAlt: "Photograph of Louise Bourgeois.",
      keyIdeas: "Body sculpture often externalizes interior life or domestic psychology. Compare symbolic scale (Bourgeois) with anatomical exposure (Smith) and crude readymade wit (Lucas)—each refuses a single, polite image of the female body.",
      artistIndexes: [
        0,
        1,
        2,
        3,
        4
      ],
      artworks: [
        {
          see: "Maman (1999)",
          how: "Feminist Art / Surrealism",
          meaning: "Bourgeois spent seven decades making art about the body, memory, and family. Her giant spider sculptures Maman represent her mother — described as patient, protective, and industrious as a weaver."
        },
        {
          see: "Tale (1992)",
          how: "Feminist Art",
          meaning: "Smith makes the interior of the body visible — casting organs, trailing viscera, depicting bodily processes that culture renders taboo. Tale features a female figure crawling, with a long tail behind her."
        },
        {
          see: "Au Naturel (1994)",
          how: "YBA / Feminist Art",
          meaning: "Lucas's sculptures use everyday objects — mattresses, toilets, fried eggs, cigarettes — to deconstruct the sexual objectification of women through crude, sardonic wit rather than earnest protest."
        }
      ],
      quiz: [
        {
          prompt: "Louise Bourgeois's giant spider sculptures, Maman, represent what personal figure?",
          options: [
            "Her mother, whom she described as patient, protective, and industrious as a weaver",
            "Her father, who ran a tapestry restoration business",
            "An imaginary childhood monster she feared"
          ],
          correctIndex: 0,
          explanation: "Bourgeois often said: 'My best friend was my mother — she was deliberate, clever, patient, soothing, reasonable, dainty, indispensable, neat, and as useful as a spider.'",
          insight: "Compare Bourgeois's spider and Lucas's mattress—what changes when the body is mythic versus domestic?"
        },
        {
          prompt: "Kiki Smith's Tale (1992) is notable for depicting the female body how?",
          options: [
            "Crawling, with viscera and bodily processes culture treats as taboo",
            "As an idealized classical nude on a pedestal",
            "Only from behind, with the face never shown"
          ],
          correctIndex: 0,
          explanation: "Smith makes interior life visible—organs, trailing matter, processes usually hidden—refusing a single polite image of the female body.",
          insight: "Ask what the work exposes that galleries usually smooth away; taboo is often the subject, not a shock tactic."
        },
        {
          prompt: "Sarah Lucas's Au Naturel (1994) primarily uses what strategy?",
          options: [
            "Everyday objects such as mattresses and food to mock sexual objectification with sardonic wit",
            "Cast bronze replicas of ancient fertility figures",
            "Medical illustrations enlarged to monumental scale"
          ],
          correctIndex: 0,
          explanation: "Lucas deconstructs objectification through crude readymades—mattresses, cigarettes, fried eggs—rather than earnest protest slogans.",
          insight: "Compare Bourgeois's spider and Lucas's mattress—what changes when the body is mythic versus domestic?"
        },
        {
          prompt: "Across Bourgeois, Smith, and Lucas, body sculpture in this topic most often refuses what?",
          options: [
            "A single, decorous image of the female body",
            "Any reference to family or memory",
            "Use of non-traditional materials"
          ],
          correctIndex: 0,
          explanation: "Each artist externalizes psychology, taboo, or desire in matter—none offers a polite, unified figure.",
          insight: "Compare Bourgeois's spider and Lucas's mattress—what changes when the body is mythic versus domestic?"
        },
        {
          prompt: "Bourgeois linked the spider form to her mother's role as what?",
          options: [
            "A weaver—patient, protective, and industrious",
            "A sculptor who carved marble portraits",
            "A dancer in the Ballets Russes"
          ],
          correctIndex: 0,
          explanation: "She described her mother as deliberate and useful 'as a spider,' tying Maman to weaving, care, and labor—not predation alone.",
          insight: "Compare Bourgeois's spider and Lucas's mattress—what changes when the body is mythic versus domestic?"
        }
      ],
      result: {
        synthesis: "You practiced linking material form to psychology, taboo, and family narrative.",
        strongestSkill: "Connecting symbolic or readymade bodies to the social codes they challenge.",
        nextFocus: "Compare Bourgeois's spider and Lucas's mattress—what changes when the body is mythic versus domestic?",
        learnedIdeas: [
          "Reading scale and symbol as personal memory, not decoration",
          "Noticing when sculpture exposes interior or taboo bodily processes",
          "Tracing how everyday objects can carry sexual politics without earnest protest"
        ]
      }
    },
    {
      id: "space",
      title: "Space",
      thesis: "Notice what the sculpture occupies: a cast void, a cut in earth, or a landscape at human scale.",
      description: "Works that reshape rooms, memorials, and negative space—architecture without walls.",
      previewImage: "../images/artists/rachel_whiteread.jpg",
      previewImageAlt: "Photograph of Rachel Whiteread.",
      keyIdeas: "Spatial sculpture asks you to move through absence and monument. Whiteread solidifies air; Lin cuts memory into the ground; von Rydingsvard builds cedar masses that feel like eroded land or hidden organs—scale is always part of the argument.",
      artistIndexes: [
        3,
        4,
        5,
        0,
        1
      ],
      artworks: [
        {
          see: "Ghost (1990)",
          how: "Conceptual Sculpture",
          meaning: "Whiteread casts the negative space inside and around ordinary objects — the air under a chair, the inside of a room — making invisible domestic space tangible and monumental."
        },
        {
          see: "Vietnam Veterans Memorial (1982)",
          how: "Environmental Art",
          meaning: "Lin's Vietnam Veterans Memorial refuses heroic imagery entirely — a black granite chevron cut into the earth, listing 58,000 names. Visitors see their own reflection in the names of the dead."
        },
        {
          see: "For Paul (1992)",
          how: "Contemporary Sculpture",
          meaning: "Von Rydingsvard builds massive sculptures from thousands of cedar beams, cutting and gouging them with chainsaws and chisels to create surfaces that resemble eroded landscape or interior organs."
        }
      ],
      quiz: [
        {
          prompt: "Rachel Whiteread is best known for casting what?",
          options: [
            "The negative space inside and around everyday objects",
            "The faces of living subjects in plaster",
            "Bronze figurative sculptures of historical figures"
          ],
          correctIndex: 0,
          explanation: "Ghost cast the interior air of an entire Victorian living room. House cast the inside of a condemned terraced house. Whiteread makes absence visible and solid.",
          insight: "Cast voids flip your attention from object to air—ask what room or life the solidified absence once held."
        },
        {
          prompt: "Maya Lin's Vietnam Veterans Memorial deliberately avoids what?",
          options: [
            "Heroic imagery — it lists only names, cut into the earth",
            "Using the color black",
            "Any reference to the war's geography"
          ],
          correctIndex: 0,
          explanation: "Lin's design was deeply controversial precisely because it refuses triumphalism. There are no soldiers, weapons, or eagles — only names in polished black granite that reflects visitors' own images.",
          insight: "Stand in front of a Whiteread cast and a Lin memorial—what does each ask your body to do?"
        },
        {
          prompt: "Ursula von Rydingsvard's cedar sculptures often evoke what surfaces?",
          options: [
            "Eroded landscape or interior organs gouged from wood",
            "Polished machine-finished aluminum",
            "Neon-lit commercial signage"
          ],
          correctIndex: 0,
          explanation: "She cuts thousands of cedar beams with chainsaws and chisels until the mass feels like land or hidden bodily forms—scale is part of the argument.",
          insight: "Stand in front of a Whiteread cast and a Lin memorial—what does each ask your body to do?"
        },
        {
          prompt: "Visitors to Lin's memorial characteristically see what in the polished granite?",
          options: [
            "Their own reflection among the names of the dead",
            "Only aerial maps of Vietnam",
            "Bronze statues of soldiers in action"
          ],
          correctIndex: 0,
          explanation: "The chevron cut into the earth lists names while mirroring the living viewer—mourning becomes shared, not distant spectacle.",
          insight: "Stand in front of a Whiteread cast and a Lin memorial—what does each ask your body to do?"
        },
        {
          prompt: "Spatial sculpture in this topic asks the viewer to do what first?",
          options: [
            "Move through absence, monument, or scale—not only look from one spot",
            "Read a wall label from a fixed distance only",
            "Ignore material in favor of biography"
          ],
          correctIndex: 0,
          explanation: "Whiteread's casts, Lin's cut in the earth, and von Rydingsvard's masses all reorganize how your body relates to the work.",
          insight: "Stand in front of a Whiteread cast and a Lin memorial—what does each ask your body to do?"
        }
      ],
      result: {
        synthesis: "You practiced reading sculpture as something you walk through, not only look at.",
        strongestSkill: "Linking spatial choices to memory, mourning, and public responsibility.",
        nextFocus: "Stand in front of a Whiteread cast and a Lin memorial—what does each ask your body to do?",
        learnedIdeas: [
          "Treating negative space and casts as positive sculptural form",
          "Reading memorial design as refusal or invitation of certain emotions",
          "Following how monumental scale changes bodily relation to the work"
        ]
      }
    },
    {
      id: "material",
      title: "Material",
      thesis: "Ask what the material remembers: trade, decay, craft, and the hands that shaped it.",
      description: "Matter as argument—unstable polymers, recycled metal, cedar labor, and craft at monument scale.",
      previewImage: "../images/artists/eva_hesse.jpg",
      previewImageAlt: "Photograph of Eva Hesse.",
      keyIdeas: "Material-led sculpture treats process and substance as content. Hesse's sagging latex critiques timeless geometry; Anatsui's bottle-cap fields map global trade onto cloth-like surfaces; Leigh fuses figure and vernacular architecture—each insists that what things are made of is never neutral.",
      artistIndexes: [
        6,
        7,
        8,
        0,
        1
      ],
      artworks: [
        {
          see: "Hang Up (1966)",
          how: "Post-Minimalism",
          meaning: "Hesse transformed Post-Minimalism by introducing latex, rope, and fiberglass — organic, unstable materials that sag, droop, and decay. Her work insists on the absurd and the bodily within geometric form."
        },
        {
          see: "Dusasa I (2007)",
          how: "Contemporary African Art",
          meaning: "Anatsui creates large-scale tapestry-like sculptures from thousands of flattened bottle caps and aluminum foil, referencing both African kente cloth and the global trade routes that brought alcohol to West Africa."
        },
        {
          see: "Brick House (2019)",
          how: "Black Feminism / Sculpture",
          meaning: "Leigh merges the female figure with architectural forms drawn from African vernacular buildings — thatched roofs, granaries, jugs. Brick House rose four stories as the US Pavilion centerpiece at Venice 2022."
        }
      ],
      quiz: [
        {
          prompt: "Eva Hesse's post-minimalist sculptures are characterized by using what kinds of materials?",
          options: [
            "Industrial and organic materials like latex, rope, and fiberglass that sag and decay",
            "Traditional bronze and marble casting",
            "Welded steel and painted aluminum"
          ],
          correctIndex: 0,
          explanation: "Hesse deliberately chose unstable materials that change over time — latex yellows and cracks, rope sags. This impermanence was central to her critique of Minimalism's claim to timeless geometric purity.",
          insight: "Decay is part of the work's argument—notice when permanence would have been the more conservative choice."
        },
        {
          prompt: "El Anatsui's large draped works are assembled primarily from what?",
          options: [
            "Thousands of flattened bottle caps and aluminum foil",
            "Hand-woven silk threads dyed with plant pigments",
            "Cast concrete blocks arranged in grids"
          ],
          correctIndex: 0,
          explanation: "He links African textile traditions with the global trade routes that brought alcohol to West Africa—material memory is never neutral.",
          insight: "Compare Hesse's unstable hangings with Anatsui's draped metal—what does each material refuse to hide?"
        },
        {
          prompt: "Simone Leigh's Brick House merges the female figure with what?",
          options: [
            "Architectural forms referencing African vernacular buildings",
            "Industrial machinery and scaffolding",
            "Classical Greek architectural columns"
          ],
          correctIndex: 0,
          explanation: "Leigh fused a monumental Black female bust with a skirt resembling a thatched African granary. The title references both the idiom for a large woman and architecture as a carrier of cultural memory.",
          insight: "Compare Hesse's unstable hangings with Anatsui's draped metal—what does each material refuse to hide?"
        },
        {
          prompt: "Anatsui's bottle-cap fields most directly reference which traditions?",
          options: [
            "African kente cloth and patterns of global trade",
            "European cathedral stained glass",
            "Japanese origami and paper folding"
          ],
          correctIndex: 0,
          explanation: "The shimmering fields read as textile from a distance while carrying the history of commodities and exchange up close.",
          insight: "Compare Hesse's unstable hangings with Anatsui's draped metal—what does each material refuse to hide?"
        },
        {
          prompt: "Material-led sculpture in this topic insists that what is never neutral?",
          options: [
            "What things are made of and the labor that shaped them",
            "The artist's birth year alone",
            "Whether the work is displayed indoors"
          ],
          correctIndex: 0,
          explanation: "Hesse's decaying polymers, Anatsui's recycled metal, and Leigh's architectural clay all make substance and process part of the meaning.",
          insight: "Compare Hesse's unstable hangings with Anatsui's draped metal—what does each material refuse to hide?"
        }
      ],
      result: {
        synthesis: "You practiced reading material choice as politics, memory, and bodily metaphor.",
        strongestSkill: "Connecting substance and making process to the ideas the work carries.",
        nextFocus: "Compare Hesse's unstable hangings with Anatsui's draped metal—what does each material refuse to hide?",
        learnedIdeas: [
          "Recognizing impermanence and decay as deliberate sculptural choices",
          "Tracing recycled or industrial materials back to economic histories",
          "Seeing how craft labor and cultural reference merge in monumental form"
        ]
      }
    }
  ],
  performance: [
    {
      id: "bodyAsMedium",
      title: "Body as Medium",
      thesis: "Artists in body as medium use performance to make power, memory, and spectatorship visible.",
      description: "Performance through body as medium: key artists, works, and interpretive pressure points.",
      previewImage: "../images/artists/marina_abramovic.jpg",
      previewImageAlt: "Photograph of Marina Abramović.",
      keyIdeas: "Artists in body as medium use performance to make power, memory, and spectatorship visible.",
      artistIndexes: [
        0,
        1,
        2,
        3,
        4
      ],
      artworks: [
        {
          see: "The Artist is Present (2010)",
          how: "Performance Art",
          meaning: "Abramović's The Artist is Present placed her silently opposite museum visitors for 736 hours — testing the limits of presence, endurance, and what it means to truly see and be seen by another person."
        },
        {
          see: "Cut Piece (1964)",
          how: "Conceptual Art / Fluxus",
          meaning: "Cut Piece invited audience members to cut away Ono's clothing with scissors — transferring agency to the viewer and exposing the violence latent in looking, long before this language entered mainstream feminist theory."
        },
        {
          see: "Silueta Series (1973–80)",
          how: "Earth-Body Art",
          meaning: "Mendieta's Silueta Series documented her imprinting her body's outline into earth, sand, and natural materials — merging the female form with landscape as a search for belonging between her Cuban heritage and American exile."
        }
      ],
      quiz: [
        {
          prompt: "Marina Abramović's The Artist is Present at MoMA (2010) involved her doing what?",
          options: [
            "Sitting silently opposite museum visitors for 736 hours across 79 days",
            "Creating a large-scale painting live over three months",
            "Re-enacting her early dangerous performances with a stand-in"
          ],
          correctIndex: 0,
          explanation: "Abramović sat motionless at a table for the entire duration of the exhibition. Over 1,500 visitors sat opposite her — many reported profound emotional experiences. The queues lasted hours.",
          insight: "Keep connecting Body as Medium to specific choices in the work."
        },
        {
          prompt: "Yoko Ono's Cut Piece (1964) invited the audience to do what?",
          options: [
            "Cut away her clothing with scissors",
            "Cut their own hair and place it on the stage",
            "Cut paper into shapes spelling words"
          ],
          correctIndex: 0,
          explanation: "Ono sat passively as audience members cut her clothing away piece by piece. The performance made visible the power dynamics of spectatorship — who looks, who is exposed, who controls the gaze.",
          insight: "Keep connecting Body as Medium to specific choices in the work."
        },
        {
          prompt: "Ana Mendieta's Silueta Series involved which action?",
          options: [
            "Imprinting her body's outline into earth, sand, and natural materials",
            "Painting self-portraits in her studio using her own blood",
            "Filming her body in free-fall from tall buildings"
          ],
          correctIndex: 0,
          explanation: "Mendieta traveled to Mexico and Cuba to make these works, pressing her body into the land. The series responds to her forced exile from Cuba at age 12 — a search for belonging through the body's union with earth.",
          insight: "Keep connecting Body as Medium to specific choices in the work."
        },
        {
          prompt: "Carolee Schneemann's Interior Scroll (1975) is known for what act?",
          options: [
            "Drawing a scroll from her vagina and reading it aloud as a text on female creativity",
            "Writing feminist theory on the walls of a gallery in her own blood",
            "Unrolling an enormous canvas scroll across a performance space"
          ],
          correctIndex: 0,
          explanation: "The text on the scroll was a critique of a male filmmaker who dismissed her work as 'personal clutter.' The act insisted the female body is a source of intellectual authority, not merely an object of the male gaze.",
          insight: "Keep connecting Body as Medium to specific choices in the work."
        },
        {
          prompt: "Coco Fusco and Guillermo Gómez-Peña's cage performance Two Undiscovered Amerindians was intended to satirize what?",
          options: [
            "The Western history of displaying colonised and indigenous peoples as exotic spectacles",
            "The commercialization of indigenous crafts in tourist markets",
            "The immigration enforcement system at the US-Mexico border"
          ],
          correctIndex: 0,
          explanation: "Performed at the 1992 Columbus quincentennial, many audiences believed they were seeing real 'undiscovered' people — inadvertently proving that the colonial impulse to exoticize the other had never ended.",
          insight: "Keep connecting Body as Medium to specific choices in the work."
        }
      ],
      result: {
        synthesis: "You connected body as medium to concrete choices in works by performance artists.",
        strongestSkill: "connect",
        nextFocus: "Compare two artists from body as medium and name how each directs the viewer.",
        learnedIdeas: [
          "How body as medium becomes visible through form and context.",
          "Why artist biographies matter most when tied to specific works.",
          "How quiz evidence should come from the object, not only the label."
        ]
      }
    },
    {
      id: "duration",
      title: "Duration",
      thesis: "Artists in duration use performance to make power, memory, and spectatorship visible.",
      description: "Performance through duration: key artists, works, and interpretive pressure points.",
      previewImage: "../images/artists/tehching_hsieh.jpg",
      previewImageAlt: "Photograph of Tehching Hsieh.",
      keyIdeas: "Artists in duration use performance to make power, memory, and spectatorship visible.",
      artistIndexes: [
        3,
        4,
        5,
        0,
        1
      ],
      artworks: [
        {
          see: "One Year Performance (1980–81)",
          how: "Endurance Art",
          meaning: "Hsieh's One Year Performances subjected his body to extreme constraints for exactly 365 days — punching a time clock every hour, living outdoors, never entering buildings. Art as a record of time itself."
        },
        {
          see: "Catalysis (1970–71)",
          how: "Conceptual Art",
          meaning: "Piper's Catalysis performances took place in public — she rode the subway smelling of vinegar, or wore a sign reading 'Wet Paint' — inserting discomfort into everyday space to expose social codes governing public behavior."
        },
        {
          see: "Interior Scroll (1975)",
          how: "Feminist Performance",
          meaning: "Schneemann's Interior Scroll involved drawing a text from her vagina and reading it aloud — directly asserting the female body as a site of intellectual and creative authority against the erasure of women's voices."
        }
      ],
      quiz: [
        {
          prompt: "Marina Abramović's The Artist is Present at MoMA (2010) involved her doing what?",
          options: [
            "Sitting silently opposite museum visitors for 736 hours across 79 days",
            "Creating a large-scale painting live over three months",
            "Re-enacting her early dangerous performances with a stand-in"
          ],
          correctIndex: 0,
          explanation: "Abramović sat motionless at a table for the entire duration of the exhibition. Over 1,500 visitors sat opposite her — many reported profound emotional experiences. The queues lasted hours.",
          insight: "Keep connecting Duration to specific choices in the work."
        },
        {
          prompt: "Yoko Ono's Cut Piece (1964) invited the audience to do what?",
          options: [
            "Cut away her clothing with scissors",
            "Cut their own hair and place it on the stage",
            "Cut paper into shapes spelling words"
          ],
          correctIndex: 0,
          explanation: "Ono sat passively as audience members cut her clothing away piece by piece. The performance made visible the power dynamics of spectatorship — who looks, who is exposed, who controls the gaze.",
          insight: "Keep connecting Duration to specific choices in the work."
        },
        {
          prompt: "Ana Mendieta's Silueta Series involved which action?",
          options: [
            "Imprinting her body's outline into earth, sand, and natural materials",
            "Painting self-portraits in her studio using her own blood",
            "Filming her body in free-fall from tall buildings"
          ],
          correctIndex: 0,
          explanation: "Mendieta traveled to Mexico and Cuba to make these works, pressing her body into the land. The series responds to her forced exile from Cuba at age 12 — a search for belonging through the body's union with earth.",
          insight: "Keep connecting Duration to specific choices in the work."
        },
        {
          prompt: "Carolee Schneemann's Interior Scroll (1975) is known for what act?",
          options: [
            "Drawing a scroll from her vagina and reading it aloud as a text on female creativity",
            "Writing feminist theory on the walls of a gallery in her own blood",
            "Unrolling an enormous canvas scroll across a performance space"
          ],
          correctIndex: 0,
          explanation: "The text on the scroll was a critique of a male filmmaker who dismissed her work as 'personal clutter.' The act insisted the female body is a source of intellectual authority, not merely an object of the male gaze.",
          insight: "Keep connecting Duration to specific choices in the work."
        },
        {
          prompt: "Coco Fusco and Guillermo Gómez-Peña's cage performance Two Undiscovered Amerindians was intended to satirize what?",
          options: [
            "The Western history of displaying colonised and indigenous peoples as exotic spectacles",
            "The commercialization of indigenous crafts in tourist markets",
            "The immigration enforcement system at the US-Mexico border"
          ],
          correctIndex: 0,
          explanation: "Performed at the 1992 Columbus quincentennial, many audiences believed they were seeing real 'undiscovered' people — inadvertently proving that the colonial impulse to exoticize the other had never ended.",
          insight: "Keep connecting Duration to specific choices in the work."
        }
      ],
      result: {
        synthesis: "You connected duration to concrete choices in works by performance artists.",
        strongestSkill: "connect",
        nextFocus: "Compare two artists from duration and name how each directs the viewer.",
        learnedIdeas: [
          "How duration becomes visible through form and context.",
          "Why artist biographies matter most when tied to specific works.",
          "How quiz evidence should come from the object, not only the label."
        ]
      }
    },
    {
      id: "ritual",
      title: "Ritual",
      thesis: "Artists in ritual use performance to make power, memory, and spectatorship visible.",
      description: "Performance through ritual: key artists, works, and interpretive pressure points.",
      previewImage: "../images/artists/coco_fusco.jpg",
      previewImageAlt: "Photograph of Coco Fusco.",
      keyIdeas: "Artists in ritual use performance to make power, memory, and spectatorship visible.",
      artistIndexes: [
        6,
        7,
        8,
        0,
        1
      ],
      artworks: [
        {
          see: "Two Undiscovered Amerindians (1992)",
          how: "Post-Colonial Performance",
          meaning: "Fusco and Guillermo Gómez-Peña spent three days in a cage at the 1992 Columbus quincentennial, posing as 'undiscovered Amerindians' — exposing how Western institutions had always displayed colonised bodies as spectacle."
        },
        {
          see: "Mlle Bourgeoise Noire (1980–83)",
          how: "Institutional Critique",
          meaning: "O'Grady's Mlle Bourgeoise Noire crashed white art world openings wearing a gown made of white gloves, flogging herself and demanding: 'Black art must take more risks!' — a direct confrontation with institutional exclusion."
        },
        {
          see: "The Great White Way (2000–09)",
          how: "Interventionist Performance",
          meaning: "Pope.L's crawl performances — including a 22-mile crawl the length of Broadway — use abjection and endurance to excavate race, poverty, and public space, asking who has the right to occupy a city's streets."
        }
      ],
      quiz: [
        {
          prompt: "Marina Abramović's The Artist is Present at MoMA (2010) involved her doing what?",
          options: [
            "Sitting silently opposite museum visitors for 736 hours across 79 days",
            "Creating a large-scale painting live over three months",
            "Re-enacting her early dangerous performances with a stand-in"
          ],
          correctIndex: 0,
          explanation: "Abramović sat motionless at a table for the entire duration of the exhibition. Over 1,500 visitors sat opposite her — many reported profound emotional experiences. The queues lasted hours.",
          insight: "Keep connecting Ritual to specific choices in the work."
        },
        {
          prompt: "Yoko Ono's Cut Piece (1964) invited the audience to do what?",
          options: [
            "Cut away her clothing with scissors",
            "Cut their own hair and place it on the stage",
            "Cut paper into shapes spelling words"
          ],
          correctIndex: 0,
          explanation: "Ono sat passively as audience members cut her clothing away piece by piece. The performance made visible the power dynamics of spectatorship — who looks, who is exposed, who controls the gaze.",
          insight: "Keep connecting Ritual to specific choices in the work."
        },
        {
          prompt: "Ana Mendieta's Silueta Series involved which action?",
          options: [
            "Imprinting her body's outline into earth, sand, and natural materials",
            "Painting self-portraits in her studio using her own blood",
            "Filming her body in free-fall from tall buildings"
          ],
          correctIndex: 0,
          explanation: "Mendieta traveled to Mexico and Cuba to make these works, pressing her body into the land. The series responds to her forced exile from Cuba at age 12 — a search for belonging through the body's union with earth.",
          insight: "Keep connecting Ritual to specific choices in the work."
        },
        {
          prompt: "Carolee Schneemann's Interior Scroll (1975) is known for what act?",
          options: [
            "Drawing a scroll from her vagina and reading it aloud as a text on female creativity",
            "Writing feminist theory on the walls of a gallery in her own blood",
            "Unrolling an enormous canvas scroll across a performance space"
          ],
          correctIndex: 0,
          explanation: "The text on the scroll was a critique of a male filmmaker who dismissed her work as 'personal clutter.' The act insisted the female body is a source of intellectual authority, not merely an object of the male gaze.",
          insight: "Keep connecting Ritual to specific choices in the work."
        },
        {
          prompt: "Coco Fusco and Guillermo Gómez-Peña's cage performance Two Undiscovered Amerindians was intended to satirize what?",
          options: [
            "The Western history of displaying colonised and indigenous peoples as exotic spectacles",
            "The commercialization of indigenous crafts in tourist markets",
            "The immigration enforcement system at the US-Mexico border"
          ],
          correctIndex: 0,
          explanation: "Performed at the 1992 Columbus quincentennial, many audiences believed they were seeing real 'undiscovered' people — inadvertently proving that the colonial impulse to exoticize the other had never ended.",
          insight: "Keep connecting Ritual to specific choices in the work."
        }
      ],
      result: {
        synthesis: "You connected ritual to concrete choices in works by performance artists.",
        strongestSkill: "connect",
        nextFocus: "Compare two artists from ritual and name how each directs the viewer.",
        learnedIdeas: [
          "How ritual becomes visible through form and context.",
          "Why artist biographies matter most when tied to specific works.",
          "How quiz evidence should come from the object, not only the label."
        ]
      }
    }
  ],
  videoArt: [
    {
      id: "pioneeringSingle",
      title: "Pioneers",
      thesis: "Artists in pioneers use video art to make power, memory, and spectatorship visible.",
      description: "Video Art through pioneers: key artists, works, and interpretive pressure points.",
      previewImage: "../images/artists/joan_jonas.jpg",
      previewImageAlt: "Photograph of Joan Jonas.",
      keyIdeas: "Artists in pioneers use video art to make power, memory, and spectatorship visible.",
      artistIndexes: [
        0,
        1,
        2,
        3,
        4
      ],
      artworks: [
        {
          see: "Vertical Roll (1972)",
          how: "Video / Performance Art",
          meaning: "Jonas was among the first artists to use video as a live feedback tool, incorporating mirrors, masks, and live monitors into performances where image and body deliberately desynchronize. Her Vertical Roll (1972) exploits a TV's rolling malfunction as a rhythmic, hypnotic device."
        },
        {
          see: "Don't Believe I Am an Amazon (1975)",
          how: "Feminist Video Art",
          meaning: "Rosenbach overlaid live video of her own face onto art-historical images of the Madonna, forcing confrontation between representations of women in Christian iconography and the living female body performing in real time."
        },
        {
          see: "Duchampiana: Nude Descending a Staircase (1975–76)",
          how: "Video Sculpture",
          meaning: "Kubota built sculptural furniture and objects containing embedded monitors — her Duchampiana series enclosed video footage inside a physical staircase, forcing the viewer to move through the work rather than simply watch it."
        }
      ],
      quiz: [
        {
          prompt: "Joan Jonas's Vertical Roll (1972) uses what device as its central visual element?",
          options: [
            "A TV monitor's rolling malfunction exploited as rhythmic repetition",
            "A camera mounted on a rotating platform",
            "A vertical split screen dividing two simultaneous performances"
          ],
          correctIndex: 0,
          explanation: "Jonas deliberately induced and sustained the rolling glitch in a television monitor, turning a technical failure into a hypnotic pulse — one of the earliest instances of an artist using video's own malfunctions as expressive material.",
          insight: "Technical 'failure' in early video often becomes the work's pulse—notice when the medium, not just the scene, is the subject."
        },
        {
          prompt: "Ulrike Rosenbach's Don't Believe I Am an Amazon overlays live video of her face onto what?",
          options: [
            "Art-historical images of the Madonna from Christian iconography",
            "News footage of political protests in West Germany",
            "Hollywood film stills of action heroines"
          ],
          correctIndex: 0,
          explanation: "Rosenbach superimposed her own performing face onto Madonna imagery, forcing confrontation between sacred representation and the living female body in real time.",
          insight: "Overlay is an argument about who gets to be 'timeless' in art history—and who must perform in the present."
        },
        {
          prompt: "Shigeko Kubota's Duchampiana series is notable for placing video inside what kind of form?",
          options: [
            "Sculptural objects and furniture with embedded monitors",
            "Handheld viewfinders distributed to the audience",
            "Projections mapped onto museum facades"
          ],
          correctIndex: 0,
          explanation: "Kubota built sculptural furniture and objects containing embedded monitors — viewers move through the work rather than only watch a wall-mounted screen.",
          insight: "When video lives inside an object, your path through space becomes part of the piece."
        },
        {
          prompt: "Joan Jonas often incorporated which elements into early video performances?",
          options: [
            "Mirrors, masks, and live monitors that desynchronize image and body",
            "Pre-recorded Hollywood dialogue dubbed live",
            "Audience members voting on plot outcomes via keypad"
          ],
          correctIndex: 0,
          explanation: "Jonas used mirrors and masks with live video feedback so the performer and her mediated image could deliberately fall out of sync — questioning stable identity on screen.",
          insight: "Technical 'failure' in early video often becomes the work's pulse—notice when the medium, not just the scene, is the subject."
        },
        {
          prompt: "Shigeko Kubota was associated with which movement that treated everyday life and humor as art material?",
          options: [
            "Fluxus",
            "Pop Art",
            "Arte Povera"
          ],
          correctIndex: 0,
          explanation: "Kubota's video sculptures and performances connect to Fluxus's cross-disciplinary, anti-monumental spirit — video as one material among many, not a separate industry.",
          insight: "Technical 'failure' in early video often becomes the work's pulse—notice when the medium, not just the scene, is the subject."
        }
      ],
      result: {
        synthesis: "You connected pioneers to concrete choices in works by video art artists.",
        strongestSkill: "connect",
        nextFocus: "Compare two artists from pioneers and name how each directs the viewer.",
        learnedIdeas: [
          "How pioneers becomes visible through form and context.",
          "Why artist biographies matter most when tied to specific works.",
          "How quiz evidence should come from the object, not only the label."
        ]
      }
    },
    {
      id: "narrativeIdentity",
      title: "Narrative",
      thesis: "Artists in narrative use video art to make power, memory, and spectatorship visible.",
      description: "Video Art through narrative: key artists, works, and interpretive pressure points.",
      previewImage: "../images/artists/dara_birnbaum.jpg",
      previewImageAlt: "Dara Birnbaum with a calico cat resting on her shoulder.",
      keyIdeas: "Artists in narrative use video art to make power, memory, and spectatorship visible.",
      artistIndexes: [
        3,
        4,
        5,
        0,
        1
      ],
      artworks: [
        {
          see: "Technology/Transformation: Wonder Woman (1978–79)",
          how: "Appropriation Video",
          meaning: "Technology/Transformation: Wonder Woman looped the transformation sequence from the TV series, isolating the pyrotechnic spectacle of female power to expose how broadcast television packages and sells a fantasy of women's strength."
        },
        {
          see: "It Wasn't Love (1992)",
          how: "Queer Video Diary",
          meaning: "Benning made confessional diary videos as a teenager using a Fisher-Price PXL 2000 toy camera — the deliberately degraded pixelvision image becoming inseparable from the rawness of coming out as a queer teenager in Wisconsin."
        },
        {
          see: "Silence of the Lambs (2010)",
          how: "Video / Performance Art",
          meaning: "Kenawy's videos fused performance, choreography, and surrealist imagery to address political repression and bodily constraint in Egypt — Silence of the Lambs staged dozens of crawling figures in Cairo's streets as an uninvited public intervention."
        }
      ],
      quiz: [
        {
          prompt: "Dara Birnbaum's Technology/Transformation: Wonder Woman isolates which moment from the TV series?",
          options: [
            "The transformation sequence, looped as spectacular female power",
            "The final fight scene",
            "The opening theme song credits only"
          ],
          correctIndex: 0,
          explanation: "By looping the pyrotechnic transformation continuously, Birnbaum strips narrative context — revealing broadcast fantasy packaged and sold to female audiences.",
          insight: "Looping one broadcast moment turns plot into pattern—ask what the loop hides and what it sells."
        },
        {
          prompt: "Sadie Benning's early diary videos were shot with which device?",
          options: [
            "A Fisher-Price PXL 2000 toy camera producing pixelated 'pixelvision' footage",
            "16mm film transferred to VHS for grain",
            "Studio broadcast cameras on tripods"
          ],
          correctIndex: 0,
          explanation: "Benning used the toy PXL 2000 — degraded image quality became inseparable from the rawness of coming out as a queer teenager in Wisconsin.",
          insight: "Compare Birnbaum's broadcast loop to Benning's diary pixelvision—what changes when the source is mass media versus the bedroom?"
        },
        {
          prompt: "Amal Kenawy's Silence of the Lambs (2010) took place primarily where?",
          options: [
            "As an uninvited public intervention with figures crawling in city streets",
            "Inside a Cairo gallery with ticketed entry",
            "On Egyptian state television as a sponsored broadcast"
          ],
          correctIndex: 0,
          explanation: "Kenawy staged dozens of crawling figures in Cairo's streets without invitation — surreal choreography confronting political repression and bodily constraint in public space.",
          insight: "Compare Birnbaum's broadcast loop to Benning's diary pixelvision—what changes when the source is mass media versus the bedroom?"
        },
        {
          prompt: "Birnbaum's Wonder Woman piece is an example of which strategy?",
          options: [
            "Appropriation — re-editing mass-media footage without permission",
            "Direct cinema — unedited documentary observation",
            "Abstract animation with no recognizable figures"
          ],
          correctIndex: 0,
          explanation: "Birnbaum belongs to a generation that treated television clips as raw material — feminist critique through re-cut broadcast spectacle.",
          insight: "Compare Birnbaum's broadcast loop to Benning's diary pixelvision—what changes when the source is mass media versus the bedroom?"
        },
        {
          prompt: "Benning's It Wasn't Love (1992) is associated with which thematic focus?",
          options: [
            "Queer teenage desire and identity told through confessional video diary",
            "Landscape painting en plein air",
            "Industrial labor strikes in the Midwest"
          ],
          correctIndex: 0,
          explanation: "Benning's pixelvision diaries merge form and content — low-res intimacy carries the emotional stakes of queer coming-of-age.",
          insight: "Compare Birnbaum's broadcast loop to Benning's diary pixelvision—what changes when the source is mass media versus the bedroom?"
        }
      ],
      result: {
        synthesis: "You connected narrative to concrete choices in works by video art artists.",
        strongestSkill: "connect",
        nextFocus: "Compare two artists from narrative and name how each directs the viewer.",
        learnedIdeas: [
          "How narrative becomes visible through form and context.",
          "Why artist biographies matter most when tied to specific works.",
          "How quiz evidence should come from the object, not only the label."
        ]
      }
    },
    {
      id: "installationEnvironment",
      title: "Installation",
      thesis: "Artists in installation use video art to make power, memory, and spectatorship visible.",
      description: "Video Art through installation: key artists, works, and interpretive pressure points.",
      previewImage: "../images/artists/pipilotti_rist.jpg",
      previewImageAlt: "Photograph of Pipilotti Rist.",
      keyIdeas: "Artists in installation use video art to make power, memory, and spectatorship visible.",
      artistIndexes: [
        6,
        7,
        8,
        0,
        1
      ],
      artworks: [
        {
          see: "Ever Is Over All (1997)",
          how: "Video Installation",
          meaning: "Rist projects large-scale video onto floors and ceilings rather than walls, immersing viewers inside lush, distorted color fields — Ever Is Over All shows her smashing car windows with a flower while a police officer smiles in approval."
        },
        {
          see: "How Not to Be Seen (2013)",
          how: "Essay Film / Video Art",
          meaning: "Steyerl's essay films treat resolution, compression artifacts, and file formats as political material — How Not to Be Seen: A Fucking Didactic Educational .MOV File uses the logic of surveillance and image degradation to examine visibility and erasure."
        },
        {
          see: "Anne, Aki and God (1998)",
          how: "Multi-Screen Narrative",
          meaning: "Ahtila presents narrative across multiple synchronized screens, fragmenting a single story in space so that viewers must move between projections to assemble meaning — Anne, Aki and God uses three screens to depict psychosis from inside the experience."
        }
      ],
      quiz: [
        {
          prompt: "Pipilotti Rist's installations often project video onto which surfaces?",
          options: [
            "Floors and ceilings, immersing viewers inside the image",
            "Only standard white gallery walls at eye level",
            "Outdoor billboards in city centers"
          ],
          correctIndex: 0,
          explanation: "Projecting beneath and above the viewer collapses conventional distance — viewers become part of the color field rather than detached spectators.",
          insight: "Where the image lands in the room is part of the argument—ceiling and floor refuse the neutral 'cinema wall'."
        },
        {
          prompt: "Hito Steyerl's How Not to Be Seen treats which phenomena as political material?",
          options: [
            "Image compression, file formats, and resolution degradation",
            "Oil painting varnish techniques",
            "Acoustic resonance in concert halls"
          ],
          correctIndex: 0,
          explanation: "Steyerl argues poor-resolution images circulate differently than HD ones — degradation becomes survival, invisibility, and escape from surveillance.",
          insight: "Poor images travel differently than pristine ones—compression and format are part of power, not just aesthetics."
        },
        {
          prompt: "Eija-Liisa Ahtila's multi-screen works require viewers to do what?",
          options: [
            "Move between projections to assemble narrative distributed in space",
            "Wear VR headsets blocking the physical gallery",
            "Remain seated in a single assigned chair"
          ],
          correctIndex: 0,
          explanation: "Splitting one story across synchronized screens makes the viewer's path through the room part of how meaning is constructed.",
          insight: "Multi-screen narrative makes your path through space part of the edit—there is no single 'correct' seat."
        },
        {
          prompt: "Rist's Ever Is Over All (1997) shows her doing what with a flower?",
          options: [
            "Smashing car windows while a police officer smiles in approval",
            "Planting a community garden on museum grounds",
            "Selling flowers at a street market documentary"
          ],
          correctIndex: 0,
          explanation: "The slow-motion smash turns playful destruction into feminist spectacle — beauty weaponized against property and propriety.",
          insight: "Walk mentally from Rist's floor projection to Ahtila's multi-screen room—what changes when you must move to understand?"
        },
        {
          prompt: "Ahtila's Anne, Aki and God (1998) uses multiple screens primarily to depict what?",
          options: [
            "Psychosis from inside the experience of perception",
            "A single landscape with changing weather",
            "Abstract color fields without figures"
          ],
          correctIndex: 0,
          explanation: "Three screens fragment narrative space to mirror disordered perception — empathy through formal structure, not explanatory voice-over alone.",
          insight: "Walk mentally from Rist's floor projection to Ahtila's multi-screen room—what changes when you must move to understand?"
        }
      ],
      result: {
        synthesis: "You connected installation to concrete choices in works by video art artists.",
        strongestSkill: "connect",
        nextFocus: "Compare two artists from installation and name how each directs the viewer.",
        learnedIdeas: [
          "How installation becomes visible through form and context.",
          "Why artist biographies matter most when tied to specific works.",
          "How quiz evidence should come from the object, not only the label."
        ]
      }
    }
  ]
};

export const seriesArtists = {
  photography: [
    {
      name: "Zanele Muholi",
      image: "../images/artists/zanele_muholi.jpg",
      workTitle: "Somnyama Ngonyama (2012–ongoing)",
      workYear: "b. 1972",
      medium: "Visual Activism",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Zanele Muholi.",
      description: "Muholi's self-portrait series Somnyama Ngonyama reclaims the Black gaze by manipulating exposure to hyperpigment their skin, turning the camera into an act of resistance.",
      insight: "Muholi's self-portrait series Somnyama Ngonyama reclaims the Black gaze by manipulating exposure to hyperpigment their skin, turning the camera into an act of resistance."
    },
    {
      name: "Nan Goldin",
      image: "../images/artists/nan_goldin.png",
      workTitle: "The Ballad of Sexual Dependency (1986)",
      workYear: "b. 1953",
      medium: "Confessional Photography",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Nan Goldin.",
      description: "Goldin's The Ballad of Sexual Dependency is an intimate visual diary of her circle — capturing love, addiction, and violence with unflinching honesty in 1970s–80s New York.",
      insight: "Goldin's The Ballad of Sexual Dependency is an intimate visual diary of her circle — capturing love, addiction, and violence with unflinching honesty in 1970s–80s New York."
    },
    {
      name: "Carrie Mae Weems",
      image: "../images/artists/carrie_mae_weems.jpg",
      workTitle: "Kitchen Table Series (1990)",
      workYear: "b. 1953",
      medium: "Conceptual Photography",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Carrie Mae Weems.",
      description: "Weems's Kitchen Table Series uses a single domestic setting to explore the complexity of Black women's lives — relationships, solitude, power, and joy — through staged narrative sequences.",
      insight: "Weems's Kitchen Table Series uses a single domestic setting to explore the complexity of Black women's lives — relationships, solitude, power, and joy — through staged narrative sequences."
    },
    {
      name: "Dorothea Lange",
      image: "../images/artists/dorothea_lange.jpg",
      workTitle: "Migrant Mother (1936)",
      workYear: "1895–1965",
      medium: "Social Documentary",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Black-and-white photograph (Migrant Mother): a weary mother rests her face on her hand; two children turn away from the camera.",
      description: "Lange's Migrant Mother became the defining image of the Great Depression — a single photograph that galvanized public support for relief programs and changed how documentary photography was understood.",
      insight: "Lange's Migrant Mother became the defining image of the Great Depression — a single photograph that galvanized public support for relief programs and changed how documentary photography was understood."
    },
    {
      name: "Susan Meiselas",
      image: "../images/artists/susan_meiselas.jpg",
      workTitle: "Nicaragua (1981)",
      workYear: "b. 1948",
      medium: "Photojournalism",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Susan Meiselas.",
      description: "Meiselas embedded herself in the 1978–79 Nicaraguan revolution, creating images that blur the boundary between witness and participant — and raised lasting questions about photojournalistic ethics.",
      insight: "Meiselas embedded herself in the 1978–79 Nicaraguan revolution, creating images that blur the boundary between witness and participant — and raised lasting questions about photojournalistic ethics."
    },
    {
      name: "An-My Lê",
      image: "../images/artists/an_my_le.jpg",
      workTitle: "Small Wars (1999–2002)",
      workYear: "b. 1960",
      medium: "Documentary / War Photography",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Portrait photograph of An-My Lê.",
      description: "Lê photographs military re-enactments and training exercises, using the gap between performance and reality to interrogate how America constructs and mythologizes war.",
      insight: "Lê photographs military re-enactments and training exercises, using the gap between performance and reality to interrogate how America constructs and mythologizes war."
    },
    {
      name: "Francesca Woodman",
      image: "../images/artists/francesca_woodman.png",
      workTitle: "House Series (1975–76)",
      workYear: "1958–1981",
      medium: "Surrealist Photography",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Black-and-white self-portrait: figure hanging from a doorframe in a tiled room, arms raised.",
      description: "Woodman made hundreds of photographs in decaying interiors, using slow shutter speeds to blur her own body into the architecture — exploring the female self as both present and dissolving.",
      insight: "Woodman made hundreds of photographs in decaying interiors, using slow shutter speeds to blur her own body into the architecture — exploring the female self as both present and dissolving."
    },
    {
      name: "Cindy Sherman",
      image: "../images/artists/cindy_sherman.png",
      workTitle: "Untitled Film Stills (1977–80)",
      workYear: "b. 1954",
      medium: "Postmodern Photography",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Cindy Sherman in Renaissance Madonna costume with swaddled infant, lace and velvet backdrop.",
      description: "Sherman's Untitled Film Stills features herself as every character — each photograph a constructed archetype drawn from cinema's visual language of femininity, never once depicting 'Cindy Sherman'.",
      insight: "Sherman's Untitled Film Stills features herself as every character — each photograph a constructed archetype drawn from cinema's visual language of femininity, never once depicting 'Cindy Sherman'."
    },
    {
      name: "Lorna Simpson",
      image: "../images/artists/lorna_simpson.jpg",
      workTitle: "Waterbearer (1986)",
      workYear: "b. 1960",
      medium: "Conceptual Photography",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Lorna Simpson in a black top, seated in front of a blue backdrop.",
      description: "Simpson pairs photographs of Black women's bodies with fragmented text, refusing the viewer's gaze by showing subjects from behind — insisting on interiority over spectacle.",
      insight: "Simpson pairs photographs of Black women's bodies with fragmented text, refusing the viewer's gaze by showing subjects from behind — insisting on interiority over spectacle."
    }
  ],
  painting: [
    {
      name: "Helen Frankenthaler",
      image: "../images/artists/helen_frankenthaler.jpg",
      workTitle: "Mountains and Sea (1952)",
      workYear: "1928–2011",
      medium: "Color Field Painting",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Helen Frankenthaler.",
      description: "Frankenthaler poured thinned paint directly onto unprimed canvas, inventing the soak-stain technique that defined Color Field painting. Her landmark Mountains and Sea transformed how a generation approached abstraction.",
      insight: "Frankenthaler poured thinned paint directly onto unprimed canvas, inventing the soak-stain technique that defined Color Field painting. Her landmark Mountains and Sea transformed how a generation approached abstraction."
    },
    {
      name: "Agnes Martin",
      image: "../images/artists/agnes_martin.jpg",
      workTitle: "Untitled #1 (1988)",
      workYear: "1912–2004",
      medium: "Minimalism",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Agnes Martin.",
      description: "Martin's soft pencil grids on pale linen canvases are not cold minimalism but expressions of happiness and innocence — she described them as 'about beauty, and it's a simple subject.'",
      insight: "Martin's soft pencil grids on pale linen canvases are not cold minimalism but expressions of happiness and innocence — she described them as 'about beauty, and it's a simple subject.'"
    },
    {
      name: "Lee Krasner",
      image: "../images/artists/lee_krasner.jpg",
      workTitle: "The Seasons (1957)",
      workYear: "1908–1984",
      medium: "Abstract Expressionism",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Black-and-white photograph of Lee Krasner in a paint-splattered studio with canvases behind her.",
      description: "Long overshadowed by her husband Jackson Pollock, Krasner's large-scale Abstract Expressionist works — including the collaged Night Journeys series made after his death — are now recognized as central to the movement.",
      insight: "Long overshadowed by her husband Jackson Pollock, Krasner's large-scale Abstract Expressionist works — including the collaged Night Journeys series made after his death — are now recognized as central to the movement."
    },
    {
      name: "Alice Neel",
      image: "../images/artists/alice_neel.jpg",
      workTitle: "Andy Warhol (1970)",
      workYear: "1900–1984",
      medium: "Social Realism",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Alice Neel.",
      description: "Neel painted the people mainstream art ignored: working-class New Yorkers, Black and Latino neighbors, pregnant women, and gay men — creating a radical portrait of 20th-century American life from the margins.",
      insight: "Neel painted the people mainstream art ignored: working-class New Yorkers, Black and Latino neighbors, pregnant women, and gay men — creating a radical portrait of 20th-century American life from the margins."
    },
    {
      name: "Jenny Saville",
      image: "../images/artists/jenny_saville.jpg",
      workTitle: "Propped (1992)",
      workYear: "b. 1970",
      medium: "Neo-Expressionism",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Jenny Saville.",
      description: "Saville paints the female body at monumental scale and from unconventional vantage points — looking down at flesh that overflows the frame — refusing the idealizing traditions of the nude.",
      insight: "Saville paints the female body at monumental scale and from unconventional vantage points — looking down at flesh that overflows the frame — refusing the idealizing traditions of the nude."
    },
    {
      name: "Lynette Yiadom-Boakye",
      image: "../images/artists/lynette_yiadom_boakye.jpg",
      workTitle: "Any Number of Preoccupations (2010)",
      workYear: "b. 1977",
      medium: "Figurative Painting",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Lynette Yiadom-Boakye.",
      description: "Yiadom-Boakye paints fictional Black figures, composing them from imagination rather than life or reference. Her subjects suggest interiority without disclosure — neither portraits nor allegories.",
      insight: "Yiadom-Boakye paints fictional Black figures, composing them from imagination rather than life or reference. Her subjects suggest interiority without disclosure — neither portraits nor allegories."
    },
    {
      name: "Faith Ringgold",
      image: "../images/artists/faith_ringgold.jpg",
      workTitle: "Tar Beach (1988)",
      workYear: "b. 1930",
      medium: "Narrative Art",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Faith Ringgold.",
      description: "Ringgold's story quilts merge West African textile tradition with American quilt-making and narrative text — using a domestic craft historically associated with Black women to tell stories that museums once refused to exhibit.",
      insight: "Ringgold's story quilts merge West African textile tradition with American quilt-making and narrative text — using a domestic craft historically associated with Black women to tell stories that museums once refused to exhibit."
    },
    {
      name: "Kara Walker",
      image: "../images/artists/kara_walker.jpg",
      workTitle: "A Subtlety (2014)",
      workYear: "b. 1969",
      medium: "Neo-Conceptualism",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Kara Walker.",
      description: "Walker's large-scale black silhouettes stage grotesque tableaux of slavery's violence and sexual exploitation — using a genteel 19th-century art form to force confrontation with histories Americans prefer to obscure.",
      insight: "Walker's large-scale black silhouettes stage grotesque tableaux of slavery's violence and sexual exploitation — using a genteel 19th-century art form to force confrontation with histories Americans prefer to obscure."
    },
    {
      name: "Cecily Brown",
      image: "../images/artists/cecily_brown.jpg",
      workTitle: "Horizontale (2003)",
      workYear: "b. 1969",
      medium: "Neo-Expressionism",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Cecily Brown.",
      description: "Brown's densely layered paintings hover between figuration and abstraction — bodies, landscapes, and violence blur together in surfaces that reward sustained looking and resist easy resolution.",
      insight: "Brown's densely layered paintings hover between figuration and abstraction — bodies, landscapes, and violence blur together in surfaces that reward sustained looking and resist easy resolution."
    }
  ],
  sculpture: [
    {
      name: "Louise Bourgeois",
      image: "../images/artists/louise_bourgeois.jpg",
      workTitle: "Maman (1999)",
      workYear: "1911–2010",
      medium: "Feminist Art / Surrealism",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Louise Bourgeois.",
      description: "Bourgeois spent seven decades making art about the body, memory, and family. Her giant spider sculptures Maman represent her mother — described as patient, protective, and industrious as a weaver.",
      insight: "Bourgeois spent seven decades making art about the body, memory, and family. Her giant spider sculptures Maman represent her mother — described as patient, protective, and industrious as a weaver."
    },
    {
      name: "Kiki Smith",
      image: "../images/artists/kiki_smith.jpg",
      workTitle: "Tale (1992)",
      workYear: "b. 1954",
      medium: "Feminist Art",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Kiki Smith.",
      description: "Smith makes the interior of the body visible — casting organs, trailing viscera, depicting bodily processes that culture renders taboo. Tale features a female figure crawling, with a long tail behind her.",
      insight: "Smith makes the interior of the body visible — casting organs, trailing viscera, depicting bodily processes that culture renders taboo. Tale features a female figure crawling, with a long tail behind her."
    },
    {
      name: "Sarah Lucas",
      image: "../images/artists/sarah_lucas.jpg",
      workTitle: "Au Naturel (1994)",
      workYear: "b. 1962",
      medium: "YBA / Feminist Art",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Sarah Lucas.",
      description: "Lucas's sculptures use everyday objects — mattresses, toilets, fried eggs, cigarettes — to deconstruct the sexual objectification of women through crude, sardonic wit rather than earnest protest.",
      insight: "Lucas's sculptures use everyday objects — mattresses, toilets, fried eggs, cigarettes — to deconstruct the sexual objectification of women through crude, sardonic wit rather than earnest protest."
    },
    {
      name: "Rachel Whiteread",
      image: "../images/artists/rachel_whiteread.jpg",
      workTitle: "Ghost (1990)",
      workYear: "b. 1963",
      medium: "Conceptual Sculpture",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Rachel Whiteread.",
      description: "Whiteread casts the negative space inside and around ordinary objects — the air under a chair, the inside of a room — making invisible domestic space tangible and monumental.",
      insight: "Whiteread casts the negative space inside and around ordinary objects — the air under a chair, the inside of a room — making invisible domestic space tangible and monumental."
    },
    {
      name: "Maya Lin",
      image: "../images/artists/maya_lin.jpg",
      workTitle: "Vietnam Veterans Memorial (1982)",
      workYear: "b. 1959",
      medium: "Environmental Art",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Maya Lin.",
      description: "Lin's Vietnam Veterans Memorial refuses heroic imagery entirely — a black granite chevron cut into the earth, listing 58,000 names. Visitors see their own reflection in the names of the dead.",
      insight: "Lin's Vietnam Veterans Memorial refuses heroic imagery entirely — a black granite chevron cut into the earth, listing 58,000 names. Visitors see their own reflection in the names of the dead."
    },
    {
      name: "Ursula von Rydingsvard",
      image: "../images/artists/ursula_von_rydingsvard.jpg",
      workTitle: "For Paul (1992)",
      workYear: "b. 1942",
      medium: "Contemporary Sculpture",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Ursula von Rydingsvard.",
      description: "Von Rydingsvard builds massive sculptures from thousands of cedar beams, cutting and gouging them with chainsaws and chisels to create surfaces that resemble eroded landscape or interior organs.",
      insight: "Von Rydingsvard builds massive sculptures from thousands of cedar beams, cutting and gouging them with chainsaws and chisels to create surfaces that resemble eroded landscape or interior organs."
    },
    {
      name: "Eva Hesse",
      image: "../images/artists/eva_hesse.jpg",
      workTitle: "Hang Up (1966)",
      workYear: "1936–1970",
      medium: "Post-Minimalism",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Eva Hesse.",
      description: "Hesse transformed Post-Minimalism by introducing latex, rope, and fiberglass — organic, unstable materials that sag, droop, and decay. Her work insists on the absurd and the bodily within geometric form.",
      insight: "Hesse transformed Post-Minimalism by introducing latex, rope, and fiberglass — organic, unstable materials that sag, droop, and decay. Her work insists on the absurd and the bodily within geometric form."
    },
    {
      name: "El Anatsui",
      image: "../images/artists/el_anatsui.jpg",
      workTitle: "Dusasa I (2007)",
      workYear: "b. 1944",
      medium: "Contemporary African Art",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of El Anatsui.",
      description: "Anatsui creates large-scale tapestry-like sculptures from thousands of flattened bottle caps and aluminum foil, referencing both African kente cloth and the global trade routes that brought alcohol to West Africa.",
      insight: "Anatsui creates large-scale tapestry-like sculptures from thousands of flattened bottle caps and aluminum foil, referencing both African kente cloth and the global trade routes that brought alcohol to West Africa."
    },
    {
      name: "Simone Leigh",
      image: "../images/artists/simone_leigh.jpg",
      workTitle: "Brick House (2019)",
      workYear: "b. 1967",
      medium: "Black Feminism / Sculpture",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Simone Leigh.",
      description: "Leigh merges the female figure with architectural forms drawn from African vernacular buildings — thatched roofs, granaries, jugs. Brick House rose four stories as the US Pavilion centerpiece at Venice 2022.",
      insight: "Leigh merges the female figure with architectural forms drawn from African vernacular buildings — thatched roofs, granaries, jugs. Brick House rose four stories as the US Pavilion centerpiece at Venice 2022."
    }
  ],
  performance: [
    {
      name: "Marina Abramović",
      image: "../images/artists/marina_abramovic.jpg",
      workTitle: "The Artist is Present (2010)",
      workYear: "b. 1946",
      medium: "Performance Art",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Marina Abramović.",
      description: "Abramović's The Artist is Present placed her silently opposite museum visitors for 736 hours — testing the limits of presence, endurance, and what it means to truly see and be seen by another person.",
      insight: "Abramović's The Artist is Present placed her silently opposite museum visitors for 736 hours — testing the limits of presence, endurance, and what it means to truly see and be seen by another person."
    },
    {
      name: "Yoko Ono",
      image: "../images/artists/yoko_ono.jpg",
      workTitle: "Cut Piece (1964)",
      workYear: "b. 1933",
      medium: "Conceptual Art / Fluxus",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Yoko Ono.",
      description: "Cut Piece invited audience members to cut away Ono's clothing with scissors — transferring agency to the viewer and exposing the violence latent in looking, long before this language entered mainstream feminist theory.",
      insight: "Cut Piece invited audience members to cut away Ono's clothing with scissors — transferring agency to the viewer and exposing the violence latent in looking, long before this language entered mainstream feminist theory."
    },
    {
      name: "Ana Mendieta",
      image: "../images/artists/ana_mendieta.jpg",
      workTitle: "Silueta Series (1973–80)",
      workYear: "1948–1985",
      medium: "Earth-Body Art",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Ana Mendieta.",
      description: "Mendieta's Silueta Series documented her imprinting her body's outline into earth, sand, and natural materials — merging the female form with landscape as a search for belonging between her Cuban heritage and American exile.",
      insight: "Mendieta's Silueta Series documented her imprinting her body's outline into earth, sand, and natural materials — merging the female form with landscape as a search for belonging between her Cuban heritage and American exile."
    },
    {
      name: "Tehching Hsieh",
      image: "../images/artists/tehching_hsieh.jpg",
      workTitle: "One Year Performance (1980–81)",
      workYear: "b. 1950",
      medium: "Endurance Art",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Tehching Hsieh.",
      description: "Hsieh's One Year Performances subjected his body to extreme constraints for exactly 365 days — punching a time clock every hour, living outdoors, never entering buildings. Art as a record of time itself.",
      insight: "Hsieh's One Year Performances subjected his body to extreme constraints for exactly 365 days — punching a time clock every hour, living outdoors, never entering buildings. Art as a record of time itself."
    },
    {
      name: "Adrian Piper",
      image: "../images/artists/adrian_piper.png",
      workTitle: "Catalysis (1970–71)",
      workYear: "b. 1948",
      medium: "Conceptual Art",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Adrian Piper.",
      description: "Piper's Catalysis performances took place in public — she rode the subway smelling of vinegar, or wore a sign reading 'Wet Paint' — inserting discomfort into everyday space to expose social codes governing public behavior.",
      insight: "Piper's Catalysis performances took place in public — she rode the subway smelling of vinegar, or wore a sign reading 'Wet Paint' — inserting discomfort into everyday space to expose social codes governing public behavior."
    },
    {
      name: "Carolee Schneemann",
      image: "../images/artists/carolee_schneemann.jpg",
      workTitle: "Interior Scroll (1975)",
      workYear: "1939–2019",
      medium: "Feminist Performance",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Carolee Schneemann.",
      description: "Schneemann's Interior Scroll involved drawing a text from her vagina and reading it aloud — directly asserting the female body as a site of intellectual and creative authority against the erasure of women's voices.",
      insight: "Schneemann's Interior Scroll involved drawing a text from her vagina and reading it aloud — directly asserting the female body as a site of intellectual and creative authority against the erasure of women's voices."
    },
    {
      name: "Coco Fusco",
      image: "../images/artists/coco_fusco.jpg",
      workTitle: "Two Undiscovered Amerindians (1992)",
      workYear: "b. 1960",
      medium: "Post-Colonial Performance",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Coco Fusco.",
      description: "Fusco and Guillermo Gómez-Peña spent three days in a cage at the 1992 Columbus quincentennial, posing as 'undiscovered Amerindians' — exposing how Western institutions had always displayed colonised bodies as spectacle.",
      insight: "Fusco and Guillermo Gómez-Peña spent three days in a cage at the 1992 Columbus quincentennial, posing as 'undiscovered Amerindians' — exposing how Western institutions had always displayed colonised bodies as spectacle."
    },
    {
      name: "Lorraine O'Grady",
      image: "../images/artists/lorraine_ogrady.jpg",
      workTitle: "Mlle Bourgeoise Noire (1980–83)",
      workYear: "b. 1934",
      medium: "Institutional Critique",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Lorraine O'Grady.",
      description: "O'Grady's Mlle Bourgeoise Noire crashed white art world openings wearing a gown made of white gloves, flogging herself and demanding: 'Black art must take more risks!' — a direct confrontation with institutional exclusion.",
      insight: "O'Grady's Mlle Bourgeoise Noire crashed white art world openings wearing a gown made of white gloves, flogging herself and demanding: 'Black art must take more risks!' — a direct confrontation with institutional exclusion."
    },
    {
      name: "Pope.L",
      image: "../images/artists/pope_l.jpg",
      workTitle: "The Great White Way (2000–09)",
      workYear: "b. 1955",
      medium: "Interventionist Performance",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Pope.L.",
      description: "Pope.L's crawl performances — including a 22-mile crawl the length of Broadway — use abjection and endurance to excavate race, poverty, and public space, asking who has the right to occupy a city's streets.",
      insight: "Pope.L's crawl performances — including a 22-mile crawl the length of Broadway — use abjection and endurance to excavate race, poverty, and public space, asking who has the right to occupy a city's streets."
    }
  ],
  videoArt: [
    {
      name: "Joan Jonas",
      image: "../images/artists/joan_jonas.jpg",
      workTitle: "Vertical Roll (1972)",
      workYear: "b. 1936",
      medium: "Video / Performance Art",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Joan Jonas.",
      description: "Jonas was among the first artists to use video as a live feedback tool, incorporating mirrors, masks, and live monitors into performances where image and body deliberately desynchronize. Her Vertical Roll (1972) exploits a TV's rolling malfunction as a rhythmic, hypnotic device.",
      insight: "Jonas was among the first artists to use video as a live feedback tool, incorporating mirrors, masks, and live monitors into performances where image and body deliberately desynchronize. Her Vertical Roll (1972) exploits a TV's rolling malfunction as a rhythmic, hypnotic device."
    },
    {
      name: "Ulrike Rosenbach",
      image: "../images/artists/ulrike_rosenbach.jpg",
      workTitle: "Don't Believe I Am an Amazon (1975)",
      workYear: "b. 1943",
      medium: "Feminist Video Art",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Ulrike Rosenbach.",
      description: "Rosenbach overlaid live video of her own face onto art-historical images of the Madonna, forcing confrontation between representations of women in Christian iconography and the living female body performing in real time.",
      insight: "Rosenbach overlaid live video of her own face onto art-historical images of the Madonna, forcing confrontation between representations of women in Christian iconography and the living female body performing in real time."
    },
    {
      name: "Shigeko Kubota",
      image: "../images/artists/shigeko_kubota.jpg",
      workTitle: "Duchampiana: Nude Descending a Staircase (1975–76)",
      workYear: "1937–2015",
      medium: "Video Sculpture",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Black-and-white photograph of a Fluxus performance at the Kurhaus Scheveningen, Netherlands, 13 November 1964.",
      description: "Kubota built sculptural furniture and objects containing embedded monitors — her Duchampiana series enclosed video footage inside a physical staircase, forcing the viewer to move through the work rather than simply watch it.",
      insight: "Kubota built sculptural furniture and objects containing embedded monitors — her Duchampiana series enclosed video footage inside a physical staircase, forcing the viewer to move through the work rather than simply watch it."
    },
    {
      name: "Dara Birnbaum",
      image: "../images/artists/dara_birnbaum.jpg",
      workTitle: "Technology/Transformation: Wonder Woman (1978–79)",
      workYear: "b. 1946",
      medium: "Appropriation Video",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Dara Birnbaum with a calico cat resting on her shoulder.",
      description: "Technology/Transformation: Wonder Woman looped the transformation sequence from the TV series, isolating the pyrotechnic spectacle of female power to expose how broadcast television packages and sells a fantasy of women's strength.",
      insight: "Technology/Transformation: Wonder Woman looped the transformation sequence from the TV series, isolating the pyrotechnic spectacle of female power to expose how broadcast television packages and sells a fantasy of women's strength."
    },
    {
      name: "Sadie Benning",
      image: "../images/artists/sadie_benning.jpg",
      workTitle: "It Wasn't Love (1992)",
      workYear: "b. 1973",
      medium: "Queer Video Diary",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Sadie Benning.",
      description: "Benning made confessional diary videos as a teenager using a Fisher-Price PXL 2000 toy camera — the deliberately degraded pixelvision image becoming inseparable from the rawness of coming out as a queer teenager in Wisconsin.",
      insight: "Benning made confessional diary videos as a teenager using a Fisher-Price PXL 2000 toy camera — the deliberately degraded pixelvision image becoming inseparable from the rawness of coming out as a queer teenager in Wisconsin."
    },
    {
      name: "Amal Kenawy",
      image: "../images/artists/amal_kenawy.jpg",
      workTitle: "Silence of the Lambs (2010)",
      workYear: "1974–2012",
      medium: "Video / Performance Art",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Amal Kenawy.",
      description: "Kenawy's videos fused performance, choreography, and surrealist imagery to address political repression and bodily constraint in Egypt — Silence of the Lambs staged dozens of crawling figures in Cairo's streets as an uninvited public intervention.",
      insight: "Kenawy's videos fused performance, choreography, and surrealist imagery to address political repression and bodily constraint in Egypt — Silence of the Lambs staged dozens of crawling figures in Cairo's streets as an uninvited public intervention."
    },
    {
      name: "Pipilotti Rist",
      image: "../images/artists/pipilotti_rist.jpg",
      workTitle: "Ever Is Over All (1997)",
      workYear: "b. 1962",
      medium: "Video Installation",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Pipilotti Rist.",
      description: "Rist projects large-scale video onto floors and ceilings rather than walls, immersing viewers inside lush, distorted color fields — Ever Is Over All shows her smashing car windows with a flower while a police officer smiles in approval.",
      insight: "Rist projects large-scale video onto floors and ceilings rather than walls, immersing viewers inside lush, distorted color fields — Ever Is Over All shows her smashing car windows with a flower while a police officer smiles in approval."
    },
    {
      name: "Hito Steyerl",
      image: "../images/artists/hito_steyerl.jpg",
      workTitle: "How Not to Be Seen (2013)",
      workYear: "b. 1966",
      medium: "Essay Film / Video Art",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Hito Steyerl.",
      description: "Steyerl's essay films treat resolution, compression artifacts, and file formats as political material — How Not to Be Seen: A Fucking Didactic Educational .MOV File uses the logic of surveillance and image degradation to examine visibility and erasure.",
      insight: "Steyerl's essay films treat resolution, compression artifacts, and file formats as political material — How Not to Be Seen: A Fucking Didactic Educational .MOV File uses the logic of surveillance and image degradation to examine visibility and erasure."
    },
    {
      name: "Eija-Liisa Ahtila",
      image: "../images/artists/eija_liisa_ahtila.jpg",
      workTitle: "Anne, Aki and God (1998)",
      workYear: "b. 1959",
      medium: "Multi-Screen Narrative",
      credit: "Self-hosted artist image from the Claude code women artist 2 project; verify rights/credit before public launch.",
      imageAlt: "Photograph of Eija-Liisa Ahtila.",
      description: "Ahtila presents narrative across multiple synchronized screens, fragmenting a single story in space so that viewers must move between projections to assemble meaning — Anne, Aki and God uses three screens to depict psychosis from inside the experience.",
      insight: "Ahtila presents narrative across multiple synchronized screens, fragmenting a single story in space so that viewers must move between projections to assemble meaning — Anne, Aki and God uses three screens to depict psychosis from inside the experience."
    }
  ]
};

/**
 * Active quiz bank contract:
 * - If selectedTopic.quiz is an array with exactly 5 items, those items are normalized into the
 *   shared question shape and used as the bank for this topic.
 * - Otherwise we fall back to legacyQuizQuestions, the shared default bank.
 */
export function getActiveQuizQuestions(selectedTopic) {
  const z = selectedTopic?.quiz;
  if (Array.isArray(z) && z.length === 5) {
    return topicQuizToLegacyQuestions(z, selectedTopic);
  }
  return legacyQuizQuestions;
}

export function quizTotal(selectedTopic) {
  return getActiveQuizQuestions(selectedTopic).length;
}

/** Same length as getActiveQuizQuestions(selectedTopic); use when entering the quiz or resetting answers in-topic. */
export function newEmptyAnswers(selectedTopic) {
  return Array(quizTotal(selectedTopic)).fill("");
}
