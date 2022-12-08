function Square(props) {
    return (
        <div className="card-button">
            <button onClick={()=>props.openCard(props.emoji.id,props.emoji.content)} className={"card-button"}>{props.emoji.open ? props.emoji.content : ''}</button>
        </div>
    );
}

export default Square;