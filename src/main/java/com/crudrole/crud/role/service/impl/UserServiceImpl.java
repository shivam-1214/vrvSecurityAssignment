package com.crudrole.crud.role.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crudrole.crud.role.model.User;
import com.crudrole.crud.role.repository.UserRepository;
import com.crudrole.crud.role.service.UserService;

@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

     @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
    @Override
    public User createUser(User user) {
       return userRepository.save(user);
    }


    @Override
    public User updateUser(Long id, User user) {
        if(userRepository.existsById(id))
        {
            user.setId(id);
            return userRepository.save(user);
        }
        return null;
    }
    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }



    


    
    
}
