import React, { Component } from "react";
import { Platform, StyleSheet, FlatList, Text, View, Alert } from "react-native";

export default class Grid extends Component {

  constructor(props) {
    super(props);

    this.state = {
      level:1,
      time:'2:00',
      score: 0
      GridListItems: [

        { key: "Skptricks" },
        { key: "Sumit" },
        { key: "Amit" },
        { key: "React" },
        { key: "React Native" },
        { key: "Java" },
        { key: "Javascript" },
        { key: "PHP" },
        { key: "AJAX" },
        { key: "Android" },
        { key: "Selenium" },
        { key: "HTML" },
        { key: "Database" },
        { key: "MYSQL" },
        { key: "SQLLite" },
        { key: "Web Technology" },
        { key: "CSS" },
        { key: "Python" },
        { key: "Linux" },
        { key: "Kotlin" },
      ]
    };
  }
  GetGridViewItem(item) {
    Alert.alert(item);
  }
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.mainContainer}>
          <View style={styles.top}>
            <Text>
              Level
          </Text>
          </View>
          <View style={[styles.top, { marginTop: 15 }]}>
            <Text>
              Timer
          </Text>
          </View>
          <View style={styles.top}>
            <Text>
              Score
          </Text>
          </View>
        </View>

        <View style={styles.down}>
          <View style={styles.container}>
            <FlatList
              data={this.state.GridListItems}
              renderItem={({ item }) =>
                <View style={styles.GridViewContainer}>
                  <Text style={styles.GridViewTextLayout} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
                </View>}
              numColumns={2}
            />
          </View>
        </View>

      </View>

    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5e5e5"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  GridViewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    margin: 5,
    backgroundColor: '#7B1FA2'
  },
  GridViewTextLayout: {
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'center',
    color: '#fff',
    padding: 10,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  top: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: "center",
    alignItems: 'center',
    height: 60
  },
  down: {
    flex: 9,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: 'black',
    flexWrap: 'wrap'
  },
  main: {
    flex: 1
  },
  box: {
    borderWidth: 1,
    borderColor: 'black',
    width: 50,
    height: 20
  }
});






// import React, { Fragment } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// export default class App extends React.Component {
//   state = {
//     numberChildrenLabel: 2
//   }

//   boxes = () => {
//     for (let i = 1; i <= 4; i++) {
//       return (
//         <View style={styles.box}>{i}</View>
//       )
//     }
//   }

//   render() {
//     return (
//       <View style={styles.main}>
//         <View style={styles.mainContainer}>
//           <View style={styles.top}>
//             <Text>
//               Level
//           </Text>
//           </View>
//           <View style={[styles.top, { marginTop: 15 }]}>
//             <Text>
//               Timer
//           </Text>
//           </View>
//           <View style={styles.top}>
//             <Text>
//               Score
//           </Text>
//           </View>
//         </View>

//         <View style={styles.down}>
//         <ScrollView>
//         <View style={styles.box}></View>
//         <View style={styles.box}></View>
//         <View style={styles.box}></View>
//         <View style={styles.box}></View>
//         <View style={styles.box}></View>
//         <View style={styles.box}></View>
//         </ScrollView>
//         </View> 

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   top: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: 'black',
//     justifyContent: "center",
//     alignItems: 'center',
//     height: 60
//   },
//   down: {
//     flex: 9,
//     borderWidth: 1,
//     flexDirection: 'row',
//     borderColor: 'black',
//     flexWrap:'wrap'
//   },
//   main: {
//     flex: 1
//   },
//   box: {
//     borderWidth: 1,
//     borderColor: 'black',
//     width:50,
//     height:20
//   }

// })
