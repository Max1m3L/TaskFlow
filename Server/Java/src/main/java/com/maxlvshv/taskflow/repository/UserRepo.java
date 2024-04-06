package com.maxlvshv.taskflow.repository;

import com.maxlvshv.taskflow.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepo extends JpaRepository<UserEntity, Integer> {
    List<UserEntity> findAll();

    UserEntity findById(int id);
}
