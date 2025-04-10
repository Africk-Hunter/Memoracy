import React, { useEffect, useState } from "react";
import { fetchDecks, createDeck, renameDeck } from "../utilities/FirebaseHelpers";
import { auth } from "../firebaseConfig";
import DeckCard from "./DeckCard";
import DeckModal from "./DeckModal";

const DeckView: React.FC = () => {
    const [decks, setDecks] = useState<{ title: string; cardCount: number; practiceCount: number; id: number; }[]>([]);
    const [selectedDeckTitle, setSelectedDeckTitle] = useState<string>("");
    const [selectedDeckIndex, setSelectedDeckIndex] = useState<number | null>(null);
    const [isModalShown, setIsModalShown] = useState<boolean>(false);
    const [selectedDeck, setSelectedDeck] = useState<Number | null>(null);
    const [modalType, setModalType] = useState<string>('create');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) fetchDecks(setDecks);
            else console.error("User is not authenticated");
        });
        return () => unsubscribe();
    }, []);

    // Clear Modal off screen and reset it to default.
    function clearModal() {
        setIsModalShown(false);
        setSelectedDeckTitle("");
        setModalType('create');
        setSelectedDeckIndex(null);
        setSelectedDeckTitle("");
    }

    // Handle Creation of New Deck
    async function handleDeckCreation() {
        if (!selectedDeckTitle.trim()) {
            alert("Please enter a deck title.");
            return;
        }
        await createDeck(selectedDeckTitle);
        fetchDecks(setDecks);
        clearModal();
    }

    async function rename() {
        if (!selectedDeckTitle.trim()) {
            alert("Please enter a new deck title.");
            return;
        }
        // Find the firebase entry with that title and update the title to the new one
        if (selectedDeckIndex !== null) {
            renameDeck(selectedDeckIndex, selectedDeckTitle);
        }
        fetchDecks(setDecks);
        // Close Modal
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
                    <DeckCard key={index} setSelectedDeckIndex={setSelectedDeckIndex} setModalType={setModalType} setIsModalShown={setIsModalShown} {...deck} />
                ))}
            </section>
            {isModalShown && (
                <section className="nameDeckModalOverlay">
                    <DeckModal clearModal={clearModal} setTitle={setSelectedDeckTitle} create={handleDeckCreation} rename={rename} type={modalType} />
                </section>
            )}
        </section>
    );
};

export default DeckView;