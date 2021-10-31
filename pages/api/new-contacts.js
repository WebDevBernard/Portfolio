import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { name, email, description } = data;

    const client = await MongoClient.connect(
      "mongodb://localhost:27017/test?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
    );
    const db = client.db();

    const contactsCollection = db.collection("contacts");
    const result = await contactsCollection.insertOne(data);
    console.log(result);
    res.status(201).json({ message: "Form Submitted" });
  }
}
