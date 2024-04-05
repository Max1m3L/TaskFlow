package com.maxlvshv.taskflow.repository;

import com.maxlvshv.taskflow.entity.ProjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepo extends JpaRepository<ProjectEntity, Integer> {
    List<ProjectEntity> findAll();

    List<ProjectEntity> findAllByName(String name);

    ProjectEntity findById(int id);
}
