<script setup lang="ts">
import ChatList from './chatList.vue'
import { uuid, generateRandomSixDigitNumberExclusive } from '@/utils/index'
import { getCurrentTimestamp } from '@/utils'
const uid = uuid()

import { useGptStore } from '@/stores/gptStore'
const { chatHistory, curChat, curChatEngine } = storeToRefs(useGptStore())

function createNewChat() {
    const uid = uuid()
    chatHistory.value.push({
        uid,
        chatRecords: [
            {
                id: generateRandomSixDigitNumberExclusive(),
                uid,
                type: 'answer',
                message: "有什么可以帮你的吗",
                chatEngine: curChatEngine.value,
                createTime: getCurrentTimestamp(),
                pid: null
            }
        ]
    })
    curChat.value = chatHistory.value[chatHistory.value.length - 1]
}
function cleanChat() {
    chatHistory.value = []
    curChat.value = {
        uid,
        chatRecords: [
            {
                id: generateRandomSixDigitNumberExclusive(),
                uid,
                type: 'answer',
                message: '有什么可以帮你的吗',
                chatEngine: curChatEngine.value,
                createTime: getCurrentTimestamp(),
                pid: null
            }
        ]

    }
}
</script>

<template>
    <div class="home-sidebar">
        <div class="home-sidebar-header">
            <img class="logo" src="@/assets/logo.svg" alt="" width="32" />
            <div class="home-sidebar-title">小新同学AI助手</div>
            <!-- <div class="home-sidebar-description">
                作为您的AI管理助手，很高兴与你交流!
            </div> -->
        </div>
        <button class="new-chat" @click="createNewChat">
            <img class="add-icon" src="@/assets/icons/plus.svg" alt="">
            <span class="add-text">新对话</span>
        </button>
        <div class="home-sidebar-body">
            <ChatList />
        </div>
        <button class="delete-chat" @click="cleanChat">
            <span class="add-text">清除数据</span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.home-sidebar {
    top: 0;
    width: var(--sidebar-width);
    box-sizing: border-box;
    padding: 20px;
    background-color: var(--second);
    display: flex;
    flex-direction: column;
    box-shadow: inset -2px 0 2px 0 rgba(0, 0, 0, 0.05);
    position: relative;
    transition: width 0.05s ease;
    background-image: url('@/assets/icons/bg1.svg');

    .home-sidebar-header {
        position: relative;
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        align-items: center;

        .logo {

            width: 48px;
            height: 50px;
            margin-right: 15px;
        }

        .home-sidebar-title {
            font-size: 18px;
            font-weight: 600;
            color: #333333;
        }

        .home-sidebar-description {
            font-size: 12px;
            font-weight: 400;
        }
    }

    .home-sidebar-body {
        flex: 1 1;
        overflow: auto;
        overflow-x: hidden;
    }


    .new-chat {
        width: 228px;
        height: 46px;
        background: rgba(22, 119, 255, 0.12);
        border-radius: 7px;
        border: 1px solid #1677FF;
        display: flex;
        justify-items: center;
        align-items: center;
        margin-bottom: 10px;

        &:hover {
            filter: brightness(.9);
        }

        .add-icon {
            font-size: 13px;
            margin-left: 14px;
        }

        .add-text {
            line-height: 46px;
            margin-left: 5px;
            font-size: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 600;
            color: #1677FF;
        }
    }

    .delete-chat {
        width: 176px;
        height: 48px;
        background: #2B7EDF;
        border-radius: 8px;
        font-weight: 500;
        font-size: 18px;
        color: #FFFFFF;
        position: absolute;
        bottom: 42px;
        left: 42px;
    }
}
</style>
