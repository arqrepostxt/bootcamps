package com.smdesenvolvimento;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import com.smdesenvolvimento.config.StaticResourceConfiguration;

@SpringBootApplication
@Import(StaticResourceConfiguration.class)
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
