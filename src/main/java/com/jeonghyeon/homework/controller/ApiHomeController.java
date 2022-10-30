package com.jeonghyeon.homework.controller;

import com.jeonghyeon.homework.dto.RequestDto;
import com.jeonghyeon.homework.service.HomeSerivce;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("/api")
public class ApiHomeController {

    @Autowired
    private HomeSerivce homeSerivce;
    @PostMapping( "/homework2")
    public ResponseEntity reusult(@RequestBody RequestDto dto){
        Set<Map<Integer, Integer>> result = homeSerivce.algorithm(dto);

        return new ResponseEntity(result,HttpStatus.OK);
    }
}
