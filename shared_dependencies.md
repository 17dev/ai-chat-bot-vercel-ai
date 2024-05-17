Shared Dependencies:

1. Next.js: Used across all files for routing and server-side rendering.
2. React: Used across all component files for creating UI.
3. Vercel AI SDK: Used in "src/utils/ai.js" for AI functionalities and in "src/pages/api/chat.js" for handling chat API.
4. OpenAI: Used in "src/utils/ai.js" for AI functionalities.
5. shadcn/ui: Used across all component files for UI design.
6. Tailwind CSS: Used in all CSS files for styling.
7. Radix UI: Used across all component files for UI design.
8. Phosphor Icons: Used across all component files for icons.
9. D3 and D3-scale: Used in "src/utils/d3.js" and "src/utils/d3-scale.js" for data visualization.
10. DOM Elements IDs: "chatInput", "chatMessage", "chatResponse", "uploadData", "dataVisualization" used in respective component files.
11. Message Names: "chatMessage", "chatResponse" used in respective component files and "src/pages/api/chat.js".
12. Function Names: "handleChat", "handleUpload", "handleDataWrangle", "handleDataVisualization" used in respective component files and utils.
13. Data Schemas: "ChatSchema", "DataSchema" used in "src/pages/api/chat.js" and "src/utils/dataWrangler.js".
14. Session Storage: Used in "src/pages/_app.js" for storing chat history and rate limiting.
15. Server Actions: Used in "src/pages/api/chat.js" for handling chat API.
16. Suspense and React Server Components (RSCs): Used across all component files for handling loading states and server-side rendering.