import { useEffect, useState } from 'react';
import ScoreGUI from './ScoreGUI';

function Game ({kanjiData, score, setScore, setGradeLevel}) {
    const [seenKanji, setSeenKanji] = useState([]);
    const [displayedKanji, setDisplayedKanji] = useState([]);
    const [countdown, setCountdown] = useState(0);

    //Clicking card adds kanji to "seen" array
    const cardClick = (kanji) => {
        if(seenKanji.includes(kanji)){
            console.log("EXISTS! RESET!");
            //Reset game
            setDisplayedKanji(getRandomKanji(9, kanjiData));
            setSeenKanji([]);
            setGradeLevel();
        }else{
            const score = countdown > 0 ? Math.ceil(countdown / 10) : 1;
            setScore(prevCount => prevCount + score);
            setSeenKanji([
                ...seenKanji,
                kanji
            ]);
        }
    }

    //Returns X number of UNIQUE kanji
    const getRandomKanji = (amount, kanjiArray) => {
        const returnArray = [];
        while(returnArray.length != amount){
            let randomNumber = Math.floor(Math.random() * kanjiArray.length);
            let genKanji = kanjiArray[randomNumber];
            if(!returnArray.includes(genKanji)){
                returnArray.push(genKanji);
            }else{
                console.log("DUPLICATE!");
            }
        }
        return returnArray;
    }

    //Populating Kanji on initialization as well as after clicking
    //a card and adding it to "seen"
    useEffect(() => {
        if(kanjiData.length > 0){
            setDisplayedKanji(getRandomKanji(9, kanjiData));
            console.log(`Testing seen kanji: ${seenKanji}`);
        }
    }, [kanjiData, seenKanji]);

    //Timer initializes each time the displayed kanji changes
    //(e.g. upon game initialization and after progressing in the game)
    useEffect(() => {
        if(displayedKanji.length > 0){
            setCountdown(50); 
            const timer = setInterval(() => {
            setCountdown(prevCountdown => {
                if (prevCountdown <= 1) {
                clearInterval(timer);
                return 0;
                }
                return prevCountdown - 1;
            });
            }, 100);
            return () => clearInterval(timer); 
         }
    }, [displayedKanji]);

    return (
        <div>
            <ScoreGUI
                score={score}
                setGradeLevel={setGradeLevel}
                countdown={countdown}
            />
            <div className="display-kanji">
                {
                    displayedKanji.map((kanji, index) => {
                        return <div key={index} onClick={() => cardClick(kanji)} className="kanji-card">{kanji}</div>;
                    })
                }
            </div>
        </div>
    );
}

export default Game;