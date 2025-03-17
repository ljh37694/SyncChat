import { create } from "zustand";
import { ChatType } from "../types/common";

export type ChatListStoreState = { chatList: ChatType[] };

export type ChatListStoreActions = {
  addChat: (chat: ChatType) => void;
  setChatList: (chatList: ChatType[]) => void;
};

export type ChatListStore = ChatListStoreState & ChatListStoreActions;

export const useChatListStore = create<ChatListStore>((set) => ({
  chatList: [],
  addChat: (chat) => set((state) => ({ chatList: [...state.chatList, chat] })),
  setChatList: (chatList: ChatType[]) => set({ chatList }),
}));
