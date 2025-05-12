import express from "express";
import cors from "cors";
import compilefile from "./compile.js";
import deployfile from "./deploy.js";
import fs from "fs";
const app = express();

app.use(cors());
app.use(express.json());

// Function to extract contract name from Solidity code
function extractContractName(code) {
  const contractNameMatch = code.match(/contract\s+(\w+)\s*\{/);
  if (contractNameMatch && contractNameMatch.length > 1) {
    return contractNameMatch[1];
  }
  return null;
}

app.post("/", async (req, res) => {
  try {
    const { code } = req.body; // Extract Solidity code from request body
    if (!code) {
      return res.status(400).json({ message: "Solidity code is required" });
    }

    // Extract contract name from the Solidity code
    const contractName = extractContractName(code);
    if (!contractName) {
      return res
        .status(400)
        .json({ message: "Failed to extract contract name" });
    }
    const fileNameWithoutExtension = contractName.split(".")[0];

    // Dynamically generate the Solidity file
    const solidityFileName = `${contractName}.sol`;
    console.log("app.js: ", solidityFileName);
    fs.writeFileSync(solidityFileName, code);

    // Pass the Solidity code for compilation and deployment
    await compilefile(fileNameWithoutExtension);
    const deployedContract = await deployfile(); // Deploy the contract and get its address
    console.log("app.js: ", deployedContract);
    // Remove the Solidity file after compilation and deployment
    fs.unlink(solidityFileName, (err) => {
      if (err) {
        console.error(err);
      }
    });
    res
      .status(200)
      .json({ message: "Contract deployed successfully!", deployedContract: deployedContract});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to deploy the contract" });
  }
});

app.listen(5000, () => {
  console.log("server started");
});
