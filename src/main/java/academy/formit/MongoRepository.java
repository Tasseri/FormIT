package academy.formit;

import com.mongodb.*;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;

public class MongoRepository {
    public void storeMongo(Object obj, String databaseName, String colName, String formId) throws IOException {
        try (MongoClient mongoClient = new MongoClient()) {
            MongoDatabase db = mongoClient.getDatabase(databaseName);

            MongoCollection collection = db.getCollection(colName);

            Document document = new Document()
                    .append(formId, obj);

            collection.insertOne(document);
        }
    }

}