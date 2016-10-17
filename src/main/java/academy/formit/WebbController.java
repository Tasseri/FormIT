package academy.formit;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;

/**
 * Created by Administrator on 10/17/2016.
 */

@RestController
public class WebbController {

    @GetMapping("/")
    public String index() throws ParseException {
        MongoController.goMongo();
        return "hej";
    }
}
