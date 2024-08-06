const knex = require("knex")(require("./config/knex"));
const axios = require("./config/axios");

// Function that handles the start of the process
async function startProcess() {
  console.log("Starting the process...");
}

// Function that handles the end of the process
async function endProcess() {
  console.log("Process finished.");
  process.exit(0);
}

// Function that handles fetching a list from the database
async function handleFetchList() {
  return await knex.raw(`select 1`);
}

// Function that handles processing each item (simulating an external request)
async function handleProcessItem(item) {
  // Simulating an external API request
  const response = await axios.get(`/todos/${item.id}`);

  if (response.status !== 200) {
    throw new Error(`Failed to process: ${item.idBoleto}`);
  }
}

// Function that handles generating a success message
function onSuccessMessage(item) {
  return `Success: ${item.name} processed successfully.`;
}

// Function that handles generating an error message
function onErrorMessage(item, error) {
  return `Error: ${item.idBoleto} failed to process. Reason: ${error.message}`;
}

module.exports = {
  startProcess,
  endProcess,
  handleFetchList,
  handleProcessItem,
  onSuccessMessage,
  onErrorMessage,
};
