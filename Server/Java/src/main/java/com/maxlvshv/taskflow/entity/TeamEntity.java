package com.maxlvshv.taskflow.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "Teams")
public class TeamEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    public String name;

    @OneToMany(mappedBy = "team")
    public List<UserEntity> users;

    @OneToMany(mappedBy = "team")
    public List<ProjectEntity> projects;

}
