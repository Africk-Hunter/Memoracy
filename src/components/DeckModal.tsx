import React from 'react';

interface DeckModalProps {
    clearModal: () => void;
    setTitle: (title: string) => void;
    create?: () => void;
    rename?: () => Promise<void>;
    type: string;
}

function DeckModal({ clearModal, setTitle, rename, create, type }: DeckModalProps) {
    return (
        <section className="nameDeckModal shadowAndBorder">
            <input type="text" className="deckTitle" placeholder={type === 'create' ? 'Deck Title' : 'New Deck Title'} onChange={(e) => setTitle(e.currentTarget.value)} />
            <section className="titleButtons">
                <button className="titleButton cancel" onClick={clearModal}>Cancel</button>
                <button className="titleButton create" onClick={type === 'create' ? create : rename}>{type === 'create' ? 'Create Deck' : 'Rename Deck'}</button>
            </section>
        </section>
    );
}

export default DeckModal;
