package com.example.ros.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.io.Serializable;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * <p>
 * 
 * </p>
 *
 * @author wjw
 * @since 2023-04-05
 */
@Data
@EqualsAndHashCode(callSuper = false)
public class Car implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 主键
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * x坐标
     */
    private Integer x;

    /**
     * y坐标
     */
    private Integer y;

    /**
     * z坐标
     */
    private Integer z;


}
