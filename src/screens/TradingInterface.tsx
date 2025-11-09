import { useState } from 'react';
import { TrendingUp, TrendingDown, Copy, Link, Search, ChevronDown, Filter, X } from 'lucide-react';

interface Token {
  id: number;
  name: string;
  ticker: string;
  address: string;
  age: string;
  image: string;
  marketCap: string;
  marketCapChange: string;
  liquidity: string;
  volume: string;
  txns: string;
  txnsDetail: string;
  change5m: string;
  change1h: string;
  holders: string;
  mcap: string;
  top10: string;
  sentiment1: string;
  status: string;
  chartColor: 'green' | 'red';
}

export default function TradingInterface() {
  const [activeTab, setActiveTab] = useState<'Trending' | 'Surge' | 'DEX Screener' | 'Pump Live'>('Trending');
  const [activeTimeframe, setActiveTimeframe] = useState<'1m' | '5m' | '30m' | '1h'>('5m');
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false);
  const [copiedAddress, setCopiedAddress] = useState<number | null>(null);

  const tokens: Token[] = [
    {
      id: 1,
      name: 'squidward',
      ticker: 'squidwa...',
      address: '0x1234...5678',
      age: '46s',
      image: '🦑',
      marketCap: '$12K',
      marketCapChange: '+166.5%',
      liquidity: '$15.7K',
      volume: '$10.9K',
      txns: '97',
      txnsDetail: '72 / 25',
      change5m: '22.63%',
      change1h: '0.58%',
      holders: '55',
      mcap: '43',
      top10: '0%',
      sentiment1: '17.45%',
      status: 'Unpaid',
      chartColor: 'green'
    },
    {
      id: 2,
      name: 'SORE',
      ticker: 'SORE',
      address: '0xabcd...ef01',
      age: '1d',
      image: 'S',
      marketCap: '$724K',
      marketCapChange: '+0.828%',
      liquidity: '$244K',
      volume: '$26.2K',
      txns: '91',
      txnsDetail: '60 / 31',
      change5m: '38.28%',
      change1h: '16.12%',
      holders: '665',
      mcap: '142',
      top10: '0.39%',
      sentiment1: '0%',
      status: 'Paid',
      chartColor: 'green'
    },
    {
      id: 3,
      name: 'Tiberius',
      ticker: 'Tiberius...',
      address: '0x9876...5432',
      age: '2s',
      image: '👨',
      marketCap: '$42.4K',
      marketCapChange: '-12.8%',
      liquidity: '$21.8K',
      volume: '$49.6K',
      txns: '689',
      txnsDetail: '383 / 306',
      change5m: '23.65%',
      change1h: '0.4%',
      holders: '423',
      mcap: '232',
      top10: '0%',
      sentiment1: '14.54%',
      status: 'Paid',
      chartColor: 'red'
    },
    {
      id: 4,
      name: 'LLMtheism',
      ticker: 'AI Religi...',
      address: '0xdef0...1234',
      age: '1h',
      image: '🤖',
      marketCap: '$80.5K',
      marketCapChange: '+69.92%',
      liquidity: '$30.3K',
      volume: '$16.2K',
      txns: '141',
      txnsDetail: '86 / 55',
      change5m: '21.44%',
      change1h: '1.7%',
      holders: '484',
      mcap: '167',
      top10: '0%',
      sentiment1: '3.13%',
      status: 'Paid',
      chartColor: 'green'
    },
    {
      id: 5,
      name: 'T1',
      ticker: 'T1',
      address: '0x5678...abcd',
      age: '6m',
      image: '✈️',
      marketCap: '$66.2K',
      marketCapChange: '+6.866%',
      liquidity: '$27.2K',
      volume: '$7.9K',
      txns: '67',
      txnsDetail: '34 / 33',
      change5m: '76.19%',
      change1h: '1.23%',
      holders: '132',
      mcap: '14',
      top10: '70.76%',
      sentiment1: '0%',
      status: 'Unpaid',
      chartColor: 'green'
    },
    {
      id: 6,
      name: 'META',
      ticker: 'MetaDAO',
      address: '0xfed0...9876',
      age: '2mo',
      image: '🍑',
      marketCap: '$155M',
      marketCapChange: '-1.23%',
      liquidity: '$2.92M',
      volume: '$58.5K',
      txns: '55',
      txnsDetail: '49 / 6',
      change5m: 'N/A',
      change1h: '0%',
      holders: '240',
      mcap: '103',
      top10: '0%',
      sentiment1: '0%',
      status: 'Paid',
      chartColor: 'red'
    },
    {
      id: 7,
      name: 'circom',
      ticker: 'CircomChan',
      address: '0x2468...1357',
      age: '1h',
      image: '🎃',
      marketCap: '$24.1K',
      marketCapChange: '-32%',
      liquidity: '$22.2K',
      volume: '$10K',
      txns: '159',
      txnsDetail: '89 / 70',
      change5m: '19.07%',
      change1h: '0.81%',
      holders: '248',
      mcap: '103',
      top10: '0%',
      sentiment1: '7.46%',
      status: 'Unpaid',
      chartColor: 'red'
    }
  ];

  const MiniChart = ({ color }: { color: 'green' | 'red' }) => (
    <svg className="w-24 h-12" viewBox="0 0 100 50">
      <polyline
        points={color === 'green' ? "0,45 20,35 40,30 60,25 80,20 100,15" : "0,15 20,20 40,25 60,30 80,35 100,40"}
        fill="none"
        stroke={color === 'green' ? '#10b981' : '#ef4444'}
        strokeWidth="2"
      />
    </svg>
  );

  const handleCopyAddress = (address: string, tokenId: number) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(tokenId);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  const handleBuyToken = (token: Token) => {
    setSelectedToken(token);
    alert(`Buying ${token.name} (${token.ticker})\nMarket Cap: ${token.marketCap}\nLiquidity: ${token.liquidity}`);
  };

  const handleExternalLink = (token: Token) => {
    alert(`Opening external link for ${token.name}`);
  };

  const handleSearch = (token: Token) => {
    alert(`Searching for ${token.name} on DEX Screener`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-6 overflow-x-hidden">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-6">
          <button
            onClick={() => setActiveTab('Trending')}
            className={`text-xl font-semibold transition-colors duration-200 ${
              activeTab === 'Trending' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'
            }`}
          >
            Trending
          </button>
          <button
            onClick={() => setActiveTab('Surge')}
            className={`transition-colors duration-200 ${
              activeTab === 'Surge' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'
            }`}
          >
            Surge
          </button>
          <button
            onClick={() => setActiveTab('DEX Screener')}
            className={`transition-colors duration-200 ${
              activeTab === 'DEX Screener' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'
            }`}
          >
            DEX Screener
          </button>
          <button
            onClick={() => setActiveTab('Pump Live')}
            className={`flex items-center gap-1 transition-colors duration-200 ${
              activeTab === 'Pump Live' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400 hover:text-white'
            }`}
          >
            Pump Live
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex gap-2 bg-[#0d0d0d] p-1 rounded-lg border border-gray-800">
            {['1m', '5m', '30m', '1h'].map((time) => (
              <button
                key={time}
                onClick={() => setActiveTimeframe(time as '1m' | '5m' | '30m' | '1h')}
                className={`px-3 py-1 text-sm rounded-md transition-colors duration-200 ${
                  activeTimeframe === time
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-[#151515]'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
          <div className="relative">
            <button
              onClick={() => setShowFilterMenu(!showFilterMenu)}
              className="px-3 py-1.5 text-sm border border-gray-800 rounded-lg hover:border-blue-500 flex items-center gap-2 bg-[#0d0d0d] transition-colors duration-200 hover:bg-[#151515]"
            >
              <Filter className="w-4 h-4" />
              Filter
            </button>
            {showFilterMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-[#0d0d0d] border border-gray-800 rounded-lg shadow-2xl z-10 overflow-hidden">
                <div className="p-2">
                  <button className="w-full text-left px-3 py-2 hover:bg-blue-600 hover:text-white rounded text-sm transition-colors duration-150">
                    Market Cap Range
                  </button>
                  <button className="w-full text-left px-3 py-2 hover:bg-blue-600 hover:text-white rounded text-sm transition-colors duration-150">
                    Liquidity Filter
                  </button>
                  <button className="w-full text-left px-3 py-2 hover:bg-blue-600 hover:text-white rounded text-sm transition-colors duration-150">
                    Volume Filter
                  </button>
                  <button className="w-full text-left px-3 py-2 hover:bg-blue-600 hover:text-white rounded text-sm transition-colors duration-150">
                    Age Filter
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_0.8fr_2fr_1fr] gap-4 px-4 py-3 text-xs text-gray-400 border-b border-gray-800 bg-[#0d0d0d] rounded-t-lg sticky top-0 z-10 shadow-md">
        <div>Pair Info</div>
        <div>Market Cap</div>
        <div>Liquidity</div>
        <div>Volume</div>
        <div>TXNS</div>
        <div>Token Info</div>
        <div>Action</div>
      </div>

      {/* Token Rows */}
      <div className="space-y-2 mt-2">
        {tokens.map((token) => (
          <div
            key={token.id}
            className={`grid grid-cols-[2fr_1fr_1fr_1fr_0.8fr_2fr_1fr] gap-4 px-4 py-4 rounded-lg transition-all duration-300 items-center border cursor-pointer shadow-md ${
              selectedToken?.id === token.id
                ? 'bg-[#151515] border-blue-500 scale-101'
                : 'bg-[#0d0d0d] border-gray-800 hover:bg-[#151515] hover:border-blue-500 hover:scale-101'
            }`}
            onClick={() => setSelectedToken(token)}
          >
            {/* Pair Info */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center text-2xl border border-gray-700 shadow-inner">
                {token.image}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{token.name}</span>
                  <span className="text-gray-500 text-sm">{token.ticker}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopyAddress(token.address, token.id);
                    }}
                    className="hover:text-blue-500 transition-colors duration-150"
                    title={copiedAddress === token.id ? 'Copied!' : 'Copy address'}
                  >
                    <Copy className={`w-3 h-3 ${copiedAddress === token.id ? 'text-green-500' : 'text-gray-600'}`} />
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-emerald-500 text-sm">{token.age}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleExternalLink(token);
                    }}
                    className="hover:text-blue-500 transition-colors duration-150"
                    title="Open external link"
                  >
                    <Link className="w-3 h-3 text-gray-600 hover:text-blue-500" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSearch(token);
                    }}
                    className="hover:text-blue-500 transition-colors duration-150"
                    title="Search on DEX"
                  >
                    <Search className="w-3 h-3 text-gray-600 hover:text-blue-500" />
                  </button>
                </div>
              </div>
            </div>

            {/* Market Cap */}
            <div>
              <MiniChart color={token.chartColor} />
              <div className="font-semibold">{token.marketCap}</div>
              <div className={`text-sm ${token.marketCapChange.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>
                {token.marketCapChange}
              </div>
            </div>

            {/* Liquidity */}
            <div className="font-semibold">{token.liquidity}</div>

            {/* Volume */}
            <div className="font-semibold">{token.volume}</div>

            {/* TXNS */}
            <div>
              <div className="font-semibold">{token.txns}</div>
              <div className="text-sm">
                <span className="text-emerald-500">{token.txnsDetail.split(' / ')[0]}</span>
                <span className="text-gray-500"> / </span>
                <span className="text-red-500">{token.txnsDetail.split(' / ')[1]}</span>
              </div>
            </div>

            {/* Token Info */}
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <TrendingDown className="w-3 h-3 text-red-500" />
                  <span className="text-red-500">{token.change5m}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <span className="w-3 h-3 inline-block">💎</span>
                  <span>{token.top10}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <span className="w-3 h-3 inline-block">💎</span>
                  <span>{token.top10}</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-emerald-500" />
                  <span className="text-emerald-500">{token.change1h}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className={token.sentiment1 === '0%' ? 'text-gray-500' : 'text-red-500'}>
                    🔴 {token.sentiment1}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className={`${token.status === 'Paid' ? 'text-emerald-500' : 'text-red-500'}`}>
                    💰 {token.status}
                  </span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">👥 {token.holders}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-400">📊 {token.mcap}</span>
                </div>
              </div>
            </div>

            {/* Action */}
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleBuyToken(token);
                }}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg font-medium transition-colors duration-200 shadow-md"
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Selected Token Info Panel */}
      {selectedToken && (
        <div className="fixed bottom-6 right-6 bg-[#0d0d0d] border border-gray-800 rounded-xl p-6 shadow-2xl max-w-sm transform transition-all duration-300 scale-100 hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-blue-400">Selected Token</h3>
            <button
              onClick={() => setSelectedToken(null)}
              className="text-gray-400 hover:text-red-500 transition-colors duration-150"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 bg-[#151515] p-3 rounded-lg">
              <span className="text-3xl">{selectedToken.image}</span>
              <div>
                <div className="font-medium text-white">{selectedToken.name}</div>
                <div className="text-gray-400">{selectedToken.ticker}</div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-3 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Market Cap:</span>
                <span className="font-medium text-white">{selectedToken.marketCap}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Liquidity:</span>
                <span className="font-medium text-white">{selectedToken.liquidity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Volume:</span>
                <span className="font-medium text-white">{selectedToken.volume}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Holders:</span>
                <span className="font-medium text-white">{selectedToken.holders}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}