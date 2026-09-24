# ✈️ Airline photos — วิธีใส่รูปเครื่องบิน

เกมทายสายการบินจะหารูปในโฟลเดอร์นี้ **อัตโนมัติ** ตามรหัส IATA ของสายการบิน (ตัวพิมพ์เล็ก)

```
airlines/
  tg.jpg      ← Thai Airways   (รูปเครื่องบินเต็มลำ)
  fd.jpg      ← AirAsia
  dd.jpg      ← Nok Air
  ...
```

- ถ้า **ไม่มีรูป** → เกมจะวาดเครื่องบินจำลอง (สีหางตามสายการบิน) ให้แทน เล่นได้เลยแต่ไม่สวยเท่ารูปจริง
- รองรับ `.jpg` และ `.png`
- ขนาดแนะนำ: กว้าง 1200–1600 px, สัดส่วน 3:2 (แนวนอน)

## 📷 รูปแบบไหนดีที่สุด
- ถ่าย/เลือกรูป **ด้านข้างเครื่องบิน หัวชี้ซ้าย หางอยู่ขวา** (มุมมาตรฐานของ planespotter)
- หางอยู่ประมาณ **ขวาบน** ของรูป → ค่า zoom เริ่มต้นจะจับหางพอดี
- ตอนถาม เกมจะ **ซูมเข้าไปที่หาง** (เห็นแค่โลโก้/สี) → ตอบถูกแล้วค่อย **ซูมออกเห็นทั้งลำ**

## 🎯 ถ้าหางไม่อยู่ตรงกลางจอตอนซูม
แก้ที่ `index.html` ใน `AIRLINES` เพิ่ม `tail` ให้สายการบินนั้น:

```js
{ code: "tg", name: "Thai Airways", ..., tail: { x: 85, y: 30, z: 3 } },
//   x = ตำแหน่งแนวนอนของหาง (0 = ซ้ายสุด, 100 = ขวาสุด)
//   y = ตำแหน่งแนวตั้ง   (0 = บนสุด,  100 = ล่างสุด)
//   z = ระดับซูม (2.5–3.5 กำลังดี)
```
ถ้ารูปเครื่องบินหัวชี้ **ขวา** (หางอยู่ซ้าย) ใส่ `tail: { x: 15, y: 30, z: 3 }`

ถ้าอยากซูมที่จุดอื่น (เช่น จมูก Nok Air) ใส่ `zoomLabel: "LOOK AT THE NOSE"` เพิ่มได้

## 🌐 หารูปฟรีได้ที่ไหน
- **Wikimedia Commons** (commons.wikimedia.org) — ค้น "Thai Airways Boeing 777" เลือกรูปที่เป็น CC-BY / CC-BY-SA / Public domain
- รูปที่ถ่ายเองที่สนามบิน 📸

## รหัสสายการบินทั้ง 30
tg Thai Airways · fd AirAsia · dd Nok Air · pg Bangkok Airways · sl Thai Lion Air · vz Thai Vietjet ·
sq Singapore Airlines · cx Cathay Pacific · jl Japan Airlines · nh ANA · ke Korean Air · br EVA Air ·
ci China Airlines · mh Malaysia Airlines · ga Garuda Indonesia · vn Vietnam Airlines · pr Philippine Airlines ·
tr Scoot · jq Jetstar · ai Air India · ek Emirates · qr Qatar Airways · ey Etihad · tk Turkish Airlines ·
lh Lufthansa · ba British Airways · af Air France · kl KLM · lx Swiss · qf Qantas
