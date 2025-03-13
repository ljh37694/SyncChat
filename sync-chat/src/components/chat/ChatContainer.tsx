import Chat from "./Chat";

interface ChatContainerProps {
  chatList: string[];
}

function ChatContainer(props: ChatContainerProps) {
  const { chatList } = props;

  return (
    <div className="flex flex-col w-full h-full p-5 bg-gray-300 rounded-2xl">
      <section className="border-b-gray-400 border-b py-5 px-2">
        <h2 className="font-title text-2xl">Group Chat</h2>
      </section>

      <section className="flex flex-col gap-3 w-full p-3">
        {chatList.map((chat, idx) => {
          return <Chat text={chat} key={idx} />;
        })}
      </section>
    </div>
  );
}

export default ChatContainer;
