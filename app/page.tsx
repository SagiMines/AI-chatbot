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
  // Reference to the textarea element in the ChatForm component
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // When an answer is generated
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
    // When input is entered
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  }, [isLoading, inputValue]);

  return (
    <main>
      <Chat chatLog={chatLog} isLoading={isLoading} chatRef={chatRef} />
      <ChatForm
        handleSubmitProps={{
          inputValue,
          setInputValue,
          setChatLog,
          setIsLoading,
          textareaRef,
        }}
      />
    </main>
  );
}
