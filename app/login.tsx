import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LoginForm } from '@/components/auth/LoginForm';

export default function LoginScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView style={{ padding: 20 }}>
        <ThemedText type="title" style={{ marginBottom: 40, textAlign: 'center' }}>
          Login
        </ThemedText>
      </ThemedView>
      <LoginForm />
    </ThemedView>
  );
} 