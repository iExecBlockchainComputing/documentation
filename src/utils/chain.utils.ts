import { arbitrum } from 'viem/chains';
import { bellecour } from './bellecourChainConfig';

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
}

export function getSupportedChains(): Chain[] {
  return [
    {
      id: arbitrum.id,
      name: arbitrum.name,
      icon: '/assets/icons/arbitrum.svg',
      nativeCurrency: arbitrum.nativeCurrency,
      rpcUrls: arbitrum.rpcUrls,
      blockExplorers: arbitrum.blockExplorers,
    },
    {
      id: bellecour.id,
      name: bellecour.name,
      icon: '/assets/icons/iexec-logo.png',
      nativeCurrency: bellecour.nativeCurrency,
      rpcUrls: bellecour.rpcUrls,
      blockExplorers: bellecour.blockExplorers,
    },
  ];
}

export function getChainById(chainId: number): Chain | undefined {
  return getSupportedChains().find((chain) => chain.id === chainId);
}
