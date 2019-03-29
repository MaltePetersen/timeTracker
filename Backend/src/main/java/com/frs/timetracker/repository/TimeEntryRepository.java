package com.frs.timetracker.repository;


import com.frs.timetracker.domain.ControllingView;
import com.frs.timetracker.domain.TimeEntry;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;

public interface TimeEntryRepository extends PagingAndSortingRepository<TimeEntry, Long> {
    Iterable<TimeEntry> findByUserIdOrderByBeginn(Long id);
    @Query(value = "SELECT sum(time_worked), company_id, user_id FROM testdb.time_entry Group by company_id, user_id ORDER BY user_Id ASC",
    nativeQuery = true)
    String[] sumHoursByCompaniesEachUser();


    @Query(value = "SELECT company_id, sum(time_worked)  FROM testdb.time_entry join users u on(user_id = u.id) where user_id= :whichUser group by company_id order by company_id ASC",
            nativeQuery = true)
    String[] sumHoursByCompaniesOneUser(@Param("whichUser")long whichUser);

    @Query(value = "Select sum(time_worked) from time_entry where user_id= :whichUser and company_id= :whichCompany",
            nativeQuery = true)
    Long sumTotalHoursByCompanyAndUser(@Param("whichUser") long whichUser, @Param("whichCompany") long whichCompany);

}
