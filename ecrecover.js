const ethUtil = require("ethereumjs-util");

window.ecRecover = function (message, signature) {
  const res = ethUtil.fromRpcSig("0x" + signature);

  const msg = ethUtil.keccak256(new Buffer.from(message));
  const prefix = new Buffer.from("\x19Ethereum Signed Message:\n");
  const prefixedMsg = ethUtil.keccak256(
    Buffer.concat([prefix, new Buffer.from(String(msg.length)), msg])
  );
  const pub = ethUtil.ecrecover(prefixedMsg, res.v, res.r, res.s);
  // ethUtil.int;

  //const pub = ethUtil.ecrecover(msgBuffer, res.v, res.r, res.s);
  const addrBuf = ethUtil.pubToAddress(pub);
  const addr = ethUtil.bufferToHex(addrBuf);

  return addr;
};
