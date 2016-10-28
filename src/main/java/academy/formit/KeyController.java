package academy.formit;

import org.bson.types.ObjectId;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("rest/key")
public class KeyController {

    @CrossOrigin
    @GetMapping("/")
    public String getKey() {
        String s = new ObjectId().toHexString();
        return "{\"key\":\"" + s +"\"}";
    }
}
