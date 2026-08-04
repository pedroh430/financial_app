import { Tabs } from 'expo-router';
import { LayoutDashboard, List, PlusCircle, BarChart3 } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <LayoutDashboard color={color} />,
        }}
      
      />
    </Tabs>
  );
}