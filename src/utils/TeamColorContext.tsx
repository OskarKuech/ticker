import React, { createContext, useContext } from 'react';

interface TeamColorContextProps {
  homeTeamColor: string;
  awayTeamColor: string;
  homeTeamName: string;
  awayTeamName: string;
}

const TeamColorContext = createContext<TeamColorContextProps | undefined>(undefined);

export const useTeamColors = () => {
  const context = useContext(TeamColorContext);
  if (!context) {
    throw new Error('useTeamColors must be used within a TeamColorProvider');
  }
  return context;
};

export const TeamColorProvider: React.FC<{ homeTeamColor: string; awayTeamColor: string; homeTeamName: string; awayTeamName: string; children: React.ReactNode }> = ({ homeTeamColor, awayTeamColor, homeTeamName, awayTeamName, children }) => {
  return (
    <TeamColorContext.Provider value={{ homeTeamColor, awayTeamColor, homeTeamName, awayTeamName }}>
      {children}
    </TeamColorContext.Provider>
  );
};