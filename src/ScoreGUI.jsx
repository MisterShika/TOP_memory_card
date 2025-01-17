

function ScoreGUI ({score, setGradeLevel, countdown}) {

    const quitToMenu = () => {
        setGradeLevel();
    }



    return (
        <div>
            Score: {score}
            Countdown: {countdown}
            <div className="progress-container">
                {
                    //Note: this countdown assumes the default time is 5 seconds
                    // This also assumes the effect will update every 100 milliseconds (so / by 50)
                    //Passing this via state is possible but feels icky for such
                    //a tiny thing.
                }
                <div className="progress-bar" style={{ width: `${(countdown / 50) * 100}%` }}></div>
            </div>
            <button onClick={quitToMenu}>Quit</button>
        </div>
    );
}

export default ScoreGUI;