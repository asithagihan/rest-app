async function updateIssue(url, id, data = {}) {
  const response = await fetch(`${url}/${id}`, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  const result = await response.json();
  console.log(result);
}

export default updateIssue;
