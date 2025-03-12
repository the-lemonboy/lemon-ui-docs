import 'lemon-ui-vue2/lib/lemonui.css'

export default ({
  Vue
}) => {

  Vue.mixin({
    mounted() {
        var lemon = require('lemon-ui-vue2')
        Vue.use(lemon)
    },
})
}