try {
    const datarequest = {0:'Synapse',1:'Script-Ware',2:'KRNL',3:'DX9WARE',4:'Electron',5:'WeAreDevs API',6:'Oxygen-U',7:'Fluxus',8:'Celestial',9:'Comet',10:'Elexe',11:'ROBLOX'};
    fetch('https://api.whatexploitsare.online/status')
    .then(response => response.json())
    .then(data => {
        for (var k = 0; k < data.length; k++){
            console.log(data[k][datarequest[k]]);
        }
    })
    .catch(error => {
      console.error(error);
    });
} catch (s) {
    console.log(d)
    this.error = 'Hang on, we re having some issues loading the API';
};
