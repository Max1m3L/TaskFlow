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
    public String proj;

    @Column
    public String team_;

    @Column
    public String stage_;

    @Column
    public String status_;

    @Column
    public String condition_;

    @Column
    public String analyst_;

    @Column
    String developer;

    @Column
    public String tester;

    @Column
    public String manager;

    @Column
    public int sp_analysis;

    @Column
    public int sp_test;

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
