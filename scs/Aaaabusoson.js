

const { adams } = require("../Ibrahim/adams");
const yts = require('yt-search');
const BaseUrl = 'https://gifted-apis-third-30b2fdbb9819.herokuapp.com';
const giftedapikey = 'giftedtechk';


adams({
  nomCom: "ytmp9",
  categorie: "Search",
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
        const audioUrl = apiResult.result.download_url;
        const infoMess = {


            image: { url: videos[0].thumbnail },
            caption: `*𝐆𝐈𝐅𝐓𝐄𝐃-𝐌𝐃 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑*\n
╭───────────────◆
│⿻ *Title:* ${fileInfo.title}
│⿻ *File Size:* ${fileInfo.fileSize}
│⿻ *Quality:* ${fileInfo.quality}
│⿻ *Duration:* ${videos[0].timestamp}
│⿻ *Viewers:* ${videos[0].views}
│⿻ *Uploaded:* ${videos[0].ago}
│⿻ *Artist:* ${videos[0].author.name}
╰────────────────◆
⦿ *Direct Yt Link:* ${videoUrl}

╭────────────────◆
│ *©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*
╰─────────────────◆`
          };
        await zk.sendMessage(dest, infoMess, { quoted: ms });
          // Send the normal audio file with additional caption and metadata
          await zk.sendMessage(dest, {
            audio: { url: audioUrl },
            mimetype: 'audio/mp4',
            caption: `NORMAL AUDIO FORMAT\n\n> *©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*`,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: false,
                title: fileInfo.title,
                body: 'Powered by Gifted Tech',
                thumbnailUrl: 'https://telegra.ph/file/c2a4d8d65722553da4c89.jpg',
                sourceUrl: 'https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l',
                mediaType: 1,
                renderLargerThumbnail: false
              }
            }
          }, { quoted: m });

          // Send the document audio file with additional caption and metadata
          await zk.sendMessage(dest, {
            document: { url: audioUrl },
            mimetype: 'audio/mp4',
            fileName: `${fileInfo.title}.mp4`,
            caption: `DOCUMENT AUDIO FORMAT\n\n> *©𝟐𝟎𝟐𝟒 𝐆𝐈𝐅𝐓𝐄𝐃 𝐌𝐃 𝐕𝟓*`,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: false,
                title: fileInfo.title,
                body: 'Powered by Gifted Tech',
                thumbnailUrl: 'https://telegra.ph/file/2a38145dc911b234c2731.jpg',               
                sourceUrl: 'https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l',
                mediaType: 1,
                renderLargerThumbnail: false
              }
            }
          }, { quoted: ms });

        repondre('Downloded Successfully ✅');
      } else {
        repondre('Searching...⏳');
      }
    } else {
      repondre('No videos found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('Searching...⏳');
  }
});
