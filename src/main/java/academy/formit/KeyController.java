package academy.formit;

import org.bson.types.ObjectId;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("rest/key")
public class KeyController {

    @CrossOrigin
    @GetMapping("/")
    public HashMap getKey() {
        String value = new ObjectId().toHexString();
        HashMap<String, String> key = new HashMap<>();
        key.put("key", value);
        return key;
    }
}
