import fs from "fs/promises";
import solc from "solc";

async function compilefile(contractName) {
  // Load the contract source code
  const sourceCode = await fs.readFile(`${contractName}.sol`, "utf8"); // Compile the source code and retrieve the ABI and Bytecode
  console.log("contractName:", contractName);
  const fileNameWithoutExtension = contractName.split(".")[0];
  console.log("fileNameWithoutExtension: ", fileNameWithoutExtension);
  const { abi, bytecode } = compile(sourceCode, contractName); // Store the ABI and Bytecode into a JSON file
  const artifact = JSON.stringify({ abi, bytecode }, null, 2);
  await fs.writeFile("Demo.json", artifact);
}

function compile(sourceCode, contractName) {
  // Create the Solidity Compiler Standard Input and Output JSON
  const input = {
    language: "Solidity",
    sources: { main: { content: sourceCode } },
    settings: { outputSelection: { "*": { "*": ["abi", "evm.bytecode"] } } },
  };
  // Parse the compiler output to retrieve the ABI and Bytecode
  const output = solc.compile(JSON.stringify(input));
  const artifact = JSON.parse(output).contracts.main[contractName];
  return {
    abi: artifact.abi,
    bytecode: artifact.evm.bytecode.object,
  };
}

// compilefile();
export default compilefile;
