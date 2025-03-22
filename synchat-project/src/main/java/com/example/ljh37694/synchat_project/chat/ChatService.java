package com.example.ljh37694.synchat_project.chat;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Service;

@Service
public class ChatService {
	private static List<Chat> chatList = new ArrayList<Chat>();
	
	private static int chatCount = 0;
	
	static {
		chatList.add(new Chat(chatCount++, "sender", "practice spring",
					"roomId", LocalDate.now()));
		
		chatList.add(new Chat(chatCount++, "sender", "practice react",
				"roomId", LocalDate.now()));
		
		chatList.add(new Chat(chatCount++, "sender", "practice mysql",
				"roomId", LocalDate.now()));
		
		chatList.add(new Chat(chatCount++, "sender", "practice coding",
				"roomId", LocalDate.now()));
	}
	
	public List<Chat> retrieveChatListByRoomId(String roomId) {
		Predicate<? super Chat> predicate = chat -> roomId.equals(chat.getRoomId());
		
		return chatList.stream().filter(predicate).toList();
	}
	
	public void addChat(Chat chat) {
		chatList.add(chat);
	}
}
