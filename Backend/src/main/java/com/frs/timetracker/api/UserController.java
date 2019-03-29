package com.frs.timetracker.api;

import com.frs.timetracker.domain.User;
import com.frs.timetracker.repository.UserRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "api/user", produces = "application/json")
@CrossOrigin(origins = "*")
@PreAuthorize("hasRole('USER')")
public class UserController {

    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {

        this.userRepository = userRepository;
    }


    @GetMapping("/all")
    public List<User> controllingView() {
        return userRepository.findAll();
    }
}
