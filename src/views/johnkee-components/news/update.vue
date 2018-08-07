<style lang="less">
    @import '../../../styles/common.less';
    @import './article-publish.less';
</style>

<template>
    <div>
        <Row :gutter="10" class="margin-top-10">
            <Col :md="24" :lg="6" :style="{marginBottom: '10px'}">
                <Card>
                    <p slot="title">
                        <Icon type="ios-pricetags-outline"></Icon>
                        事件分类
                    </p>
                    <p >
                        <Icon type="android-time"></Icon>&nbsp;&nbsp;事件类别：
                        <Select style="width:150px" value="融资信息">
                            <Option v-for="item in articleStateList" :value="item.value" :key="item.value">{{ item.value }}</Option>
                        </Select>
                    </p>
                    <p class="margin-top-10">
                        <Icon type="android-time"></Icon>&nbsp;&nbsp;事件来源：
                        <Select style="width:150px" value="国家性">
                            <Option v-for="item in articleStateList" :value="item.value" :key="item.value">{{ item.value }}</Option>
                        </Select>
                    </p>
                    <p class="margin-top-10">
                        <Icon type="android-time"></Icon>&nbsp;&nbsp;事件所属：
                        <Select  style="width:150px" v-model="articleTagSelected" multiple @on-change="handleSelectTag" >
                            <Option v-for="item in articleTagList" :value="item.value" :key="item.value">{{ item.value }}</Option>
                        </Select>
                    </p>
                </Card>
                <Card class="margin-top-10">
                    <p slot="title">
                        <Icon type="ios-pricetags-outline"></Icon>
                        重要性分析
                    </p>
                    <p >
                        <Icon type="android-time"></Icon>&nbsp;&nbsp;重要程度：
                        <Rate show-text allow-half >
                            <span style="color: #f5a623"></span>
                        </Rate>
                    </p>
                    <p class="margin-top-10">
                        <Icon type="android-time"></Icon>&nbsp;&nbsp;影响天数：
                        <Select style="width:150px" value="国家性">
                            <Option v-for="item in articleStateList" :value="item.value" :key="item.value">{{ item.value }}</Option>
                        </Select>
                    </p>
                    <p class="margin-top-10">
                        <Icon type="android-time"></Icon>&nbsp;&nbsp;发生时间：
                        <DatePicker type="date" :options="options1" placeholder="Select date" style="width: 150px"></DatePicker>
                    </p>
                    <p class="margin-top-10">
                        <Icon type="android-time"></Icon>&nbsp;&nbsp;发布时间：
                        <DatePicker type="date" :options="options1" placeholder="Select date" style="width: 150px"></DatePicker>
                    </p>
                </Card>
                <Card class="margin-top-10">
                    <p slot="title">
                        <Icon type="ios-pricetags-outline"></Icon>
                        事件校验
                    </p>
                    <p class="margin-top-10">
                        <Icon type="android-time"></Icon>&nbsp;&nbsp;是否真实：
                        <Radio label="真实信息"></Radio>
                        <Radio label="虚假信息"></Radio>
                    </p>
                    <p class="margin-top-10">
                        <Icon type="android-time"></Icon>&nbsp;&nbsp;来源链接：
                        <Input style="width:150px" />
                    </p>
                    <p class="margin-top-10">
                        <Icon type="android-time"></Icon>&nbsp;&nbsp;来源证据：
                        <Upload class="margin-top-10" action="//jsonplaceholder.typicode.com/posts/">
                            <Button style="width:150px" type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
                        </Upload>
                    </p>
                    <p class="margin-top-10">
                        <Icon type="android-time"></Icon>&nbsp;&nbsp;采集信息：
                        <RadioGroup type="button">
                            <Radio label="自动采集"></Radio>
                            <Radio label="手工录入"></Radio>
                        </RadioGroup>
                    </p>
                </Card>
                <Card class="margin-top-10">
                    <p slot="title">
                        <Icon type="ios-pricetags-outline"></Icon>
                        事件审核
                    </p>
                    <p >
                        <Icon type="android-time"></Icon>&nbsp;&nbsp;是否分类：
                        <Rate show-text allow-half >
                            <span style="color: #f5a623"></span>
                        </Rate>
                    </p>
                    <p class="margin-top-10">
                        <Icon type="android-time"></Icon>&nbsp;&nbsp;是否审核：
                        <Select style="width:150px" value="国家性">
                            <Option v-for="item in articleStateList" :value="item.value" :key="item.value">{{ item.value }}</Option>
                        </Select>
                    </p>
                    <p class="margin-top-20 publish-button-con" style="height:50px">
                        <span class="publish-button"><Button @click="handlePreview">预览</Button></span>
                        <span class="publish-button"><Button @click="handleSaveDraft">保存草稿</Button></span>
                        <span class="publish-button"><Button @click="handlePublish" :loading="publishLoading" icon="ios-checkmark" style="width:90px;" type="primary">发布</Button></span>
                    </p>
                </Card>

            </Col>
            <Col :md="24" :lg="18" :style="{marginBottom: '10px'}">
                <Card>
                    <Form :label-width="100">
                        <FormItem label="新闻中文标题" :error="articleError">
                            <Input style="width:500px" v-model="articleTitle" @on-blur="handleArticletitleBlur" icon="android-list"/>
                        </FormItem>
                        <FormItem label="新闻英文标题" :error="articleError">
                            <Input style="width:500px" v-model="articleTitle" @on-blur="handleArticletitleBlur" icon="android-list"/>
                        </FormItem>
                        <FormItem label="新闻封面图片" :error="articleError">
                            <Upload action="//jsonplaceholder.typicode.com/posts/">
                                <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
                            </Upload>
                        </FormItem>

                    </Form>
                    <div class="margin-top-20">
                        <textarea id="articleEditor"></textarea>
                    </div>
                </Card>

            </Col>
        </Row>

    </div>
