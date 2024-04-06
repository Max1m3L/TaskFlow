package com.maxlvshv.taskflow.controller;

import com.maxlvshv.taskflow.entity.TaskEntity;
import com.maxlvshv.taskflow.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/tasks")
@AllArgsConstructor
public class TaskController {
    private final TaskService taskService;

    @GetMapping
    public ResponseEntity<?> getAllTasks() {
        return ResponseEntity.ok(taskService.getAllTasks());
    }


    @GetMapping("/{id}")
    public Map<TaskEntity, List<TaskEntity>> getTaskById(@PathVariable("id") int id) {
        Map<TaskEntity, List<TaskEntity>> map = new HashMap<>();
        TaskEntity task = taskService.getTaskById(id);
        map.put(task, taskService.getAllTasksByName(task.getName()));
        return map;
    }
}
