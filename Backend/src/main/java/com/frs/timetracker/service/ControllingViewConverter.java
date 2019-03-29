package com.frs.timetracker.service;

import com.frs.timetracker.domain.Company;
import com.frs.timetracker.domain.ControllingView;
import com.frs.timetracker.domain.User;
import com.frs.timetracker.repository.CompanyRepository;
import com.frs.timetracker.repository.TimeEntryRepository;
import com.frs.timetracker.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ControllingViewConverter {
    private CompanyRepository companyRepository;
    private UserRepository userRepository;
    private TimeEntryRepository timeEntryRepository;

    public ControllingViewConverter(CompanyRepository companyRepository, UserRepository userRepository, TimeEntryRepository timeEntryRepository) {
        this.companyRepository = companyRepository;
        this.userRepository = userRepository;
        this.timeEntryRepository = timeEntryRepository;
    }

    public ArrayList<ControllingView> createControllingView() {
        ArrayList<ControllingView> controllingView = new ArrayList<>();
        for (String entry : timeEntryRepository.sumHoursByCompaniesEachUser()) //TODO where is the recusion?
        {
            String[] data = entry.split(",");
            System.out.println(data);
            System.out.println(data[0]);
            System.out.println(data[1]);
            System.out.println(data[2]);
            Company company;
            User user;
            long sumTimeWorked = Long.parseLong(data[0]);
            if (companyRepository.findById(Long.parseLong(data[1])).isPresent()) {
                company = companyRepository.findById(Long.parseLong(data[1])).get();
            } else company = null;

            if (userRepository.findById(Long.parseLong(data[2])).isPresent()) {
                user = userRepository.findById(Long.parseLong(data[2])).get();
            } else user = null;

            controllingView.add(new ControllingView(sumTimeWorked, company, user));
        }

        return controllingView;
    }

   /* public ArrayList<Object> newTry() {
        ArrayList<Object> test = new ArrayList<>();
        long countCompanies = companyRepository.count();
        long countUsers = userRepository.count();
        for (User user : userRepository.findAll()
        ) {
            String[] byUser = timeEntryRepository.sumHoursByCompaniesOneUser(user.getId());

            test.add(user.getName());
            int i = 0;
            for (Company company : companyRepository.findAll()
            ) {
                if (Long.parseLong(byUser[i].split(",")[0]) == company.getId()) {
                    test.add(new TimeCompany(company.getName(), Long.parseLong(byUser[i].split(",")[1])));
                } else {
                    test.add(new TimeCompany(company.getName(), 0));

                }
                i++;
            }

        }

        return test;
    }*/


}



