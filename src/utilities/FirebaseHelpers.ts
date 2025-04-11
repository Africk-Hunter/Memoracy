import { db, auth } from "../firebaseConfig";
import { doc, setDoc, collection, getDocs, updateDoc, deleteDoc } from "firebase/firestore";

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
            id: doc.data().id as number,
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
    const deckId = Date.now().toString();
    try {
        await setDoc(doc(db, "users", user.uid, "decks", deckId), {
            title,
            cardCount: 0,
            practiceCount: 0,
            createdAt: new Date().toISOString(),
            id: deckId
        });
        console.log("Deck created successfully!");
    } catch (error) {
        console.error("Error creating deck:", error);
    }
}

export async function renameDeck(deckId: number, newTitle: string) {
    const user = auth.currentUser;
    if (!user) {
        console.error("User is not authenticated");
        return;
    }

    const title = newTitle.trim();
    if (!title) {
        console.error("New deck title cannot be empty");
        return;
    }

    try {
        const deckRef = doc(db, "users", user.uid, "decks", deckId.toString());
        await updateDoc(deckRef, {
            title,
            updatedAt: new Date().toISOString()
        });
        console.log("Deck renamed successfully!");
    } catch (error) {
        console.error("Error renaming deck:", error);
    }
}

export async function deleteDeck(deckId: number) {
    const user = auth.currentUser;
    if (!user) {
        console.error("User is not authenticated");
        return;
    }

    try {
        const deckRef = doc(db, "users", user.uid, "decks", deckId.toString());
        await deleteDoc(deckRef);
        console.log("Deck deleted successfully!");
    } catch (error) {
        console.error("Error deleting deck:", error);
    }
}