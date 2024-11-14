import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ForgotPasswordForm } from '@/components/auth/ForgotPasswordForm';

export default function ForgotPasswordScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView style={{ padding: 20 }}>
        <ThemedText type="title" style={{ marginBottom: 20, textAlign: 'center' }}>
          Reset Password
        </ThemedText>
      </ThemedView>
      <ForgotPasswordForm />
    </ThemedView>
  );
} 