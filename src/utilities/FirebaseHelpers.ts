import { db, auth } from "../firebaseConfig";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";

export async function fetchDecks(setDecks: (decks: any[]) => void) {
    const user = auth.currentUser;
    if (!user) {
        console.error("User is not authenticated");
        return;
    }

    try {
        const decksRef = collection(db, "users", user.uid, "decks");
        const decksSnapshot = await getDocs(decksRef);
        const fetchedDecks = decksSnapshot.docs.map(doc => ({
            title: doc.data().title as string,
            cardCount: doc.data().cardCount as number,
            practiceCount: doc.data().practiceCount as number,
        }));
        setDecks(fetchedDecks);
    } catch (error) {
        console.error("Error fetching decks:", error);
    }
}

export async function createDeck(deckTitle: string) {
    const user = auth.currentUser;
    if (!user) {
        console.error("User is not authenticated");
        return;
    }

    const title = deckTitle.trim();
    if (!title) {
        console.error("Deck title cannot be empty");
        return;
    }

    try {
        await setDoc(doc(db, "users", user.uid, "decks", title), {
            title,
            cardCount: 0,
            practiceCount: 0,
            createdAt: new Date().toISOString(),
        });
        console.log("Deck created successfully!");
    } catch (error) {
        console.error("Error creating deck:", error);
    }
}
