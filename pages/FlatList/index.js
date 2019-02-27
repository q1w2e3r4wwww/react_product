import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList ,RefreshControl ,ActivityIndicator , SwipeableFlatList , TouchableHighlight} from 'react-native'

const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

class FList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            data: data
        }
    }

    render() {
        return (
            <View style={styles.mainBox}>
              {/*  <FlatList
                    data={this.state.data}
                    renderItem={({item}) => this._renderData(item)}
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
                    ListFooterComponent={() => this._onLoadStyle()} // 上拉加载样式
                    onEndReached={ () => this._onLoadData()} // 上拉加载数据
                />*/}
                <SwipeableFlatList // 额外具有FlatList的下拉刷新和上拉加载的功能
                    data={this.state.data}
                    renderItem={({item}) => this._renderData(item)}
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
                    ListFooterComponent={() => this._onLoadStyle()} // 上拉加载样式
                    onEndReached={ () => this._onLoadData()} // 上拉加载数据
                    renderQuickActions={() => this.getQuickActions()}// 创建内容的侧滑菜单
                    maxSwipeDistance={80}//可展开（滑动）的距离
                    bounceFirstRowOnMount={false}//进去的时候不展示侧滑效果
                />
            </View>
        );
    };
    //侧滑菜单渲染
    getQuickActions = () => {
        return <View style={styles.quickAContent}>
            <TouchableHighlight
                style={styles.quick}
                onPress={() => alert("确认删除？")}
            >
                <View>
                    <Text style={styles.delete}>删除</Text>
                </View>
            </TouchableHighlight>
        </View>
    };
    _renderData(item) {
        return (
            <View style={styles.content}>
                <Text style={styles.text}>{item}</Text>
            </View>
        )
    }
    _onLoadStyle(){
        return (
            <View style={styles.load}>
                <ActivityIndicator
                    style={styles.indicator}
                    size={'large'}
                    animating={true}
                />
                    <Text style={styles.loadLabel}>正在加载...</Text>
            </View>
        )
    }
    _onLoadData(){
        setTimeout(() => {
            this.setState({
                data: [...data, data]
            })
        }, 1000)
    }
    _refresh() {
        this.setState({
            refreshing: true,
        });
        setTimeout(() => {
            this.setState({
                refreshing: false,
                data: [...data, '11', '12']
            })
        }, 1000)
    }
}

const styles = StyleSheet.create({
    mainBox: {
        paddingLeft: 10,
        paddingRight: 10
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: '#168',
        marginTop: 10
    },
    text: {
        fontSize: 20,
        color: '#ffffff'
    },
    load:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadLabel:{
        fontSize: 18,
    },
    indicator:{
        marginTop: 10
    },
    //侧滑菜单的样式
    quickAContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: "#ff0",
        marginTop:10,
    },
    quick: {
        backgroundColor: "#ff1d49",
        flex: 1,
        width:'100%',
        alignItems: 'flex-end',//水平靠右
        justifyContent: 'center',//上下居中
    },
    delete: {
        color: "#d8fffa",
        fontSize:18,
        width:80,
        alignItems:'center',
        textAlign: 'center'
    }
});

export default FList;