import { arbitrum, arbitrumSepolia } from 'viem/chains';
import arbitrumLogo from '@/assets/icons/arbitrum.svg';

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
  web3MailAddress: string;
  web3MailAppWhitelist: string;
  web3TelegramAddress: string;
  web3TelegramAppWhitelist: string;
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
      workerpoolAddress: '0x8ef2ec3ef9535d4b4349bfec7d8b31a580e60244',
      ipfsGateway: 'https://ipfs-gateway.arbitrum-mainnet.iex.ec',
      web3MailAddress: '0xe7945ddc8241A877c6e59F50a61e91eBb57AfD84',
      web3MailAppWhitelist: '0xfa9cceff9431ee0e2a3fe58911073f1357f24e31',
      web3TelegramAddress: '0xa201D2C9F3464c55639589d25FA6A3ec49C9f238',
      web3TelegramAppWhitelist: '0xa7101cf61d4602d55a715be4f2b9e1bc71d22301',
    },
    {
      id: arbitrumSepolia.id,
      name: arbitrumSepolia.name,
      icon: arbitrumLogo,
      nativeCurrency: arbitrumSepolia.nativeCurrency,
      rpcUrls: arbitrumSepolia.rpcUrls,
      blockExplorers: arbitrumSepolia.blockExplorers,
      chainName: 'arbitrum-sepolia-testnet',
      iexecExplorerUrl: 'https://explorer.iex.ec/arbitrum-sepolia-testnet',
      workerpoolAddress: '0x2956f0cb779904795a5f30d3b3ea88b714c3123f',
      ipfsGateway: 'https://ipfs-gateway.arbitrum-sepolia-testnet.iex.ec',
      web3MailAddress: '0x97792094EDf25a3AA607ed198aa22c32D7B33b62',
      web3MailAppWhitelist: '0x09d59e1b696d0cb69f46bf762412636e8652ab58',
      web3TelegramAddress: '0x3476685f4166d4a639c85feca00e2897afd807c6',
      web3TelegramAppWhitelist: '0x7f67e78a4b0a98c50333b8b72851952c396601a1',
    },
  ];
}

export function getChainById(chainId: number): Chain | undefined {
  return getSupportedChains().find((chain) => chain.id === chainId);
}
