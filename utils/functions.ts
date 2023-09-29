import { ChatLog, HandleSubmit, SendMessage } from '@/typings';
import axios from 'axios';

/*
When the user sends the question to the AI the user's question
is added to the chat log and the function call the 'sendMessage' 
function.  
*/
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

/*
This function takes the question from the user and sends a POST request to 
the '/api/chat' route with all the necessary data, recieves the AI response 
and updates the chat log.
*/
const sendMessage: SendMessage = async (message, setIsLoading, setChatLog) => {
  const url = '/api/chat';
  const data = {
    query: message,
  };

  setIsLoading(true);

  try {
    const response = await axios.post(url, data);
    setChatLog((prevChatLog: ChatLog) => [
      ...prevChatLog,
      {
        type: 'bot',
        message: response.data,
      },
    ]);
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
    console.log(error);
  }
};
