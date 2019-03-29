package com.frs.timetracker.DTO;

import com.frs.timetracker.domain.Company;

public class HoursByCompany {
    private String company;
    private long hours;

    public HoursByCompany(String company, long hours) {
        this.company = company;
        this.hours = hours;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public long getHours() {
        return hours;
    }

    public void setHours(long hours) {
        this.hours = hours;
    }
}
