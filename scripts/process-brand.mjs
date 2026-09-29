// Generates web-ready logo files in /public/brand from the originals in /brand-src.
// Run with `npm run brand` after replacing a source logo.
//
// - Phoenix Digital logo: the source sits on black. We "unblend" it from black
//   into a transparent PNG/WebP so it sits cleanly on the site's near-black background.
// - The Common logo: the source sits on green. We key out the green and keep the
//   bronze artwork on transparency so it can sit on any dark surface.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const OUT = "public/brand";
const PD_SRC = "brand-src/phoenix-digital-logo.png";
const TC_SRC = "brand-src/the-common-logo.jpg";

await mkdir(OUT, { recursive: true });

async function raw(input) {
  const { data, info } = await sharp(input).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  return { data, info };
}

/** Convert an image composited over black into RGBA with transparency. */
async function unblendFromBlack(input) {
  const { data, info } = await raw(input);
  const out = Buffer.alloc(info.width * info.height * 4);
  for (let p = 0, q = 0; p < data.length; p += 3, q += 4) {
    const r = data[p], g = data[p + 1], b = data[p + 2];
    let a = Math.max(r, g, b);
    if (a < 10) a = 0; // kill background noise
    out[q + 3] = a;
    if (a > 0) {
      out[q] = Math.min(255, Math.round((r * 255) / a));
      out[q + 1] = Math.min(255, Math.round((g * 255) / a));
      out[q + 2] = Math.min(255, Math.round((b * 255) / a));
    }
  }
  return sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } });
}

/** Key a flat background colour out, keeping a single ink colour with alpha. */
async function keyOut(input, bg, ink) {
  const { data, info } = await raw(input);
  const d = [ink[0] - bg[0], ink[1] - bg[1], ink[2] - bg[2]];
  const len2 = d[0] ** 2 + d[1] ** 2 + d[2] ** 2;
  const out = Buffer.alloc(info.width * info.height * 4);
  for (let p = 0, q = 0; p < data.length; p += 3, q += 4) {
    const t = ((data[p] - bg[0]) * d[0] + (data[p + 1] - bg[1]) * d[1] + (data[p + 2] - bg[2]) * d[2]) / len2;
    const a = Math.max(0, Math.min(1, (t - 0.06) / 0.88));
    out[q] = ink[0];
    out[q + 1] = ink[1];
    out[q + 2] = ink[2];
    out[q + 3] = Math.round(a * 255);
  }
  return sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } });
}

async function save(img, region, width, file, lossless = false) {
  const buf = await img.clone().extract(region).png().toBuffer();
  const resized = sharp(buf).resize({ width });
  if (file.endsWith(".webp")) await resized.webp(lossless ? { lossless: true, effort: 6 } : { quality: 88, alphaQuality: 90, effort: 6 }).toFile(`${OUT}/${file}`);
  else await resized.png({ compressionLevel: 9 }).toFile(`${OUT}/${file}`);
  console.log("wrote", `${OUT}/${file}`);
}

// Regions measured on the 1024x1024 source.
const PD_MARK = { left: 295, top: 200, width: 470, height: 375 };
const PD_LOCKUP = { left: 290, top: 195, width: 480, height: 535 };
// Regions measured on the 1600x1600 source.
const TC_BADGE = { left: 200, top: 200, width: 1200, height: 1200 };
const TC_MARK = { left: 400, top: 395, width: 815, height: 815 };

const pd = await unblendFromBlack(PD_SRC);
await save(pd, PD_MARK, 160, "pd-mark.webp");
await save(pd, PD_MARK, 320, "pd-mark@2x.webp");
await save(pd, PD_LOCKUP, 480, "pd-lockup-480.webp");
await save(pd, PD_LOCKUP, 960, "pd-lockup-960.webp");

const tc = await keyOut(TC_SRC, [33, 59, 50], [147, 109, 50]);
await save(tc, TC_BADGE, 480, "common-badge-480.webp", true);
await save(tc, TC_BADGE, 960, "common-badge-960.webp", true);
await save(tc, TC_MARK, 160, "common-mark.webp", true);

// Favicons: the PD mark on black.
const markOnBlack = await sharp(PD_SRC).extract({ left: 250, top: 150, width: 560, height: 560 }).png().toBuffer();
await sharp(markOnBlack).resize(256, 256).png({ palette: true }).toFile("app/icon.png");
await sharp(markOnBlack).resize(180, 180).png().toFile("app/apple-icon.png");
console.log("wrote app/icon.png, app/apple-icon.png");

// Open Graph images (1200x630).
const lockup = await sharp(PD_SRC).extract(PD_LOCKUP).resize({ height: 500 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: "#000000" } })
  .composite([{ input: lockup, gravity: "center" }])
  .png()
  .toFile("public/og.png");
console.log("wrote public/og.png");

const badge = await sharp(TC_SRC).extract(TC_BADGE).resize({ height: 540 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: { r: 33, g: 59, b: 50 } } })
  .composite([{ input: badge, gravity: "center" }])
  .png()
  .toFile("public/og-the-common.png");
console.log("wrote public/og-the-common.png");
