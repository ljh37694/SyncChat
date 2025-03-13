interface ChatProps {
  text: string,
}

function Chat(props: ChatProps) {
  const { text } = props;

  return (
    <span className="bg-blue-400 self-center rounded-2xl p-2 text-white font-basic">
      { text }
    </span>
  );
}

export default Chat;