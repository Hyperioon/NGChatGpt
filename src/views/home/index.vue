<script setup lang="ts">
import Sidebar from './cmp/sidebar.vue'
import ChatWindow from './cmp/chatWindow.vue'

import { useScrollToBottom } from '@/hooks/useScrollToBottom'
const { scrollToBottom } = useScrollToBottom('.chat-window-body')
import { getChatHistory } from '@/api/gptmock'
import { useGptStore } from '@/stores/gptStore'

const { unFullScreen, fullScreen, clickLogo } = useGptStore()



const { chatHistory, curChat, isFullScreen, isClosed } = storeToRefs(useGptStore())
const res: any = getChatHistory()
chatHistory.value = res
curChat.value = res[0]
scrollToBottom()




</script>

<template>
    <!-- <NewGrandChatgpt /> -->
    <div v-if="!isClosed" :class="{ 'home-container': !isFullScreen, 'home-container-full': isFullScreen }">
        <Sidebar v-if="!isFullScreen" />
        <ChatWindow />
    </div>
    <div @click="clickLogo" v-if="isClosed" class="home-container-close">
        <img src="@/assets/logo.svg" alt="">
    </div>
</template>
<style scoped>
.home-container {
    border: var(--border-in-light);
    border-radius: 20px;
    box-shadow: var(--shadow);
    color: var(--black);
    background-color: var(--white);
    min-width: 60vw;
    min-height: 370px;
    max-width: 80vw;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    width: var(--window-width);
    height: var(--window-height);
}

.home-container-full {
    border: var(--border-in-light);
    box-shadow: var(--shadow);
    color: var(--black);
    background-color: var(--white);
    min-height: 370px;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    width: 570px;
    height: var(--window-height);
    position: absolute;
    right: 20px;
    bottom: 20px;
}

.home-container-close {
    position: absolute;
    right: 20px;
    bottom: 60px;
    cursor: pointer;
}
</style>
