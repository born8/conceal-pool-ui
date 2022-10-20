import Config from './elements/Config';
import AppContextProvider from './ContextProvider';
import MinerSettings from './elements/MinerSettings';
import MinerStats from './elements/MinerStats';
import NetworkStats from './elements/NetworkStats';
import PoolBlocks from './elements/PoolBlocks';
import PoolStats from './elements/PoolStats';


const App = () => (
  <AppContextProvider>
    <Config />
    <NetworkStats />
    <PoolStats />
    <PoolBlocks />
    <MinerStats />
    <MinerSettings />
  </AppContextProvider>
)

export default App;
