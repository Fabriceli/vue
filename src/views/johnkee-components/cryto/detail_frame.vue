<style lang="less">
    @import '../../../styles/common.less';
    @import './components/table.less';
</style>

<template>
    <div>
        <Row type="flex" :gutter="10">
            <Col :md="24" :lg="16">
                <Row class-name="home-page-row1" :gutter="10">

                    <Col :md="12" :lg="24" :style="{marginBottom: '10px'}">
                        <Card>

                        </Card>
                    </Col>
                    <Col :md="12" :lg="24" :style="{marginBottom: '10px'}">
                        <Card>

                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col :md="24" :lg="18">
                <Row :gutter="5">

                </Row>
                <Row>
                    <Card :padding="0">

                    </Card>
                </Row>
            </Col>
        </Row>
        <Row :gutter="10" class="margin-top-10">
            <Col :md="24" :lg="8" :style="{marginBottom: '10px'}">

            </Col>
            <Col :md="24" :lg="8" :style="{marginBottom: '10px'}">

            </Col>
            <Col :md="24" :lg="8">

            </Col>
        </Row>
        <Row class="margin-top-10">

        </Row>
    </div>
</template>


<script>
    export default {

    }
</script>
