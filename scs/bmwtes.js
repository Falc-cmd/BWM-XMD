
const { adams } = require("../Ibrahim/adams");
const yts = require('yt-search');
const BaseUrl = 'https://api.giftedtechnexus.co.ke';
const giftedapikey = 'ibrahimtech_ai';
//const adam = 'prabath-api_5f6557';

adams({
  nomCom: "video",
  categorie: "Search",
  reaction: "🎥"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song/video name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;
//repondre(videoUrl)

      
      // Call the API endpoint with the video URL to fetch the video download URL
      const apiResponse = await fetch(`https://prabath-md-api.up.railway.app/api/ytmp4?url=${encodeURIComponent(videoUrl)}&apikey=prabath-api_9d4fdb`);
      const apiResult = await apiResponse.json();

        const videoDlUrl = apiResult.data.video["360p"].downloadUrl;


        // Prepare the message with video details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*BMW-MD VIDEO PLAYER*\n\n*©Ibrahim Adams*`

        };

        // Send video details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the video as a URL (direct download link)
        await zk.sendMessage(dest, {
          video: { url: videoDlUrl },
          mimetype: 'video/mp4'
        }, { quoted: ms });

        repondre(`*Video Details*\n\n*Video Owner:* ${videos[0].author.name}\n\n*Time:* ${videos[0].timestamp}\n\n*®Adams 2024*`);
      
    } else {
      repondre('No videos found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the video.' + error);
  }
});


adams({
  nomCom: "video2",
  categorie: "Search",
  reaction: "🎬"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song/video name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch the video download URL
      const apiResponse = await fetch(`https://prabath-md-api.up.railway.app/api/ytmp4?url=${encodeURIComponent(videoUrl)}&apikey=prabath-api_9d4fdb`);
      const apiResult = await apiResponse.json();

        const videoDlUrl = apiResult.data.video["360p"].downloadUrl;

        // Prepare the message with video details
        const infoMess = {
          video: { url: videos[0].thumbnail },
          caption: `*BMW-MD VIDEO PLAYER*\n\n*©Ibrahim Adams*`

        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a URL instead of buffer
        await zk.sendMessage(dest, {
          video: { url: videoDlUrl },
          mimetype: 'video/mp4'
        }, { quoted: ms });

        repondre(`*Video Details*\n\n*Video Owner:* ${videos[0].author.name}\n\n*Time:* ${videos[0].timestamp}\n\n*®Adams 2024*`);
      
    } else {
      repondre('No videos found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the video.');
  }
});


adams({
  nomCom: "play",
  categorie: "Download",
  reaction: "🎧"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `BMW SONG PLAYER*\n\n*◁ II ▷ 1:00 •၊၊||၊|။||။||၊|||။ ၊|•*${videos[0].timestamp}`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          audio: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });

        repondre(`*Bmw Just Downloaded ${apiResult.result.title}*\n\n*®Adams 2024*`);
   
      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.');
  }
});

adams({
  nomCom: "song",
  categorie: "Download",
  reaction: "🎸"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `BMW SONG PLAYER*\n\n*◁ II ▷ 1:00 •၊၊||၊|။||။||၊|||။ ၊|•*${videos[0].timestamp}`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          audio: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });

        repondre(`*Bmw Just Downloaded ${apiResult.result.title}*\n\n*®Adams 2024*`);
   
      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.');
  }
});
