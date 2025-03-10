interface ChatProps {
  text: string,
}

function Chat(props: ChatProps) {
  const { text } = props;

  return (
    <div className="rounded-xl p-3 bg-blue-400 grow-0 shrink-0">
      <p className="text-center text-white font-basic">{ text }</p>
    </div>
  );
}

export default Chat;