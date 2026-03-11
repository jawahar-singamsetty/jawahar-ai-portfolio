import { tool } from 'ai';
import { z } from 'zod';

export const getProjects = tool({
  description:
    "This tool shows Jawahar's project — Retrivis.AI. Use this when the user asks about projects, Retrivis, RAG, architecture, retrieval, evaluation, tech stack, or what Jawahar has built.",
  parameters: z.object({}),
  execute: async () => {
    return `
Here is my flagship project — Retrivis.AI! 🚀

**Retrivis.AI: Intelligence Beyond Text**
A production-deployed multimodal RAG platform designed to extract insights from PDFs, images, and live web URLs.

---

**1. Architecture: The Engine Room**
A high-concurrency system split into three independent layers:
- FastAPI — low-latency gateway for all user interactions
- Celery — heavy-duty document ingestion and processing
- Redis — state-managed message brokering between services
By decoupling these services, the system maintains 99.9% UI responsiveness even during massive document uploads. Non-blocking ingestion means you can upload a 200-page report and you are free to navigate away or close the application; our background workers handle the heavy lifting independently, allowing you to stay productive without interruption.

Pipelines:
- Ingestion Pipeline: Documents treated as raw material. Poppler and Tesseract handle visual extraction. Unstructured.io performs semantic partitioning — identifying Titles, Headers, and Tables — so every vector in Supabase (pgvector) retains its original structural context.
- Retrieval Pipeline: Multi-stage lookup with GPT-4o query reformulation → Hybrid Search (Vector + BM25) → Reciprocal Rank Fusion (RRF) for statistically superior top-k ranking.
- Generation Pipeline: LangGraph Supervisor dynamically decides between internal document context and Tavily Web Search. Input and output Security Guardrails scan for Prompt Injection, PII, and Toxicity before and after every response.

---

**2. Multimodal Mastery**
Data is rarely just text. Retrivis.AI bridges raw pixels and structured knowledge:
- Visual Ingestion (OCR): Poppler + Tesseract for high-fidelity extraction from scanned documents, handwritten notes, and legacy PDFs
- Semantic Intelligence: Unstructured.io understands document hierarchy — not naive character splitting
- Live Web Awareness: ScrapingBee — real-time ingestion of live URLs, no file upload needed
- Async Processing: Celery + Redis for non-blocking 100+ page document processing in the background

---

**3. Retrieval Engine: 4-Stage Precision**
Four distinct retrieval modes for every type of query:
- Vector Search — pure semantic similarity for direct queries
- Hybrid Search — merges keyword precision (BM25) with vector meaning
- Multi-Query — expands one prompt into "k" semantically diverse variations (user-defined count)
- Multi-Query Hybrid — ultimate mode: hybrid search applied across every multi-query variation

Reciprocal Rank Fusion (RRF): Mathematically merges sparse and dense results. Even rare keywords retain their semantic importance — statistically superior top-k ranking. Custom PostgreSQL implementation for high-performance indexing.

Query Reformulation: GPT-4o thinks about your question before searching. Reformulates ambiguous queries into diverse variations to capture information a single-string search would miss. Key driver of Context Recall: 0.82.

Granular Control: Users can tune Top-K (chunk count), Alpha (Vector vs. Keyword weight), and Similarity Thresholds in real-time.

---

**4. Agentic Brain: Autonomous Reasoning**
Retrivis.AI doesn't just retrieve — it reasons.
- LangGraph Supervisor: Central reasoning agent that triages every query and dynamically routes to the best tool
- Dynamic Tool Routing: When a query exceeds the document corpus, the Supervisor invokes Tavily Web Search — merging live internet data with private document context. Autonomous tool calling with zero-shot reasoning.
- Simple RAG: Optimized for speed and direct extraction from single documents
- Agentic RAG: Optimized for complex multi-step research across multiple documents with external verification
- Governed Intelligence (Guardrails): Prompt Injection detection, PII redaction, and Toxicity filtering at both input and output layers

---

**5. Evaluation: RAGAS Benchmarked Accuracy**
Every response mathematically verified against real-world datasets:
- Faithfulness: 0.95 — near-total elimination of AI hallucinations
- Context Precision: 0.88 — zero noise in retrieved chunks
- Answer Relevancy: 0.81 — directly addresses user intent
- Context Recall: 0.82 — captures all necessary evidence for a complete answer
- 100% Traceability via LangSmith — every chunk, retrieval, and summary recorded end-to-end

---

**6. Tech Stack: Production Infrastructure**
| Layer | Technology |
|---|---|
| API Server | FastAPI (Python 3.11+) |
| RAG Framework | LangChain |
| Chat LLM | GPT-4o |
| Embedding Model | OpenAI text-embedding-3-large |
| Vector DB | Supabase (PostgreSQL + pgvector) |
| Retrieval Modes | Vector, Hybrid, Multi-Query, Multi-Query Hybrid |
| Document Parsing | Poppler, Tesseract OCR, libmagic |
| Web Scraping | ScrapingBee |
| Message Broker | Redis |
| Task Queue | Celery |
| Agents | LangGraph |
| Evaluation | RAGAS |
| Observability | LangSmith |
| Containerization | Docker + Docker Compose |
| Dependency Mgmt | Poetry |
| DB Migrations | Supabase CLI |

 `;
  },
});