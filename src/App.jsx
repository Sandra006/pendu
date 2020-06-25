import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import Letters from './Letters/Letters';
import Keyboard from './Keyboard/Keyboard';
import Counter from './Counter/Counter';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const SIZE = 26
const WORDS = ["BONHEUR", "SKI", "CHAUSSURE", "MAISON", "JUNGLE", "LIVRE", "BOUTEILLE", "ANNIVERSAIRE", "STAGE", "REACT", "PENDU", "LIT", "AMROIRE", "SALOPETTE", "BALEINE"]

class App extends React.Component {

  state = {
    keyboard: this.generateKeyboard(),
    word: this.generateWord(),
    usedLetters: [],
    counter: 0,
  }

  generateKeyboard() {
    const result = []
    const letters = ALPHABET.split('')
    while (result.length < SIZE) {
      const letter = letters.shift()
      result.push(letter)
    }
    return result
  }

  generateWord() {
    const result = []
    const word = WORDS[Math.floor(Math.random()* WORDS.length)].split('')
    while (word.length > 0) {
      const letter = word.shift()
      result.push(letter)
    }
    return result.join('');
  }

  handleLetterClick = letter => {
    const { usedLetters, counter, word, } = this.state;
    this.setState({ ...this.state, usedLetters: [...usedLetters, letter], counter: counter + 1 })

    if (!this.computeDisplay(word, [...usedLetters, letter]).includes('_')) {
      alert(`Gagné en ${counter + 1}! `)
    }
  }

  // Produit une représentation textuelle de l’état de la partie,
  // chaque lettre non découverte étant représentée par un _underscore_.
  computeDisplay(word, wordLetters) {  
    return word.replace(/\w/g,    
      (letter) => (wordLetters.includes(letter) ? letter : '_')  
    )
  }

  reset = () => {
    this.setState({
      usedLetters: [], 
      counter: 0, 
      word: this.generateWord(), 
      keyboard: this.generateKeyboard(), 
      gameState: "En cours"})
  }

  render() {
    const { word, usedLetters, keyboard, counter} = this.state;
    return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <h1>Pendu</h1>
        <div>
          <Letters 
            word={this.computeDisplay(word, usedLetters)} 
            onClick={this.handleLetterClick} 
          />
        </div>
        <div>
          <Keyboard 
            usedLetters={usedLetters}
            keyboard={keyboard} 
            onClick={this.handleLetterClick}
          />
        </div>
      </div>
      <div className="d-flex justify-content-end mt-3 mr-3">
        <Counter 
          counter={counter}
        />
      </div>
      <div className="d-flex flex-column align-items-center mt-5">
        <Button variant="contained" color="primary" onClick={this.reset}>Nouvelle partie</Button>
      </div>
    </div>
    );
  }
}

export default App;
