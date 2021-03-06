package io.github.smartandsplendid.arcgis.web;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

@Controller
public class ArcGisController {


    @GetMapping("/smartandsplendid/arcgis/checkalive")
    public String greeting(@RequestParam(name = "name", required = false, defaultValue = "I am alive") String name, Model model, HttpServletRequest request, HttpServletResponse response) {
        model.addAttribute("name", name);
        return "smartandsplendid/arcgis/greeting";
    }

    String license = "/*\n" +
            "\tCopyright (c) 2004-2016, The JS Foundation All Rights Reserved.\n" +
            "\tAvailable via Academic Free License >= 2.1 OR the modified BSD license.\n" +
            "\tsee: http://dojotoolkit.org/license for details\n" +
            "*/\n" +
            "\n" +
            "//>>built";

    @GetMapping(value = "/webjars/smartandsplendid/gis/bootstrap", produces = "text/javascript;charset=UTF-8")
    public void bootstrap(@RequestParam(name = "name", required = false, defaultValue = "World") String name, Model model, HttpServletRequest request, HttpServletResponse response) {
        try {
            ServletOutputStream os = response.getOutputStream();
//          String buf = "var webapp_rootpath = \"http://localhost:8080/eplat/webjars/smartandsplendid/gis/\";";
            //  String basePath = "http://localhost:8080/eplat";
            String path = request.getContextPath();
            String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path;
            //   System.out.println(basePath);
            String buf = license + "\nvar webapp_rootpath = \"" + basePath + "/webjars/smartandsplendid/gis/\";";
            byte[] byt = buf.getBytes();
            os.write(byt);
            boolean result = this.getResponse("/webjars/smartandsplendid/gis/init.js", os);
            // System.out.println("result : " + result);
        } catch (java.io.IOException e) {
            e.printStackTrace();
        }
    }


    public boolean getResponse(String path, HttpServletResponse response) {

        ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        try {

            String kk = "";
            if (path.startsWith("/")) {
                kk = "classpath*:META-INF/resources" + path;
            } else {
                kk = "classpath*:META-INF/resources/" + path;
            }
            Resource[] resources = resolver.getResources(kk);

            if (resources.length >= 1) {
                InputStream is = resources[0].getInputStream();
                ServletOutputStream result = response.getOutputStream();
                byte[] buffer = new byte[1024];
                int length;
                while ((length = is.read(buffer)) != -1) {
                    result.write(buffer, 0, length);
                }


            }
            return true;
        } catch (IOException e) {
            e.printStackTrace();
        }

        return false;
    }

    private String finish = "////////////////////////////";

    public boolean getResponse(String path, ServletOutputStream result) {
        byte[] fbyte = finish.getBytes();
        ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        try {

            String kk = "";
            if (path.startsWith("/")) {
                kk = "classpath*:META-INF/resources" + path;
            } else {
                kk = "classpath*:META-INF/resources/" + path;
            }
            Resource[] resources = resolver.getResources(kk);

            if (resources.length >= 1) {
                InputStream is = resources[0].getInputStream();

                byte[] buffer = new byte[1024];
                int length;
                int ind;
                boolean skip = false;
                while ((length = is.read(buffer)) != -1) {
                    if ((buffer[0] == fbyte[0]) && (buffer[1] == fbyte[1]) && (buffer[2] == fbyte[2]) && (buffer[3] == fbyte[3])) {
                        skip = true;
                        for (ind = 0; ind < 1024; ind++) {
                            if (buffer[ind] != fbyte[0]) {
                                skip = false;
                                break;
                            }
                        }
                    }

                    if (skip) {
                        break;
                    }

                    result.write(buffer, 0, length);
                }


            }
            return true;
        } catch (IOException e) {
            e.printStackTrace();
        }

        return false;
    }

    public boolean getResponse(String path, OutputStream result) {

        ResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        try {

            String kk = "";
            if (path.startsWith("/")) {
                kk = "classpath*:META-INF/resources" + path;
            } else {
                kk = "classpath*:META-INF/resources/" + path;
            }
            Resource[] resources = resolver.getResources(kk);

            if (resources.length >= 1) {
                InputStream is = resources[0].getInputStream();

                byte[] buffer = new byte[1024];
                int length;
                while ((length = is.read(buffer)) != -1) {
                    result.write(buffer, 0, length);
                }


            }
            return true;
        } catch (IOException e) {
            e.printStackTrace();
        }

        return false;
    }

}
