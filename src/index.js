import React from 'react';
import ReactDOM from 'react-dom';
// const WebAdmin = require('web_admin')

class InputRequestComponent extends React.Component {
	
	onClick(e) {
		/**var api = new WebAdmin.DefaultApi();
		api.getConfig((error, data, response) => {
			if (error) {
				console.error(error);
			} else {
				console.log('API called successfully.');
			}
		});**/

		const xhr = new XMLHttpRequest();
		const port = "8080";
		const url = `http://localhost:${port}`
		const endpoint = '/v1.0/config'
		const method = 'GET';
		xhr.open(method, `${url}${endpoint}`);

		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				console.log(xhr.responseText);
			}
		}

		xhr.send();

	}

	render() {		
		return (
			<div>
				<button onClick={this.onClick} >Request</button>
			</div>
		)
	}
} 

ReactDOM.render(<InputRequestComponent />, document.querySelector("#app"));
