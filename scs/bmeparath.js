const { adams } = require("../Ibrahim/adams");
const yts = require('yt-search');
//const ytdl = require('ytdl-core');
const fs = require('fs');
const yt=require("../Ibrahim/dl/ytdl-core.js")
const ffmpeg = require("fluent-ffmpeg");
const yts1 = require("youtube-yts");

adams({
  nomCom: "sing",
  categorie: "Search",
  reaction: "🎧"
}, async (origineMessage, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;
     
  if (!arg[0]) {
    repondre("Please provide song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    const search = await yts(topo);
    const videos = search.videos;

    if (videos && videos.length > 0 && videos[0]) {
      const urlElement = videos[0].url;
      const apiResponse = await fetch(`https://prabath-md-api.up.railway.app/api/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=prabath-api_9d4fdb`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 'success ✅') {
        const audioUrl = apiResult.data.downloadUrl;
        const fileInfo = {
          title: apiResult.data.title,
          fileSize: apiResult.data.file_size,
          quality: apiResult.data.quality
        };

        let infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*BMW SONG PLAYER*`
        };

        zk.sendMessage(origineMessage, infoMess, { quoted: ms });

        // Send the audio file using the audio URL
        zk.sendMessage(origineMessage, { audio: { url: audioUrl }, mimetype: 'audio/mp4' }, { quoted: ms, ptt: false });
        console.log("Sending audio file completed!");

        await ms.React('✅');
        repondre('Download Success...');
      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No videos found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
  }
});
