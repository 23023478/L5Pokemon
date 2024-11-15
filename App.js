import React from 'react';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, StatusBar, Image, Button} from 'react-native';

//Datasource (sectionlist)
const datasource = [
  {data:[
      {name: 'charmander', image: require('./img/SV3pt5_EN_168-2x.png'), number:'168'},
      {name: 'charmeleon', image: require('./img/SV3pt5_EN_169-2x.png'),  number:'169'},
    ],
    title:"🔥Fire",bgColor:'orange'},
  {data:[
          {name: 'squirtle', image: require('./img/SV3pt5_EN_170-2x.png'), number:'170'},
          {name: 'Wartortle', image: require('./img/SV3pt5_EN_171-2x.png'), number:'171'},
    ],
      title:"💧Water",bgColor:'blue', color:'white'},

    {data:[
            {name: 'Abra', image: require('./img/SV3pt5_EN_63-2x.png'), number:'63'},
            {name: 'Alakazam', image: require('./img/SV3pt5_EN_201-2x.png'), number:'201'},
        ],
        title:"🍥Physic",bgColor:'pink'}

];

// styles
const styles = StyleSheet.create({
    container: {
        marginBottom: 50,
        margin: 10,
    },
    addButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    opacityStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        justifyContent: 'space-between', // Space between text and image
    },
    textStyle: {
        fontSize: 18,
        margin: 10,
        fontWeight: 'bold',
        color: '#333',
        flex: 1, // Make text take available space to the left
        textAlign: 'left',

    },
    image: {
        width: 530,  // Larger width
        height: 300, // Larger height
        resizeMode: 'contain',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        paddingVertical: 8,
        paddingHorizontal: 10,
        textAlign: 'center',
    },
});


//RenderItem (sectionlist)
const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
          <View>
              <Text style={styles.textStyle}>{item.name}</Text>
              <Image source={item.image} style={styles.image} />
          </View>
      </TouchableOpacity>

  );
};

//Main app
const Pokemon = () => {
  return (

      <View style={{marginBottom: 50, margin:10}}>
          <Button title={'Add pokemon'} />
        <SectionList sections={datasource} renderItem={renderItem}
                     renderSectionHeader={({section:{title, bgColor,color}}) =>(
                         <Text style={[styles.headerText, {backgroundColor: bgColor},{color: color}]}>{title}</Text>

                     )}/>
        <StatusBar hidden={true} />
      </View>
  );
};

export default Pokemon


