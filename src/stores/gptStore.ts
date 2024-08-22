import type { gptMockNamespace } from '@/api/interface/gptmock'
import { getCurrentTimestamp } from '@/utils'
import { uuid, generateRandomSixDigitNumberExclusive } from '@/utils/index'

export const useGptStore = defineStore('gptStore', () => {
  const chatHistory = ref<gptMockNamespace.history>([])
  let curChat = ref<Nullable<gptMockNamespace.historyItem>>(null)

  const chatEngines = ref<gptMockNamespace.ChatEngine[]>([
    {
      name: '小新同学',
      value: 'ERNIE-Bot',
      description: '小新同学'
    },
    {
      name: 'Open AI 4',
      value: 'OpenAI-3',
      description: 'OpenAI ChatGpt'
    },
    {
      name: 'Open AI 3.5',
      value: 'OpenAI-4',
      description: 'OpenAI ChatGpt'
    }
  ])
  const curChatEngine = ref<string>('ERNIE-Bot')

  const chatWindowScollLock = ref(false)
  const isFullScreen = ref(true)
  const isClosed = ref(true)

  function clickClose() {
    isClosed.value = true
    isFullScreen.value = true
  }
  function clickLogo() {
    isClosed.value = false
    const uid = uuid()

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
    chatHistory.value.push(curChat.value)
  }

  function unFullScreen() {
    isFullScreen.value = false
  }
  function fullScreen() {
    isFullScreen.value = true
  }

  function unLockScroll() {
    chatWindowScollLock.value = false
  }
  function lockScroll() {
    chatWindowScollLock.value = true
  }

  return {
    chatHistory,
    curChat,
    isFullScreen,
    fullScreen,
    unFullScreen,
    clickClose,
    clickLogo,
    isClosed,

    chatEngines,
    curChatEngine,

    chatWindowScollLock,
    unLockScroll,
    lockScroll
  }
})
