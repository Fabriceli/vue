<style lang="less">
    @import '../../../styles/common.less';
    @import './components/table.less';
</style>

<template>
    <div>
        <Row type="flex" :gutter="10">
            <Col :md="24" :lg="16">
                <Card class="margin-top-10" >
                    <p slot="title">
                        <Icon type="android-remove"></Icon>
                        项目详细页——价格图TradingView或其他工具
                    </p>
                    <div class="edittable-table-height-con">
                    </div>

                </Card>
                <Card class="margin-top-10">
                    <Tabs>
                        <TabPane label="项目资料" icon="ios-browsers">项目基本资料，一个表，尽量和股票等项目通用</TabPane>
                        <TabPane label="项目评级" icon="compose">项目评级的内容，独立一个表</TabPane>
                        <TabPane label="团队成员" icon="person-stalker"">团队成员结构，顾问，成员，成员信息一个表，身份角色一个表，多对多关系一个表，人员变动</TabPane>
                        <TabPane label="机构融资" icon="ribbon-b">多轮融资详细信息内容，可以用事件表录入，整合在一起，融资信息一个表（时间，金额，机构，详细内容）</TabPane>
                    </Tabs>
                </Card>
                <Card class="margin-top-10">
                    <Tabs>
                        <TabPane label="众筹详细" icon="pie-graph">众筹详细，代币初始值的内容，独立一个表</TabPane>
                        <TabPane label="筹码跟踪" icon="ios-pulse-strong">筹码变化的内容，etherscanAPI，预留字段</TabPane>
                        <TabPane label="交易数据" icon="stats-bars">每天交易数据的内容，coinmarketcap或其他数据源</TabPane>
                        <TabPane label="大户追踪" icon="flash">筹码变化的内容，etherscanAPI，预留字段</TabPane>

                    </Tabs>
                </Card>
                <Card class="margin-top-10">
                    <Tabs>
                        <TabPane label="官方资讯" icon="home">官方资讯——结合CRUP模型</TabPane>
                        <TabPane label="项目活动" icon="social-tux">项目活动——结合CRUP模型</TabPane>
                        <TabPane label="社区舆论" icon="mic-c">社区舆论——结合CRUP模型</TabPane>
                        <TabPane label="做空信息" icon="mic-c">做空信息——结合CRUP模型</TabPane>
                        <TabPane label="上新记录" icon="flash">上新交易所，etherscanAPI，预留字段，可以通过therscan反推</TabPane>
                    </Tabs>
                </Card>
                <Card class="margin-top-10">
                    <Tabs>
                        <TabPane label="资金面分析" icon="arrow-swap">国家数据和行业数据展示，结合crup事件展示</TabPane>
                        <TabPane label="未来事件" icon="arrow-swap">未来1-3个月将要发生的事，CRUP模型</TabPane>
                        <TabPane label="盈利预期" icon="arrow-swap">项目盈利能力分析，CRUP模型</TabPane>
                        <TabPane label="技术形态" icon="social-usd">自行截图是分析，成交量，时空，技术分析模型</TabPane>

                    </Tabs>
                </Card>
                <Card class="margin-top-10">
                    <Tabs>
                        <TabPane label="应对操作" icon="clipboard">提早做应对操作，camplist操作模型</TabPane>
                        <TabPane label="买卖记录" icon="arrow-swap">自己的买卖记录</TabPane>
                        <TabPane label="盈利分析" icon="social-usd">盈利买卖点分析</TabPane>
                        <TabPane label="自己笔记" icon="clipboard">每天交易数据的内容</TabPane>
                    </Tabs>
                </Card>
            </Col>
            <Col :md="24" :lg="8">
                <Card class="margin-top-10">
                    <p slot="title">
                        <Icon type="android-remove"></Icon>
                        系统操作提示
                    </p>
                    <div class="edittable-table-height-con">

                    </div>

                </Card>
                <Card class="margin-top-10">
                    <p slot="title">
                        <Icon type="android-remove"></Icon>
                        自己操作提示
                    </p>
                    <div class="edittable-table-height-con">

                    </div>

                </Card>
                <Card >
                    <p slot="title">
                        <Icon type="ios-film-outline"></Icon>
                        Classic film
                    </p>
                    <a href="#" slot="extra" @click.prevent="changeLimit">
                        <Icon type="ios-loop-strong"></Icon>
                        Change
                    </a>
                    <ul>
                        <li v-for="item in randomMovieList">
                            <a :href="item.url" target="_blank">{{ item.name }}</a>
                            <span>
                                <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>
                                {{ item.rate }}
                            </span>
                        </li>
                    </ul>
                </Card>
            </Col>
        </Row>

    </div>
