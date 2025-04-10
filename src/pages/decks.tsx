import React from 'react';
import ReactDOM from 'react-dom/client';
import DeckView from '../components/DeckView';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { DeckProvider } from "../context/DeckContext";

function Decks() {
  return (
    <DeckProvider>
      <DeckView />
    </DeckProvider>
  );
}

export default Decks;