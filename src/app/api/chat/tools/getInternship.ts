import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Shows Jawahar's availability card for hiring. Use ONLY when user asks about hiring, job opportunities, or wants to reach out for work.",
  parameters: z.object({}),
  execute: async (_) => {
    return `
**🎯 What I'm Open To**

- 📅 **Availability:** Immediately available — no notice period
- 🌍 **Location:** Bengaluru, India · Open to Remote Worldwide
- 🧑‍💻 **Target Roles:** AI Engineer, RAG Engineer, LLM Engineer, ML Engineer
- 🛠️ **Core Stack:** Python, LangChain, LangGraph, FastAPI, Supabase, Redis, Celery, Docker, AWS
- ✅ **What I bring:** 4 years of experience building data pipelines and production AI systems. Built Retrivis.AI — a multimodal Agentic RAG platform with RAGAS-validated benchmarks (Faithfulness: 0.95).
- 🔥 I build fast, think in systems, and I'm hungry for problems that actually matter.

📬 **Reach me at:**
- Email: srjawahar1999@gmail.com
- LinkedIn: https://www.linkedin.com/in/jawaharsr
- GitHub: https://github.com/jawahar-singamsetty
    `;
  },
});
