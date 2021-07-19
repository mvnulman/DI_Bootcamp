import React from 'react';

class ErrorHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        }
    }


    componentDidCatch(error, errorInfo) {
        this.setState ({
            error:error,
            errorInfo:errorInfo
        })

    }


    render () {
        console.log(this.state.errorInfo)
        if (this.state.error) {
            return (
                <>
                    <h2>You reach the number 5!</h2>
                    <h1>{this.state.error.toString}</h1>
                    {/* {this.state.errorInfo.componentStack} */}
                </>
            )
        }
        return this.props.children
    }
}

export default ErrorHandler;