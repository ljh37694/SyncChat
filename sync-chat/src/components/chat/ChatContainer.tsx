import Chat from "./Chat";

interface ChatContainerProps {
  chatList: string[],
}

function ChatContainer(props: ChatContainerProps) {
  const { chatList } = props;

  return (
    <div className="flex flex-col gap-3">
      {chatList.map((chat, idx) => {
        return <Chat text={chat} key={idx} />;
      })}
    </div>
  );
}

export default ChatContainer;