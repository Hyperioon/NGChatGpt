export const history = [
  // {
  //   uid: 'f48d91db-c5c9-4ac3-9e26-45cf8ff5a9b5',
  //   chatRecords: [
  //     {
  //       id: 7568,
  //       uid: 'f48d91db-c5c9-4ac3-9e26-45cf8ff5a9b5',
  //       type: 'question',
  //       message: '用js实现一个防抖',
  //       chatEngine: 'ERNIE-Bot',
  //       createTime: '2024-04-07 23:57:27.000',
  //       pid: null
  //     },
  //     {
  //       id: 7569,
  //       uid: 'f48d91db-c5c9-4ac3-9e26-45cf8ff5a9b5',
  //       type: 'answer',
  //       message:
  //         "防抖（debounce）是一种在计算机编程中常见的优化技术，通常用于限制某个函数在短时间内被频繁调用。防抖的基本思想是，如果一个函数持续地、频繁地触发，那么只在它结束后过一段时间才开始执行。\n\n以下是一个简单的防抖函数的实现，使用JavaScript：\n\n\n```javascript\nfunction debounce(func, wait) {\n  let timeout;\n\n  return function() {\n    const context = this;\n    const args = arguments;\n\n    clearTimeout(timeout);\n\n    timeout = setTimeout(function() {\n      func.apply(context, args);\n    }, wait);\n  };\n}\n```\n这个 `debounce` 函数接受两个参数：`func` 是你想要防抖的函数，`wait` 是等待时间（以毫秒为单位）。该函数返回一个新的函数，当这个新函数被调用时，它会取消之前的调用（如果有的话），并设置一个新的定时器，在 `wait` 毫秒后调用 `func`。\n\n这里是如何使用这个防抖函数的示例：\n\n\n```javascript\n// 假设我们有一个处理窗口resize事件的函数\nfunction handleResize() {\n  console.log(window.innerWidth);\n}\n\n// 我们可以使用debounce函数来防抖处理\nconst debouncedHandleResize = debounce(handleResize, 200);\n\n// 现在，我们将这个防抖处理函数绑定到window的resize事件\nwindow.addEventListener('resize', debouncedHandleResize);\n```\n在这个例子中，无论 `resize` `<font color=Blue>我是蓝色</font>`事件多么频繁地触发，`handleResize` 函数都只会在事件结束后的200毫秒内被调用一次。",
  //       chatEngine: 'ERNIE-Bot',
  //       createTime: '2024-04-07 23:57:28.000',
  //       pid: 7568
  //     }
  //   ]
  // },
  // {
  //   uid: '030898da-3933-42ad-85bd-b49d0a5dd5a2',
  //   chatRecords: [
  //     {
  //       id: 7446,
  //       uid: '030898da-3933-42ad-85bd-b49d0a5dd5a2',
  //       type: 'question',
  //       message: '读取合同内容',
  //       chatEngine: 'ERNIE-Bot',
  //       createTime: '2024-04-07 08:54:14.000',
  //       pid: null
  //     },
  //     {
  //       id: 7487,
  //       uid: '030898da-3933-42ad-85bd-b49d0a5dd5a2',
  //       type: 'answer',
  //       message: '![image.png](https://s2.loli.net/2024/08/19/9aX8eHoTCgq4S6f.png)',
  //       // message: `<span style=background:#FF0000>Test</span>合同文本读取完成，以下为可能存在风险的条款：<font color="blue">1、乙方必须在XXXX年XX月XX日前完成全部工程，逾期每天需向甲方支付工程总价千分之一的违约金。</font><font color="red"> 风险分析:</font>没有明确出现不可抗力影响导致的逾期的责任如何认定<font color="blue">2、本工程过程中由承包人全额垫资施工，竣工验收后发包人一次性支付工程款</font><font color="red"> 风险分析:</font> 全额垫资施工对承包人来说风险过大，建议调整条款</font><font color="blue">3、当出现合同异常终止等情况时，承包人不得以各种理由要求优先补偿承包人损失</font><font color="red"> 风险分析:</font>：放弃优先受偿权，对承包人来说存在较大风险，建议调整条款</font><font color="blue">4、因不可抗力导致工程延期或损失，甲方不承担任何责任</font><font color="red"> 风险分析:</font> 根据《中华人民共和国民法典》，不可抗力是指不能预见、不能避免并不能克服的客观情况，对于不可抗力造成的损失，应当根据实际情况由双方合理分担。</font><font color="blue">5、任何由于第三方原因导致的损失由甲乙双方共同承担</font><font color="red"> 风险分析:</font> 合同应当明确各方的责任和义务，对于可能出现的情况给出具体的处理办法。<font color="blue">6、乙方保证工程质量达到甲方要求的标准，如有不符，应无偿修复至合格标准。</font><font color="red"> 风险分析:</font> 乙方责任导致的质量不达标，才需要无偿修复，条款描述不明确`,
  //       chatEngine: 'ERNIE-Bot',
  //       createTime: '2024-04-07 08:54:15.000',
  //       pid: 7486
  //     }
  //   ]
  // },
  // {
  //   uid: '030898da-3933-42ad-85bd-1223',
  //   chatRecords: [
  //     {
  //       id: 7486,
  //       uid: '030898da-3933-42ad-85bd-334',
  //       type: 'question',
  //       message: '请提取文档中下资金相关的信息',
  //       chatEngine: 'ERNIE-Bot',
  //       createTime: '2024-04-07 15:54:14.000',
  //       pid: null
  //     },
  //     {
  //       id: 444,
  //       uid: '030898da-3933-42ad-85bd-b49d0a5dd5a2',
  //       type: 'answer',
  //       message: '![image.png](https://s2.loli.net/2024/08/19/VqirZMlFjdWInQE.png)',
  //       chatEngine: 'ERNIE-Bot',
  //       createTime: '2024-04-07 15:54:15.000',
  //       pid: 123
  //     }
  //   ]
  // }
]

export default {
  code: 200,
  msg: '',
  data: history
}
