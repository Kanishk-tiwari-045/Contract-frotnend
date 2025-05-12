import { useEffect, useState } from "react";
import compileAndDeploy from "../compileAndDeploy";

export default function Home() {
  const [deployed, setDeployed] = useState(false);

  useEffect(() => {
    if (deployed) {
      compileAndDeploy();
    }
  }, [deployed]);

  return (
    <div>
      <button onClick={() => setDeployed(true)}>Compile and Deploy Contract</button>
    </div>
  );
}
