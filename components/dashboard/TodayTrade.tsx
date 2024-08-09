import React from 'react';

type ProfitLoss = {
  total: number;
  percentage: number;
};

type YouTuberData = {
  name: string;
  currentPrice: number;
  openingPrice: number;
  highPrice: number;
  lowPrice: number;
  change: number;
  recentTrades: string[];
  profitLoss: ProfitLoss;
};

interface TodayTradeProps {
  youtuberData: YouTuberData;
}

const images = {
  "Samay Raina": "https://yt3.googleusercontent.com/ytc/AIdro_lmaYOjcRw0-wAZKvvECrErNkHPIFrM7Lc-ntx5nxRGaLo=s176-c-k-c0x00ffffff-no-rj-mo",
  "Tanmay Bhat": "https://yt3.ggpht.com/UnHiAzDe4BrX1crihFtyFV2IM2a12i0sj41153RUIoCkazMbVX4otYdmFAKmaxO4psixK9Sriw=s176-c-k-c0x00ffffff-no-rj-mo",
  "Bearstas": "https://yt3.ggpht.com/g8K59sYJ_9TVmh7I3_Xqyxm5aP297ifg5GzfKhAwqhk6ElI4TCx4CB9iwOlhwndtPKSypc8F=s68-c-k-c0x00ffffff-no-rj",
};

const TodayTrade: React.FC<TodayTradeProps> = ({ youtuberData }) => {
  const { name, currentPrice, openingPrice, highPrice, lowPrice, change, recentTrades, profitLoss } = youtuberData;
  const imageUrl = images[name];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center mb-4">
        <span className="bg-yellow-500 text-white text-sm font-semibold py-1 px-3 rounded-full mr-4">
          Top Performer
        </span>
        <h2 className="text-2xl font-bold">{name}</h2>
      </div>
      <div className="flex items-center mb-4">
        <img src={imageUrl} alt={`${name}'s Avatar`} className="w-16 h-16 rounded-full mr-4" />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Current Price: ${currentPrice}</span>
          <span className="text-sm text-gray-600">Opening Price: ${openingPrice}</span>
          <span className="text-sm text-gray-600">High: ${highPrice}</span>
          <span className="text-sm text-gray-600">Low: ${lowPrice}</span>
          <span className="text-sm text-gray-600">Change: {change}%</span>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Recent Trades</h3>
        <ul>
          {recentTrades.map((trade, index) => (
            <li key={index} className="text-sm text-gray-700">{trade}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Profit/Loss Summary</h3>
        <p className="text-sm text-gray-700">Total Profit/Loss: ${profitLoss.total}</p>
        <p className="text-sm text-gray-700">Percentage: {profitLoss.percentage}%</p>
      </div>
    </div>
  );
};

export default TodayTrade;
