package com.maxlvshv.taskflow.controller;

import com.maxlvshv.taskflow.entity.ProjectEntity;
import com.maxlvshv.taskflow.entity.TaskEntity;
import com.maxlvshv.taskflow.repository.TaskRepo;
import com.maxlvshv.taskflow.service.ProjectService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/projects")
@AllArgsConstructor
public class ProjectController {
    private final ProjectService projectService;
    private final TaskRepo taskRepo;

    @GetMapping
    public ResponseEntity<?> getAllProjects() {
        return ResponseEntity.ok(projectService.getAllProjects());
    }

    @GetMapping("/tasks/{id}")
    public List<TaskEntity> getProjectsTaskById(@PathVariable("id") int id) {
        ProjectEntity project = projectService.getProjectById(id);

        return new ArrayList<>(taskRepo.findAllByProj(project.getName()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProjectEntity> getProjectById(@PathVariable("id") int id) {
        return ResponseEntity.ok(projectService.getProjectById(id));
    }
}
