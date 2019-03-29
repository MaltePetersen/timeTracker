package com.frs.timetracker.DTO;

import com.frs.timetracker.domain.Company;
import com.frs.timetracker.domain.TimeEntry;
import com.frs.timetracker.domain.User;

import java.util.ArrayList;
import java.util.List;

public class ControllingDto {

    private String username;
    private List<HoursByCompany> hoursByCompanies = new ArrayList<>();

    public ControllingDto(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public List<HoursByCompany> getHoursByCompanies() {
        return hoursByCompanies;
    }

    public void setHoursByCompanies(List<HoursByCompany> hoursByCompanies) {
        this.hoursByCompanies = hoursByCompanies;
    }
}
