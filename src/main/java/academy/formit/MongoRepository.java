package academy.formit;

import com.mongodb.*;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

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
    public void storeMongoWithId(Object obj, String databaseName, String colName, String id) throws IOException {
        try (MongoClient mongoClient = new MongoClient()) {
            MongoDatabase db = mongoClient.getDatabase(databaseName);

            MongoCollection collection = db.getCollection(colName);

            Document document = new Document()
                    .append("_id", id )
                    .append("form", obj);

            collection.insertOne(document);
        }
    }

    public Document getFormById (String databaseName, String colName, String key) {
        try (MongoClient mongoClient = new MongoClient()) {
            MongoDatabase db = mongoClient.getDatabase(databaseName);

            FindIterable<Document> iterable = db.getCollection(colName).find(
                    new Document("_id", key));

            return iterable.first();

        }
    }

}