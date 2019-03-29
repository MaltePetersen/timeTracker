package com.frs.timetracker.api;

import com.frs.timetracker.DTO.ControllingDto;
import com.frs.timetracker.domain.ControllingView;
import com.frs.timetracker.domain.User;
import com.frs.timetracker.repository.CompanyRepository;
import com.frs.timetracker.repository.UserRepository;
import com.frs.timetracker.service.ControllingViewConverter;
import com.frs.timetracker.service.DTOBuilder;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path= "api/controlling", produces = "application/json")
@CrossOrigin(origins = "*")
@PreAuthorize("hasRole('USER')")
public class ControllingController {
    private ControllingViewConverter controllingViewConverter;
    private UserRepository userRepository;
    private DTOBuilder dtoBuilder;
    public ControllingController(ControllingViewConverter controllingViewConverter, UserRepository userRepository, DTOBuilder dtoBuilder){
        this.controllingViewConverter = controllingViewConverter;
        this.userRepository = userRepository;
        this.dtoBuilder = dtoBuilder;
    }

    @GetMapping("/all")
    public List<ControllingDto> controllingView(){
        List<ControllingDto> controllingDtos = new ArrayList<>();
        for (User user:userRepository.findAll()
             ) {
            controllingDtos.add(dtoBuilder.generateControllingDto(user));
        }
        return controllingDtos;
    }

}