</template>

<script>
import tinymce from 'tinymce';
export default {
    name: 'artical-publish',
    data () {
        return {
            articleTitle: '',
            articleError: '',
            showLink: false,
            fixedLink: '',
            articlePath: '',
            articlePathHasEdited: false,
            editLink: false,
            editPathButtonType: 'ghost',
            editPathButtonText: '编辑',
            articleStateList: [{value: '草稿'}, {value: '等待复审'}],
            editOpenness: false,
            Openness: '公开',
            currentOpenness: '公开',
            topArticle: false,
            publishTime: '',
            publishTimeType: 'immediately',
            editPublishTime: false, // 是否正在编辑发布时间
            articleTagSelected: [], // 文章选中的标签
            articleTagList: [], // 所有标签列表
            classificationList: [],
            classificationSelected: [], // 在所有分类目录中选中的目录数组
            offenUsedClass: [],
            offenUsedClassSelected: [], // 常用目录选中的目录
            classificationFinalSelected: [], // 最后实际选择的目录
            publishLoading: false,
            addingNewTag: false, // 添加新标签
            newTagName: '' // 新建标签名
        };
    },
    methods: {
        handleArticletitleBlur () {
            if (this.articleTitle.length !== 0) {
                // this.articleError = '';
                localStorage.articleTitle = this.articleTitle; // 本地存储文章标题
                if (!this.articlePathHasEdited) {
                    let date = new Date();
                    let year = date.getFullYear();
                    let month = date.getMonth() + 1;
                    let day = date.getDate();
                    this.fixedLink = window.location.host + '/' + year + '/' + month + '/' + day + '/';
                    this.articlePath = this.articleTitle;
                    this.articlePathHasEdited = true;
                    this.showLink = true;
                }
            } else {
                // this.articleError = '文章标题不可为空哦';
                this.$Message.error('文章标题不可为空哦');
            }
        },
        editArticlePath () {
            this.editLink = !this.editLink;
            this.editPathButtonType = this.editPathButtonType === 'ghost' ? 'success' : 'ghost';
            this.editPathButtonText = this.editPathButtonText === '编辑' ? '完成' : '编辑';
        },
        handleEditOpenness () {
            this.editOpenness = !this.editOpenness;
        },
        handleSaveOpenness () {
            this.Openness = this.currentOpenness;
            this.editOpenness = false;
        },
        cancelEditOpenness () {
            this.currentOpenness = this.Openness;
            this.editOpenness = false;
        },
        handleEditPublishTime () {
            this.editPublishTime = !this.editPublishTime;
        },
        handleSavePublishTime () {
            this.publishTimeType = 'timing';
            this.editPublishTime = false;
        },
        cancelEditPublishTime () {
            this.publishTimeType = 'immediately';
            this.editPublishTime = false;
        },
        setPublishTime (datetime) {
            this.publishTime = datetime;
        },
        setClassificationInAll (selectedArray) {
            this.classificationFinalSelected = selectedArray.map(item => {
                return item.title;
            });
            localStorage.classificationSelected = JSON.stringify(this.classificationFinalSelected); // 本地存储所选目录列表
        },
        setClassificationInOffen (selectedArray) {
            this.classificationFinalSelected = selectedArray;
        },
        handleAddNewTag () {
            this.addingNewTag = !this.addingNewTag;
        },
        createNewTag () {
            if (this.newTagName.length !== 0) {
                this.articleTagList.push({value: this.newTagName});
                this.addingNewTag = false;
                setTimeout(() => {
                    this.newTagName = '';
                }, 200);
            } else {
                this.$Message.error('请输入标签名');
            }
        },
        cancelCreateNewTag () {
            this.newTagName = '';
            this.addingNewTag = false;
        },
        canPublish () {
            if (this.articleTitle.length === 0) {
                this.$Message.error('请输入文章标题');
                return false;
            } else {
                return true;
            }
        },
        handlePreview () {
            if (this.canPublish()) {
                if (this.publishTimeType === 'immediately') {
                    let date = new Date();
                    let year = date.getFullYear();
                    let month = date.getMonth() + 1;
                    let day = date.getDate();
                    let hour = date.getHours();
                    let minute = date.getMinutes();
                    let second = date.getSeconds();
                    localStorage.publishTime = year + ' 年 ' + month + ' 月 ' + day + ' 日 -- ' + hour + ' : ' + minute + ' : ' + second;
                } else {
                    localStorage.publishTime = this.publishTime; // 本地存储发布时间
                }
                localStorage.content = tinymce.activeEditor.getContent();
                this.$router.push({
                    name: 'preview'
                });
            }
        },
        handleSaveDraft () {
            if (!this.canPublish()) {
                //
            }
        },
        handlePublish () {
            if (this.canPublish()) {
                this.publishLoading = true;
                setTimeout(() => {
                    this.publishLoading = false;
                    this.$Notice.success({
                        title: '保存成功',
                        desc: '文章《' + this.articleTitle + '》保存成功'
                    });
                }, 1000);
            }
        },
        handleSelectTag () {
            localStorage.tagsList = JSON.stringify(this.articleTagSelected); // 本地存储文章标签列表
        }
    },
    computed: {
        completeUrl () {
            let finalUrl = this.fixedLink + this.articlePath;
            localStorage.finalUrl = finalUrl; // 本地存储完整文章路径
            return finalUrl;
        }
    },
    mounted () {
        this.articleTagList = [
            {value: 'vue'},
            {value: 'iview'},
            {value: 'ES6'},
            {value: 'webpack'},
            {value: 'babel'},
            {value: 'eslint'}
        ];
        this.classificationList = [
            {
                title: 'Vue实例',
                expand: true,
                children: [
                    {
                        title: '数据与方法',
                        expand: true
                    },
                    {
                        title: '生命周期',
                        expand: true
                    }
                ]
            },
            {
                title: 'Class与Style绑定',
                expand: true,
                children: [
                    {
                        title: '绑定HTML class',
                        expand: true,
                        children: [
                            {
                                title: '对象语法',
                                expand: true
                            },
                            {
                                title: '数组语法',
                                expand: true
                            },
                            {
                                title: '用在组件上',
                                expand: true
                            }
                        ]
                    },
                    {
                        title: '生命周期',
                        expand: true
                    }
                ]
            },
            {
                title: '模板语法',
                expand: true,
                children: [
                    {
                        title: '插值',
                        expand: true
                    },
                    {
                        title: '指令',
                        expand: true
                    },
                    {
                        title: '缩写',
                        expand: true
                    }
                ]
            }
        ];
        this.offenUsedClass = [
            {
                title: 'vue实例'
            },
            {
                title: '生命周期'
            },
            {
                title: '模板语法'
            },
            {
                title: '插值'
            },
            {
                title: '缩写'
            }
        ];
        tinymce.init({
            selector: '#articleEditor',
            branding: false,
            elementpath: false,
            height: 600,
            language: 'zh_CN.GB2312',
            menubar: 'edit insert view format table tools',
            theme: 'modern',
            plugins: [
                'advlist autolink lists link image charmap print preview hr anchor pagebreak imagetools',
                'searchreplace visualblocks visualchars code fullscreen fullpage',
                'insertdatetime media nonbreaking save table contextmenu directionality',
                'emoticons paste textcolor colorpicker textpattern imagetools codesample'
            ],
            toolbar1: ' newnote print fullscreen preview | undo redo | insert | styleselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons media codesample',
            autosave_interval: '20s',
            image_advtab: true,
            table_default_styles: {
                width: '100%',
                borderCollapse: 'collapse'
            }
        });
    },
    destroyed () {
        tinymce.get('articleEditor').destroy();
    }
};
</script>
