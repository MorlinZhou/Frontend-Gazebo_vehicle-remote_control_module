package com.example.ros.mapper;

import com.example.ros.entity.Car;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author wjw
 * @since 2023-04-05
 */
@Mapper
public interface CarMapper extends BaseMapper<Car> {

}
