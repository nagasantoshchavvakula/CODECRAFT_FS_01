package com.fullstack.auth.controller;

import com.fullstack.auth.dto.AuthResponse;
import com.fullstack.auth.dto.LoginRequest;
import com.fullstack.auth.dto.RegisterRequest;
import com.fullstack.auth.entity.User;
import com.fullstack.auth.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

    private final UserService service;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        return ResponseEntity.ok(service.register(user));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        String token = service.authenticate(request);
        return ResponseEntity.ok(new AuthResponse(token));
    }
    @GetMapping("/protected")
    public ResponseEntity<String> protectedRoute() {
        return ResponseEntity.ok("You are authenticated!");
    }
}
