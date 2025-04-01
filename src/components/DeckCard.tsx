import React from "react";

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
                    <p onDoubleClick={(e) => (e.currentTarget.contentEditable = "true")} onBlur={(e) => (e.currentTarget.contentEditable = "false")} className="deckName">{title}</p>
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

export default DeckCard;