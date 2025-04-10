import React from 'react';
import { useDeckContext } from "../context/DeckContext";

interface DeckModalProps {
    clearModal: () => void;
    create?: () => void;
    rename?: () => Promise<void>;
}

function DeckModal({ clearModal, rename, create }: DeckModalProps) {

    const { setSelectedDeckTitle, modalType } = useDeckContext();

    return (
        <section className="nameDeckModal shadowAndBorder">
            <input type="text" className="deckTitle" placeholder={modalType === 'create' ? 'Deck Title' : 'New Deck Title'} onChange={(e) => setSelectedDeckTitle(e.currentTarget.value)} />
            <section className="titleButtons">
                <button className="titleButton cancel" onClick={clearModal}>Cancel</button>
                <button className="titleButton create" onClick={modalType === 'create' ? create : rename}>{modalType === 'create' ? 'Create Deck' : 'Rename Deck'}</button>
            </section>
        </section>
    );
}

export default DeckModal;
