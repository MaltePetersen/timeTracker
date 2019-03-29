package com.frs.timetracker.repository;

import com.frs.timetracker.domain.Company;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface CompanyRepository extends PagingAndSortingRepository<Company, Long> {
}
