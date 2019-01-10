const m3u8Parser = require("m3u8-parser");

// https://abema.tv/now-on-air/abema-news
const manifest = [
  "#EXTM3U",
  "#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=184000,RESOLUTION=320x180",
  "180/playlist.m3u8?ccf=26",
  "#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=300000,RESOLUTION=426x240",
  "240/playlist.m3u8?ccf=26",
  "#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=900000,RESOLUTION=640x360",
  "360/playlist.m3u8?ccf=26",
  "#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=1400000,RESOLUTION=852x480",
  "480/playlist.m3u8?ccf=26",
  "#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=2400000,RESOLUTION=1280x720",
  "720/playlist.m3u8?ccf=26",
  "#EXT-X-STREAM-INF:PROGRAM-ID=1,BANDWIDTH=5300000,RESOLUTION=1920x1080",
  "1080/playlist.m3u8?ccf=26"
].join("\n");

const parser = new m3u8Parser.Parser();

parser.push(manifest);
parser.end();

const parsedManifest = parser.manifest;

const DOMAIN = "https://hoge.com/hogehoge/";

console.table(
  parsedManifest.playlists.map(p => ({
    bandwidth: p.attributes.BANDWIDTH,
    resolution: `${p.attributes.RESOLUTION.width}x${
      p.attributes.RESOLUTION.height
    }`,
    uri: `${DOMAIN}${p.uri}`
  }))
);
