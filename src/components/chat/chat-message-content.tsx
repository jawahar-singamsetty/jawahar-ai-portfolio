'use client';

import { Message } from 'ai/react';
import React, { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';

export type ChatMessageContentProps = {
  message: Message;
  isLast?: boolean;
  isLoading?: boolean;
  reload?: () => Promise<string | null | undefined>;
  addToolResult?: (args: { toolCallId: string; result: string }) => void;
  skipToolRendering?: boolean;
};

// Defined outside to prevent recreation on every render
const markdownComponents = {
  p: ({ children }: any) => (
    <p className="break-words whitespace-pre-wrap mb-1 leading-snug">{children}</p>
  ),
  ul: ({ children }: any) => (
    <ul className="my-1 list-disc pl-6">{children}</ul>
  ),
  ol: ({ children }: any) => (
    <ol className="my-1 list-decimal pl-6">{children}</ol>
  ),
  li: ({ children }: any) => (
    <li className="my-0.5 leading-snug">{children}</li>
  ),
  h1: ({ children }: any) => (
    <h1 className="text-lg font-bold mt-3 mb-1">{children}</h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-base font-bold mt-2 mb-1">{children}</h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-sm font-semibold mt-2 mb-0.5">{children}</h3>
  ),
  a: ({ href, children }: any) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      {children}
    </a>
  ),
  hr: () => (
    <hr className="my-2 border-neutral-200 dark:border-neutral-700" />
  ),
};

const CodeBlock = React.memo(({ content }: { content: string }) => {
  const [isOpen, setIsOpen] = useState(true);

  const firstLineBreak = content.indexOf('\n');
  const firstLine = content.substring(0, firstLineBreak).trim();
  const language = firstLine || 'text';
  const code = firstLine ? content.substring(firstLineBreak + 1) : content;
  const previewLines = code.split('\n').slice(0, 1).join('\n');
  const hasMoreLines = code.split('\n').length > 1;

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="my-2 w-full overflow-hidden rounded-md"
    >
      <div className="bg-secondary text-secondary-foreground flex items-center justify-between rounded-t-md border-b px-4 py-1">
        <span className="text-xs">
          {language !== 'text' ? language : 'Code'}
        </span>
        <CollapsibleTrigger className="hover:bg-secondary/80 rounded p-1">
          {isOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </CollapsibleTrigger>
      </div>
      <div className="bg-accent/80 text-accent-foreground rounded-b-md">
        {!isOpen && hasMoreLines ? (
          <pre className="px-4 py-3">
            <code className="text-sm">{previewLines + '\n...'}</code>
          </pre>
        ) : (
          <CollapsibleContent>
            <div className="custom-scrollbar" style={{ overflowX: 'auto' }}>
              <pre className="min-w-max px-4 py-3">
                <code className="text-sm whitespace-pre">{code}</code>
              </pre>
            </div>
          </CollapsibleContent>
        )}
      </div>
    </Collapsible>
  );
});
CodeBlock.displayName = 'CodeBlock';

const ChatMessageContent = React.memo(function ChatMessageContent({
  message,
  isLoading,
}: ChatMessageContentProps) {
  const renderContent = () => {
    return message.parts?.map((part, partIndex) => {
      if (part.type !== 'text' || !part.text) return null;

      // While streaming — plain text only, no markdown parsing, no flicker
      if (isLoading) {
        return (
          <div
            key={partIndex}
            className="prose dark:prose-invert w-full max-w-none prose-p:my-0 prose-li:my-0 prose-ul:my-1 prose-ol:my-1 prose-headings:my-1"
          >
            <Markdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {part.text}
            </Markdown>
          </div>
        );
      }

      // Streaming complete — render full markdown once
      const contentParts = part.text.split('```');
      return (
        <div key={partIndex} className="w-full space-y-1">
          {contentParts.map((content, i) =>
            i % 2 === 0 ? (
              <div
                key={`text-${i}`}
                className="prose dark:prose-invert w-full max-w-none prose-p:my-0 prose-li:my-0 prose-ul:my-1 prose-ol:my-1 prose-headings:my-1"
              >
                <Markdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                  {content}
                </Markdown>
              </div>
            ) : (
              <CodeBlock key={`code-${i}`} content={content} />
            )
          )}
        </div>
      );
    });
  };

  return <div className="w-full">{renderContent()}</div>;
});

export default ChatMessageContent;