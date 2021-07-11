import React, { useState, useContext, createContext } from 'react';
import BlockLoader from '../../components/BlockLoader';

const BlockLoadingContext = createContext<{
  isLoading: boolean;
  setIsLoading: (value: React.SetStateAction<boolean>) => void;
}>({ isLoading: false, setIsLoading: () => {} });

const useBlockLoadingContext = () => useContext(BlockLoadingContext);

const BloackLoadingProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <BlockLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <BlockLoader blocking={isLoading}>{children}</BlockLoader>
    </BlockLoadingContext.Provider>
  );
};

export { BlockLoadingContext, useBlockLoadingContext };

export default BloackLoadingProvider;
