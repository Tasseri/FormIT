package academy.formit;

import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.util.JSON;
import org.bson.Document;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

import java.text.ParseException;
import java.util.List;
import java.util.Objects;
import java.util.Scanner;

@RestController
@RequestMapping("rest/form")
public class FormController {

    @CrossOrigin
    @GetMapping("/")
    public String get() throws FileNotFoundException {
        try (Scanner input = new Scanner(new File("src\\main\\java\\academy\\formit\\formExample.json"))) {

            StringBuilder returnString = new StringBuilder();

            while (input.hasNextLine()) {
                returnString.append(input.nextLine());
            }
            return returnString.toString();
        }
    }

    @CrossOrigin
    @GetMapping("/{formId}")
    public Document getFormById(@PathVariable String formId) {
        MongoRepository repo = new MongoRepository();
        return repo.getFormById("apoteket", "forms",formId);

    }

    @CrossOrigin
    @PostMapping("/{formId}")
    public void storeId(@RequestBody String data, @PathVariable String formId) throws IOException {
        MongoRepository repo = new MongoRepository();
        repo.storeMongoWithId(JSON.parse(data), "apoteket", "forms", formId);
    }

}
