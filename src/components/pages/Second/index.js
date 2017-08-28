import { observer } from 'mobx-react/native';
import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { ICON_MESSAGE, ICON_SETTING, } from '../../../global/images';
import styles from './styles';
import Navbar from '../../shared/Navbar';
import SearchView from '../../shared/SearchView';
import List from '../../shared/List';
import searchStore from '../../../store/searchStore';

const dateFormat1 = 'MM.DD';
const dateFormat2 = 'DD';

@observer
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchViewVisible: false,
    };
  }

  handleBack = () => {
    this.props.navigation.goBack();
    console.log('handleBack');
  }

  handleSearched = () => {
    console.log('handleSearched');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={ styles.header }>
          <Navbar
            showBack={true}
            handleBack={this.handleBack}
          > Let's Travel </Navbar>
        </View>
        <View style={ styles.content }>
          <ScrollView style={{ alignSelf: 'stretch', }}>
            <View style={styles.viewTop}>
              <Image style={styles.topImg1} source={ ICON_MESSAGE } />
              <Text style={styles.fontBlackStyle}>{searchStore.search.area}</Text>
              <Text style={styles.fontGrayStyle}>  /  </Text>
              <Text style={styles.fontBlackStyle}>{searchStore.search.people + 1}인</Text>
              <Text style={styles.fontGrayStyle}>  /  </Text>
              <Text style={styles.fontBlackStyle}>
                {
                  searchStore.search.startDate && searchStore.search.endDate
                    ? searchStore.search.startDate.format(dateFormat1) + '-' + searchStore.search.endDate.format(dateFormat2)
                    : null
                }
              </Text>
              <TouchableOpacity
                style={styles.topImg2View}
                activeOpacity={0.5}
                onPress={() => this.setState({
                  searchViewVisible: !this.state.searchViewVisible,
                })}
              >
                <Image style={styles.topImg2} source={ ICON_SETTING } />
              </TouchableOpacity>
              <View style={styles.topOval}>
                <Text style={styles.topOvalTxt}>{searchStore.search.results.length}</Text>
              </View>
            </View>
            {
              this.state.searchViewVisible
                ? <SearchView handleSearched = { this.handleSearched }/>
                : null
            }
            {
              searchStore.search.results.map((datum, index) =>
                <List key={index} datum={datum}/>,
              )
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Page;
