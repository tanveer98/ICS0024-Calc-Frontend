import Axios from "axios";

export default sendGetRequest;
async function sendGetRequest(state) {
    const user_input = state.user_input;
    let queryString = "http://65.52.229.255/c?";
    let valueString = "";
    user_input.forEach( (v) => {
        valueString += "v=";
        let value = v.value.toString();
        valueString += value;
        valueString += "&";
    });
    queryString += valueString.slice(0,-1);
    let response = await Axios.get(queryString);
    state.update_api_response(response.data);
}