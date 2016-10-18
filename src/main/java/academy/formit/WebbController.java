package academy.formit;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


import java.io.IOException;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import java.text.ParseException;

/**
 * Created by Administrator on 10/17/2016.
 */

@RestController
//@Component
//@Path("app/data")
public class WebbController {

    @GetMapping("/")
    public String index() throws ParseException, IOException {
//        MongoRepository repo = new MongoRepository();
//        repo.store();
        return "hej";
    }

//    @POST
//    @Produces(MediaType.APPLICATION_JSON)
//    @Consumes(MediaType.APPLICATION_JSON)
//    public String test() {
//        System.out.println("success?");
//        return "success";
//    }

        @PostMapping("app/data")
        public String sprinTest(){
            System.out.println("success!");
            return "success!!";

        }
    }
}
