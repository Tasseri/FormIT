package academy.formit;

import com.mongodb.util.JSON;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;



@RestController
@RequestMapping("rest/answer")
public class AnswerController {

    @CrossOrigin
    @PostMapping("/{companyId}/{formId}")
    public void store(@RequestBody String data, @PathVariable String companyId, @PathVariable String formId) throws IOException {
        MongoRepository repo = new MongoRepository();
        repo.storeMongo(JSON.parse(data), companyId ,"answers" , formId);
    }
}
