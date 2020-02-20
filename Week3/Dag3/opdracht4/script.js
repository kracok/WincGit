const waitForData = async function(){
    const data = await getData();
    console.log('oke data, now do something', data);
};

waitForData();

