interface ChatProps {
  text: string;
  isMyChat: boolean;
}

function Chat(props: ChatProps) {
  const { text, isMyChat } = props;

  const chatStyle = isMyChat
    ? "bg-blue-400 text-white self-end"
    : "bg-white text-black self-start";

  return (
    <span className={`${chatStyle} self-end rounded-2xl p-3`}>
      {text}
    </span>
  );
}

export default Chat;
