import React from "react";

const DeckView: React.FC = () => {
    return (
        <section className="decks">
            <section className="deckHeaderBar">
                <h1 className="yourDecks">Your Decks</h1>
                <button className="shadowAndBorder createDeckButton">New Deck <img src="/images/Plus.svg" alt="" className="newDeckImg" /></button>
            </section>
            <section className="deckEnv">
                <div className=" outerDeck shadowAndBorder">
                    <div className="innerDeck">
                        <section className="deckMainBar">
                            <p className="deckTitle">Learning Something</p>
                            <button className="shadowAndBorder editDeckButton"><img src="/images/EditDots.svg" alt="Deck Settings" /></button>
                        </section>

                        <section className="deckStats">
                            <p className="deckStat">0 cards</p>
                            <p className="deckStat">Practiced 0 Times</p>
                        </section>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default DeckView;
