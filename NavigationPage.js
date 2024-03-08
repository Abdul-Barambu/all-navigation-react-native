import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import Settings from './screens/tabScreens/Settings'
import Notifications from './screens/tabScreens/Notifications'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Feed from './screens/tabScreens/Feed'
import TweetDetailScreen from './screens/homeStack/TweetDetailsScreen'
import Payments from './screens/drawerScreens/Payments'
import { Image, Pressable } from 'react-native'

// Bottom Tab
const Tab = createBottomTabNavigator()

export const TabGroup = ({ navigation }) => {
    return (
        <Tab.Navigator screenOptions={({ route, navigation }) => ({
            tabBarIcon: ({ color, focused, size }) => {
                let iconName;
                if (route.name === "Feed") {
                    iconName = focused ? "home" : "home-outline";

                    return <Ionicons name={iconName} size={size} color={color} />
                } else if (route.name === "Notifications") {
                    iconName = focused ? "notifications" : "notifications-none"

                    return <MaterialIcons name={iconName} size={size} color={color} />
                } else if (route.name === "Settings") {
                    iconName = focused ? "settings" : "settings-outline"

                    return <Ionicons name={iconName} size={size} color={color} />
                }

            },
            tabBarActiveTintColor: "#1da1f2",
            tabBarInactiveTintColor: "gray"
        })}>
            <Tab.Screen name='Feed' component={TobTabGroup} options={{
                // headerShown: false,
                tabBarLabel: "@AbdulBarambu",
                headerLeft: () => (
                    <Pressable onPress={() => navigation.openDrawer()}>
                        <Image
                            source={require("./assets/beto.jpeg")}
                            style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 15 }}
                        />
                    </Pressable>
                )
            }} />
            <Tab.Screen name='Notifications' component={Notifications} />
            <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
    )
}

// Stack navigation
const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='TabGroup' component={TabGroup} options={{ headerShown: false }} />
            <Stack.Screen name='TweetDetailScreen' component={TweetDetailScreen}
                options={{ presentation: "modal" }} />
        </Stack.Navigator>
    )
}

// Drawer navigation
const Drawer = createDrawerNavigator();

export const DrawerGroup = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name='HomeStack' component={HomeStack} />
            <Drawer.Screen name='Payment' component={Payments} options={{ headerShown: true }} />
        </Drawer.Navigator>
    )
}

// Top navigation

const TobTab = createMaterialTopTabNavigator();

export const TobTabGroup = () => {
    return (
        <TobTab.Navigator screenOptions={{
            tabBarLabelStyle: {
                textTransform: "capitalize",
                fontWeight: "bold"
            },
            tabBarIndicatorStyle: {
                height: 5,
                borderRadius: 10,
                backgroundColor: '#1da1f2'
            }
        }}>
            <TobTab.Screen name='main' component={Feed} />
            <TobTab.Screen name='Following' component={Payments} />
            <TobTab.Screen name='👀' component={Payments} />
        </TobTab.Navigator>
    )
}