import { createApp } from 'vue'
import App from './step4/App.vue'

import ListPage from "./step3/components/ListPage.vue"
import ListHeader from "./step3/components/ListHeader.vue"
import ListFooter from "./step3/components/ListFooter.vue"

const app = createApp(App)
//글로벌 컴포넌트 등록방법
app.component("list-page", ListPage)
app.component("list-header", ListHeader);
app.component("list-footer", ListFooter);
app.mount('#app');