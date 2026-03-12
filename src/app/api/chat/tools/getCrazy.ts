
import { tool } from "ai";
import { z } from "zod";


export const getCrazy = tool({
  description:
    "This tool tells the craziest or funniest thing Jawahar has done. Use when the user asks about the craziest thing, a funny story, or something wild.",
  parameters: z.object({}),
  execute: async (_) => {
    return `
The craziest thing I've done? Spent 20 hours straight debugging a LangGraph agent that kept routing EVERY query — PDFs, simple questions, even "hello" — straight to the web search tool. 😂

Every single message. Tavily Web Search. No exceptions.

Turned out one poorly worded line in my system prompt was confidently overriding the entire supervisor logic. The fix? 4 words. Those were the longest, most satisfying 4 words I ever typed.

Shipped it to production at 6AM, and stared at the ceiling for a while. 🤖🔥

Worth it.
    `;
  },
});
