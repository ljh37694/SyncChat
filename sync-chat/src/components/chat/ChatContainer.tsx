import Chat from "./Chat";
import ChatInput from "./ChatInput";

interface ChatContainerProps {
  chatList: string[];
}

function ChatContainer(props: ChatContainerProps) {
  const { chatList } = props;

  return (
    <div className="flex flex-col w-full h-[calc(100vh-40px)] p-5 bg-gray-300/80 rounded-2xl overflow-y-hidden">
      <section className="border-b-gray-400 border-b py-5 px-2">
        <h2 className="font-title text-2xl">Group Chat</h2>
      </section>

      <section className="flex flex-col gap-3 w-full p-3 overflow-y-scroll scrollbar-hidden">
        {chatList.map((chat, idx) => {
          return <Chat text={chat} isMyChat={idx % 2 === 0} key={idx} />;
        })}
      </section>

      <ChatInput />
    </div>
  );
}

export default ChatContainer;
