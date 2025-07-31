// src/components/NeedCard/NeedCard.tsx

import React from 'react';
import './NeedCard.css'; // We'll need a CSS file for styling

// Define the properties the component will receive
interface NeedCardProps {
  id: string;
  title: string;
  author: string;
  amountFunded: number;
  amountNeeded: number;
  priorityScore: number;
}

const NeedCard: React.FC<NeedCardProps> = ({
  id,
  title,
  author,
  amountFunded,
  amountNeeded,
  priorityScore
}) => {
  const progress = (amountFunded / amountNeeded) * 100;

  const handleSupportClick = () => {
    // This is where the logic to call our smart contract would go
    console.log(`User wants to support Need #${id}`);
    // Example: wallet.fundNeed(id, amount);
  };

  return (
    <div className="need-card">
      <div className="need-card-header">
        <span className="need-card-author">{author}</span>
        <span className="need-card-priority">Priority: {priorityScore}</span>
      </div>
      <h3 className="need-card-title">{title}</h3>
      <div className="need-card-progress-bar">
        <div className="need-card-progress" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="need-card-funding-status">
        Funded: {amountFunded} / {amountNeeded}
      </div>
      <button className="need-card-support-button" onClick={handleSupportClick}>
        Support
      </button>
    </div>
  );
};

export default NeedCard;
```4.  **Действие:** Рядом создай файл `NeedCard.css` для стилей.
```css
/* src/components/NeedCard/NeedCard.css */
.need-card {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    border: 1px solid #e0e0e0;
}
.need-card-header {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #888;
    margin-bottom: 8px;
}
.need-card-title {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 12px 0;
}
.need-card-progress-bar {
    background-color: #f0f0f0;
    height: 8px;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 4px;
}
.need-card-progress {
    background-color: #37AEE2; /* Our blue accent */
    height: 100%;
    transition: width 0.3s ease;
}
.need-card-funding-status {
    font-size: 12px;
    text-align: right;
    margin-bottom: 16px;
}
.need-card-support-button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    background-color: #37AEE2;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}