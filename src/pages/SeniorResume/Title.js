import React from 'react';

import { Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase',
    fontWeight:'bold',
    color:'black'
  },
});

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

export default Title;