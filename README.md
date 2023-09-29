# AI Chatbot

<div align='center'>
<a href="https://ai-chatbot-five-livid.vercel.app/">
<img src="https://lh3.googleusercontent.com/pw/ADCreHfBblVQCm42xnXIYQtWDvmfTPKRhQQEsib5YZBDIKfCJzqCt5iThkqMfQu21KHkILoEMBLa0JX5ydu-DmkRyB-VnHp3FdsBkeoy7zYto9WF8g2b4Ob2FRFJ2Viwdol9a6g9hlckNpeBp_NZ8Qhx3xiT=w380-h75-s-no?authuser=3"/>
</a>
</div>

Welcome to AI Chatbot, an open-source web application that provides you with the ability to engage in conversations with a powerful AI chatbot, equipped with vast data capabilities, thanks to Google's PaLM 2 API. This project is developed using Next.js 13, enabling seamless integration with the PaLM 2 API. The API calls are made possible through Next.js serverless API routes and the [palm-api package](https://github.com/EvanZhouDev/palm-api).

#### **[Live Demo](https://ai-chatbot-five-livid.vercel.app/)**

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Environment Variable](#environment-variable)
- [Usage](#usage)

## Overview

AI Chatbot leverages Google's PaLM 2 API to provide users with a sophisticated conversational experience. Engage in discussions, ask questions, and explore the AI's vast knowledge base.

### Technology Stack

- **Frontend:** AI Chatbot is developed using Next.js 13, providing a responsive and dynamic user interface for interacting with the AI.

- **API Integration:** The project relies on Next.js serverless API routes to seamlessly connect with Google's PaLM 2 API, enhancing chatbot capabilities.

- **PaLM 2 API:** Google's PaLM 2 API is utilized for natural language processing and providing insightful responses to user queries.

### Features

- **Conversational AI:** Engage in conversations with a highly capable AI chatbot powered by PaLM 2.

- **Vast Data Capabilities:** Leverage the AI's vast knowledge base to ask questions and receive informative answers.

## Getting Started

Use the [Live Demo](https://ai-chatbot-five-livid.vercel.app/)

**Or, install locally:**

To set up AI Chatbot locally or deploy a similar platform, follow these steps:

1. Clone this repository to your local machine.

```bash
git clone https://github.com/SagiMines/ai-chatbot.git
cd ai-chatbot
```

2. Install the necessary dependencies.

```bash
npm install
```

3. Configure your environment variable for API access using - [Environment Variable Guidence](#environment-variable).

4. Run the application locally for development.

```bash
npm run dev
```

## Environment Variable

To run this project, you will need to add an `.env.local` file to the root of the project with the following environment variable included:

`PALM_API_KEY` - Your PaLM 2 API key (get yours [here](https://makersuite.google.com/app/apikey)).

## Usage

Once AI Chatbot is set up, users can:

- Start conversations with the AI chatbot.
- Ask questions and receive informative responses based on the AI's vast data capabilities.
- Explore the chatbot's knowledge base for various topics and queries.

Engage in insightful conversations with AI Chatbot!
