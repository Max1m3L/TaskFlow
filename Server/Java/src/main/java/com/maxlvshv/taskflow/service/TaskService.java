package com.maxlvshv.taskflow.service;

import com.maxlvshv.taskflow.repository.TaskRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class TaskService {
    private final TaskRepo taskRepo;


}
