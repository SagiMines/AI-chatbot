import LoadingAnimation from './LoadingAnimation';
import { ChatProps } from '@/typings';
import styles from '@/styles/Chat.module.css';

const Chat = ({ chatLog, isLoading, chatRef }: ChatProps) => {
  return (
    <>
      <h1 className={styles.heading}>AI Chatbot</h1>
      <div ref={chatRef} className={styles.outerContainer}>
        <div className={styles.innerContainer}>
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
                } ${styles.message}`}
              >
                {message.message}
              </div>
            </div>
          ))}
          {isLoading && (
            <div key={chatLog.length} className={styles.loaderOuterContainer}>
              <div className={styles.loaderInnerContainer}>
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
