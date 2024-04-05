package com.maxlvshv.taskflow.service;

import com.maxlvshv.taskflow.entity.TaskEntity;
import com.maxlvshv.taskflow.repository.TaskRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TaskService {
    private final TaskRepo taskRepo;

    public List<TaskEntity> getAllTasks() {
        return taskRepo.findAll();
    }

    public List<TaskEntity> getAllTasksByName(String name) {
        return taskRepo.findAllByName(name);
    }

    public TaskEntity getTaskById(int id) {
        return taskRepo.findById(id);
    }

}
