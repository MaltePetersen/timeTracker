package com.frs.timetracker;

import com.frs.timetracker.domain.Company;
import com.frs.timetracker.domain.Role;
import com.frs.timetracker.domain.RoleName;
import com.frs.timetracker.domain.User;
import com.frs.timetracker.message.request.SignUpForm;
import com.frs.timetracker.repository.CompanyRepository;
import com.frs.timetracker.repository.RoleRepository;
import com.frs.timetracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.HashSet;
import java.util.Set;


@Configuration
public class DevelopmentConfig {
    @Autowired
    PasswordEncoder encoder;

    @Bean
    public CommandLineRunner dataLoader(UserRepository userRepository, RoleRepository roleRepository, CompanyRepository companyRepository) {
        return new CommandLineRunner() {
            @Override
            public void run(String... args) throws Exception {
                if (!roleRepository.findByName(RoleName.ROLE_USER).isPresent())
                roleRepository.save(new Role(RoleName.ROLE_USER));
                if (!roleRepository.findByName(RoleName.ROLE_ADMIN).isPresent())
                    roleRepository.save(new Role(RoleName.ROLE_ADMIN));
                if (!roleRepository.findByName(RoleName.ROLE_PM).isPresent())
                    roleRepository.save(new Role(RoleName.ROLE_PM));

                SignUpForm signUpForm = new SignUpForm();
                signUpForm.setEmail("test@test.de");
                signUpForm.setName("test");
                signUpForm.setPassword("123456789");
                signUpForm.setUsername("testUser");
                User user = new User(signUpForm.getName(), signUpForm.getUsername(),
                        signUpForm.getEmail(), encoder.encode(signUpForm.getPassword()));
                Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
                        .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
                Set<Role> roles = new HashSet<>();
                roles.add(userRole);
                user.setRoles(roles);
                if (!userRepository.existsByUsername(signUpForm.getUsername())) {
                    userRepository.save(user);

                }
                companyRepository.deleteAll();
                companyRepository.save(new Company("FRS"));
                companyRepository.save(new Company("Helgoline"));
                companyRepository.save(new Company("RSL"));

            }
        };
    }

}