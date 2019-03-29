package com.frs.timetracker.domain;

import com.frs.timetracker.message.response.JwtResponse;


import java.util.Optional;

public class SignInObj {
    Optional<User> user;
    JwtResponse jwt;

    public Optional<User> getUser() {
        return user;
    }

    public void setUser(Optional<User> user) {
        this.user = user;
    }

    public JwtResponse getJwt() {
        return jwt;
    }

    public void setJwt(JwtResponse jwt) {
        this.jwt = jwt;
    }

    public SignInObj(Optional<User> user, JwtResponse jwt){
        this.user = user;
        this.jwt = jwt;
    }
}
