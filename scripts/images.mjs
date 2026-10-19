// Builds the web images in public/ from the originals in Resources/. Run: pnpm images
import { mkdirSync } from 'node:fs';
import sharp from 'sharp';

const R = 'Resources';
const P = 'public/images';
mkdirSync(`${P}/team`, { recursive: true });
mkdirSync(`${P}/screens`, { recursive: true });
mkdirSync('src/app', { recursive: true });

// Logo: trim the transparent margin, then the sizes the site and browsers need.
const logo = sharp(`${R}/logo-scholarmetrix.png`).trim();
const logoBuf = await logo.png().toBuffer();
await sharp(logoBuf).resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png({ palette: true, quality: 90 }).toFile(`${P}/logo.png`);
await sharp(logoBuf).resize(96, 96, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png({ palette: true }).toFile('src/app/icon.png');
// Apple touch icon: iOS fills transparency with black, so give it a white tile with padding.
await sharp({ create: { width: 180, height: 180, channels: 4, background: '#ffffff' } })
  .composite([{ input: await sharp(logoBuf).resize(132, 132, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer(), gravity: 'center' }])
  .png()
  .toFile('src/app/apple-icon.png');
for (const size of [192, 512]) {
  await sharp({ create: { width: size, height: size, channels: 4, background: '#ffffff' } })
    .composite([{ input: await sharp(logoBuf).resize(Math.round(size * 0.72), Math.round(size * 0.72), { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer(), gravity: 'center' }])
    .png()
    .toFile(`public/icon-${size}.png`);
}

// Founders: 4:5 portraits. The CEO original is stored sideways.
await sharp(`${R}/MD Omar Faruk(CEO).jpeg`)
  .rotate(90)
  .resize(800, 1000, { fit: 'cover', position: 'north' })
  .webp({ quality: 82 })
  .toFile(`${P}/team/md-omar-faruk.webp`);
await sharp(`${R}/CO-Founder (Khalid Hossen).jpg`)
  .resize(800, 1000, { fit: 'cover', position: 'centre' })
  .webp({ quality: 82 })
  .toFile(`${P}/team/khalid-hossen.webp`);

// Product screenshots (captured from the running e-Exam app).
const screens = ['student-dashboard', 'teacher-dashboard', 'student-lessons', 'teacher-questions', 'exam-login'];
for (const s of screens) {
  await sharp(`${R}/screens/${s}.png`).resize(1600).webp({ quality: 80 }).toFile(`${P}/screens/${s}.webp`);
}
await sharp(`${R}/screens/student-mobile.png`).resize(560).webp({ quality: 82 }).toFile(`${P}/screens/student-mobile.webp`);

for (const f of ['team/md-omar-faruk', 'team/khalid-hossen', ...screens.map((s) => `screens/${s}`), 'screens/student-mobile']) {
  const m = await sharp(`${P}/${f}.webp`).metadata();
  console.log(f, `${m.width}x${m.height}`);
}
