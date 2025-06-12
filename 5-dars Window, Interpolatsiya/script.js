// foydalanuvchi bilan muloqot turlari

// Foydalanuvchiga oddiy xabarni ko‘rsatadi. Foydalanuvchi faqat OK tugmasini bosishi mumkin.

alert('hello')

// Foydalanuvchidan tasdiqlash yoki rad etishni so‘raydi.
// Foydalanuvchi OK yoki Cancel tugmasidan birini tanlaydi.
// Qaytadigan qiymat:
// true — agar foydalanuvchi OK tugmasini bossa
// false — agar Cancel tugmasini bossa.

const isAccess = confirm('sen 18 yoshga tulganmisan')
console.log(isAccess)

// Foydalanuvchidan matn kiritishni so‘raydi.
// Foydalanuvchi qiymat kiritadi va OK yoki Cancel tugmasini bosadi.
// Qaytadigan qiymat:
// Kiritilgan matn (string) — agar foydalanuvchi OK tugmasini bossa.
// null — agar foydalanuvchi Cancel tugmasini bossa.

const name = prompt('what is your name?')
console.log(name)

// agar oldiga + quyilsa number qaytaradi
const age = +prompt('yoshing nechida', '')
console.log(age)

//##############################################################

//Interpolatsiya

const firstName = 'Xudoyberdi'
const lastName = 'Norboyev'
const age1 = 25

console.log(`my full name is ${firstName} ${lastName}, I'm ${age1} years old`)
