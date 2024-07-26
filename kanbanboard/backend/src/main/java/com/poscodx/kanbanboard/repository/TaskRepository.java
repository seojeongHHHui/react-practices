package com.poscodx.kanbanboard.repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.poscodx.kanbanboard.vo.TaskVo;

@Repository
public class TaskRepository {
	
	@Autowired
	private SqlSession sqlSession;

	public List<TaskVo> findAllByCardNo(Long cardNo) {
		return sqlSession.selectList("task.findAllByCardNo", cardNo);
	}
	
	public int updateDone(Long no, String done) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("no", no);
		map.put("done", done);
		return sqlSession.update("task.updateDone", map);
	}

	public int addTask(TaskVo taskVo) {
		return sqlSession.insert("task.addTask", taskVo);
	}
	
	public int deleteTask(Long no) {
		return sqlSession.delete("task.deleteTask", no);
	}
}