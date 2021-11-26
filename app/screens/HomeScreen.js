import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
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
          <Text style={styles.headerViewText}>Grean House</Text>
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
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <View style={styles.middleItemListItemView}>
            <View style={styles.middleItemListItemWrapperView}>
            <Image source={require('../accests/images/SashimiSalad.png')} style={styles.middleItemListImageView} />
              <View style={styles.middleItemListDiscriptionView}>
                <View style={styles.middleItemListDiscriptionTextWrapper}>
                  <Text style={styles.middleItemListDiscriptionMainText}>
                    Sashimi Salad
                  </Text>
                  <Text style={styles.middleItemListDiscriptionSubText}>
                    Raw tuna marinated in sesame oil
                  </Text>
                  <Text style={styles.middleItemListDiscriptionPriceText}>
                    $15.47
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.middleItemListItemView}>
            <View style={styles.middleItemListItemWrapperView}>
              <Image source={require('../accests/images/QuinoaSalad.jpg')} style={styles.middleItemListImageView} />
              <View style={styles.middleItemListDiscriptionView}>
                <View style={styles.middleItemListDiscriptionTextWrapper}>
                  <Text style={styles.middleItemListDiscriptionMainText}>
                    Quinoa Salad
                  </Text>
                  <Text style={styles.middleItemListDiscriptionSubText}>
                    warm quinoa with garlic olive oil
                  </Text>
                  <Text style={styles.middleItemListDiscriptionPriceText}>
                    $17.47
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.middleItemListItemView}>
            <View style={styles.middleItemListItemWrapperView}>
              <Image source={require('../accests/images/default.jpg')} style={styles.middleItemListImageView} />
              <View style={styles.middleItemListDiscriptionView}>
                <View style={styles.middleItemListDiscriptionTextWrapper}>
                  <Text style={styles.middleItemListDiscriptionMainText}>
                    Sashimi Salad
                  </Text>
                  <Text style={styles.middleItemListDiscriptionSubText}>
                    Raw tuna marinated in sesame oil
                  </Text>
                  <Text style={styles.middleItemListDiscriptionPriceText}>
                    $15.47
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.middleItemListItemView}>
            <View style={styles.middleItemListItemWrapperView}>
              <Image source={require('../accests/images/QuinoaSalad.jpg')} style={styles.middleItemListImageView} />
              <View style={styles.middleItemListDiscriptionView}>
                <View style={styles.middleItemListDiscriptionTextWrapper}>
                  <Text style={styles.middleItemListDiscriptionMainText}>
                    Sashimi Salad
                  </Text>
                  <Text style={styles.middleItemListDiscriptionSubText}>
                    Raw tuna marinated in sesame oil
                  </Text>
                  <Text style={styles.middleItemListDiscriptionPriceText}>
                    $15.47
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.middleItemListItemView}>
            <View style={styles.middleItemListItemWrapperView}>
              <Image source={require('../accests/images/default.jpg')} style={styles.middleItemListImageView} />
              <View style={styles.middleItemListDiscriptionView}>
                <View style={styles.middleItemListDiscriptionTextWrapper}>
                  <Text style={styles.middleItemListDiscriptionMainText}>
                    Sashimi Salad
                  </Text>
                  <Text style={styles.middleItemListDiscriptionSubText}>
                    Raw tuna marinated in sesame oil
                  </Text>
                  <Text style={styles.middleItemListDiscriptionPriceText}>
                    $15.47
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.middleItemListItemView}>
            <View style={styles.middleItemListItemWrapperView}>
              <Image source={require('../accests/images/QuinoaSalad.jpg')} style={styles.middleItemListImageView} />
              <View style={styles.middleItemListDiscriptionView}>
                <View style={styles.middleItemListDiscriptionTextWrapper}>
                  <Text style={styles.middleItemListDiscriptionMainText}>
                    Sashimi Salad
                  </Text>
                  <Text style={styles.middleItemListDiscriptionSubText}>
                    Raw tuna marinated in sesame oil
                  </Text>
                  <Text style={styles.middleItemListDiscriptionPriceText}>
                    $15.47
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

 
        </View>
      </View>
      <View style={styles.middleHeaderView}>
        <View style={styles.middleHeaderViewWrapper}>
          <Text style={styles.middleHeaderViewText}>SEASONAL</Text>
          <View style={[styles.middleHeaderViewLine, {width: 270}]} />
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.bottomViewWrapper}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.bottomViewItemWrapper}>
              <Image  source={require('../accests/images/mixSalad.jpg')} style={styles.bottomViewItemImage} />
              <Text style={styles.middleItemListDiscriptionMainText}>
                Mixed Salad
              </Text>
              <Text
                style={[
                  styles.middleItemListDiscriptionSubText,
                  {
                    marginTop: 1,
                    marginLeft: 2,
                    marginRight: 2,
                    textAlign: 'center',
                  },
                ]}>
                Colorful variety of veggies
              </Text>
              <Text style={styles.middleItemListDiscriptionPriceText}>
                $8.40
              </Text>
            </View>
            <View style={styles.bottomViewItemWrapper}>
              <Image  source={require('../accests/images/Acar.jpg')} style={styles.bottomViewItemImage} />
              <Text style={styles.middleItemListDiscriptionMainText}>
              Acar
              </Text>
              <Text
                style={[
                  styles.middleItemListDiscriptionSubText,
                  {
                    marginTop: 1,
                    marginLeft: 2,
                    marginRight: 2,
                    textAlign: 'center',
                  },
                ]}>
                Colorful variety of veggies
              </Text>
              <Text style={styles.middleItemListDiscriptionPriceText}>
                $5.40
              </Text>
            </View>
            <View style={styles.bottomViewItemWrapper}>
              <Image  source={require('../accests/images/Asinan.jpg')} style={styles.bottomViewItemImage} />
              <Text style={styles.middleItemListDiscriptionMainText}>
              Asinan
              </Text>
              <Text
                style={[
                  styles.middleItemListDiscriptionSubText,
                  {
                    marginTop: 1,
                    marginLeft: 2,
                    marginRight: 2,
                    textAlign: 'center',
                  },
                ]}>
                Colorful variety of veggies
              </Text>
              <Text style={styles.middleItemListDiscriptionPriceText}>
                $2.40
              </Text>
            </View>
            <View style={styles.bottomViewItemWrapper}>
              <Image  source={require('../accests/images/Asinan.jpg')} style={styles.bottomViewItemImage} />
              <Text style={styles.middleItemListDiscriptionMainText}>
                Mixed Salad
              </Text>
              <Text
                style={[
                  styles.middleItemListDiscriptionSubText,
                  {
                    marginTop: 1,
                    marginLeft: 2,
                    marginRight: 2,
                    textAlign: 'center',
                  },
                ]}>
                Colorful variety of veggies
              </Text>
              <Text style={styles.middleItemListDiscriptionPriceText}>
                $8.40
              </Text>
            </View>
            <View style={styles.bottomViewItemWrapper}>
              <Image  source={require('../accests/images/mixSalad.jpg')} style={styles.bottomViewItemImage} />
              <Text style={styles.middleItemListDiscriptionMainText}>
                Mixed Salad
              </Text>
              <Text
                style={[
                  styles.middleItemListDiscriptionSubText,
                  {
                    marginTop: 1,
                    marginLeft: 2,
                    marginRight: 2,
                    textAlign: 'center',
                  },
                ]}>
                Colorful variety of veggies
              </Text>
              <Text style={styles.middleItemListDiscriptionPriceText}>
                $8.40
              </Text>
            </View>
            <View style={styles.bottomViewItemWrapper}>
              <Image  source={require('../accests/images/mixSalad.jpg')} style={styles.bottomViewItemImage} />
              <Text style={styles.middleItemListDiscriptionMainText}>
                Mixed Salad
              </Text>
              <Text
                style={[
                  styles.middleItemListDiscriptionSubText,
                  {
                    marginTop: 1,
                    marginLeft: 2,
                    marginRight: 2,
                    textAlign: 'center',
                  },
                ]}>
                Colorful variety of veggies
              </Text>
              <Text style={styles.middleItemListDiscriptionPriceText}>
                $8.40
              </Text>
            </View>
            <View style={styles.bottomViewItemWrapper}>
              <Image  source={require('../accests/images/mixSalad.jpg')} style={styles.bottomViewItemImage} />
              <Text style={styles.middleItemListDiscriptionMainText}>
                Mixed Salad
              </Text>
              <Text
                style={[
                  styles.middleItemListDiscriptionSubText,
                  {
                    marginTop: 1,
                    marginLeft: 2,
                    marginRight: 2,
                    textAlign: 'center',
                  },
                ]}>
                Colorful variety of veggies
              </Text>
              <Text style={styles.middleItemListDiscriptionPriceText}>
                $8.40
              </Text>
            </View>
            <View style={styles.bottomViewItemWrapper}>
              <Image  source={require('../accests/images/mixSalad.jpg')} style={styles.bottomViewItemImage} />
              <Text style={styles.middleItemListDiscriptionMainText}>
                Mixed Salad
              </Text>
              <Text
                style={[
                  styles.middleItemListDiscriptionSubText,
                  {
                    marginTop: 1,
                    marginLeft: 2,
                    marginRight: 2,
                    textAlign: 'center',
                  },
                ]}>
                Colorful variety of veggies
              </Text>
              <Text style={styles.middleItemListDiscriptionPriceText}>
                $8.40
              </Text>
            </View>
            <View style={styles.bottomViewItemWrapper}>
              <Image  source={require('../accests/images/mixSalad.jpg')} style={styles.bottomViewItemImage} />
              <Text style={styles.middleItemListDiscriptionMainText}>
                Mixed Salad
              </Text>
              <Text
                style={[
                  styles.middleItemListDiscriptionSubText,
                  {
                    marginTop: 1,
                    marginLeft: 2,
                    marginRight: 2,
                    textAlign: 'center',
                  },
                ]}>
                Colorful variety of veggies
              </Text>
              <Text style={styles.middleItemListDiscriptionPriceText}>
                $8.40
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bottomViewItemImage: {
    width: 110,
    height: 110,
    marginTop: 10,
    borderRadius: 55,
    borderColor: COLOR.territory,
    borderWidth: 4,
  },
  bottomViewItemWrapper: {
    flex: 1,
    flexDirection: 'column',
    width: 150,
    height: 230,
    alignItems: 'center',
    margin: 5,
  },
  bottomViewWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  bottomView: {
    width: '100%',
    height: '100%',
  },
  middleItemListDiscriptionPriceText: {
    fontSize: 25,
    fontWeight: '600',
  },
  middleItemListDiscriptionSubText: {
    fontSize: 14,
  },
  middleItemListDiscriptionMainText: {
    fontSize: 20,
    fontWeight: '800',
  },
  middleItemListDiscriptionTextWrapper: {
    left: 60,
    marginTop: 10,
  },
  middleItemListDiscriptionView: {
    width: '80%',
    height: 100,
    marginTop: 5,
    borderRadius: 40,
    left: -50,
    backgroundColor: COLOR.secondary,
    zIndex: 1,
  },
  middleItemListImageView: {
    borderColor: COLOR.territory,
    borderWidth: 4,
    width: 110,
    height: 110,
    borderRadius: 55,
    zIndex: 2,
  },
  middleItemListItemWrapperView: {
    flex: 1,
    flexDirection: 'row',
  },

  middleItemListItemView: {
    backgroundColor: COLOR.white,
    width: '100%',
    height: 110,
    marginVertical: 8,
    marginTop: 0,
  },
  middleItemListView: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: COLOR.white,
    margin: 4,
  },
  middleItemViewWrapper: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  middleItemView: {
    width: '100%',
    height: 250,
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
