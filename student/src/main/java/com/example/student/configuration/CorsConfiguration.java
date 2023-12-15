package com.example.student.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfiguration implements WebMvcConfigurer {

    // @Override
    // public void addCorsMappings(CorsRegistry registry) {
    // registry.addMapping("/**") // URL patterns to apply CORS configuration
    // .allowedOrigins("https://8081-dffafdafedbdcbadebfefaccdcffceeecaffac.premiumproject.examly.io")
    // // Allowed origin URLs
    // .allowedMethods("GET", "POST", "PUT", "DELETE","OPTIONS") // Allowed HTTP
    // methods
    // .allowedHeaders("*") // Allowed headers
    // .allowCredentials(true);
    // }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");
    }
}