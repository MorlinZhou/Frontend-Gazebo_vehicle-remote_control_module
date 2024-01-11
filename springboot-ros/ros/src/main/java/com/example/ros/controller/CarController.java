package com.example.ros.controller;


import com.example.ros.entity.Car;
import com.example.ros.service.CarService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author wjw
 * @since 2023-04-05
 */
@RestController
@RequestMapping("/car")
public class CarController {
    @Resource
    private CarService carService;

    @GetMapping("/showList")
    public List<Car> list(){
        return carService.list();
    }
}
