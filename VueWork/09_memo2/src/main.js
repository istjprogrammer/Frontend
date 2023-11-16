import { createApp } from 'vue'
import App from './step6/App.vue'

import ListPage from "./step6/pages/ListPage.vue"
import HeaderComponent from "./components/HeaderComponent.vue"
import FooterComponent from "./components/FooterComponent.vue"

const app = createApp(App)
app.component("ListPage", ListPage)
app.component("HeaderComponent", HeaderComponent)
app.component("FooterComponent", FooterComponent)
app.mount('#app')