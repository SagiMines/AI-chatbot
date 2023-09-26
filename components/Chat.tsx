type Props = {
  chatLog: {
    type: string;
    message: string;
  }[];
};

const Chat = ({ chatLog }: Props) => {
  return (
    <>
      <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-center py-3 font-bold text-6xl">
        AI Chatbot
      </h1>
      <div className="flex-grow p-6">
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
        </div>
      </div>
    </>
  );
};

export default Chat;
