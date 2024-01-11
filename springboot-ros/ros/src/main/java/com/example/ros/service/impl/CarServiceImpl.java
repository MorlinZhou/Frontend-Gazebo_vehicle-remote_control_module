package com.example.ros.service.impl;

import com.example.ros.entity.Car;
import com.example.ros.mapper.CarMapper;
import com.example.ros.service.CarService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author wjw
 * @since 2023-04-05
 */
@Service
public class CarServiceImpl extends ServiceImpl<CarMapper, Car> implements CarService {

}
