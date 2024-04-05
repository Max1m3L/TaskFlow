package com.maxlvshv.taskflow.repository;

import com.maxlvshv.taskflow.entity.TaskEntity;
import com.maxlvshv.taskflow.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepo extends JpaRepository<UserEntity, Integer> {
    TaskEntity findById(int id);
}
