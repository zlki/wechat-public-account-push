/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx4cc5e4b3edbc8964',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '9408f81d610638e2b40f75457dad4f6d',

  PROVINCE: '陕西',
  CITY: '西安',

  USERS: [
    {
      // 想要发送的人的名字
      name: '轩轩',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o2fbu7KTZ6lkLtMn91h4xMkasW7g，',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'jtPg2nDX8zGgo6jAyvw7TowotXsStlMjQA-PTIr0dLY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-05',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '轩轩', year: '2005', date: '05-29',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '轩轩', year: '2005', date: '07-05',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-03-21' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	jtPg2nDX8zGgo6jAyvw7TowotXsStlMjQA-PTIr0dLY',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o2fbu7BQI5OMj3KPOM_65AZi-Dt0',
    }
  ],

}

module.exports = USER_CONFIG

