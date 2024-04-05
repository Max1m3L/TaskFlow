package com.maxlvshv.taskflow.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name = "Projects")
public class ProjectEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    public String name;

    @OneToMany(mappedBy = "project")
    public List<TaskEntity> tasks;

    public Date startDate;

    public Date endDate;

    @ManyToOne
    @JoinColumn(name = "team_id")
    public TeamEntity team;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    public CustomerEntity customer;
}
