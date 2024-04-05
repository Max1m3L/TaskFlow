package com.maxlvshv.taskflow.repository;

import com.maxlvshv.taskflow.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByNickname(String nickname);
}
