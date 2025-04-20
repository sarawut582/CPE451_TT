import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TabBar from './components/Tabbar.js';
import MapScreen from './components/HomeScreen.js';
import Ticket from './components/Ticket.js';
import ProfileScreen from './components/Profile.js';
import SettingsScreen from './components/settting.js';
import LanguageSelection from './components/LanguageScreen.js';
import CommentScreen from './components/comment.js';
import LogoutScreen from './components/logout.js';
import RecordScreen from './components/record.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Ticket" component={Ticket} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Record" component={RecordScreen} options={{ title: "ประวัติการเดินทาง" }} />
    </Stack.Navigator>
  );
}

function TicketStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ticket" component={Ticket} options={{ title: "ตั๋วของคุณ" }} />
      <Stack.Screen name="Record" component={RecordScreen} options={{ title: "ประวัติการเดินทาง" }} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "โปรไฟล์" }} />
      <Stack.Screen name="Record" component={RecordScreen} options={{ title: "ประวัติการเดินทาง" }} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: "ตั้งค่า" }} />
      <Stack.Screen name="LanguageSelection" component={LanguageSelection} options={{ title: "เปลี่ยนภาษา" }} />
      <Stack.Screen name="Comment" component={CommentScreen} options={{ title: "แสดงความคิดเห็น" }} />
      <Stack.Screen name="Logout" component={LogoutScreen} options={{ title: "ออกจากระบบ" }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tab.Screen name="ตั๋วของคุณ" component={TicketStack} options={{ headerShown: false }} />
        <Tab.Screen name="สถานี" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="หน้าหลัก" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="โปรไฟล์" component={ProfileStack} options={{ headerShown: false }} />
        <Tab.Screen name="ตั้งค่า" component={SettingsStack} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
