package academy.formit;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.HashMap;


public class MapParser implements Parser {
    private Object object;

    public MapParser(Object object) {
        this.object = object;
    }


    @Override
    public Object parse() throws IOException {
        HashMap<String, Object> result =
                new ObjectMapper().readValue((String)object, HashMap.class);
        return result;
    }
}