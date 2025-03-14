import { use, useEffect, useRef, useState } from "react";
import Chat from "./Chat";
import ChatInput from "./ChatInput";
import NotificationNewChat from "./NotificationNewChat";

interface ChatContainerProps {
  chatList: string[];
}

function ChatContainer(props: ChatContainerProps) {
  const { chatList } = props;

  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const [lastChat, setLastChat] = useState<string>("");
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);

  useEffect(() => {
    const gap = getScrollGap();

    if (gap < 100) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      if (firstLoad) {
        setShowNotification(false);
        setFirstLoad(false);
      } else {
        setShowNotification(true);
      }
    }

    if (chatList.length > 0) {
      setLastChat(chatList[chatList.length - 1]);
    }
  }, [chatList]);

  const getScrollGap = () => {
    if (chatContainerRef.current) {
      const chatContainer = chatContainerRef.current;

      const gap: number =
        chatContainer.scrollHeight -
        (chatContainer.scrollTop + chatContainer.clientHeight);

      return gap;
    }

    return 0;
  };

  const onScrollChat = () => {
    if (chatContainerRef.current) {
      const gap = getScrollGap();

      if (gap < 100) {
        setShowNotification(false);
      }
    }
  };

  const onClickNotification = () => {
    setShowNotification(false);
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col w-full h-[calc(100vh-40px)] p-5 bg-gray-300/80 rounded-2xl overflow-y-hidden">
      <section className="border-b-gray-400 border-b py-5 px-2">
        <h2 className="font-title text-2xl">Group Chat</h2>
      </section>

      <section
        ref={chatContainerRef}
        onScroll={onScrollChat}
        className="flex flex-col gap-3 w-full p-3 overflow-y-scroll scrollbar-hidden"
      >
        {chatList.map((chat, idx) => {
          return <Chat text={chat} isMyChat={idx % 2 === 0} key={idx} />;
        })}

        <div ref={chatEndRef}></div>
      </section>

      {showNotification && (
        <NotificationNewChat
          lastChat={lastChat}
          onClick={onClickNotification}
        />
      )}

      <ChatInput />
    </div>
  );
}

export default ChatContainer;
