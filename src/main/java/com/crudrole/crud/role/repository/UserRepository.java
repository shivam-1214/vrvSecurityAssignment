package com.crudrole.crud.role.repository;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;

import com.crudrole.crud.role.model.User;


public interface UserRepository extends JpaRepository<User, Integer>{
    
}
