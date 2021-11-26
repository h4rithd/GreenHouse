import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icons from 'react-native-vector-icons/MaterialIcons';
import COLOR from '../accests/colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.headerView}>
        <View style={styles.headerViewWrapper}>
          <Icons
            name="account-circle"
            size={40}
            color={COLOR.primary}
            style={styles.headerViewIcon}
          />
          <Text style={styles.headerViewText}>GreenHouse</Text>
          <Icons
            name="shopping-bag"
            size={40}
            color={COLOR.primary}
            style={[styles.headerViewIcon, {left: 0}]}
          />
        </View>
      </View>
      <View style={styles.headerButtonsView}>
        <View style={styles.headerViewButtonsWrapper}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={[
                styles.headerViewButton,
                {backgroundColor: COLOR.territory},
              ]}>
              <Text style={[styles.headerViewButtonText, {color: COLOR.white}]}>
                Salads
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerViewButton}>
              <Text style={styles.headerViewButtonText}>Bowls</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerViewButton}>
              <Text style={styles.headerViewButtonText}>Soup</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerViewButton}>
              <Text style={styles.headerViewButtonText}>Sides</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerViewButton}>
              <Text style={styles.headerViewButtonText}>Drinks</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.headerViewButton}>
              <Text style={styles.headerViewButtonText}>Vegan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerViewButton}>
              <Text style={styles.headerViewButtonText}>salmon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerViewButton}>
              <Text style={styles.headerViewButtonText}>Bacon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerViewButton}>
              <Text style={styles.headerViewButtonText}>Crab</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerViewButton}>
              <Text style={styles.headerViewButtonText}>Snacks</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
      <View style={styles.middleHeaderView}>
        <View style={styles.middleHeaderViewWrapper}>
          <Text style={styles.middleHeaderViewText}>MOST ORDERD</Text>
          <View style={styles.middleHeaderViewLine} />
        </View>
      </View>

      <View style={styles.middleItemView}>
      <View style={styles.middleItemViewWrapper}>
      <View style={styles.middleItemListItemView}>
       <View style={styles.middleItemListItemWrapperView}>
         <View style={styles.middleItemListImageView}/>
         <View style={styles.middleItemListDiscriptionView}>
           
         </View>
         
       </View>
      </View>
      <View style={styles.middleItemListItemView}>
      <View style={styles.middleItemListItemWrapperView}>
         <View style={styles.middleItemListImageView}/>
         <View style={styles.middleItemListDiscriptionView}>
           
         </View>
         
       </View>
      </View>
      </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  middleItemListDiscriptionView:{
    width:"80%",
    height:100,
    marginTop:5,
    left:-50,
    borderRadius:40,
    backgroundColor:COLOR.secondary,
  },
  middleItemListImageView:{
    borderColor:COLOR.territory,
    borderWidth:4,
    width:110,
    height:110,
    borderRadius:55,
    backgroundColor:'white',
  },
  middleItemListItemWrapperView:{
    flex:1,
    flexDirection:'row',
  },

  middleItemListItemView:{
    backgroundColor:COLOR.white,
    width:"100%",
    height:110,
    marginVertical:8,
    marginTop:0,
  },
  middleItemListView:{
    width:110,
    height:110,
    borderRadius:55,
    backgroundColor:COLOR.white,
    margin:4,
  },
  middleItemViewWrapper:{
    flex:1,
    flexDirection:'column',
    padding:10,
  },
  middleItemView:{
    width:'100%',
    height:250,
    backgroundColor:COLOR.white
  },
  middleHeaderViewLine: {
    marginTop: 5,
    width: 250,
    height: 10,
    right: 10,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: COLOR.secondary,
  },
  middleHeaderViewText: {
    fontSize: 17,
    paddingLeft: 8,
    fontStyle: 'italic',
    color: COLOR.territory,
  },
  middleHeaderViewWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  middleHeaderView: {
    width: '100%',
    marginTop: 10,
    height: 30,
  },
  headerViewButtonText: {
    fontSize: 15,
    color: COLOR.territory,
  },
  headerViewButton: {
    paddingTop: 4,
    width: 60,
    height: 30,
    marginTop: 8,
    margin: 2,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: COLOR.secondary,
  },

  headerViewButtonsWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 8,
  },
  headerButtonsView: {
    with: '100%',
    height: 45,
  },
  headerViewText: {
    paddingTop: StatusBar.currentHeight + 2,
    color: COLOR.primary,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 28,
  },
  headerViewIcon: {
    width: 60,
    height: 60,
    left: 10,
    padding: 2,
    top: StatusBar.currentHeight,
  },
  headerViewWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerView: {
    with: '100%',
    height: StatusBar.currentHeight + 40,
  },
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
  },
});
