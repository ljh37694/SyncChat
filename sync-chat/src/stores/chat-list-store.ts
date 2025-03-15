import { create } from "zustand";

export type ChatListStoreState = { chatList: string[] };

export type ChatListStoreActions = {
  addChat: (msg: string) => void;
  setChatList: (chatList: string[]) => void;
};

export type ChatListStore = ChatListStoreState & ChatListStoreActions;

export const useChatListStore = create<ChatListStore>((set) => ({
  chatList: [],
  addChat: (msg) => set((state) => ({ chatList: [...state.chatList, msg] })),
  setChatList: (chatList: string[]) => set({ chatList }),
}));
