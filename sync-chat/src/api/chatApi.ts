import ky from 'ky';
import { ChatType } from '../types/common';

const API_URL =  import.meta.env.VITE_API_URL;

export const retrieveChatList = async (roomId: string) => {
  return await ky.get(`${API_URL}/rooms/${roomId}`).json();
}

export const sendChat = async (chat: ChatType) => {
  return await ky.post(API_URL + "/rooms/roomId", { json: chat }).json();
}