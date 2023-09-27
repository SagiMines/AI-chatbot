import { ChatLog, HandleSubmit, SendMessage } from '@/typings';
import axios from 'axios';

export const handleSubmit: HandleSubmit = async (
  event,
  inputValue,
  setInputValue,
  setChatLog,
  setIsLoading
) => {
  event.preventDefault();
  const tempInputValue = inputValue;
  setInputValue('');
  setChatLog((prevChatLog: ChatLog) => [
    ...prevChatLog,
    { type: 'user', message: tempInputValue },
  ]);
  await sendMessage(tempInputValue, setIsLoading, setChatLog);
};

const sendMessage: SendMessage = async (message, setIsLoading, setChatLog) => {
  const url = '/api/chat';
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
    const response = await axios.post(url, data);
    setChatLog((prevChatLog: ChatLog) => [
      ...prevChatLog,
      {
        type: 'bot',
        message:
          response.data.choices[0].message.content[
            response.data.choices[0].message.content.length - 1
          ] === '|'
            ? response.data.choices[0].message.content.slice(0, -5)
            : response.data.choices[0].message.content,
      },
    ]);
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
    console.log(error);
  }
};
