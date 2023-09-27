async function deleteIssue(url, id) {
  const response = await fetch(`${url}/${id}`, { method: "DELETE" });
  if (response.status == 204) {
    console.log("delete : success");
  } else {
    console.log("delete : failed");
  }
}

export default deleteIssue;
