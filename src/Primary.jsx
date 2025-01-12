import React, { useEffect, useState } from 'react';

function Primary () {
    const [kanjiData, setKanjiData] = useState([]);
    const [seenKanji, setSeenKanji] = useState([]);

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
        <>
            Hello World  
            {
                kanjiData ? kanjiData : 'Loading...' 
            }
            Test
        </>
    );
}

export default Primary;