import { BookOpen, BarChart3, KeyRound, Package, Youtube, MessageCircle, Box, LucideIcon } from 'lucide-react';

export interface CallToAction {
  title: string;
  url: string;
  icon: LucideIcon;
  type: 'repo' | 'community' | 'client';
  description?: string;
}

export const callToActionsData: CallToAction[] = [
  {
    title: 'leanSpec',
    url: 'https://github.com/leanEthereum/leanSpec',
    icon: BookOpen,
    type: 'repo',
    description: 'Specifications for the Lean Consensus work',
  },
  {
    title: 'leanMetrics',
    url: 'https://github.com/leanEthereum/leanMetrics',
    icon: BarChart3,
    type: 'repo',
    description: 'Specifications for Lean Consensus metrics',
  },
  {
    title: 'leanSig',
    url: 'https://github.com/leanEthereum/leanSig',
    icon: KeyRound,
    type: 'repo',
    description: 'Repository for the hash-based signature scheme',
  },
  {
    title: 'leanMultisig',
    url: 'https://github.com/leanEthereum/leanMultisig',
    icon: Package,
    type: 'repo',
    description: 'Repository for the signature aggregation scheme',
  },
  {
    title: 'PQ Interop Breakout Meetings',
    url: 'https://www.youtube.com/playlist?list=PLJqWcTqh_zKF_Q9HNXBLW_AtktsjToTIu',
    icon: Youtube,
    type: 'community',
    description: 'Re-watch the weekly breakout discussions',
  },
  {
    title: 'Eth R&D Discord',
    url: 'https://discord.gg/ZJWqHacjGK',
    icon: MessageCircle,
    type: 'community',
    description: 'Join the #post-quantum channel',
  },
  {
    title: 'Ream',
    url: 'https://github.com/ReamLabs/ream',
    icon: Box,
    type: 'client',
    description: 'Rust client by ReamLabs',
  },
  {
    title: 'Zeam',
    url: 'https://github.com/blockblaz/zeam',
    icon: Box,
    type: 'client',
    description: 'Zig client by Blockblaz',
  },
  {
    title: 'Qlean-mini',
    url: 'https://github.com/qdrvm/qlean-mini',
    icon: Box,
    type: 'client',
    description: 'C++ client by QDRVM',
  },
  {
    title: 'Lantern',
    url: 'https://github.com/Pier-Two/lantern',
    icon: Box,
    type: 'client',
    description: 'Nim client by Pier Two',
  },
  {
    title: 'Lighthouse',
    url: 'https://github.com/hopinheimer/lighthouse',
    icon: Box,
    type: 'client',
    description: 'Rust client fork by Hopinheimer',
  },
];
