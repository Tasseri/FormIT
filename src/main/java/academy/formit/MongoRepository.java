package academy.formit;

import com.mongodb.*;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import java.io.IOException;

public class MongoRepository {
    //kika på eventuellt try with resources i respektive metod
    MongoClient mongoClient = new MongoClient();

    //Döp databasen till valfritt namn
    MongoDatabase db = mongoClient.getDatabase("test");

    public void store(Parser parser, String colName) throws IOException {
        MongoCollection collection = db.getCollection(colName);

        //Ersätt test med variabel (potentiellt formulärID)
        Document document = new Document()
                .append("test", parser.parse());

        collection.insertOne(document);
    }

}