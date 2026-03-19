import { tool } from 'ai';
import { z } from 'zod';

export const getProjects = tool({
  description:
    "This tool shows Jawahar's project — Retrivis.AI. Use this when the user asks about projects, Retrivis, RAG, architecture, retrieval, evaluation, tech stack, or what Jawahar has built.",
  parameters: z.object({}),
  execute: async (_) => {
    return `
Here is my flagship project — Retrivis.AI! 🚀

**Retrivis.AI: Intelligence Beyond Text**
A production-deployed multimodal RAG platform designed to extract insights from PDFs, images, and live web URLs.

**EXACT FACTS — answer only from these, never guess:**
- Platform name: Retrivis.AI
- Type: Multimodal Agentic RAG platform
- Status: Production deployed
- Live URL: https://retrivis-ai-client.vercel.app
- GitHub Backend: https://github.com/jawahar-singamsetty/retrivis.ai-server
- GitHub Frontend: https://github.com/jawahar-singamsetty/retrivis.ai-client
- Video Demo: https://www.loom.com/share/3317906ddbdb420783b6b9361b612d5a
This video is a demo of the Retrivis.AI platform. It is 82 seconds long.
- Built by: Jawahar S R (solo project)
- Year: 2026
- LLM used: GPT-4o (gpt-4o)
- Embedding model: text-embedding-3-large
- Vector DB: Supabase (pgvector)
- Framework: LangChain + LangGraph
- Ingestion queue: Celery + Redis
- OCR: Tesseract + Poppler
- Document parsing: Unstructured.io
- Web scraping: ScrapingBee
- Evaluation framework: RAGAS
- Observability: LangSmith
- Deployment: Docker + AWS ECS

---

**1. Architecture: The Engine Room**
A high-concurrency system split into three independent layers:
- FastAPI — low-latency gateway for all user interactions
- Celery — heavy-duty document ingestion and processing
- Redis — state-managed message brokering between services
By decoupling these services, the system maintains 99.9% UI responsiveness even during massive document uploads. Non-blocking ingestion means you can upload a 200-page report and you are free to navigate away or close the application; our background workers handle the heavy lifting independently, allowing you to stay productive without interruption.

Pipelines:
**INGESTION PIPELINE (exact process, in order):**

Step 1 — Storage:
- Uploaded documents are stored in AWS S3 bucket immediately on upload

Step 2 — Background Processing (Non-blocking):
- Celery worker picks up the ingestion task from Redis queue
- Entire ingestion runs in the background — user can navigate away freely
- UI remains 99.9% responsive during processing

Step 3 — Visual Extraction:
- Poppler — renders PDF pages into processable format
- Tesseract OCR — extracts text from scanned documents, handwritten notes, and image-based PDFs

Step 4 — Semantic Partitioning (Unstructured.io):
- Splits document into atomic elements (not naive character splitting)
- Identifies and labels every element type:
  * Titles, Headers, Subheaders
  * Paragraphs, Footers
  * Tables
  * Images

Step 5 — Contextual Chunking:
- Atomic elements are grouped into chunks based on their structural context
- Chunks preserve document hierarchy — a paragraph stays with its header

Step 6 — LLM Summarisation (for non-text chunks):
- If a chunk contains a Table → LLM generates a text summary of the table
- If a chunk contains an Image → LLM generates a text description of the image
- Summaries are what get vectorized (so they can be searched semantically)

Step 7 — Dual Storage in Supabase (pgvector):
- Each chunk stores TWO things together:
  * The vector embedding (of the summary or text)
  * The original content (raw text, original table, or original image)
- At query time: vector match finds the chunk → LLM receives the ORIGINAL content (not the summary) to generate the answer
- This ensures answers are grounded in the actual source material, not summaries

**RETRIEVAL PIPELINE (exact process, in order):**

Step 1 — Query Reformulation:
- User's query is first sent to GPT-4o for reformulation
- GPT-4o rewrites the query into "k" semantically diverse variations (k is user-defined)
- Purpose: capture information that a single-string search would miss
- Key driver of Context Recall score: 0.82

Step 2 — User Selects Search Strategy (exactly 4 modes):
- Mode 1: Vector Search
  * Pure semantic similarity search
  * Best for: direct, specific queries
  * Uses: cosine similarity against pgvector embeddings

- Mode 2: Hybrid Search
  * Combines Vector Search + BM25 keyword search
  * Best for: queries with specific technical terms or rare keywords
  * Alpha parameter controls Vector vs Keyword weight (user tunable)

- Mode 3: Multi-Query Search
  * Expands the original query into k diverse variations
  * Runs Vector Search on each variation independently
  * Best for: broad or ambiguous queries needing wide coverage

- Mode 4: Multi-Query Hybrid Search
  * Expands query into k variations (like Multi-Query)
  * Runs Hybrid Search (Vector + BM25) on EACH variation
  * Best for: complex, multi-faceted research requiring maximum recall

Step 3 — Reciprocal Rank Fusion (RRF):
- All results from the selected search strategy are merged
- RRF mathematically re-ranks combined results
- Even rare keywords retain their semantic importance
- Custom PostgreSQL implementation for high-performance indexing
- Output: statistically superior top-k chunks

Step 4 — Granular Control (user tunable parameters):
- Top-K: number of chunks retrieved
- Alpha: balance between Vector and Keyword weight in Hybrid mode
- Similarity Threshold: minimum relevance score for a chunk to qualify

**GENERATION PIPELINE (exact process, in order):**

Step 1 — Input Security Guardrail:
- Every query passes through a security layer BEFORE reaching the LLM
- Scans specifically for Prompt Injection attacks
- Purpose: prevent malicious attempts to subvert model instructions
- If flagged: request is blocked, no tokens wasted on unauthorized tasks

Step 2 — LangGraph Supervisor (The Brain):
- Central reasoning agent that triages every query
- IMPORTANT: User explicitly selects the mode before querying:

  Mode A — Simple RAG (User Selected):
  * User chooses this for direct document queries
  * Linear pipeline — query goes straight to RAG extraction
  * Optimized for speed and direct extraction from uploaded documents
  * Best for: specific, straightforward questions about document content
  * No web search, no dynamic routing — pure document retrieval

  Mode B — Agentic RAG (User Selected):
  * User chooses this for complex or research-heavy queries
  * LangGraph Supervisor dynamically decides the best approach:
    - Option 1 — RAG Extraction only:
      * Uses internal document context from pgvector
      * Used when the answer exists within uploaded documents
    - Option 2 — Tavily Web Search only:
      * Fetches real-time external data from the internet
      * Used when the query requires current world knowledge
    - Option 3 — Mixed (RAG + Web Search combined):
      * Merges private document context WITH live internet data
      * Used when the query needs both internal and external knowledge
      * Provides the most comprehensive, context-rich answer
  * Autonomous tool calling with zero-shot reasoning
  * The Supervisor decides between all three options based on query requirements

Step 3 — Output Security Guardrail:
- Every response passes through a second security layer BEFORE delivery to user
- Scans for:
  * Toxicity — ensures response is professional and safe
  * PII (Personally Identifiable Information) — redacts sensitive data
- Purpose: guarantee privacy and safety at every output

**SECURITY GUARDRAILS (exact, two layers):**
- Input guardrail: blocks Prompt Injection BEFORE reaching LLM
- Output guardrail: removes Toxicity and PII BEFORE delivery to user
- Both layers run on every single request without exception
---

**2. Multimodal Mastery**
Data is rarely just text. Retrivis.AI bridges raw pixels and structured knowledge:
- Visual Ingestion (OCR): Poppler + Tesseract for high-fidelity extraction from scanned documents, handwritten notes, and legacy PDFs
- Semantic Intelligence: Unstructured.io understands document hierarchy — not naive character splitting
- Live Web Awareness: ScrapingBee — real-time ingestion of live URLs, no file upload needed
- Async Processing: Celery + Redis for non-blocking 100+ page document processing in the background

---

**5. Evaluation: RAGAS Benchmarked Accuracy**
**RAGAS BENCHMARK SCORES (exact, do not round or change):**
- Faithfulness: 0.95
- Context Precision: 0.88
- Answer Relevancy: 0.81
- Context Recall: 0.82
- 100% Traceability via LangSmith — every chunk, retrieval, and summary recorded end-to-end

---

**TECH STACK: Production Infrastructure (exact, do not change):**

| Layer                  | Technology                                      |
|------------------------|-------------------------------------------------|
| API Server             | FastAPI (Python 3.11+)                          |
| RAG Framework          | LangChain                                       |
| Agentic Framework      | LangGraph (Supervisor architecture)             |
| Chat LLM               | GPT-4o (gpt-4o)                                 |
| Embedding Model        | OpenAI text-embedding-3-large                   |
| Vector DB              | Supabase (PostgreSQL + pgvector)                |
| Document Storage       | AWS S3                                          |
| Document Parsing       | Poppler (PDF), Tesseract OCR (images)           |
| Semantic Partitioning  | Unstructured.io                                 |
| Web Scraping           | ScrapingBee                                     |
| Message Broker         | Redis                                           |
| Task Queue             | Celery                                          |
| Retrieval Modes        | Vector, Hybrid, Multi-Query, Multi-Query Hybrid |
| Re-ranking             | Reciprocal Rank Fusion (RRF) — custom PostgreSQL|
| Web Search             | Tavily                                          |
| Evaluation             | RAGAS                                           |
| Observability          | LangSmith                                       |
| Containerization       | Docker + AWS ECS (container orchestration)                         |
| Cloud                  | AWS (ECS + S3)                                  |
| Dependency Management  | Poetry                                          |
| DB Migrations          | Supabase CLI                                    |
| Security               | Input + Output Guardrails (Prompt Injection, PII, Toxicity) |

 `;
  },
});
