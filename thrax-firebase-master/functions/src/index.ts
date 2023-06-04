import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const helloWorld = functions.https.onRequest(
    async (request, response) => {
        functions.logger.info("Hello logs!", { structuredData: true });
        try {
            console.log("yoyo");
            // Add the new collection to Firestore with a new document
            const newCollectionRef = await admin
                .firestore()
                .collection("myNewCollection")
                .add({
                    initialField: "Initial value",
                });

            console.log(
                "New document added in new collection with ID:",
                newCollectionRef.id
            );
            response.send("Hello from Firebase!");
        } catch (error) {
            console.error(
                "Error adding new document in new collection:",
                error
            );
            response
                .status(500)
                .send("An error occurred while creating the collection");
        }
    }
);
