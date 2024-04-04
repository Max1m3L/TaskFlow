package com.maxlvshv.taskflow.entity;


import jakarta.persistence.*;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;

@Data
@Entity
@Table(name = "User")
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

    public String team;

    public String role;
}
