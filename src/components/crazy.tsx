'use client';

import React from 'react';
import { Bot } from 'lucide-react';

const Crazy = () => {
  return (
    <div className="mx-auto w-full text-center">
      <div className="mb-4">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          The Night I Deployed to Production at 2AM
        </h2>
      </div>
      <div className="flex justify-center items-center p-6 bg-accent rounded-xl">
        <Bot className="h-20 w-20 text-primary" />
      </div>
      <p className="text-muted-foreground mt-4 text-base leading-relaxed max-w-xl mx-auto">
        I once spent 36 hours straight debugging a LangGraph agent that kept routing every single query — no matter what — to the web search tool. PDFs, simple questions, even "hello". All roads led to Tavily. Turned out one poorly worded system prompt instruction was confidently overriding the entire supervisor logic. Fixed it with 4 words. Those were the longest 4 words I ever typed. 🤖🔥
      </p>
    </div>
  );
};

export default Crazy;