package com.example.ros.common;

import lombok.Data;

import java.util.HashMap;

@Data
public class QueryPageParam {
    private static int PAGE_SIZE=20;
    private static int PAGE_NUM=1;


    private int pageSize=PAGE_SIZE;//页面大小
    private int pageNum=PAGE_NUM;//当前页
    private HashMap param = new HashMap();
}
