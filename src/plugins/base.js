import BaseButton from '../components/bases/BaseButton.vue'
import BaseCard from '../components/bases/BaseCard.vue'
import BaseInput from '../components/bases/BaseInput.vue'
import BaseTextarea from '../components/bases/BaseTextarea.vue'
export default {
  install(Vue) {
    Vue.component('base-button', BaseButton)
    Vue.component('base-card', BaseCard)
    Vue.component('base-input', BaseInput)
    Vue.component('base-textarea', BaseTextarea)
  },
}
