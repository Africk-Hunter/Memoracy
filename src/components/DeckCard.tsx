import React, { useState } from "react";
import { useDeckContext } from "../context/DeckContext";

interface DeckCardProps {
    title: string;
    cardCount: number;
    practiceCount: number;
    id: number;
}

function DeckCard({ title, cardCount, practiceCount, id }: DeckCardProps) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const { setSelectedDeckID, setModalType, setIsModalShown } = useDeckContext();

    const toggleMenu = () => {
        setIsMenuVisible((prev) => !prev);
    };

    function toggleModalForRename() {
        setSelectedDeckID(id);
        setModalType("rename");
        setIsModalShown(true);
        toggleMenu();
    }

    function toggleModalForDelete() {
        setSelectedDeckID(id);
        setModalType("delete");
        setIsModalShown(true);
        toggleMenu();
    }

    return (
        <div className="outerDeck shadowAndBorder">
            <div className="innerDeck">
                <section className="deckMainBar" style={{ position: "relative" }}>
                    <p className="deckName">{title}</p>
                    <button className="editDeckButton" onClick={toggleMenu}>
                        <img src="/images/EditDots.svg" alt="Deck Settings" />
                    </button>
                    {isMenuVisible && (
                        <section className="editOptionsMenu" tabIndex={0}>
                            <button className="editOption" onClick={toggleModalForRename}>Rename</button>
                            <button className="editOption" onClick={toggleModalForDelete}>Delete</button>
                        </section>
                    )}
                </section>
                <section className="deckStats">
                    <p className="deckStat">{cardCount} cards</p>
                    <p className="deckStat">Practiced {practiceCount} times</p>
                </section>
            </div>
        </div>
    );
}

export default DeckCard;