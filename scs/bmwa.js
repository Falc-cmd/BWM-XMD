const {
  adams
} = require("../Ibrahim/adams");
const yts = require("yt-search");
adams({
  'nomCom': "play",
  'categorie': "Search",
  'reaction': '🎧'
}, async (_0x331cb3, _0x5ed62b, _0x29cdd3) => {
  const {
    ms: _0x289345,
    repondre: _0x19cdef,
    arg: _0x225777
  } = _0x29cdd3;
  if (!_0x225777[0]) {
    _0x19cdef("Please insert a song name.");
    return;
  }
  try {
    let _0x427bd8 = _0x225777.join(" ");
    let _0x314dd5 = [];
    const _0x51b8e0 = await yts(_0x427bd8);
    _0x314dd5 = _0x51b8e0.videos;
    if (_0x314dd5 && _0x314dd5.length > 0) {
      const _0x48db1a = _0x314dd5[0].url;
      const _0x336852 = await fetch("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp3?url=" + encodeURIComponent(_0x48db1a) + "&apikey=" + "giftedtechk");
      const _0x7c7652 = await _0x336852.json();
      if (_0x7c7652.status === 200 && _0x7c7652.success) {
        const _0x181eae = _0x7c7652.result.download_url;
        const _0x2a6b56 = {
          'image': {
            'url': _0x314dd5[0].thumbnail
          },
          'caption': "*BMW SONG PLAYER*\n\n*◁ II ▷ 1:00 •၊၊||၊|။||။||၊|||။ ၊|•* " + _0x314dd5[0].timestamp +"\n\n*_©Ibrahim Adams_*"
        };
        await _0x5ed62b.sendMessage(_0x331cb3, _0x2a6b56, {
          'quoted': _0x289345
        });
        await _0x5ed62b.sendMessage(_0x331cb3, {
          'audio': {
            'url': _0x181eae
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x289345
        });
        _0x19cdef("*SONG INFO*\n\n*Song Name* " + _0x7c7652.result.title + "\n*Song Owner* " + _0x314dd5[0].author.name +"\n\n*_®ADAMS 2024_*");
          
      
      } else {
        _0x19cdef("Failed to download audio. Please try again later.");
      }
    } else {
      _0x19cdef("No audio found.");
    }
  } catch (_0x2d1cdc) {
    console.error("Error from API:", _0x2d1cdc);
    _0x19cdef("An error occurred while searching or downloading the audio.");
  }
});
adams({
  'nomCom': "song",
  'categorie': "Search",
  'reaction': '🎸'
}, async (_0x230f93, _0x194dfe, _0x220b24) => {
  const {
    ms: _0x33d811,
    repondre: _0x5ed249,
    arg: _0x19155c
  } = _0x220b24;
  if (!_0x19155c[0]) {
    _0x5ed249("Please insert a song name.");
    return;
  }
  try {
    let _0x2cc67e = _0x19155c.join(" ");
    let _0x25c73a = [];
    const _0x389cf0 = await yts(_0x2cc67e);
    _0x25c73a = _0x389cf0.videos;
    if (_0x25c73a && _0x25c73a.length > 0) {
      const _0x273c8f = _0x25c73a[0].url;
      const _0x33a1c5 = await fetch("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp3?url=" + encodeURIComponent(_0x273c8f) + "&apikey=" + "giftedtechk");
      const _0x2f9118 = await _0x33a1c5.json();
      if (_0x2f9118.status === 200 && _0x2f9118.success) {
        const _0x1714c1 = _0x2f9118.result.download_url;
        const _0xe02f75 = {
          'image': {
            'url': _0x25c73a[0].thumbnail
          },
          'caption': "*BMW SONG PLAYER*\n\n*◁ II ▷ 1:00 •၊၊||၊|။||။||၊|||။ ၊|•* " + _0x25c73a[0].timestamp +"\n\n*_©Ibrahim Adams_*"
        };
        await _0x194dfe.sendMessage(_0x230f93, _0xe02f75, {
          'quoted': _0x33d811
        });
        await _0x194dfe.sendMessage(_0x230f93, {
          'document': {
            'url': _0x1714c1
          },
          'mimetype': "audio/mpeg"
        }, {
          'quoted': _0x33d811
        });
        _0x5ed249("*SONG INFO*\n\n*Song Name* " + _0x2f9118.result.title + "\n*Song Owner* " + _0x25c73a[0].author.name +"\n\n*_®ADAMS 2024_*");
          
      } else {
        _0x5ed249("Failed to download audio. Please try again later.");
      }
    } else {
      _0x5ed249("No audio found.");
    }
  } catch (_0x5119e8) {
    console.error("Error from API:", _0x5119e8);
    _0x5ed249("An error occurred while searching or downloading the audio.");
  }
});
adams({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '🎬'
}, async (_0x417693, _0x38ae7a, _0x524708) => {
  const {
    ms: _0x3ab854,
    repondre: _0x5e07ab,
    arg: _0xfed1ce
  } = _0x524708;
  if (!_0xfed1ce[0]) {
    _0x5e07ab("Please insert a song/video name.");
    return;
  }
  try {
    let _0x1bc316 = _0xfed1ce.join(" ");
    let _0x1aaaa0 = [];
    const _0x52a0a5 = await yts(_0x1bc316);
    _0x1aaaa0 = _0x52a0a5.videos;
    if (_0x1aaaa0 && _0x1aaaa0.length > 0) {
      const _0x40e0d7 = _0x1aaaa0[0].url;
      const _0x1bb1dd = await fetch("https://gifted-apis-third-30b2fdbb9819.herokuapp.com/api/download/ytmp4?url=" + encodeURIComponent(_0x40e0d7) + "&apikey=" + "giftedtechk");
      const _0x8d13d2 = await _0x1bb1dd.json();
      if (_0x8d13d2.status === 200 && _0x8d13d2.success) {
        const _0x38a284 = _0x8d13d2.result.download_url;
        const _0x4bf970 = {
          'image': {
            'url': _0x1aaaa0[0].thumbnail
          },
          'caption': "*BMW VIDEO PLAYER*\n\n*©Ibrahim Adams*"    };
        await _0x38ae7a.sendMessage(_0x417693, _0x4bf970, {
          'quoted': _0x3ab854
        });
        await _0x38ae7a.sendMessage(_0x417693, {
          'video': {
            'url': _0x38a284
          },
          'mimetype': "video/mp4"
        }, {
          'quoted': _0x3ab854
        });
        _0x5e07ab("*VIDEO INFO*\n\n*Video Name* "+ _0x8d13d2.result.title +" \n*Video Owner*  "+ _0x1aaaa0[0].author.namen+"\n*Time*  "+ _0x1aaaa0[0].timestamp +"\n\n*_®ADAMS 2024_* ");
  
                  
      } else {
        _0x5e07ab("Failed to download the video. Please try again later.");
      }
    } else {
      _0x5e07ab("No videos found.");
    }
  } catch (_0x2a9235) {
    console.error("Error from API:", _0x2a9235);
    _0x5e07ab("An error occurred while searching or downloading the video.");
  }
});
/*"
const { adams } = require("../Ibrahim/adams");
const yts = require('yt-search');
const BaseUrl = 'https://gifted-apis-third-30b2fdbb9819.herokuapp.com';
const giftedapikey = 'giftedtechk';

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

      // Call the API endpoint with the video URL to fetch the video download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp4?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const videoDlUrl = apiResult.result.download_url;

        // Prepare the message with video details
        const infoMess = {
          image: { url: videos[0].thumbnail },
         caption: `Bmw is downloading ${apiResult.result.title} by ${videos[0].author.name}\n Time : ${videos[0].timestamp}\n\nYou can use telegram bot. Tap on the link
> https://t.me/Ibraah_adams_bot

> ©Ibrahim Adams`
        };

        // Send video details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the video as a URL (direct download link)
        await zk.sendMessage(dest, {
          video: { url: videoDlUrl },
          mimetype: 'video/mp4',
          
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

adams({
  nomCom: "song",
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

        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
         caption: `Bmw is downloading ${apiResult.result.title} by ${videos[0].author.name}\n Time : ${videos[0].timestamp}\n\nYou can use telegram bot. Tap on the link
> https://t.me/Ibraah_adams_bot

> ©Ibrahim Adams`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a URL instead of buffer
        await zk.sendMessage(dest, {
          audio: { url: audioUrl },
          mimetype: 'audio/mp4'
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
adams({
  nomCom: "play",
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

        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
         caption: `Bmw is downloading ${apiResult.result.title} by ${videos[0].author.name}\n Time : ${videos[0].timestamp}\n\nYou can use telegram bot. Tap on the link
> https://t.me/Ibraah_adams_bot

> ©Ibrahim Adams`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a URL instead of buffer
        await zk.sendMessage(dest, {
          audio: { url: audioUrl },
          mimetype: 'audio/mp4',
          caption:
          "╭───────────────◆\n│ *ALPHA-MD DOWNLOADER*\n╰────────────────◆", gifPlayback: false }, { quoted: ms });
     
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

adams({
  nomCom: "ytmp3",
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

        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
         caption: `Bmw is downloading ${apiResult.result.title} by ${videos[0].author.name}\n Time : ${videos[0].timestamp}\n\nYou can use telegram bot. Tap on the link
> https://t.me/Ibraah_adams_bot

> ©Ibrahim Adams`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a URL instead of buffer
        await zk.sendMessage(dest, {
          audio: { url: audioUrl },
          mimetype: 'audio/mp4'
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
adams({
  nomCom: "ytmp4",
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

      // Call the API endpoint with the video URL to fetch the video download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp4?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const videoDlUrl = apiResult.result.download_url;

        // Prepare the message with video details
        const infoMess = {
          image: { url: videos[0].thumbnail },
         caption: `Bmw is downloading ${apiResult.result.title} by ${videos[0].author.name}\n Time : ${videos[0].timestamp}\n\nYou can use telegram bot. Tap on the link
> https://t.me/Ibraah_adams_bot

> ©Ibrahim Adams`
        };

        // Send video details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the video as a URL (direct download link)
        await zk.sendMessage(dest, {
          video: { url: videoDlUrl },
          mimetype: 'video/mp4'
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
**/
