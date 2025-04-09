import React from 'react';

interface DeckModalProps {
    clearModal: () => void;
    setTitle: (title: string) => void;
    create?: () => void;
    rename?: () => void;
    type: string;
}

function DeckModal({ clearModal, setTitle, create, rename, type }: DeckModalProps) {

    return (
        <section className="nameDeckModal shadowAndBorder">
            <input type="text" className="deckTitle" placeholder="Deck Title" onChange={(e) => setTitle(e.currentTarget.value)} />
            <section className="titleButtons">
                <button className="titleButton cancel" onClick={clearModal}>Cancel</button>
                <button className="titleButton create" onClick={type === 'create' ? create : rename}>Create Deck</button>
            </section>
        </section>
    );
}

export default DeckModal;
