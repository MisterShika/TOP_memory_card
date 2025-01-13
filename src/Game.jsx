function Game ({kanjiData, seenKanji, setSeenKanji}) {

    

    const getRandomKanji = (kanjiArray) => {
        const randomNumber = Math.floor(Math.random() * kanjiArray.length);
        return kanjiArray[randomNumber];
    }

    return (
        <div className="display-kanji">
            {
                getRandomKanji(kanjiData)
            }
        </div>
    );
}

export default Game;