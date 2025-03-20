import { ChatType } from "../types/common";
import apiClient from "./apiClient";

export const retrieveChatList = async (roomId: string) => {
  return await apiClient.get("rooms/" + roomId).json();
};

export const sendChat = async (chat: ChatType) => {
  return await apiClient.post("rooms/" + chat.room, { json: chat }).json();
}