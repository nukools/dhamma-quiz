# ✈️ Airline photos

เกมทายสายการบิน **มีรูปถ่ายเครื่องบินจริงครบทั้ง 50 สายการบินแล้ว** (จาก Wikimedia Commons, ใช้ได้ตาม CC-BY / CC-BY-SA / Public domain —
เครดิตช่างภาพแสดงอยู่ใต้ปุ่ม "📷 Airplane photo credits" บนหน้าแรก) โหลดตรงจาก Wikimedia เหมือนที่เกมธงโหลดจาก flagcdn

ตำแหน่งซูมหางของทุกรูป (`tail: {x, y, z}` ใน `AIRLINES`) ผ่านการตรวจสายตาทีละรูปแล้ว

## อยากใช้รูปของตัวเองแทน?
วางไฟล์ `airlines/<รหัส>.jpg` (เช่น `airlines/tg.jpg`) — เกมจะใช้รูปนี้ก่อนรูปจาก Wikimedia โดยอัตโนมัติ
แล้วปรับ `tail` ของสายการบินนั้นใน `index.html`:

```js
tail: { x: 80, y: 40, z: 2.6 }
//  x, y = ตำแหน่งกลางหางในรูป (0–100 %)  z = ระดับซูม (2.2–2.8)
//  เกมจะเลื่อนให้จุด (x, y) มาอยู่กลางจอตอนถาม แล้วซูมออกเห็นทั้งลำเมื่อตอบถูก
```
ถ้าอยากซูมจุดอื่น เช่น จมูก Nok Air ใส่ `zoomLabel: "LOOK AT THE NOSE 🐦"` ได้

## รหัสสายการบิน
tg Thai Airways · fd AirAsia · dd Nok Air · pg Bangkok Airways · sl Thai Lion Air · vz Thai Vietjet ·
sq Singapore Airlines · cx Cathay Pacific · jl Japan Airlines · tn Air Tahiti Nui · ke Korean Air · br EVA Air ·
ci China Airlines · mh Malaysia Airlines · ga Garuda Indonesia · vn Vietnam Airlines · pr Philippine Airlines ·
ai Air India · ek Emirates · qr Qatar Airways · ey Etihad · tk Turkish Airlines ·
lh Lufthansa · ba British Airways · af Air France · kl KLM · lx Swiss · qf Qantas ·
kb Druk Air · qv Lao Airlines · ac Air Canada · ms EgyptAir · ay Finnair · ib Iberia · az ITA Airways · sv Saudia · dl Delta Air Lines · aa American Airlines · 3u Sichuan Airlines · ws WestJet · as Alaska Airlines · ha Hawaiian Airlines · f9 Frontier Airlines · wn Southwest Airlines · fj Fiji Airways · ul SriLankan Airlines · gf Gulf Air · lo LOT Polish Airlines · su Aeroflot · nz Air New Zealand

## ซ่อนข้อความเล็กบนลำตัวเครื่อง (`hide`)

ถ้าภาพมีทะเบียนเครื่องหรือชื่อสายการบินตัวเล็ก ๆ โผล่ในกรอบตอนยังไม่เฉลย ใส่ `hide` ให้สายการบินนั้น
เป็นรายการสี่เหลี่ยม (หน่วย % ของภาพ) ที่จะถูกเบลอไว้จนกว่าจะเฉลย เช่น

```js
hide: [{ x: 25.5, y: 55.5, w: 6, h: 5 }]
```

- `x, y` = มุมซ้ายบนของกรอบ, `w, h` = กว้าง/สูง (เป็น % ของภาพ)
- พอเฉลย กรอบเบลอจะจางหายเอง
