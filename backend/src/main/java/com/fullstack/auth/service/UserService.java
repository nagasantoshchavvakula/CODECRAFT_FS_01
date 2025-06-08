//package com.fullstack.auth.service;
//
//import com.fullstack.auth.dto.LoginRequest;
//import com.fullstack.auth.dto.RegisterRequest;
//import com.fullstack.auth.entity.User;
//import com.fullstack.auth.repository.UserRepository;
//import com.fullstack.auth.security.JwtUtil;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//@Service
//@RequiredArgsConstructor
//public class UserService {
//
//    private final UserRepository repo;
//    private final PasswordEncoder encoder;
//    private final JwtUtil jwtUtil;
//    private final AuthenticationManager authManager;
//
//    public String register(User user) {
//        user.setPassword(encoder.encode(user.getPassword()));
//        user.setRole("USER");
//        repo.save(user);
//        return "User registered successfully";
//    }
//
//    public String authenticate(LoginRequest request) {
//        authManager.authenticate(new UsernamePasswordAuthenticationToken(
//                request.getUsername(), request.getPassword()));
//        return jwtUtil.generateToken(request.getUsername());
//    }
//
//}
package com.fullstack.auth.service;

import com.fullstack.auth.dto.LoginRequest;
import com.fullstack.auth.dto.RegisterRequest;
import com.fullstack.auth.entity.User;
import com.fullstack.auth.repository.UserRepository;
import com.fullstack.auth.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repo;
    private final PasswordEncoder encoder;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authManager;

    public String register(User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        user.setRole("USER");
        repo.save(user);
        return "User registered successfully";
    }

    public String authenticate(LoginRequest request) {
        authManager.authenticate(new UsernamePasswordAuthenticationToken(
                request.getUsername(), request.getPassword()));

        User user = repo.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        return jwtUtil.generateToken(user);
    }
}
