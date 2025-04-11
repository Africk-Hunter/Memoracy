import React, { createContext, useContext, useState } from "react";

interface DeckContextType {
    decks: { title: string; cardCount: number; practiceCount: number; id: number }[];
    setDecks: React.Dispatch<React.SetStateAction<{ title: string; cardCount: number; practiceCount: number; id: number }[]>>;
    selectedDeckTitle: string;
    setSelectedDeckTitle: React.Dispatch<React.SetStateAction<string>>;
    selectedDeckID: number | null;
    setSelectedDeckID: React.Dispatch<React.SetStateAction<number | null>>;
    isModalShown: boolean;
    setIsModalShown: React.Dispatch<React.SetStateAction<boolean>>;
    modalType: string;
    setModalType: React.Dispatch<React.SetStateAction<string>>;
}

const DeckContext = createContext<DeckContextType | undefined>(undefined);

export const DeckProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [decks, setDecks] = useState<{ title: string; cardCount: number; practiceCount: number; id: number }[]>([]);
    const [selectedDeckTitle, setSelectedDeckTitle] = useState<string>("");
    const [selectedDeckID, setSelectedDeckID] = useState<number | null>(null);
    const [isModalShown, setIsModalShown] = useState<boolean>(false);
    const [modalType, setModalType] = useState<string>('create');

    return (
        <DeckContext.Provider
            value={{
                decks,
                setDecks,
                selectedDeckTitle,
                setSelectedDeckTitle,
                selectedDeckID,
                setSelectedDeckID,
                isModalShown,
                setIsModalShown,
                modalType,
                setModalType
            }}
        >
            {children}
        </DeckContext.Provider>
    );
}

export const useDeckContext = () => {
    const context = useContext(DeckContext);
    if (!context) {
        throw new Error("useDeckContext must be used within a DeckProvider");
    }
    return context;
};