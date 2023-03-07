import React from 'react';

import { Text, TextContainer } from './styles';

function AlertInfoScreen({ children }) {
  return (
    <TextContainer>
      <Text>
        {children}
      </Text>
    </TextContainer>
  );
}

export default AlertInfoScreen;
