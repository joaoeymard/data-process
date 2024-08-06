const fs = require("fs");
const util = require("util");
const path = require("path");

const handlers = require("./handlers");

// Check if the directory exists, if not, create it
const reportsDir = "./reports";
if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir);

// Main function that executes the flow
async function main() {
  // Start the process
  await handlers.startProcess();

  const list = await handlers.handleFetchList();
  const report = [];

  for (const item of list) {
    try {
      await handlers.handleProcessItem(item);
      const message = handlers.onSuccessMessage(item);

      report.push({ item, status: "success", message });
      console.log(message);
    } catch (error) {
      const message = handlers.onErrorMessage(item, error);

      report.push({ item, status: "error", message });
      console.error(message);
    }
  }

  // Define the file path
  const filename = path.join(reportsDir, `report-${new Date().getTime()}.json`);

  // Saving the report to a file
  const writeFile = util.promisify(fs.writeFile);
  try {
    await writeFile(filename, JSON.stringify(report, null, 2));
    console.log("Report successfully saved");
  } catch (err) {
    console.error("Error saving the report:", err);
  }

  // End the process
  await handlers.endProcess();
}

main();
