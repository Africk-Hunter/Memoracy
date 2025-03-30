import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebaseConfig";


const DeckView: React.FC = () => {

    const [decks, setDecks] = useState<{ title: string; cardCount: number; practiceCount: number }[]>([]);
    const [deckTitle, setDeckTitle] = useState<string>("");
    const [isModalShown, setIsModalShown] = useState<boolean>(false);

    async function createDeck() {

        const user = auth.currentUser;
        if (!user) {
            console.error("User is not authenticated");
            return;
        }

        const title = deckTitle;
        const cardCount = 0;
        const practiceCount = 0;
        setDecks([...decks, { title, cardCount, practiceCount }]);
        setDeckTitle("");

        try {
            await setDoc(doc(db, "users", user.uid, "decks", title), {
                title,
                cardCount,
                practiceCount,
                createdAt: new Date().toISOString(),
            });
            console.log("Deck created successfully!");
        } catch (error) {
            console.error("Error creating deck:", error);
        }

    }

    function clearModal() {
        setIsModalShown(false);
        setDeckTitle("");
    }

    function handleDeckCreation() {
        if (deckTitle.trim() === "") {
            alert("Please enter a deck title.");
            return;
        }
        createDeck();
        clearModal();
    }

    return (

        <section className="decks">
            <section className="deckHeaderBar">
                <h1 className="yourDecks">Your Decks</h1>
                <button className="shadowAndBorder createDeckButton" onClick={() => setIsModalShown(true)}>New Deck <img src="/images/Plus.svg" alt="" className="newDeckImg" /></button>
            </section>
            <section className="deckEnv">
                {decks.map((deck, index) => (
                    <DeckCard key={index} title={deck.title} cardCount={deck.cardCount} practiceCount={deck.practiceCount} />
                ))}
            </section>
            {isModalShown ? <section className="nameDeckModalOverlay">
                <DeckModal clearModal={clearModal} setTitle={setDeckTitle} create={handleDeckCreation} />
            </section> : null}
        </section>
    );
};

interface DeckCardProps {
    title: string;
    cardCount: number;
    practiceCount: number;
}

function DeckCard({ title, cardCount, practiceCount }: DeckCardProps) {

    return (
        <div className="outerDeck shadowAndBorder">
            <div className="innerDeck">
                <section className="deckMainBar">
                    <p onDoubleClick={(e) => (e.currentTarget.contentEditable = "true")} onBlur={(e) => (e.currentTarget.contentEditable = "false")} className="deckTitle">{title}</p>
                    <button className="editDeckButton">
                        <img src="/images/EditDots.svg" alt="Deck Settings" />
                    </button>
                </section>

                <section className="deckStats">
                    <p className="deckStat">{cardCount} cards</p>
                    <p className="deckStat">Practiced {practiceCount} times</p>
                </section>
            </div>
        </div>
    );
}

interface DeckModalProps {
    clearModal: () => void;
    setTitle: (title: string) => void;
    create: () => void;
}

function DeckModal({ clearModal, setTitle, create }: DeckModalProps) {

    return (
        <section className="nameDeckModal shadowAndBorder">
            <input type="text" className="deckTitle" placeholder="Deck Title" onChange={(e) => setTitle(e.currentTarget.value)} />
            <section className="titleButtons">
                <button className="titleButton cancel" onClick={clearModal}>Cancel</button>
                <button className="titleButton create" onClick={create}>Create Deck</button>
            </section>
        </section>
    );
}


export default DeckView;
