import React from 'react'
import { View, Button, TextInput, StyleSheet, Keyboard } from 'react-native'

const App = () => {
	return (
		<View style={styles.screen}>
			<TextInput style={styles.textinput} textContentType="username" />
			<TextInput style={styles.textinput} secureTextEntry textContentType="password" />
			<Button title="Dismiss Keyboard" onPress={() => Keyboard.dismiss()} />
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		width: '100%',
		height: '100%',
		paddingVertical: '15%',
		backgroundColor: '#1e1e1e',
		alignItems: 'center',
	},
	textinput: {
		marginVertical: 10,
		padding: 10,
		width: '70%',
		height: 40,
		backgroundColor: '#ababab',
	},
})

export default App
