import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChatType } from "../../types/common";

interface Props {
  lastChat: ChatType;
  onClick: () => void;
}

function NotificationNewChat(props: Props) {
  const { lastChat, onClick } = props;

  return (
    <div
      onClick={onClick}
      className="text-black text-center bg-white p-3 rounded-xl mb-1.5 cursor-pointer"
    >
      <div className="container-center">
        <label className="size-5"></label>
        <p className="grow truncate px-3">{lastChat.text}</p>
        <label className="w-5 self-end">
          <FontAwesomeIcon icon={faArrowDown} />
        </label>
      </div>
    </div>
  );
}

export default NotificationNewChat;
