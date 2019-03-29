package com.frs.timetracker.DTO;

import java.io.Serializable;

public class TimeEntrybyUserDTO {
    private long timeEntryId;
    private long workStart;
    private long workEnd;
    private long timeWorked;
    private String companyName;

   public TimeEntrybyUserDTO(long timeEntryId, long workStart, long workEnd, String companyName){
       this.timeEntryId = timeEntryId;
       this.workStart = workStart;
       this.workEnd = workEnd;
       this.timeWorked = workEnd - workStart;
       this.companyName = companyName;
    }

    public long getTimeEntryId() {
        return timeEntryId;
    }

    public void setTimeEntryId(long timeEntryId) {
        this.timeEntryId = timeEntryId;
    }

    public long getWorkStart() {
        return workStart;
    }

    public void setWorkStart(long workStart) {
        this.workStart = workStart;
    }

    public long getWorkEnd() {
        return workEnd;
    }

    public void setWorkEnd(long workEnd) {
        this.workEnd = workEnd;
    }

    public long getTimeWorked() {
        return timeWorked;
    }

    public void setTimeWorked(long timeWorked) {
        this.timeWorked = timeWorked;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
}
