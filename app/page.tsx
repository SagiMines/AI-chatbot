'use client';
import Chat from '@/components/Chat';
import ChatForm from '@/components/ChatForm';
import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [chatLog, setChatLog] = useState<{ type: string; message: string }[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setChatLog(prevChatLog => [
      ...prevChatLog,
      { type: 'user', message: inputValue },
    ]);
    await sendMessage(inputValue);
    setInputValue('');
  };

  const sendMessage = async (message: string) => {
    const url = 'https://api.pawan.krd/v1/chat/completions';
    const headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      'Content-type': 'application/json',
    };
    const data = {
      model: 'pai-001-light-beta',
      messages: [
        {
          role: 'user',
          content: message,
        },
      ],
    };

    setIsLoading(true);

    try {
      const response = await axios.post(url, data, { headers });
      console.log(response);
      setChatLog(prevChatLog => [
        ...prevChatLog,
        { type: 'bot', message: response.data.choices[0].message.content },
      ]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <main className="bg-gray-900 w-full h-full">
      <div className="flex flex-col h-screen mx-auto max-w-[900px]">
        <Chat chatLog={chatLog} />
        <ChatForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
        />
      </div>
    </main>
  );
}
