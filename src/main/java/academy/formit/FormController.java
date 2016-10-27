package academy.formit;

import com.mongodb.DBObject;
import com.mongodb.util.JSON;
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

/**
 * Created by Administrator on 10/17/2016.
 */
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
            System.out.println("hej");
            return returnString.toString();
        }
    }
    @CrossOrigin
    @GetMapping("/forms")
    public List<DBObject> getForms()  {

        MongoRepository repo=new MongoRepository();
             List<DBObject> objects =  repo.getForms();
            return objects;
        }


    @CrossOrigin
    @PostMapping("/")
    public void store(@RequestBody String data) throws IOException {
        MongoRepository repo = new MongoRepository();
        repo.storeMongo(JSON.parse(data), "testDb", "forms", "form");
    }

    @CrossOrigin
    @GetMapping("/key")
    public String getKey() {
        String s = new ObjectId().toHexString();
        return "{\"key\":\"" + s +"\"}";
    }

    @CrossOrigin
    @PostMapping("/{formId}")
    public void storeId(@RequestBody String data, @PathVariable String formId) throws IOException {
        MongoRepository repo = new MongoRepository();
        repo.storeMongoWithId(JSON.parse(data), "testDb", "forms", "form", formId);
    }

}
