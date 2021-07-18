import { AppContainer, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeals from "../screens/CategoryMeals";
import MealDetailsScreen from "../screens/MealDetailScreen";
import color from "../constants/Colors"

const MealsNavigator = createStackNavigator({
  Categories: { 
      screen:CategoriesScreen,
      headerTitle:"Meals Category"
  },
  CategoryMeals: CategoryMeals,
  MealDetails: MealDetailsScreen,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: color.primaryColor,
    },
    headerTintColor: "white",
  },
});

export default createAppContainer(MealsNavigator);
