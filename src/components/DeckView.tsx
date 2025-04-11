import React, { useEffect, useState } from "react";
import { useDeckContext } from "../context/DeckContext";
import { fetchDecks } from "../utilities/FirebaseHelpers";
import { useDeckFunctions } from "../utilities/DeckFunctions";
import { auth } from "../firebaseConfig";
import DeckCard from "./DeckCard";
import DeckModal from "./DeckModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const DeckView: React.FC = () => {
    
    const { decks, setDecks, isModalShown, setIsModalShown, modalType, } = useDeckContext();
    const { clearModal, handleDeckCreation, handleRename, handleDelete } = useDeckFunctions();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) fetchDecks(setDecks);
            else console.error("User is not authenticated");
        });
        return () => unsubscribe();
    }, []);

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
                    {modalType === 'rename' || modalType === 'create' ?
                        <DeckModal clearModal={clearModal} create={handleDeckCreation} rename={handleRename} />
                        :
                        <ConfirmDeleteModal clearModal={clearModal} handleDelete={handleDelete}/>
                    }
                </section>
            )}
        </section>
    );
};

export default DeckView;