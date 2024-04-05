package com.maxlvshv.taskflow.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class TestController {

    @GetMapping
    public ResponseEntity<Map<String, String>> getHello() {
        Map<String , String > map = new HashMap<>();

        map.put("massage", "tsgmdf");

        return ResponseEntity.ok(map);
    }

}
