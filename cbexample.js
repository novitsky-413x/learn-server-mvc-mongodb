const cbFunc = (val) => {
    console.log(val);
};

const rcvCb = (callback) => {
    const val = 10;
    callback(val);
};

rcvCb(cbFunc);
