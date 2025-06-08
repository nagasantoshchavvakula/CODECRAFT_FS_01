//package com.fullstack.auth.security;
////
////import io.jsonwebtoken.Jwts;
////import io.jsonwebtoken.SignatureAlgorithm;
////import org.springframework.stereotype.Component;
////
////import java.util.Date;
////
////@Component
////public class JwtUtil {
////    private final String SECRET = "mysupersecretkey";
////
////    public String generateToken(String username) {
////        return Jwts.builder()
////                .setSubject(username)
////                .setIssuer("auth-app")
////                .setIssuedAt(new Date())
////                .setExpiration(new Date(System.currentTimeMillis() + 3600000)) // 1 hour
////                .signWith(SignatureAlgorithm.HS256, SECRET)
////                .compact();
////    }
////
////    public String extractUsername(String token) {
////        return Jwts.parser().setSigningKey(SECRET).parseClaimsJws(token).getBody().getSubject();
////    }
////}
//package com.fullstack.auth.security;
//
//import com.fullstack.auth.entity.User;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import org.springframework.stereotype.Component;
//
//import java.util.Date;
//
//@Component
//public class JwtUtil {
//
//    private final String SECRET = "mysupersecretkey";
//
//    // 1 hour = 3600000 milliseconds
//    private final long EXPIRATION = 3600000;
//
//    public String generateToken(User user) {
//        return Jwts.builder()
//                .setSubject(user.getUsername())
//                .claim("role", user.getRole()) // Add role to token
//                .setIssuer("auth-app")
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))
//                .signWith(SignatureAlgorithm.HS256, SECRET)
//                .compact();
//    }
//
//    public String extractUsername(String token) {
//        return Jwts.parser()
//                .setSigningKey(SECRET)
//                .parseClaimsJws(token)
//                .getBody()
//                .getSubject();
//    }
//
//    public String extractRole(String token) {
//        return Jwts.parser()
//                .setSigningKey(SECRET)
//                .parseClaimsJws(token)
//                .getBody()
//                .get("role", String.class);
//    }
//}
package com.fullstack.auth.security;

import com.fullstack.auth.entity.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    // Load secret from application.properties and ensure it's at least 32 characters
    @Value("${jwt.secret}")
    private String secret;

    private final long EXPIRATION = 3600000; // 1 hour in milliseconds

    private Key getSigningKey() {
        return Keys.hmacShaKeyFor(secret.getBytes());
    }

    public String generateToken(User user) {
        return Jwts.builder()
                .setSubject(user.getUsername())
                .claim("role", user.getRole())
                .setIssuer("auth-app")
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))
                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public String extractUsername(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    public String extractRole(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody()
                .get("role", String.class);
    }
}
