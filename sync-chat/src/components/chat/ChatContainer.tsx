import { useEffect, useRef, useState } from "react";
import Chat from "./Chat";
import ChatInput from "./ChatInput";
import NotificationNewChat from "./NotificationNewChat";
import { ChatType } from "../../types/common";
import apiClient from "../../api/apiClient";
import { useChatListStore } from "../../stores/chat-list-store";

interface ChatContainerProps {
  chatList: ChatType[];
}

function ChatContainer(props: ChatContainerProps) {
  const { chatList } = props;

  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const lastChatRef = useRef<HTMLDivElement>(null);

  const [lastChat, setLastChat] = useState<ChatType | null>(null);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);

  const { setChatList } = useChatListStore();

  useEffect(() => {
    if (!isScrolledAboveLastChat()) {
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

  useEffect(() => {
    apiClient
      .get<ChatType[]>("rooms/roomId")
      .json()
      .then((data) => {
        setChatList(data);
      });
  }, []);

  const isScrolledAboveLastChat = (): boolean => {
    const chatContainer = chatContainerRef.current as HTMLDivElement;

    const gap: number =
      chatContainer.scrollHeight -
      chatContainer.scrollTop -
      chatContainer.clientHeight;

    return gap > 160;
  };

  const onScrollChat = () => {
    if (isScrolledAboveLastChat()) {
      setShowNotification(false);
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
        className="flex flex-col grow gap-3 w-full p-3 overflow-y-scroll scrollbar-hidden"
      >
        {chatList.map((chat, idx) => {
          return <Chat key={idx} isMyChat={idx % 2 == 0} chat={chat} />;
        })}

        <div ref={chatEndRef}></div>
      </section>

      {showNotification && (
        <NotificationNewChat
          lastChat={lastChat as ChatType}
          onClick={onClickNotification}
        />
      )}

      <div ref={lastChatRef} className="fixed bottom-52"></div>

      <ChatInput />
    </div>
  );
}

export default ChatContainer;
