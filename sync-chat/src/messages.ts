import { ChatType } from "./types/common";

const messages: ChatType[] = [
  {
    id: 1,
    room: "roomId",
    sender: "sender",
    text: "Hello",
    timestamp: new Date(),
  },
  {
    id: 2,
    room: "roomId",
    sender: "sender",
    text: "Hey",
    timestamp: new Date(),
  },
  {
    id: 1,
    room: "roomId",
    sender: "sender",
    text: "If I have money, I will buy a car",
    timestamp: new Date(),
  },
  {
    id: 1,
    room: "roomId",
    sender: "sender",
    text: "If I had money, I would buy a car",
    timestamp: new Date(),
  },
  {
    id: 1,
    room: "roomId",
    sender: "sender",
    text: "If I had had money, I would have bought a car",
    timestamp: new Date(),
  },
  {
    id: 1,
    room: "roomId",
    sender: "sender",
    text: "I make a car fixed by my freind",
    timestamp: new Date(),
  },
  {
    id: 1,
    room: "roomId",
    sender: "sender",
    text: "I asked a teacher to teach me English",
    timestamp: new Date(),
  },
]

export default messages;