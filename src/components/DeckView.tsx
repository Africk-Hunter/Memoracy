import React, { useEffect, useState } from "react";
import { useDeckContext } from "../context/DeckContext";
import { fetchDecks, createDeck, renameDeck } from "../utilities/FirebaseHelpers";
import { auth } from "../firebaseConfig";
import DeckCard from "./DeckCard";
import DeckModal from "./DeckModal";

const DeckView: React.FC = () => {
    const {
        decks,
        setDecks,
        selectedDeckTitle,
        setSelectedDeckTitle,
        selectedDeckIndex,
        setSelectedDeckIndex,
        isModalShown,
        setIsModalShown,
        modalType,
        setModalType,
    } = useDeckContext();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) fetchDecks(setDecks);
            else console.error("User is not authenticated");
        });
        return () => unsubscribe();
    }, []);

    function clearModal() {
        setIsModalShown(false);
        setSelectedDeckTitle("");
        setModalType('create');
        setSelectedDeckIndex(null);
    }

    function isTitleInputValid(input: string): boolean {
        if (input.trim() === "") {
            // REPLACE ALERTS WITH TOASTS LATER
            alert("Deck title cannot be empty.");
            return false;
        }
        if (input.length > 25) {
            alert("Deck title cannot exceed 25 characters.");
            return false;
        }
        return true;
    }

    // Handle Creation of New Deck
    async function handleDeckCreation() {
        if (isTitleInputValid(selectedDeckTitle)) {

            await createDeck(selectedDeckTitle);
            fetchDecks(setDecks);
            clearModal();
        }
    }

    async function rename() {
        if (!isTitleInputValid(selectedDeckTitle)) {
            return;
        }
        if (selectedDeckIndex == null) {
            alert("No deck selected for renaming.");
            return;
        }
        renameDeck(selectedDeckIndex, selectedDeckTitle);
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
                    <DeckModal clearModal={clearModal} create={handleDeckCreation} rename={rename} />
                </section>
            )}
        </section>
    );
};

export default DeckView;