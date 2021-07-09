const SearchBox = (props) => {
    console.log(props);
    return (
        <div>
        <button onClick = {props.clickMe}>Find Match</button>

        </div>
    )
}

export default SearchBox;