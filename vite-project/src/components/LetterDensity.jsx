import "./LetterDensity.css"

const LetterDensity = ({ visibleLetters, showAll, setShowAll }) => {
    return (
        <section className="density-container">
            <h2 className="density">Letter Density</h2>
            <article className="letters-list">
                {visibleLetters.map((obj) => (
                    <div className="letter-row" key={obj.letterName}>
                        <span className="letter">
                            {obj.letterName.toUpperCase()}
                        </span>

                        <meter
                            className="progress"
                            min="0"
                            max="100"
                            value={obj.percentage}
                        />

                        <span className="percentage">
                            {obj.amount} ({obj.percentage.toFixed(1)}%)
                        </span>
                    </div>
                ))}
            </article>
            {visibleLetters.length > 0 && (
                <button className="mas-menos" onClick={() => setShowAll(!showAll)}>
                    {showAll ? "Ver menos" : "Ver más"}
                </button>
            )}
        </section>
    )
}

export { LetterDensity }