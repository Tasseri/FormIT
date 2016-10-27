package academy.formit;

import com.mongodb.*;
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

    public List<DBObject> getForms() {
        StringBuilder returnString = new StringBuilder();
        DBObject object;
        List<DBObject> objects = new ArrayList<>();

        try (MongoClient mongoClient = new MongoClient()) {
            DB db = mongoClient.getDB("testDb");

            DBCollection collection = db.getCollection("forms");
            DBCursor results = collection.find();
             object = results.one();
            System.out.println(object.toString());

            for (DBObject result : results) {
                objects.add(result);
                System.out.println(result.toString());
            }


        }
        return objects;
    }
}