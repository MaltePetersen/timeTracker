package com.frs.timetracker.api;


import com.frs.timetracker.domain.Company;
import com.frs.timetracker.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityLinks;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "api/companies", produces = "application/json")
@CrossOrigin(origins = "*")
@PreAuthorize("hasRole('USER')")

public class CompanyController {
    private CompanyRepository companyRepo;

    @Autowired
    EntityLinks entityLinks;

    public CompanyController(CompanyRepository companyRepo) {
        this.companyRepo = companyRepo;
    }


    @GetMapping("/all")
    public Iterable<Company> recentCompanies() {
        return companyRepo.findAll();
    }

    @CrossOrigin
    @PostMapping(consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public String postCompany(@RequestBody Company company) {
        companyRepo.save(company);
        System.out.println(company);
        return "test";
    }


    @GetMapping("/{id}")
    public Company CompanyById(@PathVariable("id") Long id) {
        Optional<Company> optTimeEntry = companyRepo.findById(id);
        if (optTimeEntry.isPresent()) {
            return optTimeEntry.get();
        }
        return null;
    }

}
