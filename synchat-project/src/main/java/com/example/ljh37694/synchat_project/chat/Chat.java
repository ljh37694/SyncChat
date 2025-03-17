package com.example.ljh37694.synchat_project.chat;

import java.time.LocalDate;

public class Chat {
	private Integer id;
	private String sender;
	private String text;
	private String room;
	private LocalDate timestamp;
	
	public Chat(Integer id, String sender, String text, String room, LocalDate timestamp) {
		super();
		this.id = id;
		this.sender = sender;
		this.text = text;
		this.room = room;
		this.timestamp = timestamp;
	}
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getSender() {
		return sender;
	}
	public void setSender(String sender) {
		this.sender = sender;
	}
	
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	
	public String getRoom() {
		return room;
	}
	public void setRoom(String room) {
		this.room = room;
	}
	
	public LocalDate getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(LocalDate timestamp) {
		this.timestamp = timestamp;
	}
	
	@Override
	public String toString() {
		return "Chat [id=" + id + ", sender=" + sender + ", text=" + text + ", room=" + room + ", timestamp="
				+ timestamp + "]";
	}
}
