package academy.formit;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;

import java.text.ParseException;
import java.util.List;

/**
 * Created by Administrator on 10/17/2016.
 */
@RestController
@RequestMapping("rest/form")
public class FormController {

    @CrossOrigin
    @PostMapping("/")
    public void store(@RequestBody String data) throws IOException {
        MongoRepository repo = new MongoRepository();
        repo.store(new MapParser(data), "testDb", "forms", "newform");
    }
}
