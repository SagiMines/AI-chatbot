'use client';
import Chat from '@/components/Chat';
import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [chatLog, setChatLog] = useState<{ type: string; message: string }[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    setChatLog(prevChatLog => [
      ...prevChatLog,
      { type: 'user', message: inputValue },
    ]);
    setInputValue('');
  };

  return (
    <main>
      <Chat chatLog={chatLog} />
    </main>
  );
}
