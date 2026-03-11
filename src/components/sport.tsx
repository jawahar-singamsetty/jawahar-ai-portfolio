'use client';

import React from 'react';

const Sports = () => {
  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          🧠 Beyond the Terminal
        </h2>
        <p className="mt-2 text-muted-foreground text-lg">
          What I do when I'm not building AI systems
        </p>
      </div>

      <div className="space-y-6 text-muted-foreground text-base">
        <p>
          Basketball was my first love 🏀. I grew up on the court — the fast pace, the team coordination, the split-second decisions. It taught me how to think on my feet and read the game before it happens. Skills that translate surprisingly well to building distributed AI systems.
        </p>
        <p>
          These days I've traded the court for the snooker table 🎱. If basketball is fast and reactive, snooker is the complete opposite — slow, precise, and deeply strategic. Every shot requires you to think three moves ahead. Sound familiar? It's basically how I approach RAG pipeline design.
        </p>
        <p>
          When I need to completely switch off, video games are my go-to 🎮. There's something about a well-designed game that reminds me why user experience matters. The best games — like the best software — make complex things feel effortless.
        </p>
        <p>
          And then there's biking 🏍️. Bengaluru traffic is my personal obstacle course — unpredictable inputs, real-time decision making, zero margin for error. It's chaotic, it's fun, and honestly it keeps my reflexes sharp for production deployments.
        </p>
      </div>
    </div>
  );
};

export default Sports;