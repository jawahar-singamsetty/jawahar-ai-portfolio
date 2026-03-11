import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'This tool shows the contact information of Jawahar S R. Use when the user asks how to contact, reach out, connect, or find Jawahar online.',
  parameters: z.object({}),
  execute: async () => {
    return `
Here's how to reach me! 📬

- **Email:** srjawahar1999@gmail.com
- **Phone:** +91 9036504494
- **Location:** Bengaluru, India
- **LinkedIn:** https://www.linkedin.com/in/jawaharsr
- **GitHub:** https://github.com/jawahar-singamsetty
- **Kaggle:** https://www.kaggle.com/jawaharsr
- **Live Project:** https://retrivis-ai-client.vercel.app

I'm always open to connecting with fellow engineers, recruiters, or anyone building something interesting in the AI space. Don't hesitate to reach out! 🚀
    `;
  },
});