</template>
<script>
    export default {

    }
</script>
<script>
import canEditTable from './components/canEditTable.vue';
import tableData from './components/table_data.js';
export default {
    name: 'editable-table',
    components: {
        canEditTable
    },
    data () {
        return {
            columnsList: [],
            tableData: [],
            editInlineColumns: [],
            editInlineData: [],
            editIncellColumns: [],
            editIncellData: [],
            editInlineAndCellColumn: [],
            editInlineAndCellData: [],
            showCurrentColumns: [],
            showCurrentTableData: false
        };
    },
    methods: {
        getData () {
            this.columnsList = tableData.table1Columns;
            this.tableData = tableData.table1Data;
            this.editInlineColumns = tableData.editInlineColumns;
            this.editInlineData = tableData.editInlineData;
            this.editIncellColumns = tableData.editIncellColumns;
            this.editIncellData = tableData.editIncellData;
            this.editInlineAndCellColumn = tableData.editInlineAndCellColumn;
            this.editInlineAndCellData = tableData.editInlineAndCellData;
            this.showCurrentColumns = tableData.showCurrentColumns;
        },
        handleNetConnect (state) {
            this.breakConnect = state;
        },
        handleLowSpeed (state) {
            this.lowNetSpeed = state;
        },
        getCurrentData () {
            this.showCurrentTableData = true;
        },
        handleDel (val, index) {
            this.$Message.success('删除了第' + (index + 1) + '行数据');
        },
        handleCellChange (val, index, key) {
            this.$Message.success('修改了第 ' + (index + 1) + ' 行列名为 ' + key + ' 的数据');
        },
        handleChange (val, index) {
            this.$Message.success('修改了第' + (index + 1) + '行数据');
        }
    },
    created () {
        this.getData();
    }
};
</script>

<script>
    export default {
        data () {
            return {
                movieList: [
                    {
                        name: 'The Shawshank Redemption',
                        url: 'https://movie.douban.com/subject/1292052/',
                        rate: 9.6
                    },
                    {
                        name: 'Leon:The Professional',
                        url: 'https://movie.douban.com/subject/1295644/',
                        rate: 9.4
                    },
                    {
                        name: 'Farewell to My Concubine',
                        url: 'https://movie.douban.com/subject/1291546/',
                        rate: 9.5
                    },
                    {
                        name: 'Forrest Gump',
                        url: 'https://movie.douban.com/subject/1292720/',
                        rate: 9.4
                    },
                    {
                        name: 'Life Is Beautiful',
                        url: 'https://movie.douban.com/subject/1292063/',
                        rate: 9.5
                    },
                    {
                        name: 'Spirited Away',
                        url: 'https://movie.douban.com/subject/1291561/',
                        rate: 9.2
                    }
                ],
                randomMovieList: []
            }
        },
        methods: {
            changeLimit () {
                function getArrayItems(arr, num) {
                    const temp_array = [];
                    for (let index in arr) {
                        temp_array.push(arr[index]);
                    }
                    const return_array = [];
                    for (let i = 0; i<num; i++) {
                        if (temp_array.length>0) {
                            const arrIndex = Math.floor(Math.random()*temp_array.length);
                            return_array[i] = temp_array[arrIndex];
                            temp_array.splice(arrIndex, 1);
                        } else {
                            break;
                        }
                    }
                    return return_array;
                }
                this.randomMovieList = getArrayItems(this.movieList, 5);
            }
        },
        mounted () {
            this.changeLimit();
        }
    }
</script>
