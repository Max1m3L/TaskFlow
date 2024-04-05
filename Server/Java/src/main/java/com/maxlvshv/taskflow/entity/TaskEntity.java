package com.maxlvshv.taskflow.entity;

import com.maxlvshv.taskflow.entity.taskStuff.Condition;
import com.maxlvshv.taskflow.entity.taskStuff.Priority;
import com.maxlvshv.taskflow.entity.taskStuff.Stage;
import jakarta.persistence.*;
import lombok.Data;
import org.apache.catalina.User;

import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name = "Tasks")
public class TaskEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    public String name;

    public String description;

    public Date startDate;

    public Date endDate;

    @ManyToMany(mappedBy = "tasks")
    public List<UserEntity> users;

    @Enumerated(EnumType.STRING)
    public Priority priority;

    @Enumerated(EnumType.STRING)
    public Condition condition;

    @Enumerated(EnumType.STRING)
    public Stage stage;

    @ManyToOne
    @JoinColumn(name = "project_id")
    public ProjectEntity project;
}
