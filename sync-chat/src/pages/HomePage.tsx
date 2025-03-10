import React from "react";
import ChatContainer from "../components/chat/ChatContainer";

function HomePage(): React.ReactElement {
  const chatList: string[] = [
    "Hello World",
    "How are you?",
    "I'm fine, thank you.",
  ];

  return (
    <div className="flex flex-col gap-3">
      <ChatContainer chatList={chatList} />
    </div>
  );
}

export default HomePage;
