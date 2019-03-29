package com.frs.timetracker.api;


import com.frs.timetracker.DTO.TimeEntrybyUserDTO;
import com.frs.timetracker.domain.Company;
import com.frs.timetracker.domain.ControllingView;
import com.frs.timetracker.domain.TimeEntry;
import com.frs.timetracker.domain.User;
import com.frs.timetracker.repository.CompanyRepository;
import com.frs.timetracker.repository.TimeEntryRepository;
import com.frs.timetracker.repository.UserRepository;
import com.frs.timetracker.service.ControllingViewConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityLinks;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/timeentries", produces = "application/json")
@CrossOrigin(origins = "*")
@PreAuthorize("hasRole('USER')")
public class TimeEntriesController {
    private TimeEntryRepository timeEntryRepo;
    private UserRepository userRepo;
    private ControllingViewConverter controllingViewConverter;
    private CompanyRepository companyRepository;
    @Autowired
    EntityLinks entityLinks;

    public TimeEntriesController(TimeEntryRepository timeEntryRepo, ControllingViewConverter controllingViewConverter, CompanyRepository companyRepository, UserRepository userRepo) {
        this.timeEntryRepo = timeEntryRepo;
        this.controllingViewConverter = controllingViewConverter;
        this.companyRepository = companyRepository;
        this.userRepo = userRepo;
    }

    @GetMapping("/all")
    public Iterable<TimeEntry> allTimeEntries() {
        return timeEntryRepo.findAll();
    }

    @CrossOrigin
    @PostMapping(consumes = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> postTimeEntry(@RequestBody TimeEntry timeEntry) {

        if (validateTimeEntry(timeEntry)) {
            timeEntryRepo.save(timeEntry);
            User user = userRepo.findById(timeEntry.getUser().getId()).get();
            user.getTimeEntries().add(timeEntry);
            userRepo.save(user);
            Company company = companyRepository.findById(timeEntry.getCompany().getId()).get();
            company.getList().add(timeEntry);
            companyRepository.save(company);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }

        return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);

    }

    public boolean validateTimeEntry(TimeEntry timeEntry) {
        System.out.println(1);
        long clientBeginn = timeEntry.getBeginn();
        System.out.println(2);
        long clientEnd = timeEntry.getEnd();
        System.out.println(3);
        if ((clientBeginn > clientEnd))
            return false;
        System.out.println(4);
        for (TimeEntry entry : timeEntryRepo.findByUserIdOrderByBeginn(timeEntry.getUser().getId())) {
            long serverBeginn = entry.getBeginn();
            long serverEnd = entry.getEnd();
            if ((serverBeginn < clientBeginn && clientBeginn < serverEnd) || (serverBeginn < clientEnd && clientEnd < serverEnd) || (serverBeginn == clientBeginn || serverEnd == clientEnd)) {
                return false;
            }
        }
        System.out.println(5);
        return true;
    }

    @GetMapping("/{id}")
    public TimeEntry TimeEntryById(@PathVariable("id") Long id) {
        Optional<TimeEntry> optTimeEntry = timeEntryRepo.findById(id);
        if (optTimeEntry.isPresent()) {
            return optTimeEntry.get();
        }
        return null;
    }


    @GetMapping("/controlling")
    public ArrayList<ControllingView> controllingView() {
        System.out.println(controllingViewConverter);
        return controllingViewConverter.createControllingView();
    }


    @GetMapping("/user/{user_id}")
    public List<TimeEntrybyUserDTO> TimeEntryByUser(@PathVariable("user_id") Long id) {
        List<TimeEntrybyUserDTO> timeEntriesDTO = new ArrayList();
        for (TimeEntry timeEntry : timeEntryRepo.findByUserIdOrderByBeginn(id)
        ) {
            timeEntriesDTO.add(new TimeEntrybyUserDTO(timeEntry.getId(), timeEntry.getBeginn(), timeEntry.getEnd(), timeEntry.getCompany().getName()));
        }
        return timeEntriesDTO;
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> DeleteTimeEntry(@PathVariable("id") Long id) {
        Optional<TimeEntry> optTimeEntry = timeEntryRepo.findById(id);
        if (optTimeEntry.isPresent()) {
            userRepo.findById(timeEntryRepo.findById(id).get().getUser().getId()).get().getTimeEntries().remove(optTimeEntry.get());
            companyRepository.findById(timeEntryRepo.findById(id).get().getCompany().getId()).get().getList().remove(optTimeEntry);
            timeEntryRepo.delete(optTimeEntry.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> ChangeTimeEntry(@PathVariable("id") Long id, @RequestBody TimeEntry timeEntry) {
        timeEntry.setTimeWorked();
        if (validateTimeEntry(timeEntry)) {
            timeEntryRepo.save(timeEntry);
            User user = userRepo.findById(timeEntry.getUser().getId()).get();
            user.getTimeEntries().remove(user.getTimeEntries().indexOf(timeEntryRepo.findById(id).get()));
            user.getTimeEntries().add(timeEntry);
            userRepo.save(user);
            Company company = companyRepository.findById(timeEntry.getCompany().getId()).get();
            company.getList().remove(company.getList().indexOf(timeEntryRepo.findById(id).get()));
            company.getList().add(timeEntry);
            companyRepository.save(company);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}


