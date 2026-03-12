import { tool } from 'ai';
import { z } from 'zod';

export const getExperience = tool({
  description:
    "Returns Jawahar's work history and career background. Use ONLY when user asks about work experience, previous jobs, career history, how he got started, or professional background. Do NOT use for hiring or job opportunity questions.",
  parameters: z.object({}),
  execute: async (_) => {
    return `
**💼 Work Experience (Most Recent First)**

**LATEST ROLE:**
**Data Analyst (Predictive Analytics & Automation)**
SIF Tech Ltd, Juba, South Sudan — Dec 2022 to Dec 2025
- Built Python (Pandas) and SQL pipelines to automate data preprocessing and reporting, reducing manual effort by ~40%
- Processed and validated high-volume government datasets (licensing, compliance records) with automated quality checks
- Performed trend analysis and anomaly detection across large-scale structured datasets to identify operational risk patterns
- Built interactive Tableau KPI dashboards monitoring workforce trends, permit activity, and service adoption for leadership
- Conducted cross-departmental data reconciliation to ensure reliability of mission-critical operational reporting

**FIRST ROLE:**
**Software Support Executive (Data Systems & Monitoring)**
SIF Tech Ltd, Juba, South Sudan — Oct 2021 to Nov 2022
- Transformed high-volume unstructured application logs into structured datasets using SQL for deep operational analysis
- Conducted statistical trend analysis on recurring system issues to identify stability risks and drive pre-emptive fixes
- Built and maintained KPI dashboards tracking resolution velocity and backlog trends for real-time service health visibility
- Collaborated with Engineering teams to translate complex technical logs into actionable system improvements
- Monitored post-deployment system changes using data-driven reporting to evaluate software update effectiveness

---

**🚀 Career Pivot — From Data Analyst to AI Engineer**
- 4 years of real-world data work showed me what analytics *can't* do — reason, retrieve, and generate insights autonomously
- Took that gap as a challenge: completed focused courses on LLMs, RAG systems, LangChain, and Agentic AI
- Applied everything directly to a real problem — built Retrivis.AI solo, from scratch, production-deployed
- My data background isn't baggage — it's what makes my AI architecture decisions grounded in reality, not just tutorials

---

**📚 How I Started:**
- Completed Google Data Analytics Professional Certificate in 2020 during COVID-19 lockdown
- This led directly to my first role as Software Support Executive at SIF Tech Ltd
    `;
  },
});
