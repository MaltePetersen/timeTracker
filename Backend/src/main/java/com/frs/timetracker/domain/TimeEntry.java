package com.frs.timetracker.domain;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.time.Instant;
import java.util.Date;

@Data
@Entity
@AllArgsConstructor
public class TimeEntry {
    @Id
    @GeneratedValue
    private long id;
    private long beginn;
    private long end;
    @JsonBackReference(value = "company")
    @ManyToOne
    private Company company;
    private Date createdAt;
    @JsonBackReference(value = "user")
    @ManyToOne
    private User user;
    private long timeWorked;

    public TimeEntry(){
    }

    public TimeEntry(long beginn, long end, Company company){
        this.beginn = beginn;
        this.end = end;
        this.company = company;
    }
    @PrePersist
    void createdAt(){this.createdAt= new Date();}

    public void setTimeWorked(){
        this.timeWorked = this.end - this.beginn;
    }


}
