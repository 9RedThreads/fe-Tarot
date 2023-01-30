import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthScreen from "../Screens/AuthScreen";
import ThreeCardsReadingScreen from "../Screens/ThreeCardsReadingScreen";
import OneCardReadingScreen from "../Screens/OneCardReadingScreen";
import JournalEntriesScreen from '../Screens/JournalEntriesScreen';


export type RootStackParamList = {
  BottomTabNavigator: undefined;
  ThreeCardsReading:undefined;
  OneCardReading: undefined;
  Auth: undefined;
  JournalEntries: undefined;
};

const RootNavigator = () => {

    const RootStack = createNativeStackNavigator<RootStackParamList>();

    return (
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
          />
        </RootStack.Group>

        <RootStack.Group>
          <RootStack.Screen name="Auth" component={AuthScreen} />
        </RootStack.Group>

        <RootStack.Group>
          <RootStack.Screen
            name="ThreeCardsReading"
            component={ThreeCardsReadingScreen}
          />
        </RootStack.Group>

        <RootStack.Group>
          <RootStack.Screen
            name="OneCardReading"
            component={OneCardReadingScreen}
          />
        </RootStack.Group>

        <RootStack.Group>
          <RootStack.Screen
            name="JournalEntries"
            component={JournalEntriesScreen}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    );
};

export default RootNavigator;