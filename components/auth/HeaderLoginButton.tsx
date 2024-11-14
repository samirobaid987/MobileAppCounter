import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export function HeaderLoginButton() {
  const colorScheme = useColorScheme();
  const iconColor = Colors[colorScheme ?? 'light'].tint;

  return (
    <TouchableOpacity 
      onPress={() => router.push('/login')}
      style={{ marginRight: 15 }}
      testID="header-login-button"
    >
      <IconSymbol 
        name="person.fill" 
        size={24} 
        color={iconColor}
      />
    </TouchableOpacity>
  );
} 