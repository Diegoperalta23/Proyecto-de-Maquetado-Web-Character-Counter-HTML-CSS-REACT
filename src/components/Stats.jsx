import "./Stats.css";
import bgVioleta from "../assets/bg-violeta.png";
import bgNaranja from "../assets/bg-naranja.png";
import bgSalmon from "../assets/bg-salmon.png";

const Stats = ({ characters, words, sentences }) => {
    return (
        <div className="cards">

            <div className="total-characters">
                <p>{characters}</p>
                <span>Total Characters</span>
            </div>

            <div className="total-count">
                <p>{words}</p>
                <span>Word Count</span>
            </div>

            <div className="total-sentence">
                <p>{sentences}</p>
                <span>Sentence Count</span>
            </div>


        </div>
    )
}

export { Stats }