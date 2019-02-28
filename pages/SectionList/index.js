import React, {Component} from 'react';
import {StyleSheet, View, Text, SectionList ,RefreshControl ,ActivityIndicator } from 'react-native'

const sections = [
    { key: "A", data: [{ title: "阿童木" }, { title: "阿玛尼" }, { title: "爱多多" }] },
    { key: "B", data: [{ title: "表哥" }, { title: "贝贝" }, { title: "表弟" }, { title: "表姐" }, { title: "表叔" }] },
    { key: "C", data: [{ title: "成吉思汗" }, { title: "超市快递" }] },
    { key: "W", data: [{ title: "王磊" }, { title: "王者荣耀" }, { title: "往事不能回味" },{ title: "王小磊" }, { title: "王中磊" }, { title: "王大磊" }] },
];
class FList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            data: sections
        }
    }
    render() {
        return (
            <View style={styles.mainBox}>
                <SectionList
                    renderSectionHeader={this._sectionComp}
                    renderItem={this._renderItem}
                    sections={this.state.data}
                    ItemSeparatorComponent={() => <View style={styles.separator} />} // 行与行之间的分割线
                    ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录</Text></View>}
                    ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录尾部</Text></View>}
                    refreshControl={ // 下拉刷新
                        <RefreshControl
                            title={'Loading...'}
                            colors={['red']}
                            tintColor={['yellow']} // 这个属性是苹果端的
                            titleColor={'red'}
                            refreshing={this.state.refreshing}
                            onRefresh={() => this._refresh()}
                        />
                    }
                />
            </View>
        );
    };
    _renderItem = (info) => {
        let txt = '  ' + info.item.title;
        return <Text
            style={{ height: 60, textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 15 }}>{txt}</Text>
    }

    _sectionComp = (info) => {
        let txt = info.section.key;
        return <Text
            style={{ height: 50, textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#9CEBBC', color: 'white', fontSize: 30 }}>{txt}</Text>
    }
    _refresh() {
        this.setState({
            refreshing: true,
        });
        setTimeout(() => {
            this.setState({
                refreshing: false,
            })
        }, 1000)
    }
}

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: '#168',
        marginBottom:10
    },
    text: {
        fontSize: 20,
        color: '#ffffff'
    },
    separator:{
      flex:1,
      height:1,
      backgroundColor:'#eee'
    },
    load:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadLabel:{
        fontSize: 18,
    },
});

export default FList;