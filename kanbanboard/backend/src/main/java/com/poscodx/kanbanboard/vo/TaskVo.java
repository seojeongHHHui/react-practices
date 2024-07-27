package com.poscodx.kanbanboard.vo;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class TaskVo {
	private Long no;
	private String name;
	private String done;
	@JsonProperty("card_no")
	private Long cardNo;
}