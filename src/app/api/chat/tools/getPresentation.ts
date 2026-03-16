import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Jawahar S R. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async (_) => {
    return {
      presentation: `
  Hey! I'm Jawahar S R 👋
  
  ### About Me
- AI Engineer specialising in RAG systems, Agentic AI, and production-grade LLM architectures
- MCA graduate in Data Science from Jain (Deemed to be University), Bengaluru
- 4 years of professional experience spanning data analytics, distributed and monitoring systems
- Built Retrivis.AI — a live multimodal Agentic RAG platform (retrivis-ai-client.vercel.app)
- Expert in building high-concurrency AI systems validated through RAGAS benchmarking and LangSmith observability
- Always pushing the boundaries of what practical AI can do in the real world

### Education
- Master in Computer Applications (MCA), Specialisation: Data Science — Jain (Deemed to be University), Bengaluru (Dec 2023)
- Bachelor of Commerce (B.Com), Specialisation: Finance — Christ (Deemed to be University), Bengaluru (Aug 2021)
- Passionate about learning new technologies and staying updated with the latest trends in AI and data science

### Professional
- **Data Analyst (Predictive Analytics & Automation) — SIF Tech Ltd, Juba, South Sudan (Dec 2022 – Dec 2025)**
  - Developed Python (Pandas) and SQL pipelines to automate data preprocessing and reporting, reducing manual effort by ~40%
  - Processed and validated high-volume government datasets (licensing, compliance records) with automated quality checks
  - Performed trend analysis and anomaly detection across large-scale structured datasets to identify operational risk patterns
  - Built interactive Tableau KPI dashboards monitoring workforce trends, permit activity, and service adoption for leadership
  - Conducted cross-departmental data reconciliation to ensure reliability of mission-critical operational reporting

- **Software Support Executive (Data Systems & Monitoring) — SIF Tech Ltd, Juba, South Sudan (Oct 2021 – Nov 2022)**
  - Transformed high-volume unstructured application logs into structured datasets using SQL for deep operational analysis
  - Conducted statistical trend analysis on recurring system issues to identify stability risks and drive pre-emptive fixes
  - Built and maintained KPI dashboards tracking resolution velocity and backlog trends for real-time service health visibility
  - Collaborated with Engineering teams to translate complex technical logs into actionable system improvements
  - Monitored post-deployment system changes using data-driven reporting to evaluate software update effectiveness

  ### Contact Information
- **Email:** srjawahar1999@gmail.com
- **Phone:** +91 9036504494
- **Location:** Bengaluru, India
- **LinkedIn:** https://www.linkedin.com/in/jawaharsr
- **GitHub:** https://github.com/jawahar-singamsetty
- **Kaggle:** https://www.kaggle.com/jawaharsr
- **Live Project:** https://retrivis-ai-client.vercel.app

### What I'm Looking For
- AI/ML Engineering and AI Architecture roles
- Generative AI and LLM projects with real-world production impact
- Agentic AI and RAG system design opportunities
- Collaborations on innovative AI products
- Open source contributions in the AI/ML space
- Opportunities to build and ship high-concurrency, data-driven AI solutions

### Certifications
- AI Engineering: LLM Engineering, RAG, QLoRA, Agents — Udemy (https://www.udemy.com/certificate/UC-6e87f444-b5b6-4092-b797-a44d450c058c/)
- Google Data Analytics Professional Certificate — Coursera (https://coursera.org/verify/professional-cert/9VPXDTKR2PK9)
- Agentic AI Engineering — In Progress

### Personal
- **Qualities:** systems thinker, determined, builder mindset
- Passionate about turning cutting-edge AI research into real products people can use
- Currently building and iterating on Retrivis.AI — a live production AI platform
- Love exploring the latest in LLM research, agentic workflows, and distributed AI systems
      `,
    };
  },
});
