package com.maxlvshv.taskflow.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Users")
public class UserEntity {
    @Id
    @Column
    public int Id;
    @Column
    public String name;
    @Column
    public String surname;
    @Column
    public String gmail;
    @Column
    public String post;
    @Column
    public String team;
}
