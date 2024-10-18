import React from "react";
import { Text, View , Button} from "react-native";
import auth from '@react-native-firebase/auth';

function App(){
  const SignUp = () => {
    auth().createUserWithEmailAndPassword(
      'jane.doe@example.com', 
      'SuperSecretPassword!')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  const SignIn = () => {
    auth().signInWithEmailAndPassword(
      'jane.doe@example.com', 
      'SuperSecretPassword!')
      .then(res => console.log("Signed in .."))
      .catch(err => console.log(err))
  }

  const SignOut = () => {
    auth().signOut()
    .then(res => console.log("Sign Out.."))
    .catch(err => console.log(err))
  }

  const CheckOut = ()  => {
    const user = auth().currentUser;
    console.log(user)


  }


  return(
    <View>
      <Text>Hello Firebase!</Text>
      <Button title="SignUp" onPress={SignUp}/>
      <Button title="SignIn" onPress={SignIn}/>
      <Button title="SignOut" onPress={SignOut}/>
      <Button title="CheckOut" onPress={CheckOut}/>
    </View>
  )
}

export default App;