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
    const { setSelectedDeckIndex, setModalType, setIsModalShown } = useDeckContext();

    const toggleMenu = () => {
        setIsMenuVisible((prev) => !prev);
    };

    function handleRename() {
        setSelectedDeckIndex(id);
        setModalType("rename");
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
                            <button className="editOption" onClick={handleRename}>Rename</button>
                            <button className="editOption">Delete</button>
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