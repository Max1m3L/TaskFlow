package com.maxlvshv.taskflow.repository;

import com.maxlvshv.taskflow.entity.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepo extends JpaRepository<TaskEntity, Integer> {
    List<TaskEntity> findAll();

    TaskEntity findById(int id);
}
