import { useEffect, useState } from 'react';

function Game ({kanjiData}) {
    const [seenKanji, setSeenKanji] = useState([]);
    const [displayedKanji, setDisplayedKanji] = useState([]);



    const kanjiInArray = (kanji, kanjiArray) => {
        kanjiArray.some(item => item === kanji) ? true : false;
    }

    const getRandomKanji = (amount, kanjiArray) => {
        const returnArray = [];
        while(returnArray.length != amount){
            let randomNumber = Math.floor(Math.random() * kanjiArray.length);
            let genKanji = kanjiArray[randomNumber];
            if(kanjiInArray(genKanji, returnArray) === true){
                continue;
            }else{
                returnArray.push(genKanji);
            }
        }
        return returnArray;
    }

    useEffect(() => {
        setDisplayedKanji(getRandomKanji(9, kanjiData));
        console.log(displayedKanji);
    }, [kanjiData]);

    return (
        <div className="display-kanji">
            {
                displayedKanji.map((kanji, index) => {
                    return <div key={index} className="kanji-card">{kanji}</div>;
                })
            }
        </div>
    );
}

export default Game;