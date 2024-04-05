package com.maxlvshv.taskflow.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "Users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    public String nickname;

    public String password;

    public String first_name;

    public String last_name;

    public String gmail;

    public String post;

    @ManyToOne
    @JoinColumn(name = "team_id")
    public TeamEntity team;

    @ManyToMany
    @JoinTable(
            name = "user_task",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "task_id")
    )
    public List<TaskEntity> tasks;

    public String role;
}
