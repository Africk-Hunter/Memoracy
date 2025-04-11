import React from 'react';
import { useDeckContext } from "../context/DeckContext";

interface ConfirmDeleteModalProps {
    clearModal: () => void;
    handleDelete?: () => Promise<void>;
}

function ConfirmDeleteModal({ clearModal, handleDelete }: ConfirmDeleteModalProps) {

    const { selectedDeckTitle } = useDeckContext();

    return (
        <section className="nameDeckModal shadowAndBorder">
            <h2 className="modalTitle">Are you sure you want to delete this deck?</h2>
            <section className="titleButtons">
                <button className="titleButton" onClick={clearModal}>Cancel</button>
                <button className="titleButton delete" onClick={handleDelete}>Delete</button>
            </section>
        </section>
    );
}

export default ConfirmDeleteModal;
