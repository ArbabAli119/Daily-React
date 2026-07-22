import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(30);

  useEffect(() => {
    async function GithubProfile() {
      const response = await fetch(
        `https://api.github.com/users?per_page=${count}`,
      );
      const data = await response.json();
      setUsers(data);
      console.log("Hello");
    }

    GithubProfile();
  }, [count]);

  return (
    <>
      <h1>GithubProfile</h1>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {users.map((users) => (
          <img
            src={users.avatar_url}
            height={"100px"}
            width={"100px"}
            key={users.login}
          />
        ))}
      </div>
    </>
  );
}

export default App;
