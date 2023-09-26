type Props = {
  chatLog: {
    type: string;
    message: string;
  }[];
};

const Chat = ({ chatLog }: Props) => {
  return (
    <>
      <h1>AI Chatbot</h1>
      {chatLog.map((message, index) => (
        <div key={index}>{message.message}</div>
      ))}
    </>
  );
};

export default Chat;
