async function readIssue(url, id) {
  const response = await fetch(`${url}/${id}`);
  const result = await response.json();
  console.log(result);
}

export default readIssue;
