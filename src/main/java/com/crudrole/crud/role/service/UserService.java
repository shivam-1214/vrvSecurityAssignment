package com.crudrole.crud.role.service;

import java.util.List;

import com.crudrole.crud.role.model.User;

public interface UserService {
    List<User> getAllUsers();
    User getUserById(Integer id);
    User createUser(User user);
    User updateUser(Integer id, User user);
    void deleteUser(Integer id);
}

