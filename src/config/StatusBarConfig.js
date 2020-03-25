import { StatusBar, Platform } from 'react-native';

if(Platform.OS === 'android') StatusBar.setBackgroundColor('#C00');
StatusBar.setBarStyle('light-content');  