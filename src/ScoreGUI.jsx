function ScoreGUI ({score, setGradeLevel}) {

    const quitToMenu = () => {
        setGradeLevel();
    }

    return (
        <div>
            Score: {score}
            <button onClick={quitToMenu}>Quit</button>
        </div>
    );
}

export default ScoreGUI;