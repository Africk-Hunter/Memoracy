import React, { useState, useEffect, useRef } from "react";

interface DeckCardProps {
    title: string;
    cardCount: number;
    practiceCount: number;
}

function DeckCard({ title, cardCount, practiceCount }: DeckCardProps) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible((prev) => !prev);
    };

    return (
        <div className="outerDeck shadowAndBorder">
            <div className="innerDeck">
                <section className="deckMainBar" style={{ position: "relative" }}>
                    <p className="deckName">{title}</p>
                    <button className="editDeckButton" onClick={toggleMenu}>
                        <img src="/images/EditDots.svg" alt="Deck Settings" />
                    </button>
                    {isMenuVisible && (
                        <section className="editOptionsMenu" onBlur={() => toggleMenu()} tabIndex={0}>
                            <section className="editOption">Edit</section>
                            <section className="editOption">Delete</section>
                            <section className="editOption">Share</section>
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