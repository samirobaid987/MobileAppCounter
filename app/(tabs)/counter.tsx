import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setCount(count + 1)}
      >
        <ThemedText style={styles.buttonText}>Increment</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    elevation: 2,
    position: 'relative',
    backgroundColor: 'red',
  },
  counterText: {
    fontSize: 48,
    marginBottom: 20,
    marginTop: 20,
    color: '#000000',
    zIndex: 1,
    elevation: 1,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 