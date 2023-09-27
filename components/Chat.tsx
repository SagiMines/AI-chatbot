import LoadingAnimation from './LoadingAnimation';
import { ChatProps } from '@/typings';

const Chat = ({ chatLog, isLoading, chatRef }: ChatProps) => {
  return (
    <>
      <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center py-3 font-bold text-6xl">
        AI Chatbot
      </h1>
      <div ref={chatRef} className="flex-grow p-6 overflow-auto">
        <div className="flex flex-col space-y-4">
          {chatLog.map((message, index) => (
            <div
              className={`flex ${
                message.type === 'user' ? 'justify-end' : 'justify-start'
              }`}
              key={index}
            >
              <div
                className={`${
                  message.type === 'user' ? 'bg-purple-500' : 'bg-gray-800'
                } rounded-lg p-4 text-white max-w-sm`}
              >
                {message.message}
              </div>
            </div>
          ))}
          {isLoading && (
            <div key={chatLog.length} className="flex justify-start">
              <div className="bg-gray-800 rounded-lg p-4 text-white max-w-sm">
                <LoadingAnimation />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Chat;
