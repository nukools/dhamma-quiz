# ✈️ Airline photos

เกมทายสายการบิน **มีรูปถ่ายเครื่องบินจริงครบทั้ง 40 สายการบินแล้ว** (จาก Wikimedia Commons, ใช้ได้ตาม CC-BY / CC-BY-SA / Public domain —
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
sq Singapore Airlines · cx Cathay Pacific · jl Japan Airlines · nh ANA · ke Korean Air · br EVA Air ·
ci China Airlines · mh Malaysia Airlines · ga Garuda Indonesia · vn Vietnam Airlines · pr Philippine Airlines ·
ai Air India · ek Emirates · qr Qatar Airways · ey Etihad · tk Turkish Airlines ·
lh Lufthansa · ba British Airways · af Air France · kl KLM · lx Swiss · qf Qantas ·
ca Air China · kb Druk Air · qv Lao Airlines · ac Air Canada · ms EgyptAir · ay Finnair · ib Iberia · az ITA Airways · sv Saudia · ar Aerolíneas Argentinas · su Aeroflot · nz Air New Zealand
