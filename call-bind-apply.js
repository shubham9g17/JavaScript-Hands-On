var employee1 = { firstName: "John", lastName: "Rodson" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.call(employee1, "Hello", "How Are You?");
invite.apply(employee1, ["Hello", "How Are You?"]);
invite.bind(employee1)("Hello", "How Are You?");
