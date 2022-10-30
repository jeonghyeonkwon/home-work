package com.jeonghyeon.homework.controller;


import com.jeonghyeon.homework.dto.RequestDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller

public class HomeController {

    @GetMapping({"","/"})
    public String home(Model model){

        model.addAttribute("message","hello World!");
        return "home";
    }
    @GetMapping("/homework2")
    public String homework2(){
        return "homework2";
    }

//    @PostMapping(value = "/homework2",consumes = {"application/json"})
//    @ResponseBody
//    public ResponseEntity reusult(@RequestBody RequestDto dto){
//        System.out.println(dto);
//        return new ResponseEntity(HttpStatus.OK);
//    }
}
