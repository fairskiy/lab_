

const fn = () => {
  const object1 = { name: "Denis" };
  let object2 = { name: "Ivan" };

  object1.name = "Misha";
  object2.name = "Kostya";

  object2.name = { name: "Vlad" };
  console.dir({ object1, object2 });
};
fn();


function createUser(name, city) {
  return { name, city };
}

console.log(createUser("Denis", "Vyshgorod"));