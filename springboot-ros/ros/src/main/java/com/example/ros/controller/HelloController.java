package com.example.ros.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping
    public String hello(){
        return "hello ros";
    }
    @GetMapping("/show")
    public String showTest(){
        return "this is a test for mapping";
    }
}
