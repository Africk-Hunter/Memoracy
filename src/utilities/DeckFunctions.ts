import { useDeckContext } from '../context/DeckContext';
import { fetchDecks, createDeck, renameDeck, deleteDeck } from "../utilities/FirebaseHelpers";

function isTitleInputValid(input: string): boolean {
    if (input.trim() === "") {
        alert("Deck title cannot be empty.");
        return false;
    }
    if (input.length > 25) {
        alert("Deck title cannot exceed 25 characters.");
        return false;
    }
    return true;
}

export function useDeckFunctions() {
    const {
        setDecks,
        selectedDeckTitle,
        setSelectedDeckTitle,
        selectedDeckID,
        setSelectedDeckID,
        setIsModalShown,
        setModalType,
    } = useDeckContext();

    function clearModal() {
        setIsModalShown(false);
        setSelectedDeckTitle("");
        setModalType('create');
        setSelectedDeckID(null);
    }

    async function handleDeckCreation() {
        if (isTitleInputValid(selectedDeckTitle)) {
            await createDeck(selectedDeckTitle);
            fetchDecks(setDecks);
            clearModal();
        }
    }

    async function handleRename() {
        if (!isTitleInputValid(selectedDeckTitle)) {
            return;
        }
        if (selectedDeckID == null) {
            alert("No deck selected for renaming.");
            return;
        }
        await renameDeck(selectedDeckID, selectedDeckTitle);
        fetchDecks(setDecks);
        clearModal();
    }

    async function handleDelete() {
        if (selectedDeckID == null) {
            alert("No deck selected for deletion.");
            return;
        }
        console.log("Deleting deck with ID:", selectedDeckID);
        await deleteDeck(selectedDeckID);
        fetchDecks(setDecks);
        clearModal();
    }

    return {
        clearModal,
        handleDeckCreation,
        handleRename,
        handleDelete,
    };
}