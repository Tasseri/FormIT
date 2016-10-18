package academy.formit;

import com.mongodb.*;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.util.JSON;
import org.bson.Document;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Locale;

/**
 * Created by Administrator on 2016-10-18.
 */
public class MongoRepository {
    MapParser mapParser = new MapParser();
    MongoClient mongoClient = new MongoClient();
    MongoDatabase db = mongoClient.getDatabase("test");

    public void store() throws IOException {
        HashMap<String, Object> result = mapParser.parse();

        MongoCollection collection = db.getCollection("dummy");

        Document document = new Document()
                .append("test", result);
        collection.insertOne(document);
    }

}