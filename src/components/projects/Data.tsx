// File: data.tsx
'use client';

import Image from 'next/image';
import { ChevronRight, Link, Search } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- INTERFACES ---
interface ProjectHighlight {
  heading: string;
  subheading?: string;
  paragraphs?: string[];
  image?: { src: string; alt: string };
  bullets?: string[];
}

interface ProjectContentEntry {
  title: string;
  description: string;
  techStack: string[];
  date: string;
  highlights?: ProjectHighlight[];
  links: { name: string; url: string }[];
  images: { src: string; alt: string }[];
}

// --- PROJECT DATABASE ---
const PROJECT_CONTENT: ProjectContentEntry[] = [
  {
    title: 'Retrivis.AI',
    description:
      'Retrivis.AI is a production-deployed multimodal Agentic RAG platform engineered to extract actionable intelligence from unstructured documents, images, and live web data. Built for high-concurrency, production-grade reliability — validated through RAGAS benchmarking and LangSmith observability.',
    links: [
      {
        name: 'Live Website - Retrivis.AI',
        url: 'https://retrivis-ai-client.vercel.app',
      },
      {
        name: 'GitHub Backend',
        url: 'https://github.com/jawahar-singamsetty/retrivis.ai-server.git',
      },
      ],
    techStack: [
      'Python',
      'FastAPI',
      'LangChain',
      'LangGraph',
      'GPT-4o',
      'Tavily',
      'Supabase',
      'PostgreSQL (pgvector)',
      'Redis',
      'Celery',
      'Unstructured.io',
      'Tesseract OCR',
      'Poppler',
      'ScrapingBee',
      'RAGAS',
      'LangSmith',
      'PyTorch',
      'Docker',
      'AWS (EC2/S3)',
      'Git',
    ],
    date: '2026',
    highlights: [
      {
        heading: 'Distributed Architecture',
        subheading: 'Overview of the Architecture',
        image: { src: '/projects/retrivis-architecture.webp', alt: 'Architecture diagram' },
        paragraphs: [
          'A high-concurrency system split into three independent layers: FastAPI for low-latency requests, Celery for heavy-duty ingestion, and Redis for state-managed message brokering.',
          'The FastAPI layer acts as the high-speed gateway for user interactions, while the Celery/Redis backbone handles the heavy computational lifting. By decoupling these services, the system maintains 99.9% UI responsiveness even during massive document uploads.',
        ],
      },
      {
        heading: 'Ingestion Pipeline',
        subheading: 'Documents treated as raw material, not plain text',
        image: { src: '/projects/retrivis-ingestion.webp', alt: 'Ingestion pipeline' },
        paragraphs: [
          'Poppler renders PDF pages into a processable format. Tesseract OCR extracts text from scanned and image-based documents. Unstructured.io performs semantic partitioning into atomic elements — identifying Titles, Headers, and Tables — ensuring every vector stored in pgvector retains its original structural context.',
          'Processed atomic elements are further chunked by title for structural context. The LLM summarises images and table elements for easy vectorization and storage alongside the original data.',
        ],
        bullets: [
          'Poppler — renders PDF pages into processable format',
          'Tesseract OCR — extracts text from scanned and image-based documents',
          'Unstructured.io — semantic partitioning preserving document hierarchy',
          'pgvector — stores vectors with full structural context intact',
        ],
      },
      {
        heading: 'Retrieval Pipeline',
        subheading: 'Retrieval is a strategic choice, not a single path',
        image: { src: '/projects/retrivis-retrieval.webp', alt: 'Retrieval pipeline' },
        paragraphs: [
          'The engine runs a multi-stage lookup before returning any results. GPT-4o first rewrites the query for maximum recall. The user then selects from four retrieval modes, and results are re-ranked using Reciprocal Rank Fusion (RRF) to ensure the top-k chunks are statistically the most relevant.',
        ],
        bullets: [
          'Vector Search — pure semantic similarity for direct queries',
          'Hybrid Search — Vector + BM25 keyword precision combined',
          'Multi-Query Search — one prompt expanded into multiple search perspectives',
          'Multi-Query Hybrid — ultimate mode for complex research queries, includes hybrid search in each multi-query search',
          'RRF Re-ranking — results from all strategies merged and re-ranked',
        ],
      },
      {
        heading: 'Generation Pipeline',
        subheading: 'Governed intelligence from input to output',
        image: { src: '/projects/retrivis-generation.webp', alt: 'Generation pipeline' },
        paragraphs: [
          'Before reaching the model, every query passes through an initial Security Guardrail layer scanning specifically for Prompt Injection attacks — preventing malicious attempts to subvert model instructions.',
          'The core of generation is governed by a LangGraph Supervisor. In Simple RAG mode, it routes queries through a direct linear pipeline. In Agentic RAG mode, it dynamically decides between internal document context and triggering a Tavily Web Search for real-time external data.',
          'Before the final response is delivered, a secondary Security Guardrail scans the output for Toxicity and PII — redacting sensitive data to guarantee privacy at every output.',
          'By leveraging asynchronous task queuing through Redis and Celery, document processing never interrupts your workflow. Once an upload begins, you are free to navigate away or close the application; our background workers handle the heavy lifting independently, allowing you to stay productive without interruption.',
        ],
      },
    ],
    images: [],
  },
];

// --- COMPONENT DEFINITIONS ---
interface ProjectProps {
  title: string;
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-6">

      {/* Description + Tech Stack */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>
          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      {projectData.highlights && projectData.highlights.length > 0 && (
        <div className="space-y-4">
          {projectData.highlights.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-[#F5F5F7] p-6 dark:bg-[#1D1D1F] space-y-4"
            >
              {/* Heading */}
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                {item.heading}
              </h3>

              {/* Subheading */}
              {item.subheading && (
                <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  {item.subheading}
                </p>
              )}

              {/* Image */}
              {item.image && (
                <div className="relative w-full overflow-hidden rounded-2xl">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}

              {/* Paragraphs */}
              {item.paragraphs && item.paragraphs.map((para, i) => (
                <p key={i} className="text-secondary-foreground text-sm leading-relaxed">
                  {para}
                </p>
              ))}

              {/* Bullets */}
              {item.bullets && (
                <ul className="space-y-2">
                  {item.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-secondary-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Links */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

// --- MAIN DATA EXPORT ---
export const data = [
  {
    category: 'Agentic AI & RAG',
    title: 'Retrivis.AI',
    src: '/projects/retrivis-preview.png',
    content: (
      <ProjectContent project={{ title: 'Retrivis.AI' }} />
    ),
  },
];