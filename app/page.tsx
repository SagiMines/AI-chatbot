'use client';
import Chat from '@/components/Chat';
import ChatForm from '@/components/ChatForm';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [chatLog, setChatLog] = useState<{ type: string; message: string }[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [isLoading]);

  return (
    <main>
      <Chat chatLog={chatLog} isLoading={isLoading} chatRef={chatRef} />
      <ChatForm
        handleSubmitProps={{
          inputValue,
          setInputValue,
          setChatLog,
          setIsLoading,
        }}
      />
    </main>
  );
}
