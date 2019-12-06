import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import ReadBibleScreen from './src/screens/ReadBibleScreen'
import BookmarkScreen from './src/screens/BookmarkScreen';
import SearchScreen from './src/screens/SearchScreen';
import NotesScreen from './src/screens/NotesScreen';
import VerseOfTheDayScreen from './src/screens/VerseOfTheDayScreen';
import HighlightsScreen from './src/screens/HighlightsScreen';

const navigator = createDrawerNavigator({
  "Read Bible": ReadBibleScreen,
  Bookmark: BookmarkScreen,
  Search: SearchScreen,
  Notes: NotesScreen,
  "Verse of the Day": VerseOfTheDayScreen,
  Highlights: HighlightsScreen
},
{
  initialRouteName: 'Read Bible',
  // contentComponent: CustomDrawer,
  keyboardDismissMode: 'on-drag',
});

export default createAppContainer(navigator)