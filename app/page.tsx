'use client';
import Chat from '@/components/Chat';
import ChatForm from '@/components/ChatForm';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  // The user's question string
  const [inputValue, setInputValue] = useState('');
  // The AI & user chat log data
  const [chatLog, setChatLog] = useState<{ type: string; message: string }[]>(
    []
  );
  // An indicator when the AI is generating an answer.
  const [isLoading, setIsLoading] = useState(false);
  // Reference to the chat div so that the scrollbar would always display the newest message
  const chatRef = useRef<HTMLDivElement>(null);

  // When the loading message indicator changes the scrollbar slides to the bottom
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
