<style lang="less">
    @import '../../../styles/common.less';
    @import './access.less';
</style>

<template>
    <div class="access">
        <Row>
            <Col span="16" class="padding-left-10">
                <Card span="16" class="padding-top-10" v-for="(news,index) in allNews" :key=index>
                    <p slot="title">
                        <Icon type="android-contacts" v-text=" news.news_cntitle"></Icon>
                    </p>
                    <div class="access-user-con access-change-access-con">
                        <Col span="16" class="padding-left-10">
                            <p>{{ news.news_content }}</p>
                        </Col>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
import { getNews, queryProjects } from '../../../api/api';
export default {
    name: 'news-view',
    data () {
        return {
            allNews: [], // news
            allProjects: [],
            data1: [],
            initTable1: []
        };
    },
    methods: {
        getnews () { // 获取菜单
            getNews({
                params: {}
            }).then((response) => {
                // console.log(response);
                this.allNews = response.data.results;
            })
                .catch(function (error) {
                    console.log(error);
                    //this.allMenuLabel = error;
                });
        },
        getProjects () { // 获取项目列表
            queryProjects({
                params: {}
            }).then((response) => {
                // console.log(response);
                this.allProjects = response.data;
                this.data1  = this.allProjects.results;
            })
                .catch(function (error) {
                    console.log(error);
                    //this.allProjects = error;
                });
        }
    },
    created () {
        this.getnews(); // 获取news
        this.getProjects();
    }
};
</script>

<style>

</style>
