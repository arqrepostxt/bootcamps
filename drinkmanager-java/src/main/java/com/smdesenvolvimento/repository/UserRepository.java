package com.smdesenvolvimento.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.smdesenvolvimento.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByLogin(String login);
}