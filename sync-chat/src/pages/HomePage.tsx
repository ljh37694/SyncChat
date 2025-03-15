import React, { useEffect } from "react";
import ChatContainer from "../components/chat/ChatContainer";
import messages from "../messages";
import { useChatListStore } from "../stores/chat-list-store";

function HomePage(): React.ReactElement {
  const { chatList, setChatList } = useChatListStore();

  useEffect(() => {
    setChatList(messages);
  }, []);

  return (
    <div className="flex flex-col gap-3 h-full justify-center items-center">
      <ChatContainer chatList={chatList} />
    </div>
  );
}

export default HomePage;
