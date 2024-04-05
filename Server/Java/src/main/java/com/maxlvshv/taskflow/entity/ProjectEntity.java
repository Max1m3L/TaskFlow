package com.maxlvshv.taskflow.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Projects")
public class ProjectEntity {
    @Id
    @Column
    public Integer id;
    @Column
    public String name;
    @Column
    public String description;
    @Column
    public String startDate;
    @Column
    public String endDate;

}
