<template>
  <div class="tab-carousel-wrapper" v-if="tabList && tabList.length > 1 && showTabSwitchBtn">
    <div
      v-for="item in tabList"
      :key="item.id"
      :class="['item', item.selected && 'selected']"
      :title="item.name"
      @click="handleSelected(item)"></div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const tabList = computed(() => store.state.tabList)
const showTabSwitchBtn = computed(() => store.state.showTabSwitchBtn)
const enableKeydownSwitchTab = computed(() => store.state.enableKeydownSwitchTab)

const handleSelected = (item: any) => {
  if (item.selected) return
  store.dispatch('updateTabSelected', item.id)
}

const keydownEvent = (e: KeyboardEvent) => {
  if (['ArrowDown', 'ArrowRight'].includes(e.key)) {
    handleTabOrder('next')
  } else if (['ArrowUp', 'ArrowLeft'].includes(e.key)) {
    handleTabOrder('prev')
  }
}

const handleTabOrder = (type: 'prev' | 'next') => {
  const index = tabList.value.findIndex((item: any) => item.selected)
  let next
  if (type === 'prev') {
    next = index === 0 ? tabList.value.length - 1 : index - 1
  } else {
    next = index === tabList.value.length - 1 ? 0 : index + 1
  }
  const nextId = tabList.value[next].id
  store.dispatch('updateTabSelected', nextId)
}

onMounted(() => {
  if (enableKeydownSwitchTab.value) {
    document.addEventListener('keydown', keydownEvent)
  }
})
onUnmounted(() => {
  document.removeEventListener('keydown', keydownEvent)
})
</script>
<style lang='scss' scoped>
.tab-carousel-wrapper {
  position: fixed;
  width: 300px;
  height: 20px;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  .item {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    border: 1px solid rgba($--color-white, .9);
    background: rgba($--color-grey4, .9);
    margin: 0 5px;
    cursor: pointer;
    transition: all .4s ease-in-out;
    &:not(.selected):hover {
      background: rgba($--color-grey5, .9);
    }
    &.selected {
      width: 40px;
      background: rgba($--color-white, .9);
      cursor: default;
    }
  }
}
</style>
