<script setup lang="ts">
import ChatInputPanel from './chatInputPanel.vue'
import ChatWindowBody from './chatWindowBody.vue'
import { useGptStore } from '@/stores/gptStore'

const { unFullScreen, fullScreen, clickClose } = useGptStore()

const { curChat, isFullScreen } = storeToRefs(useGptStore())


import { useCodeCopy } from '@/hooks/useCodeCopy'
const codeCopyPower = useCodeCopy()
const copyPowerTrigger = codeCopyPower.launch()
onBeforeUnmount(() => {
    copyPowerTrigger()
})
</script>

<template>
    <div :class="{ 'chat-window-content': !isFullScreen, 'chat-window-content-full': isFullScreen }">
        <div class="window-header" v-if="curChat">
            <div class="window-header-title">
                <div class="window-header-main-title">{{ curChat.chatRecords[0].message }}</div>
                <div class="window-header-sub-title">共 {{ curChat.chatRecords.length }} 条对话</div>
            </div>
        </div>
        <div class="window-header-control">
            <img class="full-icon" v-if="isFullScreen" @click="unFullScreen()" src="@/assets/icons/full.svg" alt="">
            <img class="full-icon" v-else @click="fullScreen()" src="@/assets/icons/small.svg" alt="">
            <img @click="clickClose()" class="close-icon" src="@/assets/icons/close.svg" alt="">


        </div>
        <ChatWindowBody />
        <ChatInputPanel />
    </div>
</template>

<style lang="scss" scoped>
.chat-window-content {
    width: var(--window-content-width);
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    background-image: url('@/assets/icons/bg2.svg');

    .window-header {
        padding: 14px 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        .window-header-title {
            .window-header-main-title {
                font-size: 20px;
                font-weight: bolder;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: block;
                max-width: 50vw;
            }

            .window-header-sub-title {
                font-size: 14px;
            }
        }
    }

    .window-header-control {
        position: absolute;
        right: 20px;
        top: 20px;
        display: flex;

        .full-icon {
            margin-right: 10px;
            cursor: pointer;
            transition: all 0.3s ease;

        }

        .close-icon {
            cursor: pointer;
        }
    }
}

.chat-window-content-full {
    width: 570px;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    background-image: url('@/assets/icons/bg2.svg');

    .window-header {
        padding: 14px 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        .window-header-title {
            .window-header-main-title {
                font-size: 20px;
                font-weight: bolder;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: block;
                max-width: 50vw;
            }

            .window-header-sub-title {
                font-size: 14px;
            }
        }
    }

    .window-header-control {
        position: absolute;
        right: 20px;
        top: 20px;
        display: flex;

        .full-icon {
            margin-right: 10px;
            cursor: pointer;
            transition: all 0.3s ease;

        }

        .close-icon {
            cursor: pointer;
        }
    }
}
</style>
