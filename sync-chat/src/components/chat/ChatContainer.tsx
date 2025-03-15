import { useEffect, useRef, useState } from "react";
import Chat from "./Chat";
import ChatInput from "./ChatInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

interface ChatContainerProps {
  chatList: string[];
}

function ChatContainer(props: ChatContainerProps) {
  const { chatList } = props;

  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const [lastChat, setLastChat] = useState<string>("");
  const [showNotification, setShowNotification] = useState<boolean>(false);

  useEffect(() => {
    if (chatContainerRef.current && chatContainerRef.current) {
      const chatContainer = chatContainerRef.current;

      const gap =
        chatContainer.scrollHeight -
        (chatContainer.scrollTop +
          chatContainer.clientHeight +
          chatContainer.clientTop);

      if (gap < 100) {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
      } else {
        setShowNotification(true);
      }
    }

    setLastChat(chatList[chatList.length - 1]);
  }, [chatList]);

  return (
    <div className="flex flex-col w-full h-[calc(100vh-40px)] p-5 bg-gray-300/80 rounded-2xl overflow-y-hidden">
      <section className="border-b-gray-400 border-b py-5 px-2">
        <h2 className="font-title text-2xl">Group Chat</h2>
      </section>

      <section
        ref={chatContainerRef}
        className="flex flex-col gap-3 w-full p-3 overflow-y-scroll scrollbar-hidden"
      >
        {chatList.map((chat, idx) => {
          return <Chat text={chat} isMyChat={idx % 2 === 0} key={idx} />;
        })}

        <div ref={chatEndRef}></div>
      </section>

      {showNotification && (
        <div
          onClick={() => {
            chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
            setShowNotification(false);
          }}
          className="text-black text-center bg-white p-3 rounded-xl mb-1.5 cursor-pointer"
        >
          <div className="container-center">
            <label className="size-5"></label>
            <p className="grow">{lastChat}</p>
            <label className="w-5 self-end">
              <FontAwesomeIcon icon={faArrowDown} />
            </label>
          </div>
        </div>
      )}

      <ChatInput />
    </div>
  );
}

export default ChatContainer;
