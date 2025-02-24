import net from 'node:net'
const client = new net.Socket();

client.connect(5001, '46.101.24.212', () => {
	console.log('Connected');
	client.write('##,imei:359586015829802,A;');

	setInterval(() => {
		client.write('359586015829802');
	}, 180000);

	setInterval(() => {
		client.write('imei:868166054210349,tracker,190412052010,,F,212006.000,A,2147.1909,S,04811.9493,W,0.00,0;');
	}, 30000);
	 setInterval(() => {
	 	client.write('imei:868166054210349,low battery,190413023307,,F,183304.000,A,2147.2171,S,04811.9770,W,0.00,0;');
	 }, 35000);
	// setInterval(() => {
	// 	client.write('imei:868166054210349,ac alarm,190413023008,,F,183002.000,A,2147.2013,S,04811.9545,W,0.00,0;');
	// }, 40000);
	// setInterval(() => {
	// 	client.write('imei:868166054210349,tracker,,,L,,,45c,,1f41,,,;');
	// }, 50000);
	// setInterval(() => {
	// 	client.write('imei:868166054210349,ac alarm,,,L,,,45c,,1f44,,,;');
	// }, 55000);
});

client.on('data', (data) => {
	console.log('Received: ' + data);
	//client.destroy(); // kill client after server's response
});

client.on('close', () => {
	console.log('Connection closed');
});