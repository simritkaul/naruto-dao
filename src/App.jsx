import { useAddress, useMetamask } from '@thirdweb-dev/react';

const App = () => {

  // We'll use the hooks thirdweb gave us
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("Ohio Address: ", address);

  // If the wallet isn't connected
  if (!address) {
    return (
      <div className="landing bg-tint">
        <h1>Welcome to NarutoDAO</h1>
        <button onClick={connectWithMetamask} className= "btn-hero">Connect Wallet</button>
      </div>
    )
  }

  // If we have the user's address 

  return (
    <div className="landing bg-tint">
      <h1>You're connected Dattebayo!</h1>
    </div>
  );
};

export default App;
