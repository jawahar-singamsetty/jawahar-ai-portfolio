import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description:
    'This tool shows the skills and expertise of Jawahar S R. Use when the user asks about skills, tech stack, tools, or what technologies Jawahar knows.',
  parameters: z.object({}),
  execute: async (_) => {
    return `
Here are my skills and expertise!

**AI & LLM Systems**
RAG Pipelines, Multimodal RAG, Contextual Chunking, LangChain, LangGraph, LlamaIndex, LLM Fine-tuning (QLoRA), Prompt Engineering, Tool Routing, Multi-Agent Supervisors, Agentic AI, OpenAI API, Tavily

**Retrieval & Vector Search**
Hybrid Search (Vector + BM25), Reciprocal Rank Fusion (RRF), Multi-Query Retrieval, Supabase (pgvector), FAISS, ChromaDB, Tesseract OCR, Unstructured.io, Poppler, ScrapingBee, Semantic Search, Embeddings, text-embedding-3-large

**Backend & Distributed Systems**
Python, FastAPI, RESTful APIs, Celery, Redis, PostgreSQL, SQL, Supabase, Docker, AWS (EC2/S3), Poetry, Hugging Face Transformers, PyTorch

**Evaluation & Observability**
RAGAS, LangSmith, Faithfulness Scoring, Context Precision, Answer Relevancy, Context Recall, A/B Evaluation

**Data Analytics**
Pandas, NumPy, Scikit-learn, Tableau, Excel, Predictive Modeling, Time-Series Analysis, Anomaly Detection, EDA, Feature Engineering, KPI Dashboards, Data Automation

**Soft Skills**
Systems Thinking, AI Architecture Design, Data-driven Decision Making, Cross-functional Collaboration, Problem Solving, Builder Mindset, Fast Learner
    `;
  },
});
