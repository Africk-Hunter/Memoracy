import React, { useState, useEffect, useRef } from "react";

interface DeckCardProps {
    title: string;
    cardCount: number;
    practiceCount: number;
    id: number;
    setSelectedDeckIndex: (index: number | null) => void;
    setModalType: (index: string) => void;
    setIsModalShown: (isModalShown: boolean) => void;
}

function DeckCard({ title, cardCount, practiceCount, id, setSelectedDeckIndex, setModalType, setIsModalShown }: DeckCardProps) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isBeingEdited, setIsBeingEdited] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible((prev) => !prev);
    };

    function handleRename() {
        if (isMenuVisible) {
            setSelectedDeckIndex(id);
            setModalType('rename');
            setIsModalShown(true);
        } else {
            setSelectedDeckIndex(null);
        }
        toggleMenu();
        console.log(id, title);
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