package academy.formit;

import org.springframework.web.bind.annotation.*;

import java.io.IOException;

/**
 * Created by Administrator on 2016-10-24.
 */

@RestController
@RequestMapping("rest/answer")
public class AnswerController {

    @CrossOrigin
    @PostMapping("/")
    public void store(@RequestBody String data) throws IOException {
        MongoRepository repo = new MongoRepository();
        repo.store(new MapParser(data), "testDb", "testCol", "formIdTest");
    }
}
