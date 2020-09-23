import {
  Popup,
  Loading,
  Button,
  Cell,
  CellGroup,
  Icon,
  Image,
  Col,
  Row,
  Lazyload,
  Toast,
  Skeleton,
  Sticky,
  PullRefresh,
  Slider,
  field,
} from 'vant'
const vantUses = [
  Popup,
  Loading,
  Button,
  Cell,
  CellGroup,
  Icon,
  Image,
  Col,
  Row,
  Skeleton,
  Sticky,
  Lazyload,
  Toast,
  PullRefresh,
  Sticky,
  Slider,
  field,
]
export default {
  install(Vue) {
    vantUses.forEach(component => {
      Vue.use(component)
    })
  },
}
