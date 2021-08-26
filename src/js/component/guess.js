import React from "react";
import PropTypes from "prop-types";

const GuessButton = props => {
    const { value } = props;

    return (
        <div class="guess-button-container toggle-content">
            <h3>Do you have any?</h3>
            <div className="guess-button">
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>10</button>
                <button>J</button>
                <button>Q</button>
                <button>K</button>
                <button>A</button>

            </div>
        </div>
    );
};
GuessButton.propTypes = {
    value: PropTypes.string,
};
export default GuessButton;