async function fetchUsers() {
  const req = await fetch("https://randomuser.me/api/?results=3");
  const res = await req.json();

  return res.results;
}

export default async function page() {
  const users = await fetchUsers();

  return (
    <div className="m-8">
      <h1 className="text-5xl">Random Users</h1>
      <ul>
        {users.map((randomUser) => (
          <li className="mt-5 mb-5" key={randomUser.name.first}>
            <h4 className="font-bold">
              {randomUser.name.first} {randomUser.name.last}
            </h4>
            <img src={randomUser.picture.thumbnail} alt="" />
            <h6>{randomUser.email}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
}
