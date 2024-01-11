package com.example.ros.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.FileInputStream;
import java.util.Base64;

@RestController
@RequestMapping("/map")
public class MapController {
    @GetMapping
    public String toBase64(String fileAbsolutePath) {
        FileInputStream inputStream = null;
        String base64Str = "";
        try {
            Base64.Encoder encoder = Base64.getEncoder();
//            fileAbsolutePath="D:\\Program Files (x86)\\OneDrive\\桌面\\springboot-ros\\ros\\image\\undraw_multitasking_re_ffpb.svg";
            String projectPath=System.getProperty("user.dir");
            fileAbsolutePath=projectPath+"\\ros\\src\\main\\resources\\static\\undraw_multitasking_re_ffpb.svg";
            inputStream = new FileInputStream(fileAbsolutePath);
            int available = inputStream.available();
            byte[] bytes = new byte[available];
            inputStream.read(bytes);
            base64Str = encoder.encodeToString(bytes);
//            System.out.println(base64Str);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                inputStream.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return base64Str;
    }

}
