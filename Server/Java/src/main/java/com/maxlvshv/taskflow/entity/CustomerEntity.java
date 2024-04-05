package com.maxlvshv.taskflow.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "Customers")
public class CustomerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    public String nickname;

    public String password;

    public String first_name;

    public String last_name;

    public String gmail;

    @OneToMany(mappedBy = "customer")
    public List<ProjectEntity> projects;
}
