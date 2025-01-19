

function ScoreGUI ({score, setGradeLevel, countdown}) {

    const quitToMenu = () => {
        setGradeLevel();
    }
    //Note: this countdown assumes the default time is 5 seconds
    // This also assumes the effect will update every 100 milliseconds (so / by 50)
    //Passing this via state is possible but feels icky for such
    //a tiny thing.
    const widthPercentage = (countdown / 50) * 100;
    const hue = (countdown / 50) * 120;

    const style = {
        width: `${widthPercentage}%`,
        backgroundColor: `hsl(${hue}, 100%, 50%)`
    };

    return (
        <div className="gui-container">
            <div className="upper-container">
                <div className="score-container">
                    Score: {score}
                </div>
                <div className="progress-container">
                    <div className="progress-bar" style={style}></div>
                </div>
            </div>
            <div className="quit-container">
                <button onClick={quitToMenu} className="quit-button">Quit</button>
            </div>
        </div>
    );
}

export default ScoreGUI;