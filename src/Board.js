import Square from "./Square";

function Board(props) {
    return (
        <div className="board">
            {props.cards.map(el => <Square emoji={el} key={el.id} openCard={props.openCard}/>)}
        </div>
    );
}

export default Board;