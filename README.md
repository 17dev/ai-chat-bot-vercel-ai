# AI Chatbot App

This is an AI chatbot application built with Next.js and the Vercel AI SDK. The chatbot acts as a LLM data analyst. Users can upload CSV files and interact with their data through a chat interface. The chatbot uses d3 to wrangle the data based on the user's questions and generates charts and graphs with d3-scale.

## Features

- Next.js App Router
- React Server Components (RSCs), Suspense, and Server Actions
- Vercel AI SDK for streaming chat UI
- Support for OpenAI (default)
- shadcn/ui
  - Styling with Tailwind CSS
  - Radix UI for headless component primitives
  - Icons from Phosphor Icons
- Chat History, rate limiting, and session storage

## Installation

To install the application, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/17dev/ai-chat-bot-vercel-ai.git
```

2. Navigate to the project directory:

```bash
cd ai-chat-bot-vercel-ai
```

3. Install the dependencies:

```bash
npm install
```

## Running the Application

To run the application, use the following command:

```bash
npm run dev
```

The application will start running on [http://localhost:3000](http://localhost:3000).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)