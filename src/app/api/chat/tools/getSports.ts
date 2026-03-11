
import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    "This tool shows Jawahar's hobbies and life outside of work. Use when the user asks about hobbies, interests, or what Jawahar does for fun.",
  parameters: z.object({}),
  execute: async () => {
    return `
Here's what I get up to outside of work! 🎉

- **Basketball** 🏀 — Grew up playing basketball. Fast pace, team coordination, split-second decisions — taught me how to think on my feet.
- **Snooker** 🎱 — Recently got into snooker and honestly love it. Slow, precise, deeply strategic — every shot requires thinking three moves ahead. Very similar to designing a RAG pipeline.
- **Video Games** 🎮 — My go-to for switching off completely. A well-designed game reminds me why user experience matters.
- **Biking** 🏍️ — Bengaluru traffic is my personal obstacle course. Unpredictable, chaotic, and great fun.
    `;
  },
});