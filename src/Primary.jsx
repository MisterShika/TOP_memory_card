import { useEffect, useState } from 'react';
import Game from './Game';

function Primary () {
    const [kanjiData, setKanjiData] = useState([]);
    
    

    //Effect for getting kanji dataset on initialization.
    useEffect(() => {
        const getInitialData = async () => {
            const response = await fetch('https://kanjiapi.dev/v1/kanji/grade-1');
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
    }, [] );

    return(
        <div className="gameContainer">
            {
                kanjiData 
                    ? 
                    <Game kanjiData={kanjiData} />
                    : 
                    'Loading...' 
            }
        </div>
    );
}

export default Primary;