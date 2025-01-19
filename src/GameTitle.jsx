import { useState } from 'react';

function GameTitle ({score, setScore, setGradeLevel}) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const startGame = () => {
        setGradeLevel(selectedOption);
        setScore(0);
    }

    return (
        <div className="title-container">
            <div className="title-block">
                {
                    score >= 1 ?
                        <div>
                            You scored {score} points. Try again?
                        </div>
                        :
                        <h1>Kanji Memory!</h1>
                }
                <label htmlFor="options">Choose a JLPT level:</label>
                <select id="options" value={selectedOption} onChange={handleChange}>
                    <option value="" disabled>Select an option</option>
                    <option value="n5">JLPT N5</option>
                    <option value="n4">JLPT N4</option>
                    <option value="n3">JLPT N3</option>
                    <option value="n2">JLPT N2</option>
                    <option value="n1">JLPT N1</option>
                </select>
                <button onClick={startGame} className="start-button">Start</button>
            </div>
        </div>
    );
}

export default GameTitle;