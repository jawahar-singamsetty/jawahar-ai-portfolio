import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Shows Jawahar's full work experience and what roles he is open to. Use when the user asks about hiring, job opportunities, work experience, career history, or what Jawahar has worked on professionally.",
  parameters: z.object({}),
  execute: async () => {
    return `
Here's my professional experience and what I'm open to! 👇

---

**💼 Work Experience**

**Data Analyst (Predictive Analytics & Automation)**
SIF Tech Ltd, Juba, South Sudan — Dec 2022 to Dec 2025
- Built Python (Pandas) and SQL pipelines to automate data preprocessing and reporting, reducing manual effort by ~40%
- Processed and validated high-volume government datasets (licensing, compliance records) with automated quality checks
- Performed trend analysis and anomaly detection across large-scale structured datasets to identify operational risk patterns
- Built interactive Tableau KPI dashboards monitoring workforce trends, permit activity, and service adoption for leadership
- Conducted cross-departmental data reconciliation to ensure reliability of mission-critical operational reporting

**Software Support Executive (Data Systems & Monitoring)**
SIF Tech Ltd, Juba, South Sudan — Oct 2021 to Nov 2022
- Transformed high-volume unstructured application logs into structured datasets using SQL for deep operational analysis
- Conducted statistical trend analysis on recurring system issues to identify stability risks and drive pre-emptive fixes
- Built and maintained KPI dashboards tracking resolution velocity and backlog trends for real-time service health visibility
- Collaborated with Engineering teams to translate complex technical logs into actionable system improvements
- Monitored post-deployment system changes using data-driven reporting to evaluate software update effectiveness

---

**🎯 What I'm Open To**

- 📅 **Availability:** Immediately available — March 2026
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