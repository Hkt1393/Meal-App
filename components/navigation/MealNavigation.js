import React from 'react';
import {StyleSheet, Platform, Touchable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from '../../src/screens/CategoriesScreen';
import CategoriesMealScreen from '../../src/screens/CategoriesMealScreen';
import MealDetailScreen from '../../src/screens/MealDetailScreen';
import Colors from '../../src/constants/Colors';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoirtesScreen from '../../src/screens/FavoirtesScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FilterScreen from '../../src/screens/FilterScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function MealNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={MainNavigator}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="home"
                size={25}
                color={focused ? Colors.accentColor : 'lightgrey'}
              />
            ),
            tabBarLabel: () => null,
            tabBarActiveTintColor: Colors.accentColor,
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavtsNavigator}
          options={{
            tabBarIcon: ({focused}) => (
              <MaterialIcons
                name="favorite"
                size={22}
                color={focused ? Colors.accentColor : 'lightgrey'}
              />
            ),
            tabBarLabel: () => null,
            tabBarActiveTintColor: Colors.accentColor,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeStack() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="CategoriesScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'ios' ? Colors.primaryColor : 'white',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <MaterialIcons name="menu" size={30} color="white" />
          </TouchableOpacity>
        ),
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Stack.Screen
        name="CategoriesMealScreen"
        component={CategoriesMealScreen}
      />
      <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

const FavoritesScreens = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'ios' ? Colors.primaryColor : 'white',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <MaterialIcons name="menu" size={30} color="white" />
          </TouchableOpacity>
        ),
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="FavoirtesScreen"
        component={FavoirtesScreen}
        options={{
          headerTitle: 'Your Favoirtes',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const FilterScreenStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor: Platform.OS === 'ios' ? Colors.primaryColor : 'white',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <MaterialIcons name="menu" size={30} color="white" />
          </TouchableOpacity>
        ),
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Filter" component={FilterScreen} />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: Colors.primaryColor,
        drawerLabelStyle: {
          fontFamily: 'KodeMono-VariableFont_wght',
        },
      }}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen
        name="FilterScreen"
        component={FilterScreenStack}
        options={{drawerLabel: 'Filter'}}
      />
    </Drawer.Navigator>
  );
};

const FavtsNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: Colors.primaryColor,
        drawerLabelStyle: {
          fontFamily: 'KodeMono-VariableFont_wght',
        },
      }}>
      <Drawer.Screen
        name="FavoritesScreens"
        component={FavoritesScreens}
        options={{headerTitle: 'Favorites', drawerLabel: 'Favorites'}}
      />
      <Drawer.Screen
        name="FilterScreen"
        component={FilterScreenStack}
        options={{headerTitle: 'Filter', drawerLabel: 'Filter'}}
      />
    </Drawer.Navigator>
  );
};
