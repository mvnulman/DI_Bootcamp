const SearchBox = (props) => {
    console.log(props);
    return (
        <div>
        <input type='text' onChange={props.handleChange}/>
        <button onClick = {props.clickMe}>Get Robots</button>

        </div>
    )
}

export default SearchBox;