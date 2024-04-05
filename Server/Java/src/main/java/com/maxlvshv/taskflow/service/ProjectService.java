package com.maxlvshv.taskflow.service;

import com.maxlvshv.taskflow.entity.ProjectEntity;
import com.maxlvshv.taskflow.repository.ProjectRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProjectService {
    private final ProjectRepo projectRepo;

    public List<ProjectEntity> getAllProjects() {
        return projectRepo.findAll();
    }

    public ProjectEntity getProjectById(int id) {
        return projectRepo.findById(id);
    }

}

