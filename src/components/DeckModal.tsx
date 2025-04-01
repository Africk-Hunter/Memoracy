import React from 'react';

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

export default DeckModal;
