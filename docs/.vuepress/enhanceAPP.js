import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import lemon from 'lemon-ui-vue2'

export default async ({
  Vue
}) => {
  if (typeof process === 'undefined') {
    Vue.use(ElementUI),
    Vue.use(lemon)
  }
}