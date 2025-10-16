import { arbitrum, arbitrumSepolia } from 'viem/chains';
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
      workerpoolAddress: '0x2C06263943180Cc024dAFfeEe15612DB6e5fD248',
      ipfsGateway: 'https://ipfs-gateway.arbitrum-mainnet.iex.ec',
      web3MailAddress: '0x9E37767A18B7E7ac2bbeba0900e3B5b0613FA385',
      web3MailAppWhitelist: '0xD5054a18565c4a9E5c1aa3cEB53258bd59d4c78C',
      web3TelegramAddress: '0xD8614ad70A73A426A15F6474EB4aE633e0015805',
      web3TelegramAppWhitelist: '0x53AFc09a647e7D5Fa9BDC784Eb3623385C45eF89',
    },
    {
      id: arbitrumSepolia.id,
      name: arbitrumSepolia.name,
      icon: arbitrumLogo,
      nativeCurrency: arbitrumSepolia.nativeCurrency,
      rpcUrls: arbitrumSepolia.rpcUrls,
      blockExplorers: arbitrumSepolia.blockExplorers,
      chainName: 'arbitrum-sepolia',
      iexecExplorerUrl: 'https://explorer.iex.ec/arbitrum-sepolia-testnet',
      workerpoolAddress: '0xB967057a21dc6A66A29721d96b8Aa7454B7c383F',
      ipfsGateway: 'https://ipfs-gateway.arbitrum-sepolia-testnet.iex.ec',
      web3MailAddress: '0x54f48937d1a26dd250dc8adbef07bc76f6e27df3',
      web3MailAppWhitelist: '0x8d46d40840f1Aa2264F96184Ffadf04e5D573B9B',
      web3TelegramAddress: '0x54cb7f6d417b2b29c2a4b2e95a66f670812c869d',
      web3TelegramAppWhitelist: '0x7291ff96100DA6CF97933C225B86124ef95aEc9b',
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
      web3MailAddress: 'web3mail.apps.iexec.eth',
      web3MailAppWhitelist: '0x781482C39CcE25546583EaC4957Fb7Bf04C277D2',
      web3TelegramAddress: 'web3telegram.apps.iexec.eth',
      web3TelegramAppWhitelist: '0x192C6f5AccE52c81Fcc2670f10611a3665AAA98F',
    },
  ];
}

export function getChainById(chainId: number): Chain | undefined {
  return getSupportedChains().find((chain) => chain.id === chainId);
}
