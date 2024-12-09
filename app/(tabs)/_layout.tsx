// @ts-nocheck

import { View, Text, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-1">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-5 h-5 mt-4"
      />
      <Text
        numberOfLines={1}
        className={`${
          focused ? "font-psemibold" : "font-pregular"
        } text-[0.66rem] w-20 text-center`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 50,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.home}
                  color={color}
                  name="Home"
                  focused={focused}
                />
              );
            },
          }}
        />
        {/* <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.bookmark}
                  color={color}
                  name="Bookmark"
                  focused={focused}
                />
              );
            },
          }}
        /> */}
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.plus}
                  color={color}
                  name="Create"
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.profile}
                  color={color}
                  name="Profile"
                  focused={focused}
                />
              );
            },
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
