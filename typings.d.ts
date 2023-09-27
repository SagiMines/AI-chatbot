/**         TYPES           **/

type HandleSubmitEvent = React.FormEvent<HTMLFormElement>;

export type ChatLog = {
  type: string;
  message: string;
}[];

export type HandleSubmit = (
  event: HandleSubmitEvent,
  inputValue: string,
  setInputValue: Dispatch<SetStateAction<string>>,
  setChatLog: Dispatch<SetStateAction<ChatLog>>,
  sendMessage: (message: string) => Promise<void>
) => Promise<void>;

export type SendMessage = (
  message: string,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setChatLog: Dispatch<SetStateAction<ChatLog>>
) => Promise<void>;

/**         INTERFACES           **/

export interface HandleSubmitPropsWithoutEvent {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  setChatLog: Dispatch<SetStateAction<ChatLog>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}
export interface HandleSubmitProps extends HandleSubmitPropsWithoutEvent {
  event: HandleSubmitEvent;
}

export interface ChatProps {
  chatLog: {
    type: string;
    message: string;
  }[];
  isLoading: boolean;
  chatRef: RefObject<HTMLDivElement>;
}
