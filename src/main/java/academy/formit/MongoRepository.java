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
    MongoClient mongoClient = new MongoClient();
    MongoDatabase db = mongoClient.getDatabase("test");

    public void store(Parser parser, String colName) throws IOException {
        MongoCollection collection = db.getCollection(colName);

        Document document = new Document()
                .append("test", parser.parse());

        collection.insertOne(document);
    }

}