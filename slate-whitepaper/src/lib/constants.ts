export const SLATE_CONTENT = {
  modals: {
    settlement: {
      title: "Settlement Core Details",
      content: [
        {
          title: "Consensus Protocol",
          description: "Utilizes a Proof-of-Stake (PoS) mechanism derived from Ethereum's Gasper for finality and fork-choice."
        },
        {
          title: "Cryptoeconomic Security",
          description: "Security derived from the total value of $SLT staked. Slashing penalties are calibrated to be orders of magnitude greater than any potential profit from an attack."
        },
        {
          title: "Monetary Policy",
          description: "A Bitcoin-inspired policy with a capped supply and a minimal, fixed emission schedule ensures long-term sustainability."
        }
      ]
    },
    execution: {
      title: "Execution Engine Details",
      content: [
        {
          title: "Execution Model",
          description: "Employs a State-Optimized Parallel Execution (SOPE) engine. Transactions pre-declare state access, allowing non-overlapping transactions to execute in parallel."
        },
        {
          title: "Multi-VM Environment",
          description: "Natively supports both EVM for seamless migration of Ethereum's ecosystem and WASM for high-performance applications."
        },
        {
          title: "Fee Market",
          description: "An EIP-1559-style mechanism creates a predictable fee market and introduces a fee burn, linking network usage to token value."
        }
      ]
    },
    data: {
      title: "Data Fabric Details",
      content: [
        {
          title: "Data Availability (DA)",
          description: "Utilizes a framework with Data Availability Sampling (DAS) to scale data capacity without increasing node hardware requirements."
        },
        {
          title: "Native Oracle Network",
          description: "A Slasher-Verified Oracle Network requires nodes to stake $SLT to report external data, tying the integrity of off-chain info to L1 security."
        }
      ]
    }
  },
  comparison: {
    monolithic: {
      title: "vs. Monolithic L1s (e.g., Solana, Aptos)",
      text: "Monolithic chains will ultimately face scaling ceilings as all nodes must perform all functions. Slate's modular design allows each specialized layer to scale independently, providing a superior path to long-term scalability while preserving a unified, composable state.",
      data: {
        labels: ['Scalability Path', 'Security', 'Censorship Resistance', 'Composability'],
        slate: [9, 9, 9, 10],
        competitor: [6, 8, 6, 7]
      }
    },
    l2s: {
      title: "vs. L2 Ecosystems (e.g., Arbitrum, Optimism)",
      text: "L2s inherit the latency of their base L1, and true atomic composability between different rollups is a significant unresolved challenge. Slate's architecture provides this native atomic guarantee, a capability that remains elusive in the fragmented L2 landscape.",
      data: {
        labels: ['Scalability Path', 'Security', 'Censorship Resistance', 'Composability'],
        slate: [9, 9, 9, 10],
        competitor: [8, 7, 5, 6]
      }
    },
    hubs: {
      title: "vs. Interoperability Hubs (e.g., Cosmos, Polkadot)",
      text: "Hubs are 'networks of chains,' each with its own state machine, requiring complex cross-chain bridging. Slate is a 'blockchain of specialized layers' with a single, unified state machine and shared security, powered by a decentralized sequencer set that provides a more robust security model.",
      data: {
        labels: ['Scalability Path', 'Security', 'Censorship Resistance', 'Composability'],
        slate: [9, 9, 9, 10],
        competitor: [7, 6, 8, 5]
      }
    }
  },
  roadmap: [
    {
      phase: "Phase 1: Bedrock Genesis",
      description: "Launch of the PoS Settlement Core, enabling secure staking of $SLT and establishing the foundation of the network's security.",
      status: "in-progress" as const
    },
    {
      phase: "Phase 2: Ignition",
      description: "Deployment of the Multi-VM Execution Engine on the incentivized testnet, allowing developers to begin building and testing applications.",
      status: "upcoming" as const
    },
    {
      phase: "Phase 3: Unification",
      description: "Integration of the Data Fabric and the Slate Bus on testnet, with a focus on testing the decentralized sequencer set.",
      status: "upcoming" as const
    },
    {
      phase: "Phase 4: Singularity",
      description: "Full mainnet launch with all features enabled, including Native Account Abstraction and ZK-Bridges for interoperability.",
      status: "upcoming" as const
    }
  ]
}

export const CODE_EXAMPLE = `// Example: Atomic cross-layer transaction
// A single transaction that reads an oracle price,
// checks a balance, and executes a swap.
fn atomic_swap(asset: Asset, amount: u64) {
    // 1. Read price from Data Fabric Oracle
    let price = Oracle.get_price(asset);
    
    // 2. Check balance on Execution Engine
    let balance = LendingPool.get_balance(self.user);
    assert!(balance >= amount * price);
    
    // 3. Execute swap on Execution Engine
    DEX.swap(asset, amount, self.user);
}`

export const SITE_CONFIG = {
  name: "Slate Protocol",
  description: "The Go-To L1 for Decentralized Applications",
  version: "v2.0",
  tagline: "The Go-To L1 is Modular.",
  subtitle: "Slate is a unified modular blockchain with a decentralized core and a robust economic flywheel, engineered to be the foundational layer for the next generation of Web3."
}

