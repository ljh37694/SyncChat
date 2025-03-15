import {
  faFaceSmile,
  faPaperclip,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useChatListStore } from "../../stores/chat-list-store";

function ChatInput() {
  const msgInputRef = useRef<HTMLInputElement>(null);

  const { addChat } = useChatListStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const msg: string | undefined = msgInputRef.current?.value;

    if (typeof msg === "string" && msg.length > 0) {
      addChat(msg);
      msgInputRef.current!.value = "";
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 w-full p-3 bg-white rounded-2xl"
    >
      <input className="grow focus-visible:outline-0 text-lg px-3" ref={msgInputRef} />

      <div className="container-center gap-2 text-gray-400 mr-1">
        <label className="size-6 container-center">
          <FontAwesomeIcon icon={faFaceSmile} />
        </label>
        <label className="size-6 container-center">
          <FontAwesomeIcon icon={faPaperclip} />
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-400 size-12 text-white p-2 rounded-2xl text-center container-center"
      >
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </form>
  );
}

export default ChatInput;
