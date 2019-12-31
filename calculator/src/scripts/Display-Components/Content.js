import React from "react";
import ContentContainer from './Containers/Container';
import APIOptions from '../Ajax-calls/fetchAPIOptions';

export class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            is_response_present: false,
            api_options: null,
            option_count: null,
            user_input: [],
            api_response: null,

            update_user_input(new_array) {
                this.user_input = [...new_array];
            },

            update_api_response(res) {
                this.setState({api_response: res});
                this.setState({is_response_present : true});
                console.log(this.state.api_response);
            }

        };

        this.state.update_api_response = this.state.update_api_response.bind(this);
    }

    setAPIState(options) {
        this.setState({option_count: options.length});
        this.setState({api_options: options});
        console.log(this.state.api_response);

    }

    //apparently the arrow function is bound to this objects componentDidMount property during construction.
    componentDidMount = () => {
        let apiOptions;
        console.log("Component did mount?");
        apiOptions = APIOptions();
        this.setAPIState(apiOptions);

    };

    render() {
        return (
        <ContentContainer state = {this.state}/>
    );
    }
}