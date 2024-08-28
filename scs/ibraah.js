const { adams } = require("../Ibrahim/adams");
//const ffmpeg = require("fluent-ffmpeg");
//const fs = require('fs');
adams( {
  nomCom : "bao",
 categorie : "general",
  reaction : "😂" },
      async (dest, zk, commandeOptions) => {

        //const {ms} = commandeOptions;
        
     const { ms, repondre, arg } = commandeOptions;
        
       // zk.sendMessage(origineMessage,infoMess,{quoted:ms}) ;

        const audiovn = "./bmw.mp4",
        
      //  const fileStream = fs.createWriteStream(audiovn);
      //audioStream.pipe(fileStream);
});
console.log(audiovn); 
    //  fileStream.on('finish', () => {
    
        await  zk.sendMessage(dest, { audio: { url: audiovn,mimetype:'audio/mp4'},  { quoted: ms,ptt: true });
       // console.log("Envoi du fichier audio terminé !");
   
        //console.log("wrong!! text this _.alive1_");

      }
) ;    
        
        
/**
     const fortu = (m.quoted || m); 
         const quoted = (fortu.mtype == 'buttonsMessage') ? fortu[Object.keys(fortu)[1]] : (fortu.mtype == 'templateMessage') ? fortu.hydratedTemplate[Object.keys(fortu.hydratedTemplate)[1]] : (fortu.mtype == 'product') ? fortu[Object.keys(fortu)[0]] : m.quoted ? m.quoted : m; 
{ quoted: ms,ptt: false });
        console.log("Envoi du fichier audio terminé !");
  { quoted: ms,ptt: false });
        console.log("Envoi du fichier audio terminé !");
   
const audiovn = "./alive.mp3";
    const dooc = {
        audio: {
          url: audiovn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "Dreaded",

        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "Hi human, I am Alive",
          body: "DREADED BOT",
          thumbnailUrl: "https://telegra.ph/file/a5147a64a5b91d8cf945c.jpg",
          sourceUrl: '',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
**/   
