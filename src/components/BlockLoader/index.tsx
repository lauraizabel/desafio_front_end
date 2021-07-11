import React from 'react';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
import { Container } from './styles';

interface IBlockLoader {
  blocking: boolean;
  children: React.ReactNode;
}

const BlockLoader: React.FC<IBlockLoader> = ({
  blocking,
  children,
}: IBlockLoader) => (
  <Container>
    <BlockUi blocking={blocking}>{children}</BlockUi>
  </Container>
);

export default BlockLoader;