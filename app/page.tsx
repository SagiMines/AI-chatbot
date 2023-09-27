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

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const tempInputValue = inputValue;
  //   setInputValue('');
  //   setChatLog(prevChatLog => [
  //     ...prevChatLog,
  //     { type: 'user', message: tempInputValue },
  //   ]);
  //   await sendMessage(tempInputValue);
  // };

  // const sendMessage = async (message: string) => {
  //   const url = '/api/chat';
  //   const data = {
  //     model: 'pai-001-light-beta',
  //     messages: [
  //       {
  //         role: 'user',
  //         content: message,
  //       },
  //     ],
  //   };

  //   setIsLoading(true);

  //   try {
  //     const response = await axios.post(url, data);
  //     setChatLog(prevChatLog => [
  //       ...prevChatLog,
  //       {
  //         type: 'bot',
  //         message:
  //           response.data.choices[0].message.content[
  //             response.data.choices[0].message.content.length - 1
  //           ] === '|'
  //             ? response.data.choices[0].message.content.slice(0, -5)
  //             : response.data.choices[0].message.content,
  //       },
  //     ]);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsLoading(false);
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [isLoading]);

  return (
    <main className="flex flex-col h-screen mx-auto max-w-[900px]">
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
