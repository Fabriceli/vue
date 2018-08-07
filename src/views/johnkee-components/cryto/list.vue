<style lang="less">
    @import '../../../styles/common.less';
    @import './components/table.less';
</style>

<template>
    <div>
        <Row :gutter="10" class="margin-top-10">
            <Col :md="24" :lg="17" :style="{marginBottom: '10px'}">
                <Card>
                    <p slot="title">
                        <Icon type="android-remove"></Icon>
                        虚拟货币排行榜
                    </p>
                    <div class="edittable-table-height-con" style="height:50px">
                        价格图TradingView或其他工具
                    </div>
                </Card>
                <Card class="margin-top-10" style="padding-bottom:10px">
                    <p slot="title">
                        <Icon type="android-remove"></Icon>
                        筛选器
                    </p>
                    <div  style="padding-left:10px">
                        <p>
                        星级评定：
                            <Tag checkable checked="false" >标签一</Tag>
                            <Tag checkable checked color="blue">标签二</Tag>
                            <Tag checkable checked="null" color="blue">标签三</Tag>
                            <Tag checkable unchecked color="blue">标签四</Tag>
                        </p>
                        <p style="margin-top:7px">
                            基金规模：
                            <Tag checkable checked="false" >标签一</Tag>
                            <Tag checkable checked color="blue">标签二</Tag>
                            <Tag checkable checked="null" color="blue">标签三</Tag>
                            <Tag checkable checked color="blue">标签四</Tag>
                        </p>
                        <p style="margin-top:7px">
                            基金规模：
                            <Tag checkable checked="false" >标签一</Tag>
                            <Tag checkable checked color="blue">标签二</Tag>
                            <Tag checkable checked="null" color="blue">标签三</Tag>
                            <Tag checkable checked color="blue">标签四</Tag>
                        </p>
                        <p style="margin-top:7px">
                            基金规模：
                            <Tag checkable checked="false" >标签一</Tag>
                            <Tag checkable checked color="blue">标签二</Tag>
                            <Tag checkable checked="null" color="blue">标签三</Tag>
                            <Tag checkable checked color="blue">标签四</Tag>
                        </p>
                        <p style="margin-top:7px">
                            智能查询：
                                <AutoComplete
                                    v-model="value3"
                                    :data="data3"
                                    :filter-method="filterMethod"
                                    placeholder="搜索相关项目"
                                    style="width:150px;">
                                </AutoComplete>
                        </p>

                        <p style="margin-top:7px">
                            选择结果：
                            <Tag checkable closable="false" checked="false" color="blue">标签一</Tag>
                            <Tag checkable closable="true"  checked color="blue">标签二</Tag>

                        </p>
                    </div>
                </Card>

            </Col>
            <Col :md="24" :lg="7" :style="{marginBottom: '10px'}">
                <Card >
                    <p slot="title">
                        <Icon type="android-remove"></Icon>
                        系统操作提示
                    </p>
                    <div class="edittable-table-height-con">
                    </div>
                </Card>

            </Col>
        </Row>
        <Row :gutter="10" >
            <Col :md="24">
                <Card>
                    <p slot="title">
                        <Icon type="android-archive"></Icon>
                        筛选结果-导出表格数据到Excel文件
                    </p>
                    <Table :columns="excelColumns" height="390px" :data="table2excelData" size="small" ref="tableExcel"></Table>
                    <div class="margin-top-10 margin-left-10">
                        <span>输入文件名：</span>
                        <Input v-model="excelFileName" icon="document" placeholder="请输入文件名" style="width: 190px" />
                        <a id="hrefToExportTable" style="postion: absolute;left: -10px;top: -10px;width: 0px;height: 0px;"></a>
                        <Button type="primary" size="small" @click="exportExcel">下载表格数据</Button>
                    </div>

                </Card>
            </Col>
        </Row>

    </div>
</template>

<script>
import {table2csvData, csvColumns} from './data/table2csv.js';
import {table2excelData, excelColumns} from './data/table2excel.js';
import table2excel from '@/libs/table2excel.js';
export default {
    name: 'exportable-table',
    data () {
        return {
            columnsCsv: csvColumns,
            csvData: table2csvData,
            table2excelData: table2excelData,
            excelColumns: excelColumns,
            rowNum: table2csvData.length,
            colNum: csvColumns.length,
            selectMinRow: 1,
            selectMaxRow: table2csvData.length,
            selectMinCol: 1,
            selectMaxCol: csvColumns.length,
            maxRow: 0,
            minRow: 1,
            maxCol: 0,
            minCol: 1,
            csvFileName: '',
            excelFileName: '',
            tableExcel: {},
            fontSize: 16
        };
    },
    methods: {
        exportData (type) {
            if (type === 1) {
                this.$refs.tableCsv.exportCsv({
                    filename: '原始数据'
                });
            } else if (type === 2) {
                this.$refs.tableCsv.exportCsv({
                    filename: '排序和过滤后的数据',
                    original: false
                });
            } else if (type === 3) {
                this.$refs.tableCsv.exportCsv({
                    filename: this.csvFileName,
                    columns: this.columnsCsv.filter((col, index) => index >= this.selectMinCol - 1 && index <= this.selectMaxCol - 1),
                    data: this.csvData.filter((data, index) => index >= this.selectMinRow - 1 && index <= this.selectMaxRow - 1)
                });
            }
        },
        exportExcel () {
            table2excel.transform(this.$refs.tableExcel, 'hrefToExportTable', this.excelFileName);
        }
    }
};
</script>
