<template>
<div class="sence">
    <IconsArea :iconsList="iconsList" />
</div>
</template>
<script>
import IconsArea from '../../components/IconsArea'
const iconsList = [
  { pText: '阅读', icon: '&#xe600;' },
  { pText: '听力', icon: '&#xe620;' },
  { pText: '对战', icon: '&#xe62c;' },
  { pText: '随身听', icon: '&#xe642;' },
  { pText: '短语', icon: '&#xe654;' }
]
export default {
  name: 'Sence',
  components: { IconsArea },
  setup () {
    return { iconsList }
  }
}
</script>
<style lang="scss" scoped>
</style>
