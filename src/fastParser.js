'use strict';

var PublicKey = require("./publicKey");

var FastParser = function () {}

FastParser.fixed_data = function (b, len, buffer) {
    if (!b) {
        return;
    }
    if (buffer) {
        var data = buffer.slice(0, len).toString('binary');
        b.append(data, 'binary');
        while (len-- > data.length) {
            b.writeUint8(0);
        }
    } else {
        var b_copy = b.copy(b.offset, b.offset + len);
        b.skip(len);
        return new Buffer(b_copy.toBinary(), 'binary');
    }
}

FastParser.public_key = function (b, _public_key) {
    if (!b) {
        return;
    }
    if (_public_key) {
        var buffer = _public_key.toBuffer();
        b.append(buffer.toString('binary'), 'binary');
        return;
    } else {
        buffer = FastParser.fixed_data(b, 33);
        return PublicKey.fromBuffer(buffer);
    }
}

FastParser.ripemd160 = function (b, _ripemd) {
    if (!b) {
        return;
    }
    if (_ripemd) {
        FastParser.fixed_data(b, 20, _ripemd);
        return;
    } else {
        return FastParser.fixed_data(b, 20);
    }
}

FastParser.time_point_sec = function (b, epoch) {
    if (epoch) {
        epoch = Math.ceil(epoch / 1000);
        b.writeInt32(epoch);
        return;
    } else {
        epoch = b.readInt32(); // fc::time_point_sec
        return new Date(epoch * 1000);
    }
}


module.exports = FastParser;