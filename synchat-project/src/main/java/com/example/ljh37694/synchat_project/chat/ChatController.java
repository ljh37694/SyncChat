package com.example.ljh37694.synchat_project.chat;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatController {
	private final ChatService chatService;
	
	public ChatController(ChatService chatService) {
		super();
		this.chatService = chatService;
	}
	
	@GetMapping("/rooms/{roomId}")
	public List<Chat> getChatList(@PathVariable(name = "roomId") String roomId) {
		return chatService.retrieveChatListByRoomId(roomId);
	}
	
	@PostMapping("/rooms/{roomId}/users/{userId}")
	public Chat addChat(@PathVariable String roomId,
						@PathVariable String userId,
						@RequestBody Chat chat) {
		chatService.addChat(chat);
		
		return chat;
	}
}

/*
	1. 한 유저가 속한 모든 채팅방 가져오기, /rooms
	2. 한 채팅방에 있는 최신 채팅 100개 단위로 가져오기, /rooms/{roomId}
	3. 한 채팅방에서 어느 유저가 채팅을 post, /rooms/{roomId}/users/{userId}
*/
