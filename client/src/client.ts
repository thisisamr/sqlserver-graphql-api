import fetch from "node-fetch";
const url = "http://localhost:4000/graphql";

const options = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: '{"query":"{getRequests{\n\tId\n}}"}',
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
