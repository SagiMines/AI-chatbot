import { HandleSubmitPropsWithoutEvent } from '@/typings';
import { handleSubmit } from '@/utils/functions';

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
      className="flex-none p-6"
    >
      <div className="flex rounded-lg border border-gray-700 bg-gray-800">
        <input
          className="flex-grow px-4 py-2 bg-transparent text-white focus:outline-none"
          type="text"
          placeholder="Type your message..."
          value={handleSubmitProps.inputValue}
          onChange={e => handleSubmitProps.setInputValue(e.target.value)}
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
