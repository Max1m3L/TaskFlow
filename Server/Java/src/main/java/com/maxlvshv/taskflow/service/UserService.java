package com.maxlvshv.taskflow.service;

import com.maxlvshv.taskflow.entity.UserEntity;
import com.maxlvshv.taskflow.repository.UserRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepo userRepo;

    public List<UserEntity> getAllUsers() {
        return userRepo.findAll();
    }

    public UserEntity getUserById(int id) {
        return userRepo.findById(id);
    }
}
