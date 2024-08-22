import type { gptMockNamespace } from './interface/gptmock'
import historyRes from '../mock/history'

import mockData from '../mock/mockData'

export function getChatHistory(): Promise<gptMockNamespace.history> {
  return historyRes.data
}

export function getResMessage(message: string): any {
  if (message.includes('合同')) {
    return {
      content: '![image.png](https://bc6.afbza.cn/mqrcode/603314/1724230062_5883134066_2.png)',
      type: 'DONE'
    }
  } else if (message.includes('资金')) {
    return {
      content: '![image.png](https://bc6.afbza.cn/mqrcode/603314/1724230062_1035752356_1.png)',
      type: 'DONE'
    }
  } else {
    return { content: mockData.data[parseInt(String(Math.random() * 4))], type: 'answer' }
  }
}
