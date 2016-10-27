package academy.formit;

import com.mongodb.util.JSON;
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
        repo.storeMongo(JSON.parse(data), "testDb", "testCol", "formIdTest");
    }

    @CrossOrigin
    @PostMapping("/{formId}")
    public void store(@RequestBody String data, @PathVariable String formId) throws IOException {
        MongoRepository repo = new MongoRepository();
        repo.storeMongo(JSON.parse(data), "testDb", "forms", formId);
    }
}
