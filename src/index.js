import React from 'react';
import ReactDOM from 'react-dom';
// const WebAdmin = require('web_admin')

const xhr = new XMLHttpRequest();
const port = "8080";
const host = "http://localhost";
const url = `${host}:${port}`;

class InputRequestComponent extends React.Component {
	
	saveConfig(e) {
		/**var api = new WebAdmin.DefaultApi();
		api.getConfig((error, data, response) => {
			if (error) {
				console.error(error);
			} else {
				console.log('API called successfully.');
			}
		});**/
		const obj = {
			dec_config: {
				auth: {
					active_directory: {
						host: 'foo',
						sa_user: 'user',
						sa_password: 'pass', 
						user_search_base: 'base'
					}
				},
				host: {
					preprovisioned_host: {
						user: 'foo',
						private_key: 'bar',
						host_names: ['name'],
						host_ips: ['ip']
					}
				}
			}
		}
		
		const endpoint = '/v1.0/config'

		xhr.open('POST', `${url}${endpoint}`);

		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				console.log(xhr.responseText);
			}
		}

		xhr.send(JSON.stringify(obj));
	}
	
	loadConfig () {
		const endpoint = '/v1.0/config'

		xhr.open('GET', `${url}${endpoint}`);

		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				console.log(xhr.status)
				console.log(xhr.responseText);
			}
		}
		xhr.send();
	}

	ping() {
		const endpoint = '/v1.0/ping'
		xhr.open('GET', `${url}${endpoint}`);

		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				console.log(xhr.responseText);
			}
		}
		xhr.send();
	}

	backupConfig() {
		const obj = {
			password: ''
		}

		const endpoint = '/v1.0/config/backup'
		xhr.open('POST', `${url}${endpoint}`);

		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				console.log(xhr.responseText);
			}
		}
		xhr.send(JSON.stringify());
	}

	render() {		
		return (
			<div>
				<button onClick={this.saveConfig} >Save config</button>
				<button onClick={this.loadConfig} >Get config</button>
				<button onClick={this.ping} >Ping</button>
				<button onClick={this.backupConfig} >Backup config</button>
			</div>
		)
	}
} 

ReactDOM.render(<InputRequestComponent />, document.querySelector("#app"));
