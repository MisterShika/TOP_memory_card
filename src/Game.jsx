import { useEffect, useState } from 'react';

function Game ({kanjiData, setScore, setGradeLevel}) {
    const [seenKanji, setSeenKanji] = useState([]);
    const [displayedKanji, setDisplayedKanji] = useState([]);

    //Clicking card adds kanji to "seen" array
    const cardClick = (kanji) => {
        if(seenKanji.includes(kanji)){
            console.log("EXISTS! RESET!");
            //Reset game
            setDisplayedKanji(getRandomKanji(9, kanjiData));
            setSeenKanji([]);
            setGradeLevel();
        }else{
            setScore(prevCount => prevCount + 1);
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

    return (
        <div className="display-kanji">
            {
                displayedKanji.map((kanji, index) => {
                    return <div key={index} onClick={() => cardClick(kanji)} className="kanji-card">{kanji}</div>;
                })
            }
        </div>
    );
}

export default Game;