export const NAVIGATION_ITEMS = [
  { href: "#advantage", label: "Advantage" },
  { href: "#architecture", label: "Architecture" },
  { href: "#devex", label: "Developers" },
  { href: "#comparison", label: "Comparison" },
  { href: "#tokenomics", label: "Tokenomics" },
  { href: "#security", label: "Security" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#whitepaper", label: "Whitepaper" }
]

export const ADVANTAGES = [
  {
    title: "Decentralized Sequencing",
    description: "A rotating validator committee sequences transactions, providing protocol-level censorship resistance and eliminating central points of failure.",
    icon: "🔄"
  },
  {
    title: "True Atomic Composability", 
    description: "Our asynchronous backend delivers a synchronous developer experience. Build complex dApps across layers in a single, atomic transaction.",
    tooltip: "Layers process transactions at their own speed, with cryptographic proofs ensuring final atomicity.",
    icon: "⚛️"
  },
  {
    title: "Multi-Layered Economic Flywheel",
    description: "Value from execution, data, and settlement fees are all captured by the $SLT token, creating a robust, self-reinforcing economic engine.",
    icon: "💎"
  }
]

export const LIVE_STATS = {
  tps: { base: 12403, variance: 500, label: "Transactions/Sec" },
  fee: { base: 0.00025, variance: 0.0001, label: "Avg. Tx Fee", prefix: "$" },
  validators: { base: 1836, variance: 5, label: "Validators" },
  finality: { value: "< 1 sec", label: "Time to Finality" }
}

export const ARCHITECTURE_COMPONENTS = [
  {
    id: "settlement",
    title: "Settlement Core",
    subtitle: "The Bedrock",
    description: "The ultimate arbiter of the network's state and anchor of its economic security, optimized for decentralization."
  },
  {
    id: "execution",
    title: "Execution Engine",
    subtitle: "The Supercomputer", 
    description: "The high-performance environment where all transactions and smart contracts are processed in parallel."
  },
  {
    id: "data",
    title: "Data Fabric",
    subtitle: "The Universal Connector",
    description: "The network's information backbone, providing a scalable and secure layer for data storage via DAS.",
    tooltip: "Data Availability Sampling allows nodes to verify data availability without downloading entire blocks."
  }
]

export const SLATE_BUS_FEATURES = [
  {
    title: "Decentralized Sequencer Network",
    description: "Replaces a single coordinator with a rotating, algorithmically-selected committee of validators. This distributes the power of transaction sequencing, providing strong censorship resistance at the protocol level."
  },
  {
    title: "Asynchronous Composability", 
    description: "Delivers the developer experience of atomic transactions without the bottleneck of a single Global State Root. Layers operate asynchronously, with cryptographic proofs guaranteeing that transactions either complete fully across layers or fail entirely."
  },
  {
    title: "Hybrid Proof Mechanism",
    description: "A lightweight ZK-Proof provides a fast, cryptographic check on inter-layer data integrity, while robust fraud proofs on the Settlement Core act as the ultimate source of truth, creating a defense-in-depth security model.",
    tooltip: "Zero-Knowledge Proofs allow verification of a statement without revealing the underlying data.",
    span: "full"
  }
]

export const DEVELOPER_FEATURES = [
  {
    title: "Multi-VM Environment",
    description: "Deploy existing EVM contracts without changes, or leverage the power of WASM for peak performance using languages like Rust and Go."
  },
  {
    title: "Native Account Abstraction",
    description: "Onboard the next billion users with Web2-like experiences: social recovery, gasless transactions, and transaction bundling, all built-in at the protocol level."
  },
  {
    title: "Seamless Interoperability", 
    description: "Trust-minimized ZK-Bridges provide secure and efficient connectivity to other major ecosystems like Ethereum and Cosmos."
  }
]

export const TOKENOMICS_STREAMS = [
  {
    title: "Execution Fees",
    description: "Demand for blockspace and computation.",
    color: "text-blue-400"
  },
  {
    title: "Data Fees", 
    description: "Demand for scalable, on-chain data storage.",
    color: "text-green-400"
  },
  {
    title: "Settlement Fees",
    description: "Demand for the highest level of security and finality.", 
    color: "text-purple-400"
  }
]

export const SECURITY_FEATURES = [
  {
    title: "Formal Verification",
    description: "Commitment to the mathematical verification of mission-critical components, proving the code behaves exactly as intended."
  },
  {
    title: "Incentivized Testnets",
    description: "Each major phase is preceded by a public testnet with significant bug bounties to ensure battle-tested resilience before mainnet."
  },
  {
    title: "Defense in Depth", 
    description: "A clear proof hierarchy where fast ZK-proofs ensure data integrity, while robust fraud proofs on the Settlement Core provide the ultimate security guarantee."
  }
]

export const SOCIAL_LINKS = [
  { label: "Read Whitepaper", href: "https://github.com/Anteneh-T-Tessema/slateprotocol/blob/main/WHITEPAPER.md", type: "primary" },
  { label: "Join Discord", href: "https://discord.gg/slate-protocol", type: "secondary" },
  { label: "View on GitHub", href: "https://github.com/Anteneh-T-Tessema/slateprotocol", type: "secondary" }
]

export const DOCUMENTATION_LINKS = {
  whitepaper: "https://github.com/Anteneh-T-Tessema/slateprotocol/blob/main/WHITEPAPER.md",
  readme: "https://github.com/Anteneh-T-Tessema/slateprotocol#readme",
  contributing: "https://github.com/Anteneh-T-Tessema/slateprotocol/blob/main/CONTRIBUTING.md",
  security: "https://github.com/Anteneh-T-Tessema/slateprotocol/blob/main/SECURITY.md",
  governance: "https://github.com/Anteneh-T-Tessema/slateprotocol/blob/main/GOVERNANCE.md"
}