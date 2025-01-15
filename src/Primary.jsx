import { useEffect, useState } from 'react';
import Game from './Game';
import ScoreGUI from './ScoreGUI';
import GameTitle from './GameTitle';

function Primary () {
    const [kanjiData, setKanjiData] = useState([]);
    const [score, setScore] = useState(0);
    const [gradeLevel, setGradeLevel] = useState();

    //Effect for getting kanji dataset on initialization.
    useEffect(() => {
        const getInitialData = async () => {
            // const response = await fetch('https://kanjiapi.dev/v1/kanji/grade-1');
            const response = await fetch(`https://kanjiapi.dev${gradeLevel}`);
            const data = await response.json();
            return data;
        }
        const fetchData = async () => {
            try {
                const data = await getInitialData();
                setKanjiData(data);
            } catch (error) {
                console.error('Error fetching kanji data:', error);
            }
        };
        fetchData();
    }, [gradeLevel] );

    return(
        <div className="gameContainer">
            {
                gradeLevel
                    ? 
                    <div>
                        <Game 
                        kanjiData={kanjiData} 
                        setScore={setScore} 
                        setGradeLevel={setGradeLevel} />
                        <ScoreGUI 
                        score={score}
                        setGradeLevel={setGradeLevel} 
                        />
                    </div>
                    : 
                    <div>
                        <GameTitle 
                        score={score}
                        setScore={setScore} 
                        setGradeLevel={setGradeLevel} />
                    </div>
            }
        </div>
    );
}

export default Primary;