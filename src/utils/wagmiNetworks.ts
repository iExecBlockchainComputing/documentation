import {
  AppKitNetwork,
  arbitrum,
  arbitrumSepolia,
} from '@reown/appkit/networks';

const wagmiNetworks = {
  arbitrum,
  arbitrumSepolia,
} satisfies Record<string, AppKitNetwork>;

export default wagmiNetworks;
