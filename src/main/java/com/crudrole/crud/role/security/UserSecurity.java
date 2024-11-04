package com.crudrole.crud.role.security;


import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
//import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class UserSecurity {
   

     @Bean
    public UserDetailsManager userDetailsManager(DataSource dataSource) {

        JdbcUserDetailsManager jdbcUserDetailsManager = new JdbcUserDetailsManager(dataSource);

       jdbcUserDetailsManager.setUsersByUsernameQuery(
            "select user_id, password, active from members where user_id=?");
         jdbcUserDetailsManager.setAuthoritiesByUsernameQuery(
            "select user_id, role from roles where user_id=?");

        return jdbcUserDetailsManager;
    }

@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
    http.authorizeHttpRequests(configurer -> 
    configurer
            .requestMatchers(HttpMethod.GET, "/api/users").hasRole("EMPLOYEE")
            .requestMatchers(HttpMethod.GET, "/api/users/**").hasRole("EMPLOYEE")
            .requestMatchers(HttpMethod.PUT, "/api/users/**").hasRole("MANAGER")
            .requestMatchers(HttpMethod.POST, "/api/users").hasRole("MANAGER")
            .requestMatchers(HttpMethod.DELETE, "/api/users/").hasRole("ADMIN")
            .requestMatchers(HttpMethod.DELETE, "/api/users/**").hasRole("ADMIN")
    );
    http.csrf(csrf -> csrf.disable())
        .authorizeHttpRequests((authorize) -> {
                    authorize.anyRequest().authenticated();
                }).httpBasic(org.springframework.security.config.Customizer.withDefaults());

        return http.build();
}
   
}