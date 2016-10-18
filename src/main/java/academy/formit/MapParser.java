package academy.formit;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.HashMap;


public class MapParser {

    public HashMap<String, Object> parse() throws IOException {
         HashMap<String, Object> result =
                new ObjectMapper().readValue(new File("C:\\Users\\Administrator\\Desktop\\FinalProject\\FormIT\\src\\main\\resources\\static\\dummy.json"), HashMap.class);
        return result;
    }
}