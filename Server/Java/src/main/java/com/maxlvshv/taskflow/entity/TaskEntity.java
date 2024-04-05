package com.maxlvshv.taskflow.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Tasks")
public class TaskEntity {
    @Id
    @Column
    public int id;

    @Column
    public int number;

    @Column
    public String name;

    @Column
    public String description;

    @Column
    public String priority;

    @Column
    public String customer;

    @Column
    public String inspector;

    @Column
    public String project;

    @Column
    public String team;

    @Column
    public String stage;

    @Column
    public String status;

    @Column
    public String condition;

    @Column
    public String analyst;

    @Column
    String developer;

    @Column
    public String tester;

    @Column
    public String manager;

    @Column
    public int sp_analysis;

    @Column
    public int sp_testier;

    @Column
    public int sp_develop;

    @Column
    public int sp_release;

    @Column
    public String startDate;

    @Column
    public int taskNumberBlock;

    @Column
    public int blockTrack;

}
