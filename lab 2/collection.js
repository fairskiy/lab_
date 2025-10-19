

const phonebook = [
  { name: "Alex Alexsov", phone: +380989899898 },
  { name: "Ivan Ivanchenko", phone: +380631233211 },
  { name: "Ivan Petrenko", phone: +3806771177117},
  { name: "Vasyl Ivanenko", phone: +380631234570 },
  { name: "Stepan Stefanchuk", phone: +380631233211 },
];
let findPhoneByName = (name) => {
  for (const object of phonebook) {
    if (object.name === name) {
      return object.phone;
    }
  }
  return "Контакт не знайдено";
};
phonebook.forEach((contact) => console.log(`${contact.phone}`));
console.log(findPhoneByName("Oleg Ivanchenko")); //шукаємо неіснуючий контакт, щоб побачити повідомлення "Контакт не знайдено"


