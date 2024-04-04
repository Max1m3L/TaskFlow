package com.maxlvshv.taskflow.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "User")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    public String first_name;
    public String last_name;
    public String first_name;
    public String gmail;
    public String role;
    public String team;
}
