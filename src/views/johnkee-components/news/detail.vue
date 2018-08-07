<style lang="less">
    @import '../../../styles/common.less';
    @import './components/table.less';
</style>

<template>
    <div >
        <Row :gutter="10" class="margin-top-10">
            <Col :md="24" :lg="17" :style="{marginBottom: '10px'}">
                <Card>
                    <p slot="title">
                        <Icon type="android-remove"></Icon>
                        事件详细描述
                    </p>
                    <div class="edittable-table-height-con">
                        <can-edit-table refs="table2" v-model="editInlineData" :columns-list="editInlineColumns"></can-edit-table>
                    </div>

                </Card>
                <Card class="margin-top-10">
                    <Tabs>
                        <TabPane label="事件分类" icon="social-apple">事件分类分析</TabPane>
                        <TabPane label="事件影响" icon="social-apple">事件时间影响重要性分析</TabPane>
                        <TabPane label="事件关联" icon="social-windows">事件关联分析</TabPane>

                    </Tabs>
                </Card>
                <Card class="margin-top-10">
                    <Tabs>
                        <TabPane label="众人评价" icon="social-tux">事件WRCUP众人评价模型</TabPane>
                    </Tabs>
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
                <Card class="margin-top-10">
                    <p slot="title">
                        <Icon type="android-remove"></Icon>
                        自己操作提示
                    </p>
                    <div class="edittable-table-height-con">
                    </div>
                </Card>
            </Col>

        </Row>
    </div>
</template>


<script>
    export default {

    }
</script>
