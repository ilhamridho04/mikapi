var api = require('mikronode').MikroNode;

var device = new api('192.168.100.47');
device.connect().then(([login]) => login('admin', 'admintest')).then(function(conn) {

    var chan = conn.openChannel();

    chan.write('/ip/address/add', { 'interface': 'ether1', 'address': '192.168.1.1' });
    chan.on('trap', function(data) {
        console.log('Error setting IP: ' + data);
    });
    chan.on('done', function(data) {
        console.log('IP Set.');
    });
    chan.close();
    conn.close();
});