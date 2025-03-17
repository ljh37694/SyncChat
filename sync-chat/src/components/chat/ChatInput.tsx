import {
  faFaceSmile,
  faPaperclip,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useChatListStore } from "../../stores/chat-list-store";
import { ChatType } from "../../types/common";

function ChatInput() {
  const textInputRef = useRef<HTMLInputElement>(null);

  const { addChat } = useChatListStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text: string | undefined = textInputRef.current?.value;

    if (typeof text === "string" && text.length > 0) {
      const newChat: ChatType = {
        id: 1,
        text,
        room: "roomId",
        sender: "sender",
        timestamp: new Date(),
      }

      textInputRef.current!.value = "";
      addChat(newChat);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 w-full p-2 bg-white rounded-2xl"
    >
      <input
        className="grow focus-visible:outline-0 text-lg px-3 size"
        ref={textInputRef}
        maxLength={1000}
      />

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
