package com.example.student.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.student.model.Student;
import com.example.student.repository.StudentRepo;

@Service
public class StudentService {

    @Autowired
    private StudentRepo repo;

    public boolean addStudent(Student student) {
        return repo.save(student) != null ? true : false;
    }

    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    public Optional<Student> getById(int id) {
        return repo.findById(id);
    }

    public void deleteStudent(Integer id) {
        repo.deleteById(id);
    }
}
