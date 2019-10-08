<template>
	<div>
		<a-card  :bordered="false" title="微博详情列表">
	      <a-list
	        size="large"
	        rowKey="id"
	        :loading="loading"
	        itemLayout="vertical"
	        :dataSource="data"
	      >
	        <a-list-item :key="item.id" slot="renderItem" slot-scope="item">
	          <template slot="actions">
	            <icon-text type="star-o" text="0" />
	            <icon-text type="like-o" text="0" />
	            <icon-text type="message" text="0" />
	          </template>
	          <a-list-item-meta>
	            <a slot="title" href="https://vue.ant.design/">{{ item.title }}</a>
	            <template slot="description">
	              <span>
	                <a-tag>Ant Design</a-tag>
	                <a-tag>设计语言</a-tag>
	                <a-tag>蚂蚁金服</a-tag>
	              </span>
	            </template>
	          </a-list-item-meta>
	          <article-list-content :description="item.content" :owner="item.auther" :updateAt="item.createtime" />
	        </a-list-item>
	        <div slot="footer" v-if="data.length > 0" style="text-align: center; margin-top: 16px;">
	          <a-button @click="loadMore" :loading="loadingMore">加载更多</a-button>
	          <a-button class="addBtn" @click="openAdd">新增</a-button>
	        </div>
	      </a-list>
	    </a-card>
	    
	    
	    <!--<a-modal
          title="20px to Top"
          style={{ top: 20 }}
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </a-modal>-->
	</div>
</template>

<script>
import { TagSelect, StandardFormRow, ArticleListContent } from '@/components'
import IconText from '../list/search/components/IconText'
export default {
	name: 'blogList',
	components: {
		ArticleListContent,
    		IconText
	},
	data() {
		return {
			data: [],
			loading: true,
			loadingMore: false
		}
	},
	mounted() {
		this.getBlogList();
	},
	filters: {
		dataFormat(value,formatType) {
			debugger;
			const date = new Date(value);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
	        const YYYY = date.getFullYear();
			const YY  = date.getFullYear().toString().substr(2,4);
	        const MM = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
	        const DD = date.getDate();
	        const h = date.getHours();
	        const m = date.getMinutes();
	        const s = date.getSeconds();
			switch(formatType) {
				case 'YYYYMMDD': YYYY+MM+DD;break;
				case 'YYMMDD': YY+MM+DD;break;
				case 'YYYY-MM-DD': YYYY+'-'+MM+'-'+DD;break;
				case 'YY-MM-DD': YY+'-'+MM+'-'+DD;break;
				default: YYYY+':'+MM+':'+DD+' '+h+':'+m+':'+s;
			}
		}
	},
	methods: {
		openAdd() {
				
		},
		loadMore() {
			
		},
		getBlogList() {
			this.$http.get('/list/article').then(res => {
//		        console.log('res', res)
//		        this.data = res.result;
		        console.log('data.............',res);
		        this.loading = false
		    })
			this.$http.get('http://localhost:9090/api/blog/list').then( res => {
				console.log('res.....',res);
				this.data = res.data;
				for(let i in this.data) {
					this.data[i].createtime = this.data[i].createtime;
				}
				this.loading = false;
			})
		}
	}	
}
</script>
<style>
	ul.blogList {
		list-style: none;
	}
	.blogList li {
		line-height: 32px;
		background-color: #fff;
	}
	.addBtn{
		/*background: green;
		color: green;
		color:#fff;*/
		float: right;
	}
</style>