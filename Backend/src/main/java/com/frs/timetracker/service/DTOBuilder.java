package com.frs.timetracker.service;

import com.frs.timetracker.DTO.ControllingDto;
import com.frs.timetracker.DTO.HoursByCompany;
import com.frs.timetracker.domain.Company;
import com.frs.timetracker.domain.TimeEntry;
import com.frs.timetracker.domain.User;
import com.frs.timetracker.repository.CompanyRepository;
import com.frs.timetracker.repository.TimeEntryRepository;
import com.frs.timetracker.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DTOBuilder {
    private TimeEntryRepository timeEntryRepository;
    private CompanyRepository companyRepository;

    public DTOBuilder(TimeEntryRepository timeEntryRepository, CompanyRepository companyRepository) {
        this.timeEntryRepository = timeEntryRepository;
        this.companyRepository = companyRepository;
    }

    public HoursByCompany generateHoursByCompany(Company company, User user) {
        if (timeEntryRepository.sumTotalHoursByCompanyAndUser(user.getId(), company.getId()) == null)
            return new HoursByCompany(company.getName(), 0);
        else
            return new HoursByCompany(company.getName(), timeEntryRepository.sumTotalHoursByCompanyAndUser(user.getId(), company.getId()));

    }

    public ControllingDto generateControllingDto(User user) {
        ControllingDto controllingDto = new ControllingDto(user.getName());
        List<HoursByCompany> hoursByCompanies = new ArrayList<>();
        for (Company company : this.companyRepository.findAll()
        ) {
            hoursByCompanies.add(generateHoursByCompany(company, user));
        }
        controllingDto.setHoursByCompanies(hoursByCompanies);
        return controllingDto;
    }
}
