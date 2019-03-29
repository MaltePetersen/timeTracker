package com.frs.timetracker.domain;


public class ControllingView  {
    private long sumTimeWorked;
    private Company company;
    private User user;


    public long getSumTimeWorked() {
        return sumTimeWorked;
    }

    public Company getCompany() {
        return company;
    }

    public User getUser() {
        return user;
    }

    public ControllingView(long sumTimeWorked, Company company, User user) {
        this.sumTimeWorked = sumTimeWorked;
        this.company = company;
        this.user = user;


    }
}
