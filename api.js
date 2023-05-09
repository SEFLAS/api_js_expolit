
try {
    let datarequest = {
        0:{
            Name : 'Synapse',
            Updated : '',
        },
        1:{
            Name : 'Script-Ware',
            Updated : ''
        },
        2:{
            Name : 'KRNL',
            Updated : '',
        },
        3:{
            Name : 'DX9WARE',
            Updated : '',
        },
        4:{
            Name : 'Electron',
            Updated : '',
        },
        5:{
            Name : 'WeAreDevs API',
            Updated : '',
        },
        6:{
            Name : 'Oxygen-U',
            Updated : '',
        },
        7:{
            Name : 'Fluxus',
            Updated : '',
        },
        8:{
            Name : 'Celestial',
            Updated : '',
        },
        9:{
            Name : 'Comet',
            Updated : '',
        },
        10:{
            Name : 'Elexe',
            Updated : '',
        },
        11: {
            Name : 'ROBLOX',
            Updated : '',
        },
    };
    fetch('https://api.whatexploitsare.online/status')
    .then(response => response.json())
    .then(data => {
        while (true) { // fk loop
            for (var k = 0; k < data.length; k++){
                if (k <= 10) {
                    datarequest[k]['Updated'] = data[k][datarequest[k]['Name']]['updated']
                    if (datarequest[k]['Updated'] == true) {
                        console.log(datarequest[k]['Name'],"Updated : ✔")
                        // document.getElementById('ID').innerHTML = '✔';
                    } else {
                        console.log(datarequest[k]['Name'],"Updated : ✖") 
                        // document.getElementById('ID').innerHTML = '✖';
                    }
                } else {
                    datarequest[k]['Updated'] = data[k][datarequest[k]['Name']]['version']
                    console.log(datarequest[k]['Name'],"Version :",datarequest[k]['Updated'])
                    // document.getElementById('ID').innerHTML = datarequest[k]['Updated'];
                };
            }
            break
        }
    })
    .catch(error => {
      console.error(error);
    });
} catch (s) {
    console.log(s)
    this.error = 'Hang on, we re having some issues loading the API';
};
// [[[{"Synapse":{"updated":false,"status_code":1,"exploit_version":"v2.23.11","roblox_version":"version-08c4cfa3d43c47ef","website_url":"https:\/\/x.synapse.to","discord_url":"https:\/\/x.synapse.to","v3rmillion_url":"https:\/\/v3rmillion.net\/showthread.php?tid=990476","download_url":"https:\/\/x.synapse.to","is_free":false,"unc":false,"type":"Script-Executor","platform":"Windows","last_update_unix":1683157861}},{"Script-Ware":{"updated":false,"status_code":1,"exploit_version":"1.0.63.0","roblox_version":"version-08c4cfa3d43c47ef","website_url":"https:\/\/script-ware.com\/w","discord_url":"https:\/\/script-ware.com\/discord","v3rmillion_url":"https:\/\/v3rmillion.net\/showthread.php?tid=1090651","download_url":"https:\/\/script-ware.com\/w","is_free":false,"unc":true,"type":"Script-Executor","platform":"Windows","last_update_unix":1683136441}},{"KRNL":{"updated":false,"status_code":1,"exploit_version":"2015U","roblox_version":"version-08c4cfa3d43c47ef","website_url":"https:\/\/krnl.place","discord_url":"https:\/\/krnl.place\/invite","v3rmillion_url":"https:\/\/v3rmillion.net\/showthread.php?tid=923517","download_url":"https:\/\/krnl.place\/download.html","is_free":true,"unc":true,"type":"Script-Executor","platform":"Windows","last_update_unix":1683136441}},{"DX9WARE":{"updated":false,"status_code":1,"exploit_version":"1.0.99","roblox_version":"version-08c4cfa3d43c47ef","website_url":"https:\/\/cultofintellect.com\/dx9ware","discord_url":"https:\/\/cultofintellect.com\/discord","v3rmillion_url":"https:\/\/v3rmillion.net\/showthread.php?tid=1079642","download_url":"https:\/\/store.cultofintellect.com","is_free":false,"unc":false,"type":"Aimbot\/ESP","platform":"Windows","last_update_unix":1683147841}},{"Electron":{"updated":true,"status_code":0,"exploit_version":"v2.7.3.UWP","roblox_version":"version-dc61c2db7d694b7b","website_url":"https:\/\/ryos.lol","discord_url":"https:\/\/ryos.lol\/discord.html","v3rmillion_url":"https:\/\/v3rmillion.net\/showthread.php?tid=1039653","download_url":"https:\/\/ryos.lol\/#download","is_free":true,"unc":true,"type":"Script-Executor","platform":"Windows","last_update_unix":1683550142}},{"WeAreDevs API":{"updated":false,"status_code":1,"exploit_version":"3153","roblox_version":"version-08c4cfa3d43c47ef","website_url":"https:\/\/wearedevs.net\/exploits","discord_url":"https:\/\/wearedevs.net\/discord","v3rmillion_url":"","download_url":"https:\/\/wearedevs.net\/d\/JJSploit","is_free":true,"unc":true,"type":"Script-Executor","platform":"Windows","last_update_unix":1683136502}},{"Oxygen-U":{"updated":false,"status_code":1,"exploit_version":"89 :sunglasses:","roblox_version":"version-08c4cfa3d43c47ef","website_url":"https:\/\/oxygenu.xyz","discord_url":"https:\/\/oxygenu.xyz\/OxygenU\/discord.txt","v3rmillion_url":"https:\/\/v3rmillion.net\/showthread.php?tid=1151697","download_url":"https:\/\/oxygenu.xyz\/download","is_free":true,"unc":true,"type":"Script-Executor","platform":"Windows","last_update_unix":1683146581}},{"Fluxus":{"updated":true,"status_code":0,"exploit_version":"V7.2b606","roblox_version":"version-dc61c2db7d694b7b","website_url":"https:\/\/fluxteam.xyz","discord_url":"https:\/\/fluxteam.xyz\/external-files\/discord.php","v3rmillion_url":"https:\/\/v3rmillion.net\/showthread.php?tid=1110030","download_url":"https:\/\/fluxteam.net\/dl","is_free":true,"unc":true,"type":"Script-Executor","platform":"Windows","last_update_unix":1683512221}},{"Celestial":{"updated":false,"status_code":1,"exploit_version":"v1.7.0","roblox_version":"version-08c4cfa3d43c47ef","website_url":"","discord_url":"https:\/\/discord.gg\/6YQnwjZPkR","v3rmillion_url":"https:\/\/v3rmillion.net\/showthread.php?tid=1172890","download_url":"","is_free":true,"unc":false,"type":"Aimbot\/ESP","platform":"Windows","last_update_unix":1683167942}},{"Comet":{"updated":false,"status_code":1,"exploit_version":"v3.0.0.43 :weary:","roblox_version":"version-08c4cfa3d43c47ef","website_url":"https:\/\/cometrbx.xyz","discord_url":"https:\/\/cometrbx.xyz\/discord.html","v3rmillion_url":"https:\/\/v3rmillion.net\/showthread.php?tid=1157128","download_url":"https:\/\/cometrbx.xyz\/download.html","is_free":true,"unc":true,"type":"Script-Executor","platform":"Windows","last_update_unix":1683148801}},{"Elexe":{"updated":false,"status_code":1,"exploit_version":"v1.6.6","roblox_version":"version-08c4cfa3d43c47ef","website_url":"","discord_url":"https:\/\/elexe.fly.dev\/discord","v3rmillion_url":"","download_url":"https:\/\/elexe.fly.dev\/download","is_free":true,"unc":false,"type":"Aimbot\/ESP","platform":"Windows","last_update_unix":1683136441}},{"ROBLOX":{"version":"version-dc61c2db7d694b7b","last_update_unix":1683159541}}]]]
