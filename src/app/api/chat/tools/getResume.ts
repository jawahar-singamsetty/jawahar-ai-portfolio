import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description:
    'This tool shows the resume of Jawahar S R. Use when the user asks to see, view, or download the resume or CV.',
  parameters: z.object({}),
  execute: async (_) => {
    return "You can download my resume by clicking on the link above. You can also view it by clicking on the eye icon.";
  },
});
