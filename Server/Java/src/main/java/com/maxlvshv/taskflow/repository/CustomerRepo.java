package com.maxlvshv.taskflow.repository;

import com.maxlvshv.taskflow.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepo extends JpaRepository<UserEntity, Long> {
}
