const http = require('http');
const querystring = require('querystring');
require
//const server = http.createServer((req,res) => {
//	const url = req.url;
//	req.query = querystring.parse(url.split('?')[1]);
//	console.log(req.query,'query')
//	res.end(JSON.stringify(req.query))
//	console.log('ok');
//})

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;
	const path = url.split('?')[0];
	const query = querystring.parse(url.split('?')[1]);
	//设置返回格式为 JSON
	res.setHeader('Content-type', 'application/json');
	const resData = {
		method,
		url,
		path,
		query
	}
	//返回数据
	if(req.method === "POST") {
		console.log("Heard Type", req.headers['Content-type']);
		//接受数据
		let postData = "";
		req.on("data", chunk => {
			postData += chunk.toString();
		})
		req.end('end', () => {
			resData.postData = postData;
			res.end(JSON.stringify(resData))
		})
	} else if(req.method === "GET") {
		res.end(JSON.stringify(resData))
	}
})

server.listen(8000);