import CounterButtons from "./CounterButtons"
import {connect} from 'react-redux';
const Counter2 = (props) => {
    return (
        <>
        <h1>{props.counter}</h1>
        <CounterButtons />
        </>
    ) 

}

const mapStateToProps = (state) => {
    return { 
        counter: state.counter
    }
}
export default connect (mapStateToProps, null)(Counter2);