package com.example.student.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.student.model.Student;
import com.example.student.service.StudentService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping
public class ApiController {

    @Autowired
    private StudentService service;

    @PostMapping("/addStudent")
    public boolean addStudent(@RequestBody Student student) {
        return service.addStudent(student);
    }

    @GetMapping("/getAllStudents")
    public List<Student> getAllStudents() {
        return service.getAllStudents();
    }

    // @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getById/{id}")

    public Optional<Student> getById(@PathVariable int id) {
        return service.getById(id);
    }

    @DeleteMapping("/deleteStudent")
    public void deleteStudent(@RequestParam Integer id) {
        service.deleteStudent(id);
    }

}
