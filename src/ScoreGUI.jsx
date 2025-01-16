

function ScoreGUI ({score, setGradeLevel, countdown}) {

    const quitToMenu = () => {
        setGradeLevel();
    }



    return (
        <div>
            Score: {score}
            Countdown: {countdown}
            <button onClick={quitToMenu}>Quit</button>
        </div>
    );
}

export default ScoreGUI;