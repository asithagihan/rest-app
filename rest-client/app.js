const URL = "http://localhost:7000/api/v1/issues";
import createIssue from "./issues/createIssue.js";
import deleteIssue from "./issues/deleteIssue.js";
import readIssue from "./issues/readIssue.js";
import updateIssue from "./issues/updateIssue.js";

if (process.argv.length < 3) {
  console.error("Expected at least 3 arguments!");
  console.info("node app.js -a=create -t=title -d=description");
  console.info("node app.js -a=read -i=1");
  console.info("node app.js -a=update -i=5 -t=title -d=description");
  console.info("node app.js -a=delete -i=1");
  process.exit(1);
}

if (process.argv[2] === "-a=create") {
  const title = process.argv[3].replace("-t=", "");
  const description = process.argv[4].replace("-d=", "");
  createIssue(URL, {
    title,
    description,
  });
} else if (process.argv[2] === "-a=read") {
  const id = parseInt(process.argv[3].replace("-i=", ""));
  console.log(id);
  readIssue(URL, id);
} else if (process.argv[2] === "-a=update") {
  const id = parseInt(process.argv[3].replace("-i=", ""));
  const title = process.argv[4].replace("-t=", "");
  const description = process.argv[5].replace("-d=", "");
  updateIssue(URL, id, {
    title,
    description,
  });
} else if (process.argv[2] === "-a=delete") {
  const id = parseInt(process.argv[3].replace("-i=", ""));
  deleteIssue(URL, id);
} else {
  console.error("Unrecognized Argument");
}
