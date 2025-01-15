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
        <div className="title-block">
            {
                score >= 1 ?
                    <div>
                        You scored {score} points. Try again?
                    </div>
                    :
                    <span>Kanji Game!</span>
            }
            <label htmlFor="options">Choose a grade:</label>
            <select id="options" value={selectedOption} onChange={handleChange}>
                <option value="" disabled>Select an option</option>
                <option value="/v1/kanji/grade-1">Grade 1</option>
                <option value="/v1/kanji/grade-2">Grade 2</option>
                <option value="/v1/kanji/grade-3">Grade 3</option>
                <option value="/v1/kanji/grade-4">Grade 4</option>
                <option value="/v1/kanji/grade-5">Grade 5</option>
                <option value="/v1/kanji/grade-6">Grade 6</option>
            </select>
            <button onClick={startGame}>Start</button>
        </div>
    );
}

export default GameTitle;