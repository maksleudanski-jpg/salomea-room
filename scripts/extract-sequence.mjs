import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import ffmpegPath from "ffmpeg-static";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const bundledSource = path.join(root, "public", "assets", "source", "salomea-sequence.mp4");
const telegramSource =
  "C:\\Users\\User\\Downloads\\Telegram Desktop\\Create_seamless_cinematic_video_202606061052.mp4";
const input = process.env.SEQUENCE_SOURCE
  ? path.resolve(process.env.SEQUENCE_SOURCE)
  : fs.existsSync(bundledSource)
    ? bundledSource
    : telegramSource;
const sourceOut = bundledSource;
const outputDir = path.join(root, "public", "assets", "seq", "main");
const fps = Number(process.env.SEQUENCE_FPS ?? 15);
const maxFrames = Number(process.env.SEQUENCE_FRAMES ?? 120);
const width = Number(process.env.SEQUENCE_WIDTH ?? 1280);

if (!ffmpegPath) {
  throw new Error("ffmpeg-static did not provide a binary path.");
}

if (!fs.existsSync(input)) {
  throw new Error(`Sequence source not found: ${input}`);
}

fs.mkdirSync(path.dirname(sourceOut), { recursive: true });
if (path.resolve(input).toLowerCase() !== path.resolve(sourceOut).toLowerCase()) {
  fs.copyFileSync(input, sourceOut);
}

fs.mkdirSync(outputDir, { recursive: true });
for (const file of fs.readdirSync(outputDir)) {
  if (/^frame_\d{3}\.webp$/i.test(file)) {
    fs.rmSync(path.join(outputDir, file));
  }
}

const args = [
  "-y",
  "-i",
  sourceOut,
  "-vf",
  `fps=${fps},scale=${width}:-2`,
  "-frames:v",
  String(maxFrames),
  "-c:v",
  "libwebp",
  "-lossless",
  "0",
  "-q:v",
  "76",
  "-compression_level",
  "5",
  path.join(outputDir, "frame_%03d.webp"),
];

console.log(`Extracting ${maxFrames} frames from ${sourceOut}`);
console.log(`${ffmpegPath} ${args.join(" ")}`);

await new Promise((resolve, reject) => {
  const child = spawn(ffmpegPath, args, { stdio: "inherit" });
  child.on("error", reject);
  child.on("close", (code) => {
    if (code === 0) resolve();
    else reject(new Error(`ffmpeg exited with code ${code}`));
  });
});

console.log(`Frames written to ${path.relative(root, outputDir)}`);
