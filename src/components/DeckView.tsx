import React, { useEffect, useState } from "react";
import { fetchDecks, createDeck } from "../utilities/FirebaseHelpers";
import { auth } from "../firebaseConfig";
import DeckCard from "./DeckCard";
import DeckModal from "./DeckModal";

const DeckView: React.FC = () => {
    const [decks, setDecks] = useState<{ title: string; cardCount: number; practiceCount: number }[]>([]);
    const [deckTitle, setDeckTitle] = useState<string>("");
    const [isModalShown, setIsModalShown] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) fetchDecks(setDecks);
            else console.error("User is not authenticated");
        });
        return () => unsubscribe();
    }, []);

    function clearModal() {
        setIsModalShown(false);
        setDeckTitle("");
    }

    async function handleDeckCreation() {
        if (!deckTitle.trim()) {
            alert("Please enter a deck title.");
            return;
        }
        await createDeck(deckTitle);
        setDeckTitle("");
        fetchDecks(setDecks);
        clearModal();
    }

    return (
        <section className="decks">
            <section className="deckHeaderBar">
                <h1 className="yourDecks">Your Decks</h1>
                <button className="shadowAndBorder createDeckButton" onClick={() => setIsModalShown(true)}>
                    New Deck <img src="/images/Plus.svg" alt="" className="newDeckImg" />
                </button>
            </section>
            <section className="deckEnv">
                {decks.map((deck, index) => (
                    <DeckCard key={index} {...deck} />
                ))}
            </section>
            {isModalShown && (
                <section className="nameDeckModalOverlay">
                    <DeckModal clearModal={clearModal} setTitle={setDeckTitle} create={handleDeckCreation} />
                </section>
            )}
        </section>
    );
};

export default DeckView;