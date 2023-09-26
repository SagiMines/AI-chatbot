import React, { Dispatch, SetStateAction } from 'react';

type Props = {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const ChatForm = ({ inputValue, setInputValue, handleSubmit }: Props) => {
  return (
    <form onSubmit={handleSubmit} className="flex-none p-6">
      <div className="flex rounded-lg border border-gray-700 bg-gray-800">
        <input
          className="flex-grow px-4 py-2 bg-transparent text-white focus:outline-none"
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button
          className="bg-purple-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duraton-300"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ChatForm;
