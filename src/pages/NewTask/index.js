import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from "../../config/firebaseconfig.js"
import styles from "./style";

export default function NewTask({ navigation }, props) {
 
  const [description, setDescription] = useState(null);
 
  function addTask(){
    database.collection('Tasks').add({
      description: description,
      status: false
    })
    navigation.navigate("Task");
  }

return(
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
      style={styles.input}
      placeholder="Ex: estudar javascript"
      onChangeText={setDescription}
      value={description}
      />
      <TouchableOpacity 
        style={styles.buttonNewTask}
        onPress={()=>{
          addTask()
        }}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}