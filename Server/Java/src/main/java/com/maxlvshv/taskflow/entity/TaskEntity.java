package com.maxlvshv.taskflow.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Tasks")
public class TaskEntity {
    @Id
    @Column
    public Integer id;

    @Column
    public Integer number;

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
    public Integer sp_analysis;

    @Column
    public Integer sp_test;

    @Column
    public Integer sp_develop;

    @Column
    public Integer sp_release;

    @Column
    public String startDate;

    @Column
    public Integer taskNumberBlock;

    @Column
    public Integer blockTrack;

}
