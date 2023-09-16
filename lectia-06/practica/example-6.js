/*

## Example 6 - Operation rest

Write a `transformUsername(user)` function to return a new object
with `fullName` property instead of `firstName` and `lastName`.
*/
function transformUsername(arg) {
  const { firstName, lastName, ...restulProprietatilor } = arg;

  console.log(firstName);
  console.log(lastName);
  console.log(restulProprietatilor);
  const fullName = `${firstName} ${lastName}`;
  console.log(fullName);

  const result = {
    fullName,
    ...restulProprietatilor,
  };

  return result;
}

const obiectTrimisFunctiei = {
  id: 1,
  firstName: "Andrei",
  lastName: "Ionescu",
  email: "j.mercer@mail.com",
  friendCount: 40,
};

const obiectRezultat = {
  id: 1,
  fullName: "Jacob Mercer",
  email: "j.mercer@mail.com",
  friendCount: 40,
};

console.log(transformUsername(obiectTrimisFunctiei));

/*
function Comment(props) {
  const { author, text, date } = props;
  const {avatarUrl, name: authorName} = author;

  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar" src={avatarUrl} alt={authorName} />
        <div className="UserInfo-name">{authorName}</div>
      </div>
      <div className="Comment-text">{text}</div>
      <div className="Comment-date">{formatDate(date)}</div>
    </div>
  );
}
*/
