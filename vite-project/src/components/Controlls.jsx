import "./Controlls.css";

const Controlls = (
    {
        excludeSpaces,
        setExcludeSpaces,
        readingTime,
        handleExcludeSpaces,
        limitCharacter,
        handleChangeInputLimit,
        limitValue,
        handleLimitValue
    }
) => {
    return (
        <div className="controlls">

            <div className="checkbox-container">

                <label>
                    <input
                        className="no-spaces"
                        type="checkbox"
                        checked={excludeSpaces}
                        onChange={() => handleExcludeSpaces(!excludeSpaces)}
                    />
                    <span className="control-text">Exclude Spaces</span>
                </label>


                <label className="limit-label">
                    <input
                        className="limit-character"
                        type="checkbox"
                        checked={limitCharacter}
                        onChange={handleChangeInputLimit}
                    />
                    <span className="control-text">Set Character Limit</span>

                    {
                        limitCharacter &&
                        <input
                            className="limit-input"
                            type="number"
                            value={limitValue}
                            onChange={(e) => handleLimitValue(e.target.value)}
                        />
                    }

                </label>

            </div>

            <p className="tiempo-aprox">
                Tiempo aprox. de lectura: ± {readingTime}
            </p>

        </div>
    )
}

export { Controlls }