import { HandleSubmitPropsWithoutEvent } from '@/typings';
import { handleSubmit, onPressEnter } from '@/utils/functions';
import styles from '@/styles/ChatForm.module.css';
import { IoSend } from 'react-icons/io5';

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
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <textarea
            ref={handleSubmitProps.textareaRef}
            rows={1}
            placeholder="Type your message..."
            value={handleSubmitProps.inputValue}
            onChange={e => handleSubmitProps.setInputValue(e.target.value)}
            onKeyDown={e =>
              onPressEnter(
                e,
                handleSubmitProps.inputValue,
                handleSubmitProps.setInputValue,
                handleSubmitProps.setChatLog,
                handleSubmitProps.setIsLoading
              )
            }
            className={styles.textarea}
          />
          <button
            type="submit"
            disabled={!handleSubmitProps.inputValue}
            className={styles.button}
          >
            <IoSend />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ChatForm;
