import { HandleSubmitPropsWithoutEvent } from '@/typings';
import { handleSubmit } from '@/utils/functions';
import styles from '@/styles/ChatForm.module.css';

const ChatForm = ({
  handleSubmitProps,
}: {
  handleSubmitProps: HandleSubmitPropsWithoutEvent;
}) => {
  return (
    <form
      onSubmit={e =>
        handleSubmit(
          e,
          handleSubmitProps.inputValue,
          handleSubmitProps.setInputValue,
          handleSubmitProps.setChatLog,
          handleSubmitProps.setIsLoading
        )
      }
      className={styles.chatForm}
    >
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Type your message..."
          value={handleSubmitProps.inputValue}
          onChange={e => handleSubmitProps.setInputValue(e.target.value)}
        />
        <button
          disabled={!handleSubmitProps.inputValue}
          className={styles.sendButton}
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ChatForm;
