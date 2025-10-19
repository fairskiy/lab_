

function hoistVar() {
  console.log(a);
  var a = 111;
  console.log(a);
}
hoistVar();
