package com.poscodx.kanbanboard.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.poscodx.kanbanboard.dto.JsonResult;
import com.poscodx.kanbanboard.repository.CardRepository;
import com.poscodx.kanbanboard.repository.TaskRepository;
import com.poscodx.kanbanboard.vo.TaskVo;

@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	private CardRepository cardRepository;
	@Autowired
	private TaskRepository taskRepository;
	
	@GetMapping("/card")
	public ResponseEntity<JsonResult> cardList() {
		System.out.println(cardRepository.findAll());
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(cardRepository.findAll()));
	}
	
	@GetMapping("/task/{no}")
	public ResponseEntity<JsonResult> taskList(@PathVariable("no") Long cardNo) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.findAllByCardNo(cardNo)));
	}

	@PostMapping("/addTask")
	public ResponseEntity<JsonResult> addTask(@RequestBody TaskVo taskVo) {
		taskRepository.addTask(taskVo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskVo));
	}

	@PutMapping("/task/{no}")
	//public ResponseEntity<JsonResult> updateTask(@PathVariable("no") Long no, String done) {
	public ResponseEntity<JsonResult> updateTask(@PathVariable("no") Long no, @RequestBody Map<String, String> body) {
		String done = body.get("done");
		String name = body.get("name");
		taskRepository.updateDone(no, done);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(Map.of("no", no, "done", done, "name", name)));
	}
	
	@DeleteMapping("/task/{no}")
	public ResponseEntity<JsonResult> deleteTask(@PathVariable("no") Long no) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.deleteTask(no)));
	}

}
