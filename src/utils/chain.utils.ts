import { arbitrum } from 'viem/chains';
import { bellecour } from './wagmiNetworks';
import arbitrumLogo from '@/assets/icons/arbitrum.svg';
import iexecLogo from '@/assets/icons/iexec-logo.png';

export interface Chain {
  id: number;
  name: string;
  icon: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: {
    default: {
      http: readonly string[];
    };
  };
  blockExplorers: {
    default: {
      name: string;
      url: string;
    };
  };
  chainName: string;
  iexecExplorerUrl: string;
  workerpoolAddress: string;
  ipfsGateway: string;
}

export function getSupportedChains(): Chain[] {
  return [
    {
      id: arbitrum.id,
      name: arbitrum.name,
      icon: arbitrumLogo,
      nativeCurrency: arbitrum.nativeCurrency,
      rpcUrls: arbitrum.rpcUrls,
      blockExplorers: arbitrum.blockExplorers,
      chainName: 'arbitrum-mainnet',
      iexecExplorerUrl: 'https://explorer.iex.ec/arbitrum-mainnet',
      workerpoolAddress: '0x2C06263943180Cc024dAFfeEe15612DB6e5fD248',
      ipfsGateway: 'https://ipfs-gateway.arbitrum-mainnet.iex.ec',
    },
    {
      id: Number(bellecour.id),
      name: bellecour.name,
      icon: iexecLogo,
      nativeCurrency: bellecour.nativeCurrency,
      rpcUrls: bellecour.rpcUrls,
      blockExplorers: {
        default: {
          name: bellecour.blockExplorers?.default?.name || 'Blockscout',
          url:
            bellecour.blockExplorers?.default?.url ||
            'https://blockscout-bellecour.iex.ec',
        },
      },
      chainName: 'bellecour',
      iexecExplorerUrl: 'https://explorer.iex.ec/bellecour',
      workerpoolAddress: 'prod-v8-bellecour.main.pools.iexec.eth',
      ipfsGateway: 'https://ipfs-gateway.v8-bellecour.iex.ec',
    },
  ];
}

export function getChainById(chainId: number): Chain | undefined {
  return getSupportedChains().find((chain) => chain.id === chainId);
}
