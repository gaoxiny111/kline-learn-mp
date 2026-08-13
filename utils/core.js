var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/mp-entry.ts
var mp_entry_exports = {};
__export(mp_entry_exports, {
  NISON_NEEDS_CONFIRM: () => NISON_NEEDS_CONFIRM,
  biasLabel: () => biasLabel,
  buildPatternDemo: () => buildPatternDemo,
  categoryLabel: () => categoryLabel,
  confirmLabel: () => confirmLabel,
  createChoiceQuestion: () => createChoiceQuestion,
  createIdentifyQuestion: () => createIdentifyQuestion,
  createPracticeSession: () => createPracticeSession,
  createQuizSession: () => createQuizSession,
  generateBaseSeries: () => generateBaseSeries,
  getPatternById: () => getPatternById,
  getPatternsByCategory: () => getPatternsByCategory,
  judgeIdentify: () => judgeIdentify,
  nisonChapterLabel: () => nisonChapterLabel,
  nisonChapterOf: () => nisonChapterOf,
  nisonLessons: () => nisonLessons,
  nisonTipOf: () => nisonTipOf,
  patterns: () => patterns,
  quizLevels: () => quizLevels,
  scanPatternSignals: () => scanPatternSignals,
  sideLabel: () => sideLabel,
  toChartCandles: () => toChartCandles
});
module.exports = __toCommonJS(mp_entry_exports);

// src/data/patterns.ts
var patterns = [
  {
    id: "hammer",
    name: "\u9524\u5B50\u7EBF",
    aliases: ["\u4F1E\u5F62\u7EBF", "\u9524\u5934\u7EBF"],
    category: "reversal",
    bias: "bullish",
    bars: 1,
    difficulty: 1,
    rules: [
      "\u987B\u51FA\u73B0\u5728\u4E0B\u8DCC\u8D8B\u52BF\u4E2D",
      "\u5B9E\u4F53\u5904\u4E8E\u5168\u5929\u4EF7\u683C\u533A\u95F4\u7684\u4E0A\u7AEF\uFF0C\u989C\u8272\u53EF\u7EA2\u53EF\u7EFF\uFF08\u767D\u5B9E\u4F53\u7565\u504F\u5F3A\uFF09",
      "\u4E0B\u5F71\u7EBF\u957F\u5EA6\u81F3\u5C11\u7EA6\u4E3A\u5B9E\u4F53\u7684 2 \u500D\uFF08\u8D8A\u957F\u8D8A\u6709\u610F\u4E49\uFF09",
      "\u4E0A\u5F71\u7EBF\u5F88\u77ED\u6216\u6CA1\u6709"
    ],
    psychology: "\u5E02\u573A\u7528\u9524\u5B50\u592F\u7838\u5E95\u90E8\uFF1A\u7A7A\u65B9\u4E00\u5EA6\u538B\u5230\u65B0\u4F4E\uFF0C\u4F46\u6536\u76D8\u56DE\u5230\u533A\u95F4\u4E0A\u90E8\u3002\u6B21\u65E5\u6536\u9633\u66F4\u7A33\u3002",
    commonMistakes: ["\u628A\u4E0A\u6DA8\u4E2D\u7684\u957F\u4E0B\u5F71\u5F53\u6210\u9524\u5B50\u7EBF", "\u4E0B\u5F71\u4E0D\u591F\u957F\u4ECD\u786C\u5957", "\u8DCC\u7834\u5173\u952E\u652F\u6491\u540E\u7684\u9524\u5B50\u4ECD\u5F53\u5373\u4E70\u5165"],
    demoSeed: 1101
  },
  {
    id: "hanging-man",
    name: "\u4E0A\u540A\u7EBF",
    aliases: ["\u4F1E\u5F62\u7EBF", "\u540A\u9888\u7EBF"],
    category: "reversal",
    bias: "bearish",
    bars: 1,
    difficulty: 1,
    rules: [
      "\u987B\u51FA\u73B0\u5728\u4E0A\u6DA8\u8D8B\u52BF\u4E2D\uFF0C\u5916\u5F62\u4E0E\u9524\u5B50\u7EBF\u76F8\u540C",
      "\u5B9E\u4F53\u5904\u4E8E\u4EF7\u683C\u533A\u95F4\u4E0A\u7AEF\uFF0C\u9ED1\u5B9E\u4F53\u7565\u504F\u5F31",
      "\u4E0B\u5F71\u81F3\u5C11\u7EA6\u5B9E\u4F53 2 \u500D\uFF0C\u4E0A\u5F71\u6781\u77ED",
      "\u5FC5\u987B\u7B49\u5F85\u6B21\u65E5\u786E\u8BA4\uFF1A\u6B21\u65E5\u4F4E\u5F00\uFF08\u7F3A\u53E3\u8D8A\u5927\u8D8A\u6709\u6548\uFF09\uFF0C\u6216\u6536\u9634\u4E14\u6536\u76D8\u4F4E\u4E8E\u4E0A\u540A\u6536\u76D8"
    ],
    psychology: "\u4E0A\u6DA8\u9014\u4E2D\u76D8\u4E2D\u5927\u8DCC\u53C8\u6536\u56DE\u9AD8\u4F4D\uFF0C\u8BF4\u660E\u629B\u538B\u5DF2\u73B0\uFF0C\u4F46\u5F53\u65E5\u6536\u9AD8\u8FD8\u4E0D\u80FD\u5F53\u9876\u90E8\u3002",
    commonMistakes: ["\u4E0E\u9524\u5B50\u7EBF\u53EA\u770B\u5F62\u72B6\u4E0D\u770B\u4F4D\u7F6E", "\u4E0D\u7B49\u6B21\u65E5\u786E\u8BA4\u5C31\u505A\u7A7A"],
    demoSeed: 1102
  },
  {
    id: "doji",
    name: "\u5341\u5B57\u7EBF",
    aliases: ["\u5341\u5B57\u661F", "\u5317\u65B9\u5341\u5B57\u7EBF"],
    category: "neutral",
    bias: "neutral",
    bars: 1,
    difficulty: 1,
    rules: [
      "\u5F00\u76D8\u4EF7\u4E0E\u6536\u76D8\u4EF7\u51E0\u4E4E\u76F8\u7B49\uFF08\u5141\u8BB8\u6781\u5C0F\u5DEE\u989D\uFF09",
      "\u4E0A\u6DA8\u4E2D\u7684\u5341\u5B57\u7EBF\uFF08\u5317\u65B9\u5341\u5B57\u7EBF\uFF09\u4F5C\u9876\u90E8\u8B66\u544A\u8FDC\u6BD4\u4F5C\u5E95\u90E8\u6709\u6548",
      "\u51FA\u73B0\u5728\u957F\u9633\u4E4B\u540E\u5C24\u5176\u503C\u5F97\u6CE8\u610F\uFF1B\u56FE\u4E0A\u5341\u5B57\u8FC7\u591A\u5219\u5931\u6548"
    ],
    psychology: "\u591A\u7A7A\u80F6\u7740\u3002\u4E0A\u5347\u8D8B\u52BF\u9760\u4E70\u76D8\u63A8\u52A8\uFF0C\u5341\u5B57\u8868\u793A\u4E70\u76D8\u72B9\u8C6B\uFF0C\u9876\u90E8\u610F\u4E49\u66F4\u5927\uFF1B\u4E0B\u8DCC\u5E38\u56E0\u81EA\u8EAB\u91CD\u529B\u5EF6\u7EED\uFF0C\u5E95\u90E8\u5341\u5B57\u8F83\u5F31\u3002",
    commonMistakes: ["\u628A\u6240\u6709\u5C0F\u5B9E\u4F53\u90FD\u53EB\u5341\u5B57\u7EBF", "\u56FE\u4E0A\u5341\u5B57\u5F88\u591A\u4ECD\u5F53\u5F3A\u4FE1\u53F7", "\u4E0B\u8DCC\u4E2D\u5341\u5B57\u76F4\u63A5\u5F53\u4E70\u70B9"],
    demoSeed: 1103
  },
  {
    id: "shooting-star",
    name: "\u6D41\u661F\u5F62\u6001",
    aliases: ["\u6D41\u661F\u7EBF", "\u5C04\u51FB\u4E4B\u661F"],
    category: "reversal",
    bias: "bearish",
    bars: 1,
    difficulty: 1,
    rules: [
      "\u51FA\u73B0\u5728\u4E0A\u6DA8\u8D8B\u52BF\u9AD8\u4F4D",
      "\u4E0A\u5F71\u7EBF\u5F88\u957F\uFF0C\u7EA6\u4E3A\u5B9E\u4F53 2 \u500D\u4EE5\u4E0A",
      "\u4E0B\u5F71\u7EBF\u5F88\u77ED\uFF0C\u6536\u76D8\u9760\u8FD1\u5F00\u76D8\u9644\u8FD1\u4F4E\u4F4D"
    ],
    psychology: "\u51B2\u9AD8\u56DE\u843D\uFF0C\u9AD8\u4F4D\u629B\u538B\u660E\u663E\uFF0C\u6697\u793A\u4E0A\u6DA8\u53D7\u963B\u3002",
    commonMistakes: ["\u5728\u4E0B\u8DCC\u4E2D\u628A\u5B83\u5F53\u6D41\u661F\u7EBF", "\u4E0E\u5012\u9524\u5B50\u4F4D\u7F6E\u641E\u53CD"],
    demoSeed: 1104
  },
  {
    id: "inverted-hammer",
    name: "\u5012\u9524\u5B50\u5F62\u6001",
    aliases: ["\u5012\u9524\u5B50", "\u5012\u9524\u5934"],
    category: "reversal",
    bias: "bullish",
    bars: 1,
    difficulty: 1,
    rules: [
      "\u51FA\u73B0\u5728\u4E0B\u8DCC\u8D8B\u52BF\u4F4E\u4F4D",
      "\u957F\u4E0A\u5F71\u3001\u77ED\u4E0B\u5F71\u3001\u5C0F\u5B9E\u4F53",
      "\u9700\u6B21\u65E5\u9633\u7EBF\u786E\u8BA4\u770B\u6DA8\u4FE1\u53F7"
    ],
    psychology: "\u4F4E\u4F4D\u51FA\u73B0\u4E0A\u653B\u5C1D\u8BD5\uFF0C\u82E5\u83B7\u786E\u8BA4\u5219\u53EF\u80FD\u8FCE\u6765\u53CD\u5F39\u3002",
    commonMistakes: ["\u4E0E\u6D41\u661F\u7EBF\u6DF7\u6DC6", "\u4E0D\u770B\u540E\u7EED\u786E\u8BA4\u5C31\u5165\u573A"],
    demoSeed: 1105
  },
  {
    id: "bullish-engulfing",
    name: "\u770B\u6DA8\u541E\u6CA1\u5F62\u6001",
    aliases: ["\u62B1\u7EBF\u5F62\u6001", "\u9633\u5305\u9634"],
    category: "reversal",
    bias: "bullish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u524D\u4E00\u65E5\u4E3A\u9634\u7EBF\uFF0C\u5F53\u65E5\u4E3A\u9633\u7EBF",
      "\u9633\u7EBF\u5B9E\u4F53\u5B8C\u5168\u5305\u4F4F\u524D\u4E00\u65E5\u9634\u7EBF\u5B9E\u4F53",
      "\u6700\u597D\u51FA\u73B0\u5728\u4E0B\u8DCC\u8D8B\u52BF\u672B\u7AEF"
    ],
    psychology: "\u591A\u65B9\u4EE5\u66F4\u5927\u4E70\u76D8\u5F7B\u5E95\u8986\u76D6\u7A7A\u65B9\uFF0C\u53CD\u8F6C\u52A8\u80FD\u589E\u5F3A\u3002",
    commonMistakes: ["\u53EA\u5305\u4F4F\u5F71\u7EBF\u5374\u6CA1\u5305\u4F4F\u5B9E\u4F53\u4E5F\u7B97", "\u4E0A\u6DA8\u9014\u4E2D\u8BEF\u5224\u4E3A\u53CD\u8F6C"],
    demoSeed: 1201
  },
  {
    id: "bearish-engulfing",
    name: "\u770B\u8DCC\u541E\u6CA1\u5F62\u6001",
    aliases: ["\u62B1\u7EBF\u5F62\u6001", "\u9634\u5305\u9633"],
    category: "reversal",
    bias: "bearish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u524D\u4E00\u65E5\u4E3A\u9633\u7EBF\uFF0C\u5F53\u65E5\u4E3A\u9634\u7EBF",
      "\u9634\u7EBF\u5B9E\u4F53\u5B8C\u5168\u5305\u4F4F\u524D\u4E00\u65E5\u9633\u7EBF\u5B9E\u4F53",
      "\u6700\u597D\u51FA\u73B0\u5728\u4E0A\u6DA8\u8D8B\u52BF\u9AD8\u4F4D"
    ],
    psychology: "\u7A7A\u65B9\u5F3A\u52BF\u53CD\u6251\uFF0C\u541E\u6CA1\u524D\u65E5\u6DA8\u5E45\uFF0C\u89C1\u9876\u98CE\u9669\u4E0A\u5347\u3002",
    commonMistakes: ["\u4F4E\u4F4D\u51FA\u73B0\u4E5F\u5F53\u4F5C\u5F3A\u70C8\u505A\u7A7A\u4FE1\u53F7", "\u5FFD\u7565\u6210\u4EA4\u91CF\u4E0E\u8D8B\u52BF"],
    demoSeed: 1202
  },
  {
    id: "bullish-harami",
    name: "\u770B\u6DA8\u5B55\u7EBF\u5F62\u6001",
    aliases: ["\u5B55\u7EBF\u5F62\u6001", "\u6000\u80CE\u7EBF\uFF08\u770B\u6DA8\uFF09"],
    category: "reversal",
    bias: "bullish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u524D\u4E00\u6839\u957F\u5B9E\u4F53\u5305\u4F4F\u540E\u4E00\u6839\u5F88\u5C0F\u7684\u5B9E\u4F53\uFF08\u770B\u5B9E\u4F53\uFF0C\u5F71\u7EBF\u53EF\u8D85\u51FA\uFF09",
      "\u4E24\u6839\u989C\u8272\u4E0D\u5FC5\u76F8\u53CD\uFF08\u4E0E\u541E\u6CA1\u4E0D\u540C\uFF09",
      "\u4FE1\u53F7\u901A\u5E38\u5F31\u4E8E\u9524\u5B50\u6216\u541E\u6CA1\uFF0C\u5E38\u8F6C\u4E3A\u5E73\u9759\u800C\u975E\u5F3A\u70C8\u53CD\u8F6C"
    ],
    psychology: "\u5927\u5B9E\u4F53\u540E\u5E02\u573A\u7A81\u7136\u72B9\u8C6B\u3002\u4E0B\u8DCC\u4E2D\u7684\u5B55\u7EBF\u63D0\u793A\u629B\u538B\u51CF\u5F31\uFF0C\u4F46\u672A\u5FC5\u7ACB\u523B\u4E0A\u6DA8\u3002",
    commonMistakes: ["\u628A\u7F29\u5C0F\u6CE2\u52A8\u90FD\u53EB\u5B55\u7EBF", "\u628A\u5B55\u7EBF\u5F53\u6210\u4E0E\u541E\u6CA1\u540C\u7EA7\u7684\u5F3A\u53CD\u8F6C"],
    demoSeed: 1203
  },
  {
    id: "bearish-harami",
    name: "\u770B\u8DCC\u5B55\u7EBF\u5F62\u6001",
    aliases: ["\u5B55\u7EBF\u5F62\u6001", "\u6000\u80CE\u7EBF\uFF08\u770B\u8DCC\uFF09"],
    category: "reversal",
    bias: "bearish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u524D\u4E00\u6839\u957F\u5B9E\u4F53\u5305\u4F4F\u540E\u4E00\u6839\u5F88\u5C0F\u7684\u5B9E\u4F53\uFF08\u770B\u5B9E\u4F53\uFF0C\u5F71\u7EBF\u53EF\u8D85\u51FA\uFF09",
      "\u4E24\u6839\u989C\u8272\u4E0D\u5FC5\u76F8\u53CD",
      "\u4FE1\u53F7\u901A\u5E38\u5F31\u4E8E\u541E\u6CA1\uFF0C\u5E38\u8F6C\u4E3A\u5E73\u9759"
    ],
    psychology: "\u5927\u9633\u540E\u52A8\u80FD\u6536\u655B\u3002\u4E0A\u6DA8\u4E2D\u7684\u5B55\u7EBF\u63D0\u793A\u4E70\u76D8\u72B9\u8C6B\uFF0C\u4F46\u672A\u5FC5\u7ACB\u523B\u4E0B\u8DCC\u3002",
    commonMistakes: ["\u4E0E\u5341\u5B57\u7EBF\u6DF7\u4E3A\u4E00\u8C08", "\u628A\u5B55\u7EBF\u5F53\u6210\u4E0E\u541E\u6CA1\u540C\u7EA7\u7684\u5F3A\u53CD\u8F6C"],
    demoSeed: 1204
  },
  {
    id: "piercing-line",
    name: "\u523A\u900F\u5F62\u6001",
    aliases: ["\u65A9\u56DE\u7EBF\u5F62\u6001", "\u523A\u900F\u7EBF"],
    category: "reversal",
    bias: "bullish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u7B2C\u4E00\u6839\u4E3A\u5927\u9634\u7EBF\uFF0C\u7B2C\u4E8C\u6839\u4E3A\u9633\u7EBF",
      "\u9633\u7EBF\u4F4E\u5F00\u540E\u6536\u590D\uFF0C\u6536\u76D8\u6DF1\u5165\u9634\u7EBF\u5B9E\u4F53\u4E00\u534A\u4EE5\u4E0A",
      "\u4F46\u672A\u5B8C\u5168\u541E\u6CA1\u524D\u9634"
    ],
    psychology: "\u4F4E\u5F00\u540E\u5F3A\u52BF\u62C9\u5347\uFF0C\u7A7A\u5934\u4F18\u52BF\u88AB\u5927\u5E45\u524A\u5F31\u3002",
    commonMistakes: ["\u4E0E\u770B\u6DA8\u541E\u6CA1\u533A\u5206\u4E0D\u6E05", "\u6536\u56DE\u4E0D\u8DB3\u4E00\u534A\u4E5F\u7B97\u523A\u900F"],
    demoSeed: 1205
  },
  {
    id: "dark-cloud-cover",
    name: "\u4E4C\u4E91\u76D6\u9876\u5F62\u6001",
    aliases: ["\u4E4C\u4E91\u76D6\u9876", "\u4E4C\u4E91\u7EBF\u5F62\u6001", "\u4E4C\u4E91\u7EBF"],
    category: "reversal",
    bias: "bearish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u7B2C\u4E00\u6839\u4E3A\u5927\u9633\u7EBF\uFF0C\u7B2C\u4E8C\u6839\u9AD8\u5F00\u540E\u6536\u9634",
      "\u9634\u7EBF\u6536\u76D8\u6DF1\u5165\u9633\u7EBF\u5B9E\u4F53\u4E00\u534A\u4EE5\u4E0A",
      "\u51FA\u73B0\u5728\u4E0A\u6DA8\u9AD8\u4F4D\u66F4\u6709\u6548"
    ],
    psychology: "\u9AD8\u5F00\u5374\u672A\u80FD\u7AD9\u7A33\uFF0C\u7A7A\u65B9\u538B\u56DE\uFF0C\u591A\u5934\u4FE1\u5FC3\u53D7\u632B\u3002",
    commonMistakes: ["\u4E0E\u770B\u8DCC\u541E\u6CA1\u6DF7\u6DC6", "\u6DF1\u5165\u4E0D\u8DB3\u4E00\u534A\u4E5F\u5F53\u4E4C\u4E91"],
    demoSeed: 1206
  },
  {
    id: "morning-star",
    name: "\u542F\u660E\u661F\u5F62\u6001",
    aliases: ["\u6668\u661F", "\u65E9\u6668\u4E4B\u661F"],
    category: "reversal",
    bias: "bullish",
    bars: 3,
    difficulty: 3,
    rules: [
      "\u7B2C\u4E00\u6839\u4E3A\u5927\u9634\u7EBF\uFF0C\u7B2C\u4E8C\u6839\u5C0F\u5B9E\u4F53\u661F\u7EBF\uFF0C\u7B2C\u4E09\u6839\u5927\u9633\u7EBF",
      "\u661F\u7EBF\u5B9E\u4F53\u4E0E\u524D\u4E00\u6839\u5B9E\u4F53\u6700\u597D\u6CA1\u6709\u91CD\u53E0\uFF08\u5F62\u6210\u5411\u4E0B\u8DF3\u7A7A\uFF09",
      "\u7B2C\u4E09\u6839\u660E\u663E\u5411\u4E0A\u63A8\u8FDB\u5230\u7B2C\u4E00\u6839\u9634\u7EBF\u5B9E\u4F53\u4E4B\u5185",
      "\u51FA\u73B0\u5728\u4E0B\u8DCC\u8D8B\u52BF\u4E4B\u540E\uFF1B\u80A1\u7968\u91CC\u7B2C\u4E8C\u8DF3\u7A7A\u5E38\u7F3A\uFF0C\u6548\u529B\u4ECD\u53EF\u6210\u7ACB"
    ],
    psychology: "\u4E0B\u8DCC\u2014\u72B9\u8C6B\u2014\u53CD\u653B\u4E09\u6B65\u8D70\uFF0C\u591A\u5934\u91CD\u65B0\u638C\u63A7\u8282\u594F\u3002",
    commonMistakes: ["\u4E2D\u95F4\u5B9E\u4F53\u8FC7\u5927", "\u7B2C\u4E09\u6839\u529B\u5EA6\u4E0D\u8DB3\u4ECD\u5F53\u542F\u660E\u661F"],
    demoSeed: 1301
  },
  {
    id: "evening-star",
    name: "\u9EC4\u660F\u661F\u5F62\u6001",
    aliases: ["\u66AE\u661F", "\u9EC4\u660F\u4E4B\u661F"],
    category: "reversal",
    bias: "bearish",
    bars: 3,
    difficulty: 3,
    rules: [
      "\u7B2C\u4E00\u6839\u4E3A\u5927\u9633\u7EBF\uFF0C\u7B2C\u4E8C\u6839\u5C0F\u5B9E\u4F53\u661F\u7EBF\uFF0C\u7B2C\u4E09\u6839\u5927\u9634\u7EBF",
      "\u661F\u7EBF\u5B9E\u4F53\u4E0E\u524D\u4E00\u6839\u5B9E\u4F53\u6700\u597D\u6CA1\u6709\u91CD\u53E0",
      "\u7B2C\u4E09\u6839\u5267\u70C8\u5411\u4E0B\u624E\u5165\u7B2C\u4E00\u6839\u9633\u7EBF\u5B9E\u4F53",
      "\u5FC5\u987B\u51FA\u73B0\u5728\u4E0A\u5347\u8D8B\u52BF\u4E4B\u540E\u624D\u6709\u6280\u672F\u6548\u529B"
    ],
    psychology: "\u4E0A\u6DA8\u2014\u72B9\u8C6B\u2014\u56DE\u843D\uFF0C\u7A7A\u5934\u53CD\u5BA2\u4E3A\u4E3B\u3002",
    commonMistakes: ["\u4E0E\u542F\u660E\u661F\u7ED3\u6784\u641E\u53CD", "\u5FFD\u7565\u7B2C\u4E09\u6839\u5FC5\u987B\u6709\u529B\u5EA6"],
    demoSeed: 1302
  },
  {
    id: "three-white-soldiers",
    name: "\u767D\u8272\u4E09\u5175\u633A\u8FDB\u5F62\u6001",
    aliases: ["\u4E09\u767D\u5175", "\u524D\u8FDB\u767D\u8272\u4E09\u5175\u5F62\u6001", "\u7EA2\u4E09\u5175"],
    category: "reversal",
    bias: "bullish",
    bars: 3,
    difficulty: 3,
    rules: [
      "\u8FDE\u7EED\u4E09\u6839\u9633\u7EBF\uFF0C\u5B9E\u4F53\u8F83\u957F",
      "\u6BCF\u65E5\u6536\u76D8\u9010\u6B65\u62AC\u9AD8\uFF0C\u5F00\u76D8\u591A\u5728\u524D\u65E5\u5B9E\u4F53\u5185",
      "\u4E0A\u5F71\u7EBF\u8F83\u77ED\uFF0C\u663E\u793A\u4E70\u76D8\u575A\u51B3"
    ],
    psychology: "\u5C3C\u68EE\u5F52\u5165\u5176\u4ED6\u53CD\u8F6C\uFF1A\u4E0B\u8DCC\u540E\u8FDE\u7EED\u4E09\u6839\u575A\u633A\u9633\u7EBF\uFF0C\u5E38\u6807\u5FD7\u7A7A\u5934\u8F6C\u4E3A\u591A\u5934\u633A\u8FDB\u3002",
    commonMistakes: ["\u628A\u4E09\u6839\u968F\u610F\u9633\u7EBF\u90FD\u53EB\u4E09\u767D\u5175", "\u5FFD\u7565\u5F71\u7EBF\u8FC7\u957F\u7684\u75B2\u6001"],
    demoSeed: 1303
  },
  {
    id: "three-black-crows",
    name: "\u4E09\u53EA\u4E4C\u9E26",
    aliases: ["\u9ED1\u8272\u4E09\u4E4C\u9E26", "\u9ED1\u4E09\u9E26"],
    category: "reversal",
    bias: "bearish",
    bars: 3,
    difficulty: 3,
    rules: [
      "\u8FDE\u7EED\u4E09\u6839\u9634\u7EBF\uFF0C\u5B9E\u4F53\u8F83\u957F",
      "\u6BCF\u65E5\u6536\u76D8\u9010\u6B65\u964D\u4F4E",
      "\u4E0B\u5F71\u7EBF\u8F83\u77ED\uFF0C\u629B\u538B\u6301\u7EED"
    ],
    psychology: "\u5C3C\u68EE\u5F52\u5165\u5176\u4ED6\u53CD\u8F6C\uFF1A\u4E0A\u6DA8\u540E\u8FDE\u7EED\u4E09\u6839\u9634\u7EBF\uFF0C\u663E\u793A\u591A\u5934\u8F6C\u4E3A\u7A7A\u5934\u538B\u5236\u3002",
    commonMistakes: ["\u4F4E\u4F4D\u4E09\u9634\u4E5F\u5F53\u5F3A\u70C8\u4FE1\u53F7", "\u4E0E\u666E\u901A\u56DE\u8C03\u6DF7\u6DC6"],
    demoSeed: 1304
  },
  {
    id: "three-mountains",
    name: "\u4E09\u5C71\u5F62\u6001",
    aliases: ["\u4E09\u91CD\u9876"],
    category: "reversal",
    bias: "bearish",
    bars: 12,
    difficulty: 3,
    rules: [
      "\u4E0A\u6DA8\u540E\u51FA\u73B0\u4E09\u4E2A\u76F8\u8FD1\u9AD8\u70B9\uFF0C\u5F62\u4F3C\u4E09\u5EA7\u5C71\u5CF0",
      "\u5CF0\u4E0E\u5CF0\u4E4B\u95F4\u6709\u56DE\u8C03\u4F4E\u70B9",
      "\u8DCC\u7834\u4E24\u8C37\u8FDE\u7EBF/\u9888\u7EBF\u540E\u770B\u8DCC\u786E\u8BA4"
    ],
    psychology: "\u591A\u65B9\u4E09\u6B21\u51B2\u51FB\u9AD8\u4F4D\u5931\u8D25\uFF0C\u4E70\u76D8\u8870\u7AED\uFF0C\u9876\u90E8\u53CD\u8F6C\u98CE\u9669\u5347\u9AD8\u3002",
    commonMistakes: ["\u628A\u666E\u901A\u9707\u8361\u90FD\u53EB\u4E09\u5C71", "\u672A\u8DCC\u7834\u9888\u7EBF\u5C31\u63D0\u524D\u505A\u7A7A"],
    demoSeed: 1401
  },
  {
    id: "three-rivers",
    name: "\u4E09\u5DDD\u5F62\u6001",
    aliases: ["\u4E09\u91CD\u5E95"],
    category: "reversal",
    bias: "bullish",
    bars: 12,
    difficulty: 3,
    rules: [
      "\u4E0B\u8DCC\u540E\u51FA\u73B0\u4E09\u4E2A\u76F8\u8FD1\u4F4E\u70B9\uFF0C\u5F62\u4F3C\u4E09\u6761\u6CB3\u8C37",
      "\u8C37\u4E0E\u8C37\u4E4B\u95F4\u6709\u53CD\u5F39\u9AD8\u70B9",
      "\u7A81\u7834\u4E24\u5CF0\u8FDE\u7EBF/\u9888\u7EBF\u540E\u770B\u6DA8\u786E\u8BA4"
    ],
    psychology: "\u7A7A\u65B9\u4E09\u6B21\u538B\u4F4E\u5931\u8D25\uFF0C\u629B\u538B\u51CF\u8F7B\uFF0C\u5E95\u90E8\u53CD\u8F6C\u673A\u4F1A\u589E\u52A0\u3002",
    commonMistakes: ["\u4F4E\u70B9\u76F8\u5DEE\u8FC7\u5927\u4ECD\u5F53\u4E09\u5DDD", "\u672A\u7A81\u7834\u9888\u7EBF\u5C31\u8FFD\u591A"],
    demoSeed: 1402
  },
  {
    id: "bullish-counterattack",
    name: "\u770B\u6DA8\u53CD\u51FB\u7EBF\u5F62\u6001",
    aliases: ["\u7EA6\u4F1A\u7EBF\u5F62\u6001", "\u7EA6\u4F1A\u7EBF\uFF08\u770B\u6DA8\uFF09"],
    category: "reversal",
    bias: "bullish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u7B2C\u4E00\u6839\u4E3A\u5927\u9634\u7EBF\uFF0C\u7B2C\u4E8C\u6839\u4F4E\u5F00\u540E\u6536\u9633",
      "\u7B2C\u4E8C\u6839\u6536\u76D8\u63A5\u8FD1\u6216\u7B49\u4E8E\u7B2C\u4E00\u6839\u6536\u76D8\uFF08\u7EA6\u4F1A\uFF09",
      "\u51FA\u73B0\u5728\u4E0B\u8DCC\u672B\u7AEF\u66F4\u6709\u610F\u4E49"
    ],
    psychology: "\u4F4E\u5F00\u627F\u63A5\u540E\u62C9\u56DE\u524D\u6536\u9644\u8FD1\uFF0C\u7A7A\u5934\u4F18\u52BF\u88AB\u5F53\u573A\u53CD\u51FB\u3002",
    commonMistakes: ["\u4E0E\u523A\u900F/\u541E\u6CA1\u6DF7\u6DC6", "\u6536\u76D8\u76F8\u5DEE\u8FC7\u5927\u4ECD\u7B97\u7EA6\u4F1A"],
    demoSeed: 1403
  },
  {
    id: "bearish-counterattack",
    name: "\u770B\u8DCC\u53CD\u51FB\u7EBF\u5F62\u6001",
    aliases: ["\u7EA6\u4F1A\u7EBF\u5F62\u6001", "\u7EA6\u4F1A\u7EBF\uFF08\u770B\u8DCC\uFF09"],
    category: "reversal",
    bias: "bearish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u7B2C\u4E00\u6839\u4E3A\u5927\u9633\u7EBF\uFF0C\u7B2C\u4E8C\u6839\u9AD8\u5F00\u540E\u6536\u9634",
      "\u7B2C\u4E8C\u6839\u6536\u76D8\u63A5\u8FD1\u6216\u7B49\u4E8E\u7B2C\u4E00\u6839\u6536\u76D8",
      "\u51FA\u73B0\u5728\u4E0A\u6DA8\u9AD8\u4F4D\u66F4\u6709\u610F\u4E49"
    ],
    psychology: "\u9AD8\u5F00\u5373\u9047\u629B\u538B\uFF0C\u6536\u56DE\u524D\u6536\u9644\u8FD1\uFF0C\u591A\u5934\u653B\u52BF\u88AB\u53CD\u51FB\u3002",
    commonMistakes: ["\u4E0E\u4E4C\u4E91\u76D6\u9876\u6DF7\u6DC6", "\u5FFD\u89C6\u8D8B\u52BF\u4F4D\u7F6E"],
    demoSeed: 1404
  },
  {
    id: "rounding-top",
    name: "\u5706\u5F62\u9876\u90E8\u5F62\u6001",
    aliases: ["\u5706\u5F27\u9876"],
    category: "reversal",
    bias: "bearish",
    bars: 10,
    difficulty: 3,
    rules: [
      "\u9AD8\u4F4D\u4EF7\u683C\u7F13\u6162\u8D70\u5E73\u5E76\u5411\u4E0B\u5F2F\u66F2\uFF0C\u5448\u5706\u5F27\u72B6",
      "\u4E0D\u662F\u6025\u4FC3\u5C16\u9876\uFF0C\u800C\u662F\u9010\u6B65\u8F6C\u79FB\u7684\u9876\u90E8",
      "\u8DCC\u7834\u5706\u5F27\u652F\u6491\u540E\u786E\u8BA4"
    ],
    psychology: "\u4E70\u76D8\u6162\u6162\u64A4\u9000\uFF0C\u9876\u90E8\u6362\u624B\u5145\u5206\uFF0C\u5E38\u915D\u917F\u8F83\u6301\u4E45\u7684\u4E0B\u8DCC\u3002",
    commonMistakes: ["\u628A\u5C16\u9876 V \u53CD\u8F6C\u5F53\u6210\u5706\u5F62\u9876", "\u5F62\u6001\u672A\u5B8C\u6210\u5C31\u63D0\u524D\u5224\u65AD"],
    demoSeed: 1405
  },
  {
    id: "rounding-bottom",
    name: "\u5E73\u5E95\u9505\u5E95\u90E8\u5F62\u6001",
    aliases: ["\u5706\u5F62\u5E95\u90E8", "\u5706\u5F27\u5E95"],
    category: "reversal",
    bias: "bullish",
    bars: 10,
    difficulty: 3,
    rules: [
      "\u4F4E\u4F4D\u4EF7\u683C\u7F13\u6162\u8D70\u5E73\u5E76\u5411\u4E0A\u5F2F\u66F2\uFF0C\u5F62\u4F3C\u9505\u5E95",
      "\u6CE2\u52A8\u9010\u6E10\u6536\u655B\u540E\u518D\u62AC\u5934",
      "\u653E\u91CF\u7A81\u7834\u66F4\u6709\u6548"
    ],
    psychology: "\u629B\u538B\u6162\u6162\u6D88\u5316\uFF0C\u5E95\u90E8\u592F\u5B9E\uFF0C\u53CD\u8F6C\u5F80\u5F80\u66F4\u7A33\u3002",
    commonMistakes: ["\u628A\u6025\u8DCC\u6025\u62C9\u5F53\u9505\u5E95", "\u5FFD\u89C6\u7A81\u7834\u786E\u8BA4"],
    demoSeed: 1406
  },
  {
    id: "tower-top",
    name: "\u5854\u5F62\u9876\u90E8\u5F62\u6001",
    aliases: ["\u5854\u9876"],
    category: "reversal",
    bias: "bearish",
    bars: 6,
    difficulty: 3,
    rules: [
      "\u5148\u6709\u4E00\u6BB5\u5F3A\u52B2\u4E0A\u6DA8\uFF08\u9AD8\u5854\uFF09\uFF0C\u968F\u540E\u51FA\u73B0\u4E00\u6839\u6216\u8FDE\u7EED\u5927\u9634\u7EBF",
      "\u4E0A\u6DA8\u8282\u594F\u88AB\u7A81\u7136\u6253\u65AD",
      "\u9AD8\u4F4D\u957F\u9634\u662F\u5173\u952E\u786E\u8BA4"
    ],
    psychology: "\u591A\u5934\u51B2\u9876\u540E\u8FC5\u901F\u88AB\u7A7A\u5934\u7838\u56DE\uFF0C\u9876\u90E8\u5D29\u584C\u611F\u5F3A\u3002",
    commonMistakes: ["\u628A\u666E\u901A\u56DE\u8C03\u53EB\u5854\u9876", "\u4E0A\u6DA8\u6BB5\u4E0D\u591F\u9661\u5CED"],
    demoSeed: 1407
  },
  {
    id: "tower-bottom",
    name: "\u5854\u5F62\u5E95\u90E8\u5F62\u6001",
    aliases: ["\u5854\u5E95"],
    category: "reversal",
    bias: "bullish",
    bars: 6,
    difficulty: 3,
    rules: [
      "\u5148\u6709\u4E00\u6BB5\u6025\u8DCC\uFF0C\u968F\u540E\u51FA\u73B0\u4E00\u6839\u6216\u8FDE\u7EED\u5927\u9633\u7EBF",
      "\u4E0B\u8DCC\u52A8\u80FD\u7A81\u7136\u88AB\u626D\u8F6C",
      "\u4F4E\u4F4D\u957F\u9633\u662F\u5173\u952E\u786E\u8BA4"
    ],
    psychology: "\u6050\u614C\u4E0B\u8DCC\u540E\u4E70\u65B9\u5F3A\u52BF\u63A5\u56DE\uFF0C\u5E95\u90E8\u53CD\u51FB\u4FE1\u53F7\u3002",
    commonMistakes: ["\u53CD\u5F39\u65E0\u529B\u4E5F\u5F53\u5854\u5E95", "\u5FFD\u7565\u540E\u7EED\u80FD\u5426\u7AD9\u7A33"],
    demoSeed: 1408
  },
  {
    id: "rising-window",
    name: "\u5411\u4E0A\u7A97\u53E3",
    aliases: ["\u7A97\u53E3", "\u5411\u4E0A\u8DF3\u7A7A", "\u4E0A\u5347\u7F3A\u53E3"],
    category: "continuation",
    bias: "bullish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u540E\u4E00\u6839\u6700\u4F4E\u4EF7\u9AD8\u4E8E\u524D\u4E00\u6839\u6700\u9AD8\u4EF7\uFF0C\u4E2D\u95F4\u7559\u767D",
      "\u5E38\u51FA\u73B0\u5728\u4E0A\u5347\u8D8B\u52BF\u4E2D\uFF0C\u5C5E\u6301\u7EED\u4FE1\u53F7",
      "\u7A97\u53E3\u672A\u56DE\u8865\u524D\u591A\u89C6\u4E3A\u652F\u6491"
    ],
    psychology: "\u4E70\u76D8\u8DF3\u7A7A\u63A8\u8FDB\u3002\u7A97\u53E3\u4E4B\u540E\u7684\u56DE\u64A4\u5F80\u5F80\u4F1A\u91CD\u65B0\u8FD4\u56DE\u7A97\u53E3\uFF0C\u672A\u5173\u95ED\u524D\u591A\u89C6\u4E3A\u652F\u6491\u3002",
    commonMistakes: ["\u628A\u666E\u901A\u9AD8\u5F00\u90FD\u53EB\u7A97\u53E3", "\u5FFD\u7565\u7A97\u53E3\u662F\u5426\u88AB\u56DE\u8865"],
    demoSeed: 1501
  },
  {
    id: "falling-window",
    name: "\u5411\u4E0B\u7A97\u53E3",
    aliases: ["\u7A97\u53E3", "\u5411\u4E0B\u8DF3\u7A7A", "\u4E0B\u964D\u7F3A\u53E3"],
    category: "continuation",
    bias: "bearish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u540E\u4E00\u6839\u6700\u9AD8\u4EF7\u4F4E\u4E8E\u524D\u4E00\u6839\u6700\u4F4E\u4EF7\uFF0C\u4E2D\u95F4\u7559\u767D",
      "\u5E38\u51FA\u73B0\u5728\u4E0B\u964D\u8D8B\u52BF\u4E2D\uFF0C\u5C5E\u6301\u7EED\u4FE1\u53F7",
      "\u7A97\u53E3\u672A\u56DE\u8865\u524D\u591A\u89C6\u4E3A\u538B\u529B"
    ],
    psychology: "\u5356\u76D8\u8DF3\u7A7A\u7838\u4E0B\u3002\u7A97\u53E3\u4E4B\u540E\u7684\u53CD\u5F39\u5F80\u5F80\u4F1A\u91CD\u65B0\u8FD4\u56DE\u7A97\u53E3\uFF0C\u672A\u5173\u95ED\u524D\u591A\u89C6\u4E3A\u538B\u529B\u3002",
    commonMistakes: ["\u4F4E\u5F00\u4E00\u70B9\u70B9\u4E5F\u7B97\u7A97\u53E3", "\u56DE\u8865\u540E\u4ECD\u5F53\u5F3A\u6301\u7EED"],
    demoSeed: 1502
  },
  {
    id: "upside-gap-side-by-side",
    name: "\u5411\u4E0A\u8DF3\u7A7A\u5E76\u5217\u9634\u9633\u7EBF\u5F62\u6001",
    aliases: ["\u5411\u4E0A\u8DF3\u7A7A\u5E76\u5217\u7EBF"],
    category: "continuation",
    bias: "bullish",
    bars: 3,
    difficulty: 3,
    rules: [
      "\u4E0A\u5347\u4E2D\u5148\u8DF3\u7A7A\u9633\u7EBF\uFF0C\u968F\u540E\u4E00\u6839\u5B9E\u4F53\u76F8\u8FD1\u7684\u9634/\u9633\u7EBF\u4E0E\u4E4B\u5E76\u5217",
      "\u7B2C\u4E8C\u6839\u672A\u5C01\u95ED\u7F3A\u53E3",
      "\u5C5E\u4E8E\u4E0A\u5347\u6301\u7EED\u5F62\u6001"
    ],
    psychology: "\u8DF3\u7A7A\u540E\u51FA\u73B0\u6574\u7406\uFF0C\u4F46\u7F3A\u53E3\u4ECD\u5728\uFF0C\u4E0A\u5347\u8D8B\u52BF\u5F80\u5F80\u5EF6\u7EED\u3002",
    commonMistakes: ["\u7B2C\u4E8C\u6839\u56DE\u8865\u7F3A\u53E3\u4ECD\u5F53\u6B64\u5F62\u6001", "\u4E0E\u666E\u901A\u4E2D\u7EE7\u6DF7\u6DC6"],
    demoSeed: 1503
  },
  {
    id: "downside-gap-side-by-side",
    name: "\u5411\u4E0B\u8DF3\u7A7A\u5E76\u5217\u9634\u9633\u7EBF\u5F62\u6001",
    aliases: ["\u5411\u4E0B\u8DF3\u7A7A\u5E76\u5217\u7EBF"],
    category: "continuation",
    bias: "bearish",
    bars: 3,
    difficulty: 3,
    rules: [
      "\u4E0B\u964D\u4E2D\u5148\u8DF3\u7A7A\u9634\u7EBF\uFF0C\u968F\u540E\u4E00\u6839\u5B9E\u4F53\u76F8\u8FD1\u7684\u7EBF\u4E0E\u4E4B\u5E76\u5217",
      "\u7B2C\u4E8C\u6839\u672A\u5C01\u95ED\u7F3A\u53E3",
      "\u5C5E\u4E8E\u4E0B\u964D\u6301\u7EED\u5F62\u6001"
    ],
    psychology: "\u8DF3\u7A7A\u4E0B\u8DCC\u540E\u77ED\u6682\u5E76\u5217\u6574\u7406\uFF0C\u4E0B\u8DCC\u8D8B\u52BF\u4ECD\u53EF\u80FD\u5EF6\u7EED\u3002",
    commonMistakes: ["\u7F3A\u53E3\u88AB\u56DE\u8865\u4ECD\u7B97", "\u5FFD\u7565\u5927\u8D8B\u52BF\u65B9\u5411"],
    demoSeed: 1504
  },
  {
    id: "rising-three-methods",
    name: "\u4E0A\u5347\u4E09\u6CD5\u5F62\u6001",
    aliases: ["\u4E0A\u5347\u4E09\u8721\u70DB\u7EBF\u6CD5"],
    category: "continuation",
    bias: "bullish",
    bars: 5,
    difficulty: 3,
    rules: [
      "\u5148\u4E00\u6839\u5927\u9633\u7EBF\uFF0C\u4E2D\u95F4\u4E09\u6839\u5C0F\u5B9E\u4F53\u56DE\u8E29\u4F46\u4ECD\u5728\u5927\u9633\u8303\u56F4\u5185",
      "\u6700\u540E\u518D\u4E00\u6839\u5927\u9633\u7EBF\u5411\u4E0A\u7A81\u7834",
      "\u4E0A\u5347\u8D8B\u52BF\u4E2D\u7684\u6301\u7EED\u6574\u7406"
    ],
    psychology: "\u4E0A\u6DA8\u9014\u4E2D\u77ED\u6682\u4F11\u6574\uFF0C\u7A7A\u5934\u53CD\u6251\u65E0\u529B\uFF0C\u591A\u5934\u518D\u5EA6\u8FDB\u653B\u3002",
    commonMistakes: ["\u4E2D\u95F4\u56DE\u8C03\u8DCC\u7834\u5927\u9633\u4F4E\u70B9\u4ECD\u7B97", "\u4E0E\u4E09\u53EA\u4E4C\u9E26\u641E\u6DF7"],
    demoSeed: 1505
  },
  {
    id: "falling-three-methods",
    name: "\u4E0B\u964D\u4E09\u6CD5\u5F62\u6001",
    aliases: ["\u4E0B\u964D\u4E09\u8721\u70DB\u7EBF\u6CD5"],
    category: "continuation",
    bias: "bearish",
    bars: 5,
    difficulty: 3,
    rules: [
      "\u5148\u4E00\u6839\u5927\u9634\u7EBF\uFF0C\u4E2D\u95F4\u4E09\u6839\u5C0F\u5B9E\u4F53\u53CD\u5F39\u4F46\u4ECD\u5728\u5927\u9634\u8303\u56F4\u5185",
      "\u6700\u540E\u518D\u4E00\u6839\u5927\u9634\u7EBF\u5411\u4E0B\u7A81\u7834",
      "\u4E0B\u964D\u8D8B\u52BF\u4E2D\u7684\u6301\u7EED\u6574\u7406"
    ],
    psychology: "\u4E0B\u8DCC\u9014\u4E2D\u53CD\u5F39\u4E4F\u529B\uFF0C\u7A7A\u5934\u518D\u6B21\u4E3B\u5BFC\u3002",
    commonMistakes: ["\u4E2D\u95F4\u53CD\u5F39\u7A81\u7834\u5927\u9634\u9AD8\u70B9\u4ECD\u7B97", "\u4E0E\u4E09\u767D\u5175\u6DF7\u6DC6"],
    demoSeed: 1506
  },
  {
    id: "bullish-separating-lines",
    name: "\u770B\u6DA8\u5206\u624B\u7EBF\u5F62\u6001",
    aliases: ["\u5206\u624B\u7EBF\u5F62\u6001", "\u5206\u624B\u8721\u70DB\u7EBF\u5F62\u6001", "\u5206\u624B\u7EBF\uFF08\u770B\u6DA8\uFF09"],
    category: "continuation",
    bias: "bullish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u4E0A\u5347\u8D8B\u52BF\u4E2D\uFF0C\u524D\u4E00\u6839\u9634\u7EBF\uFF0C\u540E\u4E00\u6839\u9633\u7EBF",
      "\u4E24\u6839\u5F00\u76D8\u4EF7\u76F8\u540C\u6216\u975E\u5E38\u63A5\u8FD1\uFF08\u5206\u624B\uFF09",
      "\u9633\u7EBF\u5B9E\u4F53\u8F83\u5F3A\uFF0C\u5EF6\u7EED\u4E0A\u6DA8"
    ],
    psychology: "\u540C\u4EF7\u4F4D\u5206\u624B\u540E\u591A\u65B9\u5360\u4F18\uFF0C\u4E0A\u5347\u8D8B\u52BF\u5F97\u4EE5\u5EF6\u7EED\u3002",
    commonMistakes: ["\u5F00\u76D8\u76F8\u5DEE\u5F88\u5927\u4ECD\u53EB\u5206\u624B", "\u4E0B\u8DCC\u5E02\u4E2D\u8BEF\u7528"],
    demoSeed: 1507
  },
  {
    id: "bearish-separating-lines",
    name: "\u770B\u8DCC\u5206\u624B\u7EBF\u5F62\u6001",
    aliases: ["\u5206\u624B\u7EBF\u5F62\u6001", "\u5206\u624B\u8721\u70DB\u7EBF\u5F62\u6001", "\u5206\u624B\u7EBF\uFF08\u770B\u8DCC\uFF09"],
    category: "continuation",
    bias: "bearish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u4E0B\u964D\u8D8B\u52BF\u4E2D\uFF0C\u524D\u4E00\u6839\u9633\u7EBF\uFF0C\u540E\u4E00\u6839\u9634\u7EBF",
      "\u4E24\u6839\u5F00\u76D8\u4EF7\u76F8\u540C\u6216\u975E\u5E38\u63A5\u8FD1",
      "\u9634\u7EBF\u5B9E\u4F53\u8F83\u5F3A\uFF0C\u5EF6\u7EED\u4E0B\u8DCC"
    ],
    psychology: "\u540C\u4EF7\u4F4D\u5206\u624B\u540E\u7A7A\u65B9\u5360\u4F18\uFF0C\u4E0B\u964D\u8D8B\u52BF\u5EF6\u7EED\u3002",
    commonMistakes: ["\u4E0E\u53CD\u51FB\u7EBF\uFF08\u6536\u76D8\u7EA6\u4F1A\uFF09\u6DF7\u6DC6", "\u5FFD\u7565\u8D8B\u52BF\u80CC\u666F"],
    demoSeed: 1508
  },
  {
    id: "long-legged-doji",
    name: "\u957F\u817F\u5341\u5B57\u7EBF",
    aliases: ["\u9EC4\u5305\u8F66\u592B", "\u957F\u811A\u5341\u5B57\u7EBF", "\u5927\u5341\u5B57\u661F"],
    category: "neutral",
    bias: "neutral",
    bars: 1,
    difficulty: 1,
    rules: [
      "\u5F00\u6536\u51E0\u4E4E\u76F8\u7B49\uFF0C\u4E0A\u4E0B\u5F71\u7EBF\u90FD\u660E\u663E\u504F\u957F",
      "\u6CE2\u52A8\u5267\u70C8\u4F46\u591A\u7A7A\u672A\u5206\u80DC\u8D1F",
      "\u9AD8\u4F4D/\u4F4E\u4F4D\u51FA\u73B0\u65F6\u8B66\u793A\u610F\u4E49\u66F4\u5F3A"
    ],
    psychology: "\u5E02\u573A\u5206\u6B67\u5DE8\u5927\uFF0C\u53D8\u76D8\u6216\u9707\u8361\u52A0\u5267\u7684\u4FE1\u53F7\u3002",
    commonMistakes: ["\u628A\u666E\u901A\u5341\u5B57\u90FD\u53EB\u957F\u811A", "\u4E0D\u770B\u4F4D\u7F6E\u5355\u72EC\u4EA4\u6613"],
    demoSeed: 1601
  },
  {
    id: "gravestone-doji",
    name: "\u5893\u7891\u5341\u5B57\u7EBF",
    aliases: ["\u5893\u7891\u7EBF"],
    category: "reversal",
    bias: "bearish",
    bars: 1,
    difficulty: 2,
    rules: [
      "\u5F00\u6536\u51E0\u4E4E\u5728\u6700\u4F4E\u4EF7\u9644\u8FD1",
      "\u4E0A\u5F71\u7EBF\u5F88\u957F\uFF0C\u51E0\u4E4E\u65E0\u4E0B\u5F71",
      "\u51FA\u73B0\u5728\u4E0A\u6DA8\u9AD8\u4F4D\u66F4\u6709\u6548"
    ],
    psychology: "\u51B2\u9AD8\u5168\u90E8\u56DE\u5410\uFF0C\u9AD8\u4F4D\u62D2\u7EDD\u4E0A\u6DA8\uFF0C\u89C1\u9876\u610F\u5473\u6D53\u3002",
    commonMistakes: ["\u4E0E\u6D41\u661F\u7EBF\u533A\u5206\u4E0D\u6E05", "\u4F4E\u4F4D\u51FA\u73B0\u4E5F\u5F53\u5F3A\u70C8\u505A\u7A7A"],
    demoSeed: 1602
  },
  {
    id: "dragonfly-doji",
    name: "\u873B\u8713\u5341\u5B57\u7EBF",
    aliases: ["\u873B\u8713\u7EBF"],
    category: "reversal",
    bias: "bullish",
    bars: 1,
    difficulty: 2,
    rules: [
      "\u5F00\u6536\u51E0\u4E4E\u5728\u6700\u9AD8\u4EF7\u9644\u8FD1",
      "\u4E0B\u5F71\u7EBF\u5F88\u957F\uFF0C\u51E0\u4E4E\u65E0\u4E0A\u5F71",
      "\u51FA\u73B0\u5728\u4E0B\u8DCC\u4F4E\u4F4D\u66F4\u6709\u6548"
    ],
    psychology: "\u76D8\u4E2D\u5927\u8DCC\u540E\u88AB\u62C9\u56DE\uFF0C\u4F4E\u4F4D\u62D2\u7EDD\u4E0B\u884C\uFF0C\u5E38\u6709\u53CD\u5F39\u610F\u5473\u3002",
    commonMistakes: ["\u4E0E\u9524\u5B50\u7EBF\u6DF7\u6DC6", "\u9AD8\u4F4D\u873B\u8713\u4E5F\u5F53\u770B\u6DA8"],
    demoSeed: 1603
  },
  // —— 以下依据史蒂夫·尼森《日本蜡烛图技术》补充 ——
  {
    id: "spinning-top",
    name: "\u7EBA\u9524\u7EBF",
    aliases: ["\u5C0F\u5B9E\u4F53\u7EBF"],
    category: "neutral",
    bias: "neutral",
    bars: 1,
    difficulty: 1,
    rules: [
      "\u5B9E\u4F53\u5F88\u5C0F\uFF0C\u4E0A\u4E0B\u5F71\u7EBF\u90FD\u8F83\u660E\u663E",
      "\u8868\u793A\u591A\u7A7A\u6682\u65F6\u5E73\u8861\u3001\u8D8B\u52BF\u53EF\u80FD\u505C\u987F",
      "\u9700\u7ED3\u5408\u524D\u540E K \u7EBF\u4E0E\u4F4D\u7F6E\u89E3\u8BFB"
    ],
    psychology: "\u5C3C\u68EE\u5F3A\u8C03\uFF1A\u7EBA\u9524\u7EBF\u672C\u8EAB\u4E2D\u6027\uFF0C\u51FA\u73B0\u5728\u5F3A\u8D8B\u52BF\u540E\u5E38\u610F\u5473\u7740\u52A8\u80FD\u51CF\u5F31\u3002",
    commonMistakes: ["\u628A\u7EBA\u9524\u7EBF\u5355\u72EC\u5F53\u4E70\u5356\u4FE1\u53F7", "\u4E0E\u5341\u5B57\u661F\u5B8C\u5168\u7B49\u540C"],
    demoSeed: 1701
  },
  {
    id: "high-wave",
    name: "\u9AD8\u6D6A\u7EBF",
    aliases: ["\u957F\u5F71\u7EBF"],
    category: "neutral",
    bias: "neutral",
    bars: 1,
    difficulty: 1,
    rules: [
      "\u5B9E\u4F53\u5F88\u5C0F\u6216\u63A5\u8FD1\u5341\u5B57\uFF0C\u4E0A\u4E0B\u5F71\u7EBF\u5F02\u5E38\u957F",
      "\u8BF4\u660E\u5F53\u65E5\u6CE2\u52A8\u5267\u70C8\u3001\u5E02\u573A\u72B9\u8C6B",
      "\u8D8B\u52BF\u672B\u7AEF\u51FA\u73B0\u65F6\u8B66\u793A\u610F\u4E49\u66F4\u5F3A"
    ],
    psychology: "\u4E70\u5356\u53CC\u65B9\u6FC0\u70C8\u4E89\u593A\u5374\u96BE\u5206\u80DC\u8D1F\uFF0C\u53D8\u76D8\u6216\u9707\u8361\u52A0\u5927\u7684\u524D\u5146\u3002",
    commonMistakes: ["\u4E0E\u957F\u811A\u5341\u5B57\u6DF7\u6DC6\u4E0D\u6E05", "\u5FFD\u7565\u8D8B\u52BF\u80CC\u666F"],
    demoSeed: 1702
  },
  {
    id: "bullish-marubozu",
    name: "\u5149\u5934\u5149\u811A\u9633\u7EBF",
    aliases: ["\u5927\u9633\u7EBF\uFF08\u5149\u5934\u5149\u811A\uFF09"],
    category: "continuation",
    bias: "bullish",
    bars: 1,
    difficulty: 1,
    rules: [
      "\u51E0\u4E4E\u65E0\u4E0A\u4E0B\u5F71\u7EBF\u7684\u957F\u9633\u5B9E\u4F53",
      "\u5F00\u76D8\u5373\u6700\u4F4E\u3001\u6536\u76D8\u5373\u6700\u9AD8\uFF08\u6216\u6781\u63A5\u8FD1\uFF09",
      "\u663E\u793A\u591A\u65B9\u5B8C\u5168\u638C\u63A7\u5F53\u65E5\u884C\u60C5"
    ],
    psychology: "\u4E70\u76D8\u81EA\u5F00\u76D8\u5F3A\u52BF\u8D2F\u7A7F\u5168\u5929\uFF0C\u5E38\u5F3A\u5316\u539F\u6709\u4E0A\u5347\u52A8\u80FD\u3002",
    commonMistakes: ["\u77ED\u5C0F\u5B9E\u4F53\u4E5F\u53EB\u5149\u5934\u5149\u811A", "\u5355\u72EC\u4E00\u6839\u5C31\u91CD\u4ED3\u8FFD\u591A"],
    demoSeed: 1703
  },
  {
    id: "bearish-marubozu",
    name: "\u5149\u5934\u5149\u811A\u9634\u7EBF",
    aliases: ["\u5927\u9634\u7EBF\uFF08\u5149\u5934\u5149\u811A\uFF09"],
    category: "continuation",
    bias: "bearish",
    bars: 1,
    difficulty: 1,
    rules: [
      "\u51E0\u4E4E\u65E0\u4E0A\u4E0B\u5F71\u7EBF\u7684\u957F\u9634\u5B9E\u4F53",
      "\u5F00\u76D8\u5373\u6700\u9AD8\u3001\u6536\u76D8\u5373\u6700\u4F4E\uFF08\u6216\u6781\u63A5\u8FD1\uFF09",
      "\u663E\u793A\u7A7A\u65B9\u5B8C\u5168\u638C\u63A7\u5F53\u65E5\u884C\u60C5"
    ],
    psychology: "\u5356\u76D8\u81EA\u5F00\u76D8\u538B\u5236\u5230\u5E95\uFF0C\u5E38\u5F3A\u5316\u539F\u6709\u4E0B\u964D\u52A8\u80FD\u3002",
    commonMistakes: ["\u666E\u901A\u9634\u7EBF\u4E5F\u5F53\u5149\u5934\u5149\u811A", "\u5FFD\u89C6\u8D85\u5356\u540E\u7684\u62A5\u590D\u6027\u53CD\u5F39"],
    demoSeed: 1704
  },
  {
    id: "bullish-belt-hold",
    name: "\u770B\u6DA8\u6349\u8170\u5E26\u7EBF",
    aliases: ["\u767D\u8272\u6349\u8170\u5E26\u7EBF"],
    category: "reversal",
    bias: "bullish",
    bars: 1,
    difficulty: 2,
    rules: [
      "\u51FA\u73B0\u5728\u4E0B\u8DCC\u8D8B\u52BF\u4E2D\u7684\u957F\u9633\u7EBF",
      "\u5F00\u76D8\u4F4D\u4E8E\u6216\u63A5\u8FD1\u6700\u4F4E\u4EF7\uFF08\u51E0\u4E4E\u65E0\u4E0B\u5F71\uFF09",
      "\u6536\u76D8\u9760\u8FD1\u6700\u9AD8\u4EF7\uFF0C\u5B9E\u4F53\u8F83\u957F"
    ],
    psychology: "\u5C3C\u68EE\uFF1A\u4F4E\u5F00\u540E\u4E70\u65B9\u4E00\u8DEF\u4E0A\u653B\uFF0C\u7A7A\u5934\u201C\u6349\u8170\u5E26\u201D\u88AB\u53CD\u5236\uFF0C\u5E38\u6210\u77ED\u671F\u8F6C\u6298\u3002",
    commonMistakes: ["\u4E0A\u6DA8\u4E2D\u7684\u957F\u9633\u4E5F\u5F53\u6349\u8170\u5E26", "\u5B9E\u4F53\u4E0D\u591F\u957F"],
    demoSeed: 1705
  },
  {
    id: "bearish-belt-hold",
    name: "\u770B\u8DCC\u6349\u8170\u5E26\u7EBF",
    aliases: ["\u9ED1\u8272\u6349\u8170\u5E26\u7EBF"],
    category: "reversal",
    bias: "bearish",
    bars: 1,
    difficulty: 2,
    rules: [
      "\u51FA\u73B0\u5728\u4E0A\u6DA8\u8D8B\u52BF\u4E2D\u7684\u957F\u9634\u7EBF",
      "\u5F00\u76D8\u4F4D\u4E8E\u6216\u63A5\u8FD1\u6700\u9AD8\u4EF7\uFF08\u51E0\u4E4E\u65E0\u4E0A\u5F71\uFF09",
      "\u6536\u76D8\u9760\u8FD1\u6700\u4F4E\u4EF7\uFF0C\u5B9E\u4F53\u8F83\u957F"
    ],
    psychology: "\u9AD8\u5F00\u540E\u5356\u65B9\u4E00\u8DEF\u6253\u538B\uFF0C\u591A\u5934\u653B\u52BF\u88AB\u6253\u65AD\uFF0C\u8B66\u60D5\u89C1\u9876\u3002",
    commonMistakes: ["\u4E0B\u8DCC\u4E2D\u7684\u957F\u9634\u4E5F\u5F53\u6349\u8170\u5E26", "\u5FFD\u7565\u540E\u7EED\u786E\u8BA4"],
    demoSeed: 1706
  },
  {
    id: "tweezers-top",
    name: "\u5E73\u5934\u9876\u90E8\u5F62\u6001",
    aliases: ["\u954A\u5B50\u9876", "\u53CC\u9488\u9876"],
    category: "reversal",
    bias: "bearish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u76F8\u90BB\u4E24\u6839\uFF08\u6216\u9644\u8FD1\uFF09K \u7EBF\u6700\u9AD8\u4EF7\u51E0\u4E4E\u76F8\u540C",
      "\u51FA\u73B0\u5728\u4E0A\u6DA8\u8D8B\u52BF\u9AD8\u4F4D",
      "\u7B2C\u4E8C\u6839\u5E38\u4E3A\u9634\u7EBF\u6216\u6D41\u661F\u7EBF\u7C7B\u5F62\u6001\u66F4\u4F73"
    ],
    psychology: "\u540C\u4E00\u4EF7\u4F4D\u4E24\u6B21\u4E0A\u653B\u5931\u8D25\uFF0C\u5C3C\u68EE\u79F0\u4E3A\u5E73\u5934\u9876\u90E8\u3002",
    commonMistakes: ["\u9AD8\u70B9\u76F8\u5DEE\u8FC7\u5927\u4ECD\u7B97", "\u4E0B\u8DCC\u9014\u4E2D\u8BEF\u7528"],
    demoSeed: 1707
  },
  {
    id: "tweezers-bottom",
    name: "\u5E73\u5934\u5E95\u90E8\u5F62\u6001",
    aliases: ["\u954A\u5B50\u5E95", "\u53CC\u9488\u5E95"],
    category: "reversal",
    bias: "bullish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u76F8\u90BB\u4E24\u6839\uFF08\u6216\u9644\u8FD1\uFF09K \u7EBF\u6700\u4F4E\u4EF7\u51E0\u4E4E\u76F8\u540C",
      "\u51FA\u73B0\u5728\u4E0B\u8DCC\u8D8B\u52BF\u4F4E\u4F4D",
      "\u7B2C\u4E8C\u6839\u5E38\u4E3A\u9633\u7EBF\u6216\u9524\u5B50\u7C7B\u5F62\u6001\u66F4\u4F73"
    ],
    psychology: "\u540C\u4E00\u4EF7\u4F4D\u4E24\u6B21\u4E0B\u63A2\u83B7\u5F97\u652F\u6491\uFF0C\u5C3C\u68EE\u79F0\u4E3A\u5E73\u5934\u5E95\u90E8\u3002",
    commonMistakes: ["\u4F4E\u70B9\u76F8\u5DEE\u8FC7\u5927", "\u4E0A\u6DA8\u9014\u4E2D\u8BEF\u7528"],
    demoSeed: 1708
  },
  {
    id: "bullish-harami-cross",
    name: "\u770B\u6DA8\u5341\u5B57\u5B55\u7EBF\u5F62\u6001",
    aliases: ["\u5341\u5B57\u5B55\u7EBF", "\u5446\u6EDE\u5F62\u6001", "\u5341\u5B57\u6000\u80CE\uFF08\u770B\u6DA8\uFF09"],
    category: "reversal",
    bias: "bullish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u524D\u4E00\u6839\u4E3A\u5927\u9634\u7EBF\uFF0C\u540E\u4E00\u6839\u4E3A\u5341\u5B57\u661F",
      "\u5341\u5B57\u661F\u5B8C\u5168\u843D\u5728\u524D\u4E00\u6839\u5B9E\u4F53\u4E4B\u5185",
      "\u4E0B\u8DCC\u672B\u7AEF\u51FA\u73B0\u65F6\uFF0C\u5C3C\u68EE\u8BA4\u4E3A\u6BD4\u666E\u901A\u5B55\u7EBF\u66F4\u5F3A"
    ],
    psychology: "\u5927\u9634\u540E\u591A\u7A7A\u7A81\u7136\u80F6\u7740\uFF0C\u7A7A\u5934\u52A8\u80FD\u663E\u8457\u51CF\u5F31\u3002",
    commonMistakes: ["\u5341\u5B57\u672A\u5305\u542B\u5728\u5B9E\u4F53\u5185", "\u4E0E\u666E\u901A\u5341\u5B57\u6DF7\u8C08"],
    demoSeed: 1709
  },
  {
    id: "bearish-harami-cross",
    name: "\u770B\u8DCC\u5341\u5B57\u5B55\u7EBF\u5F62\u6001",
    aliases: ["\u5341\u5B57\u5B55\u7EBF", "\u5446\u6EDE\u5F62\u6001", "\u5341\u5B57\u6000\u80CE\uFF08\u770B\u8DCC\uFF09"],
    category: "reversal",
    bias: "bearish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u524D\u4E00\u6839\u4E3A\u5927\u9633\u7EBF\uFF0C\u540E\u4E00\u6839\u4E3A\u5341\u5B57\u661F",
      "\u5341\u5B57\u661F\u5B8C\u5168\u843D\u5728\u524D\u4E00\u6839\u5B9E\u4F53\u4E4B\u5185",
      "\u4E0A\u6DA8\u672B\u7AEF\u51FA\u73B0\u65F6\u8B66\u793A\u89C1\u9876"
    ],
    psychology: "\u5927\u9633\u540E\u51FA\u73B0\u72B9\u8C6B\u5341\u5B57\uFF0C\u4E70\u76D8\u4FE1\u5FC3\u52A8\u6447\u3002",
    commonMistakes: ["\u5FFD\u7565\u5305\u542B\u5173\u7CFB", "\u4F4E\u4F4D\u4E5F\u5F53\u5F3A\u70C8\u505A\u7A7A"],
    demoSeed: 1710
  },
  {
    id: "morning-doji-star",
    name: "\u5341\u5B57\u542F\u660E\u661F\u5F62\u6001",
    aliases: ["\u5341\u5B57\u6668\u661F", "\u65E9\u6668\u5341\u5B57\u661F"],
    category: "reversal",
    bias: "bullish",
    bars: 3,
    difficulty: 3,
    rules: [
      "\u5927\u9634\u7EBF + \u5411\u4E0B\u8DF3\u7A7A\u5341\u5B57\u661F + \u5927\u9633\u7EBF",
      "\u7B2C\u4E09\u6839\u6DF1\u5165\u7B2C\u4E00\u6839\u9634\u7EBF\u5B9E\u4F53",
      "\u5C3C\u68EE\uFF1A\u5341\u5B57\u542F\u660E\u661F\u901A\u5E38\u6BD4\u666E\u901A\u542F\u660E\u661F\u66F4\u6709\u5206\u91CF"
    ],
    psychology: "\u4E0B\u8DCC\u540E\u5F7B\u5E95\u72B9\u8C6B\uFF0C\u518D\u8F6C\u5F3A\u53CD\u653B\uFF0C\u5E95\u90E8\u53CD\u8F6C\u4FE1\u53F7\u66F4\u5E72\u51C0\u3002",
    commonMistakes: ["\u4E2D\u95F4\u4E0D\u662F\u5341\u5B57\u4E5F\u53EB\u5341\u5B57\u542F\u660E\u661F", "\u7B2C\u4E09\u6839\u529B\u5EA6\u4E0D\u8DB3"],
    demoSeed: 1711
  },
  {
    id: "evening-doji-star",
    name: "\u5341\u5B57\u9EC4\u660F\u661F\u5F62\u6001",
    aliases: ["\u5341\u5B57\u66AE\u661F", "\u9EC4\u660F\u5341\u5B57\u661F"],
    category: "reversal",
    bias: "bearish",
    bars: 3,
    difficulty: 3,
    rules: [
      "\u5927\u9633\u7EBF + \u5411\u4E0A\u8DF3\u7A7A\u5341\u5B57\u661F + \u5927\u9634\u7EBF",
      "\u7B2C\u4E09\u6839\u6DF1\u5165\u7B2C\u4E00\u6839\u9633\u7EBF\u5B9E\u4F53",
      "\u4E0A\u6DA8\u9AD8\u4F4D\u51FA\u73B0\u65F6\u8B66\u793A\u610F\u4E49\u5F3A"
    ],
    psychology: "\u51B2\u9AD8\u540E\u591A\u7A7A\u50F5\u6301\uFF0C\u518D\u8F6C\u5F31\u56DE\u843D\uFF0C\u9876\u90E8\u4FE1\u53F7\u66F4\u660E\u786E\u3002",
    commonMistakes: ["\u4E0E\u666E\u901A\u9EC4\u660F\u661F\u4E0D\u533A\u5206", "\u5FFD\u7565\u8DF3\u7A7A\u4E0E\u5341\u5B57\u6761\u4EF6"],
    demoSeed: 1712
  },
  {
    id: "abandoned-baby-bullish",
    name: "\u770B\u6DA8\u5F03\u5A74",
    aliases: ["\u5357\u65B9\u5F03\u5A74"],
    category: "reversal",
    bias: "bullish",
    bars: 3,
    difficulty: 3,
    rules: [
      "\u5927\u9634\u7EBF\u540E\u5411\u4E0B\u8DF3\u7A7A\u5341\u5B57\uFF08\u4E0E\u524D\u540E\u90FD\u6709\u7F3A\u53E3\uFF09",
      "\u518D\u5411\u4E0A\u8DF3\u7A7A\u5927\u9633\u7EBF",
      "\u5341\u5B57\u4E0E\u4E24\u4FA7 K \u7EBF\u5F71\u7EBF\u4E92\u4E0D\u91CD\u53E0"
    ],
    psychology: "\u6781\u7AEF\u60C5\u7EEA\u4E0B\u7684\u5B64\u7ACB\u5341\u5B57\u88AB\u9057\u5F03\uFF0C\u5E38\u662F\u5F3A\u70C8\u5E95\u90E8\u53CD\u8F6C\u3002",
    commonMistakes: ["\u7F3A\u53E3\u4E0D\u5B8C\u6574\u4E5F\u7B97\u5F03\u5A74", "\u4E0E\u6668\u661F\u4E0D\u52A0\u533A\u5206"],
    demoSeed: 1713
  },
  {
    id: "abandoned-baby-bearish",
    name: "\u770B\u8DCC\u5F03\u5A74",
    aliases: ["\u5317\u65B9\u5F03\u5A74"],
    category: "reversal",
    bias: "bearish",
    bars: 3,
    difficulty: 3,
    rules: [
      "\u5927\u9633\u7EBF\u540E\u5411\u4E0A\u8DF3\u7A7A\u5341\u5B57\uFF08\u4E0E\u524D\u540E\u90FD\u6709\u7F3A\u53E3\uFF09",
      "\u518D\u5411\u4E0B\u8DF3\u7A7A\u5927\u9634\u7EBF",
      "\u5341\u5B57\u4E0E\u4E24\u4FA7 K \u7EBF\u5F71\u7EBF\u4E92\u4E0D\u91CD\u53E0"
    ],
    psychology: "\u9AD8\u4F4D\u5B64\u7ACB\u5341\u5B57\u88AB\u9057\u5F03\uFF0C\u5E38\u662F\u5F3A\u70C8\u9876\u90E8\u53CD\u8F6C\u3002",
    commonMistakes: ["\u7F3A\u53E3\u6761\u4EF6\u4E0D\u4E25", "\u4E0E\u66AE\u661F\u6DF7\u6DC6"],
    demoSeed: 1714
  },
  {
    id: "matching-low",
    name: "\u76F8\u540C\u4F4E\u4EF7",
    aliases: ["\u64AE\u5408\u7EBF", "\u5339\u914D\u4F4E\u70B9"],
    category: "reversal",
    bias: "bullish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u4E24\u6839\u9634\u7EBF\u6536\u76D8\u4EF7\u51E0\u4E4E\u76F8\u540C",
      "\u51FA\u73B0\u5728\u4E0B\u8DCC\u8D8B\u52BF\u4E2D",
      "\u663E\u793A\u540C\u4E00\u4EF7\u4F4D\u83B7\u5F97\u652F\u6491"
    ],
    psychology: "\u7A7A\u5934\u4E24\u6B21\u6253\u5230\u540C\u4E00\u6536\u76D8\u533A\u65E0\u6CD5\u518D\u4E0B\uFF0C\u629B\u538B\u51CF\u5F31\u3002",
    commonMistakes: ["\u6536\u76D8\u76F8\u5DEE\u5927\u4ECD\u7B97", "\u4E0E\u954A\u5B50\u5E95\uFF08\u6BD4\u6700\u4F4E\u4EF7\uFF09\u6DF7\u6DC6"],
    demoSeed: 1715
  },
  {
    id: "homing-pigeon",
    name: "\u5BB6\u9E3D",
    aliases: ["\u9E3D\u5B50\u56DE\u5DE2"],
    category: "reversal",
    bias: "bullish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u524D\u4E00\u6839\u5927\u9634\uFF0C\u540E\u4E00\u6839\u5C0F\u9634",
      "\u7B2C\u4E8C\u6839\u5B9E\u4F53\u5B8C\u5168\u5728\u7B2C\u4E00\u6839\u5B9E\u4F53\u4E4B\u5185\uFF08\u7C7B\u4F3C\u770B\u6DA8\u5B55\u7EBF\uFF0C\u4F46\u662F\u4E24\u6839\u90FD\u662F\u9634\u7EBF\uFF09",
      "\u4E0B\u8DCC\u672B\u7AEF\u51FA\u73B0"
    ],
    psychology: "\u4E0B\u8DCC\u4E2D\u51FA\u73B0\u201C\u7F29\u5C0F\u7684\u9634\u7EBF\u201D\uFF0C\u5356\u538B\u51CF\u8F7B\uFF0C\u50CF\u9E3D\u5B50\u5F52\u5DE2\u4F11\u6574\u3002",
    commonMistakes: ["\u4E0E\u770B\u6DA8\u5B55\u7EBF\uFF08\u7B2C\u4E8C\u6839\u9633\uFF09\u4E0D\u5206", "\u4E0A\u6DA8\u4E2D\u8BEF\u7528"],
    demoSeed: 1716
  },
  {
    id: "kicking-bullish",
    name: "\u770B\u6DA8\u8E22\u811A\u7EBF",
    aliases: ["\u8E22\u811A\u5F62\u6001\uFF08\u770B\u6DA8\uFF09"],
    category: "reversal",
    bias: "bullish",
    bars: 2,
    difficulty: 3,
    rules: [
      "\u524D\u4E00\u6839\u5149\u5934\u5149\u811A\u9634\u7EBF\uFF0C\u540E\u4E00\u6839\u5149\u5934\u5149\u811A\u9633\u7EBF",
      "\u4E2D\u95F4\u51FA\u73B0\u5411\u4E0A\u8DF3\u7A7A\uFF0C\u5B9E\u4F53\u4E92\u4E0D\u91CD\u53E0",
      "\u53CD\u8F6C\u610F\u5473\u5F3A\u70C8"
    ],
    psychology: "\u5C3C\u68EE\uFF1A\u5E02\u573A\u6001\u5EA6\u7A81\u7136 180 \u5EA6\u8F6C\u53D8\uFF0C\u7A7A\u8F6C\u591A\u975E\u5E38\u5E72\u8106\u3002",
    commonMistakes: ["\u5F71\u7EBF\u5F88\u591A\u4ECD\u53EB\u8E22\u811A", "\u7F3A\u53E3\u4E0D\u591F\u6E05\u6670"],
    demoSeed: 1717
  },
  {
    id: "kicking-bearish",
    name: "\u770B\u8DCC\u8E22\u811A\u7EBF",
    aliases: ["\u8E22\u811A\u5F62\u6001\uFF08\u770B\u8DCC\uFF09"],
    category: "reversal",
    bias: "bearish",
    bars: 2,
    difficulty: 3,
    rules: [
      "\u524D\u4E00\u6839\u5149\u5934\u5149\u811A\u9633\u7EBF\uFF0C\u540E\u4E00\u6839\u5149\u5934\u5149\u811A\u9634\u7EBF",
      "\u4E2D\u95F4\u51FA\u73B0\u5411\u4E0B\u8DF3\u7A7A\uFF0C\u5B9E\u4F53\u4E92\u4E0D\u91CD\u53E0",
      "\u53CD\u8F6C\u610F\u5473\u5F3A\u70C8"
    ],
    psychology: "\u591A\u8F6C\u7A7A\u6001\u5EA6\u9AA4\u53D8\uFF0C\u9876\u90E8/\u8F6C\u6298\u4FE1\u53F7\u5F3A\u786C\u3002",
    commonMistakes: ["\u6761\u4EF6\u653E\u5BBD\u8FC7\u5EA6", "\u5FFD\u7565\u5927\u7EA7\u522B\u8D8B\u52BF"],
    demoSeed: 1718
  },
  {
    id: "two-crows",
    name: "\u4E24\u53EA\u4E4C\u9E26",
    aliases: ["\u53CC\u9E26"],
    category: "reversal",
    bias: "bearish",
    bars: 3,
    difficulty: 3,
    rules: [
      "\u5927\u9633\u7EBF\u540E\uFF0C\u4E00\u6839\u5411\u4E0A\u8DF3\u7A7A\u5C0F\u9634\u7EBF",
      "\u7B2C\u4E09\u6839\u9634\u7EBF\u5F00\u76D8\u66F4\u9AD8\u3001\u6536\u76D8\u66F4\u4F4E\uFF0C\u5E76\u5207\u5165\u7B2C\u4E00\u6839\u9633\u7EBF\u5B9E\u4F53",
      "\u51FA\u73B0\u5728\u4E0A\u5347\u8D8B\u52BF\u9AD8\u4F4D"
    ],
    psychology: "\u8DF3\u7A7A\u4E0A\u51B2\u65E0\u529B\uFF0C\u7A7A\u5934\u8FDE\u7EED\u65BD\u538B\uFF0C\u5347\u52BF\u53D7\u632B\u3002",
    commonMistakes: ["\u4E0E\u5411\u4E0A\u8DF3\u7A7A\u4E24\u53EA\u4E4C\u9E26\u6DF7\u6DC6", "\u7B2C\u4E09\u6839\u672A\u5207\u5165\u5927\u9633"],
    demoSeed: 1719
  },
  {
    id: "upside-gap-two-crows",
    name: "\u5411\u4E0A\u8DF3\u7A7A\u4E24\u53EA\u4E4C\u9E26",
    aliases: ["\u5411\u4E0A\u8DF3\u7A7A\u4E8C\u53EA\u4E4C\u9E26", "\u8DF3\u7A7A\u53CC\u9E26"],
    category: "reversal",
    bias: "bearish",
    bars: 3,
    difficulty: 3,
    rules: [
      "\u5927\u9633\u7EBF\u540E\u5411\u4E0A\u8DF3\u7A7A\u9634\u7EBF\uFF0C\u518D\u4E00\u6839\u9634\u7EBF\u541E\u6CA1\u524D\u9634",
      "\u7B2C\u4E09\u6839\u4ECD\u672A\u8DCC\u7834\u5927\u9633\u6536\u76D8\u9644\u8FD1\uFF08\u5E38\u4ECD\u5728\u7F3A\u53E3\u4E4B\u4E0A\uFF09",
      "\u9AD8\u4F4D\u89C1\u9876\u4FE1\u53F7"
    ],
    psychology: "\u9AD8\u4F4D\u4E24\u53EA\u201C\u4E4C\u9E26\u201D\u76D8\u6853\uFF0C\u4E70\u76D8\u8DDF\u8FDB\u4E0D\u8DB3\u3002",
    commonMistakes: ["\u4E0E\u666E\u901A\u4E24\u53EA\u4E4C\u9E26\u7ED3\u6784\u641E\u6DF7", "\u5FFD\u7565\u8DF3\u7A7A\u6761\u4EF6"],
    demoSeed: 1720
  },
  {
    id: "tri-star-bullish",
    name: "\u770B\u6DA8\u4E09\u661F\u5F62\u6001",
    aliases: ["\u5E95\u90E8\u4E09\u661F", "\u4E09\u661F\u5F62\u6001"],
    category: "reversal",
    bias: "bullish",
    bars: 3,
    difficulty: 3,
    rules: [
      "\u8FDE\u7EED\u4E09\u6839\u5341\u5B57\u661F",
      "\u4E2D\u95F4\u4E00\u6839\u5F80\u5F80\u66F4\u4F4E\uFF08\u6216\u5411\u4E0B\u8DF3\u7A7A\uFF09",
      "\u51FA\u73B0\u5728\u4E0B\u8DCC\u672B\u7AEF\uFF0C\u8F83\u4E3A\u7F55\u89C1\u4F46\u610F\u4E49\u91CD\u8981"
    ],
    psychology: "\u6781\u81F4\u72B9\u8C6B\u540E\u7684\u4E09\u91CD\u5341\u5B57\uFF0C\u5E38\u6807\u5FD7\u7A7A\u5934\u6C14\u6570\u5C06\u5C3D\u3002",
    commonMistakes: ["\u628A\u4E09\u6839\u5C0F\u5B9E\u4F53\u90FD\u53EB\u4E09\u661F", "\u4E2D\u95F4\u4F4D\u7F6E\u4E0D\u5BF9"],
    demoSeed: 1721
  },
  {
    id: "tri-star-bearish",
    name: "\u770B\u8DCC\u4E09\u661F\u5F62\u6001",
    aliases: ["\u9876\u90E8\u4E09\u661F", "\u4E09\u661F\u5F62\u6001"],
    category: "reversal",
    bias: "bearish",
    bars: 3,
    difficulty: 3,
    rules: [
      "\u8FDE\u7EED\u4E09\u6839\u5341\u5B57\u661F",
      "\u4E2D\u95F4\u4E00\u6839\u5F80\u5F80\u66F4\u9AD8\uFF08\u6216\u5411\u4E0A\u8DF3\u7A7A\uFF09",
      "\u51FA\u73B0\u5728\u4E0A\u6DA8\u672B\u7AEF"
    ],
    psychology: "\u9AD8\u4F4D\u4E09\u91CD\u80F6\u7740\uFF0C\u591A\u5934\u653B\u52BF\u96BE\u4EE5\u4E3A\u7EE7\u3002",
    commonMistakes: ["\u6761\u4EF6\u8FC7\u677E", "\u4F4E\u4F4D\u4E5F\u5F53\u770B\u8DCC\u4E09\u661F"],
    demoSeed: 1722
  },
  {
    id: "stick-sandwich",
    name: "\u6761\u5F62\u4E09\u660E\u6CBB",
    aliases: ["\u4E09\u660E\u6CBB\u7EBF"],
    category: "reversal",
    bias: "bullish",
    bars: 3,
    difficulty: 3,
    rules: [
      "\u4E24\u6839\u6536\u76D8\u4EF7\u76F8\u8FD1\u7684\u9634\u7EBF\uFF0C\u4E2D\u95F4\u5939\u4E00\u6839\u9633\u7EBF",
      "\u524D\u540E\u4E24\u9634\u6536\u76D8\u57FA\u672C\u4E00\u81F4",
      "\u4E0B\u8DCC\u8D8B\u52BF\u4E2D\u7684\u53CD\u8F6C\u4FE1\u53F7"
    ],
    psychology: "\u540C\u4E00\u6536\u76D8\u652F\u6491\u88AB\u518D\u6B21\u9A8C\u8BC1\uFF0C\u7A7A\u5934\u96BE\u4EE5\u7834\u4F4D\u3002",
    commonMistakes: ["\u4E24\u9634\u6536\u76D8\u76F8\u5DEE\u5927", "\u4E0E\u4E24\u9633\u5939\u9634\u641E\u53CD"],
    demoSeed: 1723
  },
  {
    id: "on-neck",
    name: "\u9888\u4E0A\u7EBF",
    aliases: ["\u63A5\u9488\u7EBF\uFF08\u9888\u4E0A\uFF09"],
    category: "continuation",
    bias: "bearish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u5927\u9634\u7EBF\u540E\uFF0C\u9633\u7EBF\u4F4E\u5F00\u5E76\u6536\u5728\u524D\u9634\u6700\u4F4E\u4EF7\u9644\u8FD1\uFF08\u9888\u4E0A\uFF09",
      "\u9633\u7EBF\u672A\u80FD\u6DF1\u5165\u524D\u9634\u5B9E\u4F53",
      "\u4E0B\u964D\u8D8B\u52BF\u4E2D\u7684\u6301\u7EED\u4FE1\u53F7"
    ],
    psychology: "\u5F31\u53CD\u5F39\u53EA\u6478\u5230\u524D\u4F4E\u201C\u8116\u5B50\u201D\uFF0C\u4E0B\u8DCC\u5E38\u5EF6\u7EED\u3002",
    commonMistakes: ["\u4E0E\u523A\u900F\u5F62\u6001\u6DF7\u6DC6\uFF08\u523A\u900F\u8981\u6DF1\u5165\u4E00\u534A\uFF09", "\u5F53\u6210\u5E95\u90E8\u53CD\u8F6C"],
    demoSeed: 1724
  },
  {
    id: "in-neck",
    name: "\u9888\u5185\u7EBF",
    aliases: ["\u5165\u9888\u7EBF"],
    category: "continuation",
    bias: "bearish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u5927\u9634\u7EBF\u540E\uFF0C\u9633\u7EBF\u6536\u5728\u524D\u9634\u6536\u76D8\u7A0D\u4E0A\u65B9\uFF08\u8FDB\u5165\u5B9E\u4F53\u4E00\u70B9\u70B9\uFF09",
      "\u53CD\u5F39\u529B\u5EA6\u4ECD\u5F31\uFF0C\u5F31\u4E8E\u523A\u900F",
      "\u4E0B\u964D\u8D8B\u52BF\u6301\u7EED\u610F\u5473"
    ],
    psychology: "\u53CD\u5F39\u7565\u5F3A\u4E8E\u9888\u4E0A\u7EBF\uFF0C\u4F46\u4ECD\u96BE\u6539\u4E0B\u8DCC\u683C\u5C40\u3002",
    commonMistakes: ["\u4E0E\u523A\u900F\u3001\u541E\u6CA1\u5206\u4E0D\u6E05", "\u53CD\u5F39\u8FC7\u6DF1\u4ECD\u5F53\u9888\u5185"],
    demoSeed: 1725
  },
  {
    id: "thrusting",
    name: "\u63D2\u5165\u7EBF",
    aliases: ["\u63D2\u5165\u7EBF\u5F62\u6001", "\u63D2\u5165\u5F62\u6001"],
    category: "continuation",
    bias: "bearish",
    bars: 2,
    difficulty: 2,
    rules: [
      "\u5927\u9634\u540E\u9633\u7EBF\u4F4E\u5F00\uFF0C\u6536\u76D8\u63D2\u5165\u524D\u9634\u5B9E\u4F53\u4F46\u672A\u8FC7\u4E00\u534A",
      "\u6BD4\u9888\u5185\u7EBF\u66F4\u6DF1\uFF0C\u4F46\u4ECD\u5F31\u4E8E\u523A\u900F",
      "\u4E0B\u964D\u8D8B\u52BF\u4E2D\u591A\u4E3A\u6301\u7EED/\u5F31\u53CD\u5F39"
    ],
    psychology: "\u5C3C\u68EE\uFF1A\u63D2\u5165\u7EBF\u901A\u5E38\u4E0D\u8DB3\u4EE5\u6784\u6210\u770B\u6DA8\u523A\u900F\uFF0C\u4E0B\u8DCC\u4E2D\u7EE7\u5C45\u591A\u3002",
    commonMistakes: ["\u6536\u56DE\u8FC7\u534A\u5F53\u6210\u523A\u900F", "\u5F53\u4F5C\u5F3A\u70C8\u53CD\u8F6C"],
    demoSeed: 1726
  },
  {
    id: "upside-tasuki-gap",
    name: "\u4E0A\u8DF3\u7A7A\u542B\u9634\u7EBF",
    aliases: ["\u4E0A\u5347\u8DF3\u7A7A\u5E76\u5217\u9634\u9633\uFF08\u6301\u7EED\uFF09"],
    category: "continuation",
    bias: "bullish",
    bars: 3,
    difficulty: 3,
    rules: [
      "\u9633\u7EBF\u540E\u5411\u4E0A\u8DF3\u7A7A\u518D\u9633\uFF0C\u7B2C\u4E09\u6839\u9634\u7EBF\u56DE\u8865\u90E8\u5206\u7F3A\u53E3\u4F46\u4E0D\u5B8C\u5168\u5C01\u95ED",
      "\u5C5E\u4E8E\u4E0A\u5347\u6301\u7EED\u5F62\u6001",
      "\u7A97\u53E3\u6B8B\u4F59\u90E8\u5206\u4ECD\u4F5C\u652F\u6491"
    ],
    psychology: "\u8DF3\u7A7A\u4E0A\u6DA8\u540E\u56DE\u8E29\u672A\u5C01\u53E3\uFF0C\u591A\u5934\u8D8B\u52BF\u5F80\u5F80\u5EF6\u7EED\u3002",
    commonMistakes: ["\u7B2C\u4E09\u6839\u5B8C\u5168\u5C01\u95ED\u7F3A\u53E3\u4ECD\u7B97", "\u4E0E\u770B\u8DCC\u5F62\u6001\u6DF7\u6DC6"],
    demoSeed: 1727
  },
  {
    id: "downside-tasuki-gap",
    name: "\u4E0B\u8DF3\u7A7A\u542B\u9633\u7EBF",
    aliases: ["\u4E0B\u964D\u8DF3\u7A7A\u5E76\u5217\u9634\u9633\uFF08\u6301\u7EED\uFF09"],
    category: "continuation",
    bias: "bearish",
    bars: 3,
    difficulty: 3,
    rules: [
      "\u9634\u7EBF\u540E\u5411\u4E0B\u8DF3\u7A7A\u518D\u9634\uFF0C\u7B2C\u4E09\u6839\u9633\u7EBF\u56DE\u8865\u90E8\u5206\u7F3A\u53E3\u4F46\u4E0D\u5B8C\u5168\u5C01\u95ED",
      "\u5C5E\u4E8E\u4E0B\u964D\u6301\u7EED\u5F62\u6001",
      "\u7A97\u53E3\u6B8B\u4F59\u90E8\u5206\u4ECD\u4F5C\u538B\u529B"
    ],
    psychology: "\u8DF3\u7A7A\u4E0B\u8DCC\u540E\u53CD\u5F39\u672A\u5C01\u53E3\uFF0C\u7A7A\u5934\u8D8B\u52BF\u5F80\u5F80\u5EF6\u7EED\u3002",
    commonMistakes: ["\u7F3A\u53E3\u88AB\u5B8C\u5168\u56DE\u8865", "\u5F53\u6210\u5E95\u90E8\u53CD\u8F6C"],
    demoSeed: 1728
  },
  {
    id: "advance-block",
    name: "\u5927\u654C\u5F53\u524D",
    aliases: ["\u63A8\u8FDB\u53D7\u963B", "\u53D7\u963B\u767D\u4E09\u5175"],
    category: "reversal",
    bias: "bearish",
    bars: 3,
    difficulty: 3,
    rules: [
      "\u7C7B\u4F3C\u4E09\u767D\u5175\uFF0C\u4F46\u540E\u4E24\u6839\u5B9E\u4F53\u7F29\u77ED\u3001\u4E0A\u5F71\u53D8\u957F",
      "\u51FA\u73B0\u5728\u5DF2\u6709\u4E00\u5B9A\u6DA8\u5E45\u4E4B\u540E",
      "\u663E\u793A\u8FDB\u653B\u8D8A\u6765\u8D8A\u5403\u529B"
    ],
    psychology: "\u5C3C\u68EE\uFF1A\u767D\u4E09\u5175\u201C\u8D70\u4E0D\u52A8\u4E86\u201D\uFF0C\u4E0A\u6DA8\u52A8\u80FD\u8870\u51CF\uFF0C\u8B66\u60D5\u56DE\u8C03\u3002",
    commonMistakes: ["\u4E0E\u5065\u5EB7\u4E09\u767D\u5175\u4E0D\u5206", "\u521A\u542F\u52A8\u5C31\u5F53\u5927\u654C\u5F53\u524D"],
    demoSeed: 1729
  },
  {
    id: "deliberation",
    name: "\u505C\u987F\u5F62\u6001",
    aliases: ["\u6DF1\u601D\u5F62\u6001", "\u505C\u6EDE\u5F62\u6001"],
    category: "reversal",
    bias: "bearish",
    bars: 3,
    difficulty: 3,
    rules: [
      "\u4E24\u6839\u957F\u9633\u540E\uFF0C\u7B2C\u4E09\u6839\u53D8\u4E3A\u5C0F\u5B9E\u4F53/\u661F\u7EBF\uFF08\u5E38\u5411\u4E0A\u8DF3\u7A7A\uFF09",
      "\u51FA\u73B0\u5728\u4E0A\u5347\u9014\u4E2D\u504F\u540E\u6BB5",
      "\u8868\u793A\u591A\u5934\u9700\u8981\u201C\u505C\u987F\u5598\u606F\u201D\uFF0C\u4E5F\u53EF\u80FD\u89C1\u9876"
    ],
    psychology: "\u8FDE\u7EED\u5927\u6DA8\u540E\u51FA\u73B0\u661F\u7EBF\uFF0C\u4E70\u76D8\u72B9\u8C6B\uFF0C\u5B9C\u964D\u4F4E\u8FFD\u9AD8\u3002",
    commonMistakes: ["\u8D8B\u52BF\u521A\u8D77\u5C31\u53EB\u505C\u987F", "\u4E0E\u66AE\u661F\u7ED3\u6784\u6DF7\u6DC6"],
    demoSeed: 1730
  },
  {
    id: "mat-hold",
    name: "\u94FA\u57AB\u5F62\u6001",
    aliases: ["\u57AB\u7262\u5F62\u6001"],
    category: "continuation",
    bias: "bullish",
    bars: 5,
    difficulty: 3,
    rules: [
      "\u5927\u9633\u540E\u5C0F\u5E45\u5411\u4E0A\u8DF3\u7A7A\uFF0C\u518D\u4E24\u4E09\u6839\u5C0F\u9634\u56DE\u8E29",
      "\u56DE\u8E29\u4E0D\u7834\u7B2C\u4E00\u6839\u5927\u9633\u5B9E\u4F53\u4E2D\u90E8\u9644\u8FD1",
      "\u6700\u540E\u518D\u9633\u7EBF\u5411\u4E0A\uFF0C\u4E0A\u5347\u6301\u7EED"
    ],
    psychology: "\u4E0A\u6DA8\u4E2D\u7684\u5F3A\u52BF\u6574\u7406\uFF0C\u6BD4\u4E0A\u5347\u4E09\u6CD5\u66F4\u201C\u9738\u9053\u201D\u4E00\u70B9\u3002",
    commonMistakes: ["\u56DE\u8E29\u8FC7\u6DF1\u4ECD\u7B97\u94FA\u57AB", "\u4E0E\u4E0A\u5347\u4E09\u6CD5\u5B8C\u5168\u7B49\u540C"],
    demoSeed: 1731
  },
  {
    id: "three-line-strike-bullish",
    name: "\u770B\u6DA8\u4E09\u7EBF\u6253\u51FB",
    aliases: ["\u4E09\u7EBF\u76F4\u51FB\uFF08\u770B\u6DA8\uFF09"],
    category: "continuation",
    bias: "bullish",
    bars: 4,
    difficulty: 3,
    rules: [
      "\u4E09\u6839\u9012\u51CF\u9634\u7EBF\u540E\uFF0C\u7B2C\u56DB\u6839\u5927\u9633\u541E\u6CA1\u4E09\u9634",
      "\u5E38\u51FA\u73B0\u5728\u4E0B\u8DCC\u540E\u7684\u53CD\u653B\u6216\u4E0A\u5347\u4E2D\u7684\u56DE\u8E29\u7ED3\u675F",
      "\u5C3C\u68EE\u591A\u5C06\u5176\u89C6\u4E3A\u6301\u7EED/\u53CD\u653B\u4FE1\u53F7"
    ],
    psychology: "\u7A7A\u5934\u4E09\u51FB\u4E4B\u540E\u88AB\u4E00\u6839\u9633\u7EBF\u5168\u6570\u6536\u56DE\uFF0C\u591A\u5934\u53CD\u51FB\u6709\u529B\u3002",
    commonMistakes: ["\u7B2C\u56DB\u6839\u672A\u5B8C\u5168\u8986\u76D6", "\u5F53\u6210\u666E\u901A\u541E\u6CA1\u5373\u53EF"],
    demoSeed: 1732
  },
  {
    id: "three-line-strike-bearish",
    name: "\u770B\u8DCC\u4E09\u7EBF\u6253\u51FB",
    aliases: ["\u4E09\u7EBF\u76F4\u51FB\uFF08\u770B\u8DCC\uFF09"],
    category: "continuation",
    bias: "bearish",
    bars: 4,
    difficulty: 3,
    rules: [
      "\u4E09\u6839\u9012\u589E\u9633\u7EBF\u540E\uFF0C\u7B2C\u56DB\u6839\u5927\u9634\u541E\u6CA1\u4E09\u9633",
      "\u663E\u793A\u53CD\u5F39\u6216\u4E0A\u6DA8\u88AB\u4E00\u6B21\u6027\u6253\u56DE",
      "\u504F\u6301\u7EED\u7A7A\u5934\u6216\u89C1\u9876\u4E2D\u7EE7"
    ],
    psychology: "\u591A\u5934\u4E09\u8FDE\u51FB\u88AB\u4E00\u6839\u9634\u7EBF\u62B9\u53BB\uFF0C\u7A7A\u5934\u638C\u63A7\u6743\u56DE\u5F52\u3002",
    commonMistakes: ["\u8986\u76D6\u4E0D\u5168", "\u5FFD\u7565\u5927\u7EA7\u522B\u652F\u6491"],
    demoSeed: 1733
  },
  {
    id: "breakaway-bullish",
    name: "\u770B\u6DA8\u8131\u79BB\u5F62\u6001",
    aliases: ["\u7A81\u7834\u5F62\u6001\uFF08\u770B\u6DA8\uFF09"],
    category: "reversal",
    bias: "bullish",
    bars: 5,
    difficulty: 3,
    rules: [
      "\u5927\u9634\u5411\u4E0B\u8DF3\u7A7A\u540E\u7EE7\u7EED\u8D70\u5F31\uFF0C\u672B\u7AEF\u9633\u7EBF\u5411\u4E0A\u6536\u590D",
      "\u6700\u540E\u4E00\u6839\u9633\u7EBF\u5207\u5165\u6700\u521D\u5927\u9634\u5B9E\u4F53\uFF0C\u663E\u793A\u8131\u79BB\u4E0B\u884C\u901A\u9053",
      "\u5E95\u90E8\u53CD\u8F6C\u7684\u590D\u6742\u5F62\u6001"
    ],
    psychology: "\u4E0B\u8DCC\u672B\u7AEF\u51FA\u73B0\u201C\u8131\u79BB\u201D\u5F0F\u53CD\u653B\uFF0C\u7A7A\u5934\u9677\u9631\u53EF\u80FD\u5F62\u6210\u3002",
    commonMistakes: ["\u7ED3\u6784\u4E0D\u5B8C\u6574\u786C\u5957", "\u672A\u6536\u590D\u5173\u952E\u533A\u57DF"],
    demoSeed: 1734
  },
  {
    id: "breakaway-bearish",
    name: "\u770B\u8DCC\u8131\u79BB\u5F62\u6001",
    aliases: ["\u7A81\u7834\u5F62\u6001\uFF08\u770B\u8DCC\uFF09"],
    category: "reversal",
    bias: "bearish",
    bars: 5,
    difficulty: 3,
    rules: [
      "\u5927\u9633\u5411\u4E0A\u8DF3\u7A7A\u540E\u7EE7\u7EED\u8D70\u5F3A\uFF0C\u672B\u7AEF\u9634\u7EBF\u5411\u4E0B\u538B\u5236",
      "\u6700\u540E\u4E00\u6839\u9634\u7EBF\u5207\u5165\u6700\u521D\u5927\u9633\u5B9E\u4F53",
      "\u9876\u90E8\u53CD\u8F6C\u7684\u590D\u6742\u5F62\u6001"
    ],
    psychology: "\u51B2\u9AD8\u672B\u7AEF\u8131\u79BB\u4E0A\u884C\u8F68\u9053\uFF0C\u591A\u5934\u9677\u9631\u98CE\u9669\u4E0A\u5347\u3002",
    commonMistakes: ["\u5F62\u6001\u6B8B\u7F3A", "\u4E0E\u666E\u901A\u56DE\u8C03\u6DF7\u6DC6"],
    demoSeed: 1735
  },
  {
    id: "break-low-rally",
    name: "\u7834\u4F4E\u53CD\u6DA8\u5F62\u6001",
    aliases: ["\u523A\u7834\u56DE\u5347", "\u5F39\u7C27\u5E95"],
    category: "reversal",
    bias: "bullish",
    bars: 5,
    difficulty: 3,
    rules: [
      "\u8FD1\u671F\u6709\u53EF\u8BC6\u522B\u7684\u4F4E\u70B9\u6216\u6C34\u5E73\u652F\u6491",
      "\u5F53\u65E5\u6700\u4F4E\u4EF7\u523A\u7834\u8BE5\u4F4E\u70B9\uFF0C\u4F46\u6536\u76D8\u91CD\u65B0\u7AD9\u56DE\u4F4E\u70B9\u4E4B\u4E0A",
      "\u6536\u9633\u66F4\u4F73\uFF0C\u663E\u793A\u7A7A\u5934\u8BF1\u6355\u5931\u8D25"
    ],
    psychology: "\u5C3C\u68EE\uFF1A\u5047\u8DCC\u7834\u540E\u8FC5\u901F\u6536\u56DE\uFF0C\u7A7A\u5934\u65E0\u6CD5\u7EF4\u6301\u7834\u4F4D\uFF0C\u5E38\u6210\u77ED\u671F\u4E70\u70B9\u3002",
    commonMistakes: ["\u628A\u666E\u901A\u957F\u4E0B\u5F71\u90FD\u53EB\u7834\u4F4E\u53CD\u6DA8", "\u652F\u6491\u672C\u8EAB\u4E0D\u6E05\u6670\u4ECD\u786C\u5957"],
    demoSeed: 1801
  },
  {
    id: "break-high-fall",
    name: "\u7834\u9AD8\u53CD\u8DCC\u5F62\u6001",
    aliases: ["\u523A\u7834\u56DE\u843D", "\u5411\u4E0A\u4F2A\u7A81\u7834"],
    category: "reversal",
    bias: "bearish",
    bars: 5,
    difficulty: 3,
    rules: [
      "\u8FD1\u671F\u6709\u53EF\u8BC6\u522B\u7684\u9AD8\u70B9\u6216\u6C34\u5E73\u538B\u529B",
      "\u5F53\u65E5\u6700\u9AD8\u4EF7\u523A\u7834\u8BE5\u9AD8\u70B9\uFF0C\u4F46\u6536\u76D8\u91CD\u65B0\u8DCC\u56DE\u9AD8\u70B9\u4E4B\u4E0B",
      "\u6536\u9634\u66F4\u4F73\uFF0C\u663E\u793A\u591A\u5934\u7A81\u7834\u5931\u8D25"
    ],
    psychology: "\u5047\u7A81\u7834\u540E\u8FC5\u901F\u8DCC\u56DE\uFF0C\u4E70\u76D8\u65E0\u6CD5\u7AD9\u7A33\u65B0\u9AD8\uFF0C\u5E38\u6210\u77ED\u671F\u5356\u70B9\u3002",
    commonMistakes: ["\u628A\u666E\u901A\u957F\u4E0A\u5F71\u90FD\u53EB\u7834\u9AD8\u53CD\u8DCC", "\u538B\u529B\u4F4D\u542B\u7CCA\u4ECD\u5F53\u4FE1\u53F7"],
    demoSeed: 1802
  }
];
function getPatternById(id) {
  return patterns.find((p) => p.id === id);
}
function getPatternsByCategory(category) {
  if (category === "all") return patterns;
  return patterns.filter((p) => p.category === category);
}
var categoryLabel = {
  all: "\u5168\u90E8",
  reversal: "\u53CD\u8F6C\u5F62\u6001",
  continuation: "\u6301\u7EED\u5F62\u6001",
  neutral: "\u4E2D\u6027"
};
var biasLabel = {
  bullish: "\u770B\u591A",
  bearish: "\u770B\u7A7A",
  neutral: "\u4E2D\u6027"
};
var NISON_CHAPTER_IDS = {
  "3": ["spinning-top", "bullish-marubozu", "bearish-marubozu", "high-wave"],
  "4": [
    "hammer",
    "hanging-man",
    "bullish-engulfing",
    "bearish-engulfing",
    "dark-cloud-cover",
    "piercing-line"
  ],
  "5": [
    "morning-star",
    "evening-star",
    "morning-doji-star",
    "evening-doji-star",
    "shooting-star",
    "inverted-hammer"
  ],
  "6": [
    "bullish-harami",
    "bearish-harami",
    "bullish-harami-cross",
    "bearish-harami-cross",
    "tweezers-top",
    "tweezers-bottom",
    "bullish-belt-hold",
    "bearish-belt-hold",
    "upside-gap-two-crows",
    "three-black-crows",
    "three-white-soldiers",
    "three-mountains",
    "three-rivers",
    "bullish-counterattack",
    "bearish-counterattack",
    "rounding-top",
    "rounding-bottom",
    "tower-top",
    "tower-bottom"
  ],
  "7": [
    "rising-window",
    "falling-window",
    "upside-gap-side-by-side",
    "downside-gap-side-by-side",
    "rising-three-methods",
    "falling-three-methods",
    "bullish-separating-lines",
    "bearish-separating-lines"
  ],
  "8": [
    "doji",
    "long-legged-doji",
    "gravestone-doji",
    "dragonfly-doji",
    "tri-star-bullish",
    "tri-star-bearish"
  ],
  "11": ["break-low-rally", "break-high-fall"]
};
var nisonChapterById = /* @__PURE__ */ new Map();
for (const [ch, ids] of Object.entries(NISON_CHAPTER_IDS)) {
  for (const id of ids) nisonChapterById.set(id, ch);
}
function nisonChapterOf(id) {
  var _a;
  return (_a = nisonChapterById.get(id)) != null ? _a : "0";
}
var nisonChapterLabel = {
  "3": "\u7B2C\u4E09\u7AE0 \u8721\u70DB\u56FE\u7EBF\u7684\u753B\u6CD5",
  "4": "\u7B2C\u56DB\u7AE0 \u53CD\u8F6C\u5F62\u6001",
  "5": "\u7B2C\u4E94\u7AE0 \u661F\u7EBF",
  "6": "\u7B2C\u516D\u7AE0 \u5176\u4ED6\u53CD\u8F6C\u5F62\u6001",
  "7": "\u7B2C\u4E03\u7AE0 \u6301\u7EED\u5F62\u6001",
  "8": "\u7B2C\u516B\u7AE0 \u795E\u5947\u7684\u5341\u5B57\u7EBF",
  "11": "\u7B2C\u5341\u4E00\u7AE0 \u8721\u70DB\u56FE\u4E0E\u8D8B\u52BF\u7EBF",
  "0": "\u8865\u5145\u5F62\u6001"
};

// src/data/nison.ts
var NISON_NEEDS_CONFIRM = /* @__PURE__ */ new Set([
  "hammer",
  "hanging-man",
  "inverted-hammer",
  "shooting-star",
  "doji",
  "long-legged-doji",
  "gravestone-doji",
  "dragonfly-doji",
  "bullish-belt-hold",
  "bearish-belt-hold",
  "bullish-harami",
  "bearish-harami",
  "bullish-harami-cross",
  "bearish-harami-cross",
  "tweezers-top",
  "tweezers-bottom",
  "bullish-counterattack",
  "bearish-counterattack"
]);
var nisonTips = {
  hammer: "\u4E09\u6761\u6807\u51C6\uFF1A\u5B9E\u4F53\u9760\u533A\u95F4\u4E0A\u7AEF\u3001\u4E0B\u5F71\u81F3\u5C11\u7EA6\u5B9E\u4F53\u4E24\u500D\u3001\u51E0\u4E4E\u65E0\u4E0A\u5F71\u3002\u4E0B\u5F71\u8D8A\u957F\u3001\u5B9E\u4F53\u8D8A\u5C0F\u8D8A\u6709\u610F\u4E49\u3002\u767D\u9524\u5B50\u7565\u504F\u5F3A\u3002\u6B21\u65E5\u6536\u9633\u4E14\u9AD8\u4E8E\u9524\u5B50\u6536\u76D8\u66F4\u7A33\u3002",
  "hanging-man": "\u5916\u5F62\u540C\u9524\u5B50\uFF0C\u5FC5\u987B\u51FA\u73B0\u5728\u4E0A\u6DA8\u4E4B\u540E\u3002\u6B21\u65E5\u5F00\u76D8\u76F8\u5BF9\u4E0A\u540A\u5B9E\u4F53\u5411\u4E0B\u7F3A\u53E3\u8D8A\u5927\u8D8A\u6709\u6548\uFF1B\u6216\u6B21\u65E5\u6536\u9634\u4E14\u6536\u76D8\u4F4E\u4E8E\u4E0A\u540A\u6536\u76D8\u3002\u4E0D\u53EF\u5355\u6839\u505A\u7A7A\u3002",
  doji: "\u5F00\u6536\u51E0\u4E4E\u76F8\u7B49\u5373\u53EF\u3002\u9876\u90E8\u6548\u529B\u8FDC\u5927\u4E8E\u5E95\u90E8\u3002\u957F\u9633\u4E4B\u540E\u7684\u5341\u5B57\u5C24\u5176\u91CD\u8981\u3002\u82E5\u56FE\u4E0A\u5341\u5B57\u5DF2\u7ECF\u5F88\u591A\uFF0C\u65B0\u5341\u5B57\u5C31\u5931\u53BB\u8B66\u544A\u610F\u4E49\u3002",
  "shooting-star": "\u4E0A\u6DA8\u540E\u7684\u5C0F\u5B9E\u4F53\u52A0\u957F\u4E0A\u5F71\u3002\u661F\u7EBF\u5B9E\u4F53\u4E0E\u524D\u5B9E\u4F53\u6700\u597D\u4E0D\u91CD\u53E0\u3002\u6B21\u65E5\u8D70\u5F31\u66F4\u6709\u6548\u3002",
  "inverted-hammer": "\u4E0B\u8DCC\u540E\u7684\u5012\u9524\u5B50\u672C\u8EAB\u4E0D\u591F\uFF0C\u5FC5\u987B\u6B21\u65E5\u9AD8\u5F00\u6216\u6536\u9633\u786E\u8BA4\u3002",
  "bullish-engulfing": "\u540E\u4E00\u6839\u9633\u7EBF\u5B9E\u4F53\u62B1\u4F4F\u524D\u4E00\u6839\u9634\u7EBF\u5B9E\u4F53\uFF0C\u5F71\u7EBF\u4E0D\u5FC5\u541E\u6CA1\u3002\u987B\u6709\u660E\u786E\u4E0B\u8DCC\u80CC\u666F\u3002",
  "bearish-engulfing": "\u540E\u4E00\u6839\u9634\u7EBF\u5B9E\u4F53\u62B1\u4F4F\u524D\u4E00\u6839\u9633\u7EBF\u5B9E\u4F53\u3002\u4E0A\u6DA8\u80CC\u666F\u8D8A\u6E05\u695A\u8D8A\u6709\u610F\u4E49\u3002",
  "piercing-line": "\u53C8\u79F0\u65A9\u56DE\u7EBF\u3002\u7B2C\u4E8C\u6839\u4F4E\u5F00\uFF0C\u6536\u76D8\u6DF1\u5165\u524D\u9634\u5B9E\u4F53\u4E00\u534A\u4EE5\u4E0A\u3002\u6536\u5F97\u8D8A\u6DF1\u8D8A\u63A5\u8FD1\u541E\u6CA1\u3002",
  "dark-cloud-cover": "\u53C8\u79F0\u4E4C\u4E91\u7EBF\u3002\u7B2C\u4E8C\u6839\u9AD8\u5F00\uFF0C\u6536\u76D8\u6DF1\u5165\u524D\u9633\u5B9E\u4F53\u4E00\u534A\u4EE5\u4E0A\u3002\u6536\u5F97\u8D8A\u6DF1\uFF0C\u4E4C\u4E91\u8D8A\u6D53\u3002",
  "morning-star": "\u957F\u9634 + \u5C0F\u5B9E\u4F53\u661F\u7EBF\uFF08\u4E0E\u524D\u5B9E\u4F53\u4E0D\u91CD\u53E0\uFF09+ \u9633\u7EBF\u660E\u663E\u63A8\u8FDB\u5230\u7B2C\u4E00\u6839\u5B9E\u4F53\u5185\u3002\u80A1\u7968\u91CC\u661F\u7EBF\u540E\u4E00\u4FA7\u8DF3\u7A7A\u5E38\u7F3A\uFF0C\u4ECD\u53EF\u6210\u7ACB\u3002",
  "evening-star": "\u957F\u9633 + \u661F\u7EBF + \u9634\u7EBF\u5411\u4E0B\u624E\u5165\u7B2C\u4E00\u6839\u5B9E\u4F53\u3002\u5FC5\u987B\u51FA\u73B0\u5728\u4E0A\u5347\u8D8B\u52BF\u4E4B\u540E\u3002",
  "bullish-harami": "\u957F\u5B9E\u4F53\u5305\u4F4F\u540E\u4E00\u5C0F\u5B9E\u4F53\u3002\u989C\u8272\u4E0D\u5FC5\u76F8\u53CD\u3002\u901A\u5E38\u5F31\u4E8E\u9524\u5B50/\u541E\u6CA1\uFF0C\u5E38\u8F6C\u4E3A\u5E73\u9759\u3002\u5341\u5B57\u5B55\u7EBF\uFF08\u5446\u6EDE\u5F62\u6001\uFF09\u624D\u662F\u4E3B\u8981\u53CD\u8F6C\u3002",
  "bearish-harami": "\u957F\u5B9E\u4F53\u5305\u4F4F\u540E\u4E00\u5C0F\u5B9E\u4F53\u3002\u4FE1\u53F7\u901A\u5E38\u5F31\u4E8E\u541E\u6CA1\u3002",
  "rising-window": "\u7A97\u53E3\u770B\u4E24\u6839\u8721\u70DB\u7AEF\u70B9\u4E4B\u95F4\u7684\u7F3A\u53E3\u3002\u8DF3\u7A7A\u540E\u7684\u56DE\u64A4\u5F80\u5F80\u4F1A\u91CD\u65B0\u8FD4\u56DE\u7A97\u53E3\uFF1B\u5173\u95ED\u540E\u629B\u538B\u4ECD\u5728\u5219\u6301\u7EED\u542B\u4E49\u51CF\u5F31\u3002",
  "falling-window": "\u5411\u4E0B\u7A97\u53E3\u672A\u5173\u95ED\u524D\u591A\u89C6\u4E3A\u963B\u6321\u3002\u56DE\u62BD\u7A97\u53E3\u662F\u5E38\u89C1\u73B0\u8C61\uFF0C\u4E0D\u662F\u5F62\u6001\u5931\u8D25\u3002",
  "break-low-rally": "\u6700\u4F4E\u4EF7\u523A\u7834\u8FD1\u671F\u4F4E\u70B9\u540E\uFF0C\u6536\u76D8\u91CD\u65B0\u7AD9\u56DE\u8BE5\u6C34\u5E73\u4E4B\u4E0A\u3002",
  "break-high-fall": "\u6700\u9AD8\u4EF7\u523A\u7834\u8FD1\u671F\u9AD8\u70B9\u540E\uFF0C\u6536\u76D8\u91CD\u65B0\u8DCC\u56DE\u8BE5\u6C34\u5E73\u4E4B\u4E0B\u3002",
  "three-white-soldiers": "\u4E09\u6839\u6536\u76D8\u9010\u6B65\u62AC\u9AD8\u7684\u9633\u7EBF\uFF0C\u6536\u76D8\u9760\u8FD1\u5F53\u65E5\u9AD8\u70B9\u3002\u51FA\u73B0\u5728\u4F4E\u4F4D\u6216\u6A2A\u76D8\u540E\uFF0C\u9884\u793A\u8FDB\u4E00\u6B65\u8F6C\u5F3A\u3002"
};
function nisonTipOf(id) {
  var _a;
  return (_a = nisonTips[id]) != null ? _a : "\u5148\u6709\u8D8B\u52BF\uFF0C\u518D\u8C08\u5F62\u6001\u3002\u5355\u6839\u4FE1\u53F7\u5E38\u987B\u6B21\u65E5\u786E\u8BA4\uFF1B\u591A\u79CD\u8721\u70DB\u4FE1\u53F7\u6216\u4E0E\u5747\u7EBF\u3001\u56DE\u64A4\u3001\u653E\u91CF\u6C47\u805A\u65F6\u66F4\u53EF\u9760\u3002";
}
var nisonLessons = [
  {
    id: "ch9-summary",
    chapter: "\u7B2C\u4E5D\u7AE0 \u8721\u70DB\u56FE\u6280\u672F\u6C47\u603B",
    title: "\u5148\u8D8B\u52BF\uFF0C\u540E\u5F62\u6001",
    summary: "\u53CD\u8F6C\u5F62\u6001\u5FC5\u987B\u51FA\u73B0\u5728\u5DF2\u6709\u8D8B\u52BF\u91CC\uFF1B\u6CA1\u6709\u4E0B\u8DCC\u5C31\u8C08\u4E0D\u4E0A\u5E95\u90E8\u53CD\u8F6C\u3002\u5B9E\u4F53\u6BD4\u5F71\u7EBF\u66F4\u80FD\u8BF4\u660E\u591A\u7A7A\u80DC\u8D1F\u3002",
    points: [
      "\u9524\u5B50\u4E0E\u4E0A\u540A\u5916\u5F62\u76F8\u540C\uFF0C\u4F4D\u7F6E\u51B3\u5B9A\u610F\u4E49\uFF1B\u4E0A\u540A\u5FC5\u987B\u7B49\u6B21\u65E5\u786E\u8BA4",
      "\u5341\u5B57\u7EBF\u9876\u90E8\u6548\u529B\u8FDC\u5927\u4E8E\u5E95\u90E8\uFF1B\u957F\u9633\u4E4B\u540E\u7684\u5341\u5B57\u5C24\u5176\u91CD\u8981",
      "\u7A97\u53E3\u5C5E\u4E8E\u6301\u7EED\uFF0C\u8DF3\u7A7A\u540E\u7684\u56DE\u64A4\u5E38\u4F1A\u91CD\u65B0\u8FD4\u56DE\u7A97\u53E3",
      "\u5B55\u7EBF\u901A\u5E38\u5F31\u4E8E\u541E\u6CA1\uFF0C\u5E38\u8F6C\u4E3A\u5E73\u9759\uFF1B\u5341\u5B57\u5B55\u7EBF\uFF08\u5446\u6EDE\uFF09\u624D\u662F\u4E3B\u8981\u53CD\u8F6C",
      "\u4E0B\u5F71\u4E0D\u5230\u7406\u60F3\u7684 2 \u500D\u4E5F\u53EF\u4EE5\u53C2\u8003\uFF0C\u4F46\u8981\u6709\u5176\u5B83\u4FE1\u53F7\u9A8C\u8BC1"
    ]
  },
  {
    id: "ch10-confluence",
    chapter: "\u7B2C\u5341\u7AE0 \u8721\u70DB\u56FE\u4FE1\u53F7\u7684\u6C47\u805A",
    title: "\u540C\u4E00\u533A\u57DF\u591A\u79CD\u4FE1\u53F7",
    summary: "\u540C\u4E00\u4EF7\u4F4D\u9644\u8FD1\u540C\u65F6\u51FA\u73B0\u82E5\u5E72\u8721\u70DB\u4FE1\u53F7\u65F6\uFF0C\u53EF\u9760\u6027\u660E\u663E\u9AD8\u4E8E\u5B64\u7ACB\u7684\u4E00\u6839\u7EBF\u3002",
    points: [
      "\u4F8B\u5982\u9AD8\u4F4D\u9EC4\u660F\u661F\u53C8\u78B0\u4E0A\u5E73\u5934\u9876\u90E8\u3001\u5317\u65B9\u5341\u5B57",
      "\u4F4E\u4F4D\u9524\u5B50\u82E5\u540C\u65F6\u8D34\u8FD1\u7A97\u53E3\u4E0A\u6CBF\u6216\u524D\u4F4E\uFF0C\u610F\u4E49\u66F4\u5F3A",
      "\u7CFB\u7EDF\u4F1A\u628A\u653E\u91CF\u3001\u7AD9\u4E0A/\u8DCC\u7834\u5747\u7EBF\u6807\u6210\u6C47\u805A\u63D0\u793A"
    ]
  },
  {
    id: "ch11-trendline",
    chapter: "\u7B2C\u5341\u4E00\u7AE0 \u8721\u70DB\u56FE\u4E0E\u8D8B\u52BF\u7EBF",
    title: "\u7834\u4F4E\u53CD\u6DA8\u3001\u7834\u9AD8\u53CD\u8DCC\u3001\u6781\u6027\u8F6C\u6362",
    summary: "\u8D8B\u52BF\u7EBF\u6216\u6C34\u5E73\u652F\u6491\u88AB\u523A\u7834\u540E\u8FC5\u901F\u6536\u56DE\uFF0C\u5E38\u662F\u5047\u7A81\u7834\u3002\u65E7\u652F\u6491\u88AB\u6709\u6548\u8DCC\u7834\u540E\uFF0C\u5F80\u5F80\u53D8\u6210\u65E5\u540E\u538B\u529B\u3002",
    points: [
      "\u7834\u4F4E\u53CD\u6DA8\uFF1A\u6700\u4F4E\u4EF7\u8DCC\u7834\u8FD1\u671F\u4F4E\u70B9\uFF0C\u6536\u76D8\u56DE\u5230\u8BE5\u4F4E\u70B9\u4E4B\u4E0A",
      "\u7834\u9AD8\u53CD\u8DCC\uFF1A\u6700\u9AD8\u4EF7\u5347\u7834\u8FD1\u671F\u9AD8\u70B9\uFF0C\u6536\u76D8\u56DE\u5230\u8BE5\u9AD8\u70B9\u4E4B\u4E0B",
      "\u6781\u6027\u8F6C\u6362\uFF1A\u88AB\u8DCC\u7834\u7684\u652F\u6491\uFF0C\u518D\u53CD\u5F39\u65F6\u53EF\u80FD\u53D8\u6210\u963B\u529B"
    ]
  },
  {
    id: "ch12-retrace",
    chapter: "\u7B2C\u5341\u4E8C\u7AE0 \u8721\u70DB\u56FE\u4E0E\u767E\u5206\u6BD4\u56DE\u64A4",
    title: "\u56DE\u64A4\u4F4D\u4E0A\u7684\u8721\u70DB\u53CD\u8F6C",
    summary: "\u5E38\u89C1\u56DE\u64A4\u7EA6\u5728 1/3\u30011/2\u30012/3\uFF08\u6216 38%\u300150%\u300162%\uFF09\u4E00\u5E26\u3002\u82E5\u6B64\u5904\u540C\u65F6\u51FA\u73B0\u9524\u5B50\u3001\u542F\u660E\u661F\u3001\u5B55\u7EBF\uFF0C\u6BD4\u534A\u7A7A\u4E2D\u7684\u540C\u6837\u5F62\u6001\u66F4\u503C\u5F97\u770B\u3002",
    points: ["\u5148\u6807\u51FA\u4E0A\u5347\u6216\u4E0B\u8DCC\u6CE2\u6BB5\u7684\u8D77\u70B9\u7EC8\u70B9", "\u5728\u56DE\u64A4\u533A\u7B49\u5F85\u8721\u70DB\u4FE1\u53F7\uFF0C\u800C\u4E0D\u662F\u63D0\u524D\u731C\u62D0\u70B9"]
  },
  {
    id: "ch13-ma",
    chapter: "\u7B2C\u5341\u4E09\u7AE0 \u8721\u70DB\u56FE\u4E0E\u79FB\u52A8\u5E73\u5747\u7EBF",
    title: "\u5747\u7EBF\u652F\u6491\u538B\u529B + \u8721\u70DB",
    summary: "\u4EF7\u683C\u56DE\u843D\u5230\u5747\u7EBF\u9644\u8FD1\u51FA\u73B0\u770B\u6DA8\u8721\u70DB\uFF0C\u6216\u53CD\u5F39\u5230\u5747\u7EBF\u9644\u8FD1\u51FA\u73B0\u770B\u8DCC\u8721\u70DB\uFF0C\u5C5E\u4E8E\u4E1C\u897F\u65B9\u76F8\u4E92\u9A8C\u8BC1\u3002",
    points: ["\u4E70\u70B9\u4FE1\u53F7\u82E5\u6536\u5728\u5747\u7EBF\u4E4B\u4E0A\uFF0C\u6C47\u805A\u52A0\u5206", "\u5356\u70B9\u4FE1\u53F7\u82E5\u6536\u5728\u5747\u7EBF\u4E4B\u4E0B\uFF0C\u6C47\u805A\u52A0\u5206"]
  },
  {
    id: "ch14-osc",
    chapter: "\u7B2C\u5341\u56DB\u7AE0 \u8721\u70DB\u56FE\u4E0E\u6446\u52A8\u6307\u6570",
    title: "\u8D85\u4E70\u8D85\u5356\u4E0E\u80CC\u79BB",
    summary: "RSI\u3001\u968F\u673A\u6307\u6570\u3001MACD \u51FA\u73B0\u80CC\u79BB\u65F6\uFF0C\u518D\u7528\u9EC4\u660F\u661F\u3001\u4E4C\u4E91\u76D6\u9876\u7B49\u8721\u70DB\u53BB\u5BF9\u51C6\u65F6\u673A\uFF0C\u800C\u4E0D\u662F\u5355\u9760\u6307\u6807\u4E70\u5356\u3002",
    points: ["\u6307\u6807\u7ED9\u80CC\u666F\uFF0C\u8721\u70DB\u7ED9\u65F6\u673A", "\u9AD8\u4F4D\u80CC\u79BB + \u6D41\u661F/\u9EC4\u660F\u661F\uFF0C\u4F4E\u4F4D\u80CC\u79BB + \u9524\u5B50/\u542F\u660E\u661F"]
  },
  {
    id: "ch15-volume",
    chapter: "\u7B2C\u5341\u4E94\u7AE0 \u8721\u70DB\u56FE\u4E0E\u4EA4\u6613\u91CF",
    title: "\u653E\u91CF\u786E\u8BA4",
    summary: "\u53CD\u8F6C\u6216\u7A97\u53E3\u5F53\u65E5\u660E\u663E\u653E\u91CF\uFF0C\u8BF4\u660E\u6709\u65B0\u7684\u529B\u91CF\u53C2\u4E0E\u3002\u7F29\u91CF\u7684\u9524\u5B50\u3001\u7F29\u91CF\u7684\u7A81\u7834\uFF0C\u90FD\u8981\u964D\u6743\u3002",
    points: ["\u7CFB\u7EDF\u5728\u6709\u6210\u4EA4\u91CF\u6570\u636E\u65F6\u4F1A\u6807\u6CE8\u300C\u653E\u91CF\u300D", "\u65E0\u91CF\u6570\u636E\u65F6\u4E0D\u81C6\u9020\u6C47\u805A"]
  },
  {
    id: "ch16-target",
    chapter: "\u7B2C\u5341\u516D\u7AE0 \u6D4B\u7B97\u4EF7\u683C\u76EE\u6807",
    title: "\u7BB1\u4F53\u3001\u5BF9\u7B49\u8FD0\u52A8\u4E0E\u65D7\u5F62",
    summary: "\u7A81\u7834\u7BB1\u4F53\u540E\uFF0C\u5E38\u7528\u7BB1\u4F53\u9AD8\u5EA6\u6295\u5C04\u76EE\u6807\uFF1B\u65D7\u5F62\u3001\u5C16\u65D7\u5F62\u5219\u914D\u5408\u5148\u524D\u63A8\u8FDB\u6CE2\u505A\u5BF9\u7B49\u6D4B\u91CF\u3002\u8721\u70DB\u8D1F\u8D23\u786E\u8BA4\u7A81\u7834\u662F\u5426\u7AD9\u7A33\u3002",
    points: ["\u5148\u6709\u6574\u7406\u533A\u95F4\uFF0C\u518D\u8C08\u7A81\u7834\u76EE\u6807", "\u7A97\u53E3\u88AB\u56DE\u8865\u5E38\u610F\u5473\u7740\u539F\u65B9\u5411\u53D7\u963B\uFF0C\u4E0D\u5B9C\u518D\u6309\u539F\u76EE\u6807\u786C\u63A8"]
  },
  {
    id: "ch17-combine",
    chapter: "\u7B2C\u5341\u4E03\u7AE0 \u4E1C\u897F\u65B9\u6280\u672F\u73E0\u8054\u74A7\u5408",
    title: "\u76F8\u4E92\u9A8C\u8BC1",
    summary: "\u8721\u70DB\u56FE\u5E76\u4E0D\u6392\u65A5\u8D8B\u52BF\u7EBF\u3001\u5747\u7EBF\u3001\u56DE\u64A4\u548C\u6307\u6807\u3002\u5355\u72EC\u4E00\u6839\u6F02\u4EAE K \u7EBF\u4E0D\u591F\uFF1B\u80CC\u666F\u4E00\u81F4\u65F6\u624D\u66F4\u6709\u5B66\u4E60\u4EF7\u503C\u3002",
    points: ["\u672C\u7CFB\u7EDF\u6807\u6CE8\u7684\u662F\u5B66\u4E60\u4FE1\u53F7\uFF0C\u4E0D\u662F\u4EA4\u6613\u6307\u4EE4", "\u5DF2\u786E\u8BA4 + \u6C47\u805A\u7684\u5F62\u6001\uFF0C\u4F18\u5148\u4E8E\u5B64\u7ACB\u7684\u5F85\u786E\u8BA4\u5355\u6839"]
  }
];

// src/data/quizLevels.ts
var quizLevels = [
  {
    id: "beginner",
    name: "\u5165\u95E8\u5173",
    description: "\u5C3C\u68EE\u57FA\u7840\uFF1A\u9524\u5B50\u3001\u4E0A\u540A\u3001\u5341\u5B57\u3001\u7EBA\u9524\u3001\u5149\u5934\u5149\u811A\u3001\u6349\u8170\u5E26",
    questionCount: 6,
    patternIds: [
      "hammer",
      "hanging-man",
      "doji",
      "shooting-star",
      "inverted-hammer",
      "spinning-top",
      "bullish-marubozu",
      "bearish-marubozu",
      "bullish-belt-hold",
      "bearish-belt-hold"
    ],
    unlockScore: 0
  },
  {
    id: "advanced",
    name: "\u8FDB\u9636\u5173",
    description: "\u7ECF\u5178\u53CD\u8F6C\uFF1A\u541E\u6CA1\u3001\u5B55\u7EBF\u3001\u542F\u660E\u661F/\u9EC4\u660F\u661F\u3001\u5F03\u5A74\u3001\u5E73\u5934\u3001\u8E22\u811A\u7B49",
    questionCount: 8,
    patternIds: [
      "bullish-engulfing",
      "bearish-engulfing",
      "bullish-harami",
      "bearish-harami",
      "bullish-harami-cross",
      "bearish-harami-cross",
      "piercing-line",
      "dark-cloud-cover",
      "bullish-counterattack",
      "bearish-counterattack",
      "morning-star",
      "evening-star",
      "morning-doji-star",
      "evening-doji-star",
      "abandoned-baby-bullish",
      "abandoned-baby-bearish",
      "tweezers-top",
      "tweezers-bottom",
      "kicking-bullish",
      "kicking-bearish",
      "matching-low",
      "homing-pigeon"
    ],
    unlockScore: 60
  },
  {
    id: "expert",
    name: "\u63D0\u9AD8\u5173",
    description: "\u6301\u7EED\u4E0E\u590D\u6742\uFF1A\u7A97\u53E3\u3001\u4E09\u6CD5\u3001\u94FA\u57AB\u3001\u4E09\u7EBF\u6253\u51FB\u3001\u5927\u654C\u5F53\u524D\u3001\u8131\u79BB\u7B49",
    questionCount: 8,
    patternIds: [
      "rising-window",
      "falling-window",
      "rising-three-methods",
      "falling-three-methods",
      "mat-hold",
      "upside-tasuki-gap",
      "downside-tasuki-gap",
      "on-neck",
      "in-neck",
      "thrusting",
      "three-line-strike-bullish",
      "three-line-strike-bearish",
      "advance-block",
      "deliberation",
      "two-crows",
      "upside-gap-two-crows",
      "breakaway-bullish",
      "breakaway-bearish",
      "three-mountains",
      "three-rivers"
    ],
    unlockScore: 60
  },
  {
    id: "reversal-master",
    name: "\u53CD\u8F6C\u4E13\u7CBE",
    description: "\u4E09\u5175\u4E09\u9E26\u3001\u5706\u5F27\u5854\u5F62\u3001\u4E09\u661F\u3001\u7C98\u4E09\u660E\u6CBB\u7B49\u53CD\u8F6C\u5F62\u6001",
    questionCount: 8,
    patternIds: [
      "three-white-soldiers",
      "three-black-crows",
      "rounding-top",
      "rounding-bottom",
      "tower-top",
      "tower-bottom",
      "tri-star-bullish",
      "tri-star-bearish",
      "stick-sandwich"
    ],
    unlockScore: 60
  },
  {
    id: "continuation-master",
    name: "\u6301\u7EED\u4E13\u7CBE",
    description: "\u5E76\u5217\u9634\u9633\u7EBF\u3001\u5206\u79BB\u7EBF\uFF0C\u5DE9\u56FA\u7A97\u53E3\u4E0E\u4E09\u6CD5\u7B49\u6301\u7EED\u5F62\u6001",
    questionCount: 8,
    patternIds: [
      "upside-gap-side-by-side",
      "downside-gap-side-by-side",
      "bullish-separating-lines",
      "bearish-separating-lines",
      "rising-window",
      "falling-window",
      "rising-three-methods",
      "falling-three-methods",
      "mat-hold",
      "upside-tasuki-gap",
      "downside-tasuki-gap"
    ],
    unlockScore: 60
  },
  {
    id: "final-challenge",
    name: "\u7EFC\u5408\u6311\u6218",
    description: "\u5341\u5B57\u53D8\u4F53 + \u9AD8\u96BE\u5F62\u6001\u6DF7\u5408\u62BD\u9898\uFF0C\u5168\u9762\u68C0\u9A8C",
    questionCount: 10,
    patternIds: [
      "long-legged-doji",
      "gravestone-doji",
      "dragonfly-doji",
      "high-wave",
      "abandoned-baby-bullish",
      "abandoned-baby-bearish",
      "three-line-strike-bullish",
      "three-line-strike-bearish",
      "breakaway-bullish",
      "breakaway-bearish",
      "advance-block",
      "deliberation",
      "three-white-soldiers",
      "three-black-crows",
      "kicking-bullish",
      "kicking-bearish",
      "tower-top",
      "tower-bottom",
      "stick-sandwich",
      "tri-star-bullish",
      "tri-star-bearish"
    ],
    unlockScore: 60
  }
];

// src/lib/kline/rng.ts
function createRng(seed) {
  let t = seed >>> 0;
  return () => {
    t += 1831565813;
    let r = Math.imul(t ^ t >>> 15, 1 | t);
    r ^= r + Math.imul(r ^ r >>> 7, 61 | r);
    return ((r ^ r >>> 14) >>> 0) / 4294967296;
  };
}
function randBetween(rng, min, max) {
  return min + rng() * (max - min);
}
function randInt(rng, min, max) {
  return Math.floor(randBetween(rng, min, max + 1));
}

// src/lib/kline/generate.ts
function candle(open, high, low, close) {
  const h = Math.max(open, high, low, close);
  const l = Math.min(open, high, low, close);
  return {
    open: +open.toFixed(2),
    high: +h.toFixed(2),
    low: +l.toFixed(2),
    close: +close.toFixed(2)
  };
}
function generateBaseSeries(seed, length, startPrice = 100) {
  const rng = createRng(seed);
  const series = [];
  let price = startPrice;
  for (let i = 0; i < length; i++) {
    const drift = randBetween(rng, -1.2, 1.2);
    const open = price;
    const close = Math.max(5, open + drift);
    const wickTop = randBetween(rng, 0.1, 0.9);
    const wickBot = randBetween(rng, 0.1, 0.9);
    const high = Math.max(open, close) + wickTop;
    const low = Math.min(open, close) - wickBot;
    series.push(candle(open, high, low, close));
    price = close;
  }
  return series;
}
function makeHammerLike(base, bullishContext, rng) {
  const body2 = randBetween(rng, 0.4, 1);
  const lower = body2 * randBetween(rng, 2.2, 3.2);
  const upper = randBetween(rng, 0.05, 0.25);
  const open = bullishContext ? base : base + body2 * 0.4;
  const close = bullishContext ? base + body2 : base;
  const low = Math.min(open, close) - lower;
  const high = Math.max(open, close) + upper;
  return candle(open, high, low, close);
}
function makeShootingLike(base, rng) {
  const body2 = randBetween(rng, 0.4, 1);
  const upper = body2 * randBetween(rng, 2.2, 3.2);
  const lower = randBetween(rng, 0.05, 0.25);
  const open = base + body2 * 0.6;
  const close = base;
  const high = Math.max(open, close) + upper;
  const low = Math.min(open, close) - lower;
  return candle(open, high, low, close);
}
function makeDoji(base, rng) {
  const open = base;
  const close = base + randBetween(rng, -0.08, 0.08);
  const upper = randBetween(rng, 0.6, 1.6);
  const lower = randBetween(rng, 0.6, 1.6);
  return candle(open, Math.max(open, close) + upper, Math.min(open, close) - lower, close);
}
function trendDown(series, end, bars, rng) {
  var _a, _b;
  let p = (_b = (_a = series[Math.max(0, end - bars)]) == null ? void 0 : _a.close) != null ? _b : 100;
  for (let i = end - bars; i < end; i++) {
    if (i < 0) continue;
    const open = p;
    const close = open - randBetween(rng, 0.8, 1.8);
    series[i] = candle(open, open + randBetween(rng, 0.1, 0.4), close - randBetween(rng, 0.1, 0.5), close);
    p = close;
  }
  return p;
}
function trendUp(series, end, bars, rng) {
  var _a, _b;
  let p = (_b = (_a = series[Math.max(0, end - bars)]) == null ? void 0 : _a.close) != null ? _b : 100;
  for (let i = end - bars; i < end; i++) {
    if (i < 0) continue;
    const open = p;
    const close = open + randBetween(rng, 0.8, 1.8);
    series[i] = candle(open, close + randBetween(rng, 0.1, 0.5), open - randBetween(rng, 0.1, 0.4), close);
    p = close;
  }
  return p;
}
function embedPattern(seriesIn, patternId, atIndex, seed = 1) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const series = seriesIn.map((c) => ({ ...c }));
  const rng = createRng(seed + atIndex * 97);
  const n = series.length;
  const barsNeeded = Math.min((_b = (_a = getPatternById(patternId)) == null ? void 0 : _a.bars) != null ? _b : 1, n - 5);
  let start = Math.min(Math.max(atIndex, 4), Math.max(4, n - barsNeeded - 2));
  const end = start + barsNeeded - 1;
  switch (patternId) {
    case "hammer": {
      const base = trendDown(series, start, 4, rng);
      series[start] = makeHammerLike(base, true, rng);
      break;
    }
    case "hanging-man": {
      const base = trendUp(series, start, 4, rng);
      series[start] = makeHammerLike(base, false, rng);
      break;
    }
    case "doji": {
      const base = (_d = (_c = series[start - 1]) == null ? void 0 : _c.close) != null ? _d : 100;
      series[start] = makeDoji(base, rng);
      break;
    }
    case "long-legged-doji": {
      const base = (_f = (_e = series[start - 1]) == null ? void 0 : _e.close) != null ? _f : 100;
      const open = base;
      const close = base + randBetween(rng, -0.05, 0.05);
      series[start] = candle(open, open + 2.4, open - 2.4, close);
      break;
    }
    case "gravestone-doji": {
      const base = trendUp(series, start, 4, rng);
      series[start] = candle(base, base + 2.8, base - 0.05, base + 0.02);
      break;
    }
    case "dragonfly-doji": {
      const base = trendDown(series, start, 4, rng);
      series[start] = candle(base, base + 0.05, base - 2.8, base - 0.02);
      break;
    }
    case "shooting-star": {
      const base = trendUp(series, start, 4, rng);
      series[start] = makeShootingLike(base, rng);
      break;
    }
    case "inverted-hammer": {
      const base = trendDown(series, start, 4, rng);
      series[start] = makeShootingLike(base, rng);
      break;
    }
    case "bullish-engulfing": {
      const p = trendDown(series, start, 3, rng);
      const c1 = candle(p, p + 0.3, p - 1.8, p - 1.5);
      const c2 = candle(c1.close - 0.2, c1.open + 1.2, c1.close - 0.3, c1.open + 1);
      series[start] = c1;
      series[start + 1] = c2;
      break;
    }
    case "bearish-engulfing": {
      const p = trendUp(series, start, 3, rng);
      const c1 = candle(p, p + 1.5, p - 0.3, p + 1.2);
      const c2 = candle(c1.close + 0.2, c1.close + 0.4, c1.open - 1, c1.open - 0.8);
      series[start] = c1;
      series[start + 1] = c2;
      break;
    }
    case "bullish-harami": {
      const p = trendDown(series, start, 3, rng);
      const c1 = candle(p, p + 0.2, p - 2.2, p - 2);
      const mid2 = (c1.open + c1.close) / 2;
      const c2 = candle(mid2 - 0.2, mid2 + 0.35, mid2 - 0.35, mid2 + 0.25);
      series[start] = c1;
      series[start + 1] = c2;
      break;
    }
    case "bearish-harami": {
      const p = trendUp(series, start, 3, rng);
      const c1 = candle(p, p + 2.2, p - 0.2, p + 2);
      const mid2 = (c1.open + c1.close) / 2;
      const c2 = candle(mid2 + 0.2, mid2 + 0.35, mid2 - 0.35, mid2 - 0.25);
      series[start] = c1;
      series[start + 1] = c2;
      break;
    }
    case "piercing-line": {
      const p = trendDown(series, start, 3, rng);
      const c1 = candle(p, p + 0.2, p - 2, p - 1.8);
      const open2 = c1.close - 0.5;
      const close2 = c1.open - (c1.open - c1.close) * 0.35;
      series[start] = c1;
      series[start + 1] = candle(open2, close2 + 0.2, open2 - 0.2, close2);
      break;
    }
    case "dark-cloud-cover": {
      const p = trendUp(series, start, 3, rng);
      const c1 = candle(p, p + 2, p - 0.2, p + 1.8);
      const open2 = c1.close + 0.5;
      const close2 = c1.open + (c1.close - c1.open) * 0.35;
      series[start] = c1;
      series[start + 1] = candle(open2, open2 + 0.2, close2 - 0.2, close2);
      break;
    }
    case "bullish-counterattack": {
      const p = trendDown(series, start, 3, rng);
      const c1 = candle(p, p + 0.2, p - 2, p - 1.8);
      const open2 = c1.close - 1.2;
      const close2 = c1.close;
      series[start] = c1;
      series[start + 1] = candle(open2, close2 + 0.15, open2 - 0.15, close2);
      break;
    }
    case "bearish-counterattack": {
      const p = trendUp(series, start, 3, rng);
      const c1 = candle(p, p + 2, p - 0.2, p + 1.8);
      const open2 = c1.close + 1.2;
      const close2 = c1.close;
      series[start] = c1;
      series[start + 1] = candle(open2, open2 + 0.15, close2 - 0.15, close2);
      break;
    }
    case "morning-star": {
      const p = trendDown(series, start, 3, rng);
      const c1 = candle(p, p + 0.2, p - 2, p - 1.8);
      const c2 = makeDoji(c1.close - 0.3, rng);
      const c3 = candle(c2.close + 0.1, c1.open + 0.3, c2.low - 0.1, c1.open - 0.2);
      series[start] = c1;
      series[start + 1] = c2;
      series[start + 2] = c3;
      break;
    }
    case "evening-star": {
      const p = trendUp(series, start, 3, rng);
      const c1 = candle(p, p + 2, p - 0.2, p + 1.8);
      const c2 = makeDoji(c1.close + 0.3, rng);
      const c3 = candle(c2.close - 0.1, c2.high + 0.1, c1.open - 0.3, c1.open + 0.2);
      series[start] = c1;
      series[start + 1] = c2;
      series[start + 2] = c3;
      break;
    }
    case "three-white-soldiers": {
      let p = trendDown(series, start, 2, rng);
      for (let i = 0; i < 3; i++) {
        const open = p + randBetween(rng, -0.2, 0.3);
        const close = open + randBetween(rng, 1.2, 1.8);
        series[start + i] = candle(open, close + 0.15, open - 0.15, close);
        p = close;
      }
      break;
    }
    case "three-black-crows": {
      let p = trendUp(series, start, 2, rng);
      for (let i = 0; i < 3; i++) {
        const open = p + randBetween(rng, -0.3, 0.2);
        const close = open - randBetween(rng, 1.2, 1.8);
        series[start + i] = candle(open, open + 0.15, close - 0.15, close);
        p = close;
      }
      break;
    }
    case "rising-window": {
      const p = trendUp(series, start, 2, rng);
      const c1 = candle(p, p + 1.2, p - 0.2, p + 1);
      const open2 = c1.high + 0.8;
      const close2 = open2 + 1;
      series[start] = c1;
      series[start + 1] = candle(open2, close2 + 0.2, open2 - 0.1, close2);
      break;
    }
    case "falling-window": {
      const p = trendDown(series, start, 2, rng);
      const c1 = candle(p, p + 0.2, p - 1.2, p - 1);
      const open2 = c1.low - 0.8;
      const close2 = open2 - 1;
      series[start] = c1;
      series[start + 1] = candle(open2, open2 + 0.1, close2 - 0.2, close2);
      break;
    }
    case "upside-gap-side-by-side": {
      let p = trendUp(series, start, 2, rng);
      const c0 = candle(p, p + 1, p - 0.1, p + 0.9);
      const open1 = c0.high + 0.7;
      const close1 = open1 + 1.1;
      const c1 = candle(open1, close1 + 0.1, open1 - 0.1, close1);
      const c2 = candle(close1 + 0.1, close1 + 0.3, open1 - 0.05, open1 + 0.15);
      series[start] = c0;
      series[start + 1] = c1;
      series[start + 2] = c2;
      break;
    }
    case "downside-gap-side-by-side": {
      let p = trendDown(series, start, 2, rng);
      const c0 = candle(p, p + 0.1, p - 1, p - 0.9);
      const open1 = c0.low - 0.7;
      const close1 = open1 - 1.1;
      const c1 = candle(open1, open1 + 0.1, close1 - 0.1, close1);
      const c2 = candle(close1 - 0.1, open1 + 0.05, close1 - 0.3, open1 - 0.15);
      series[start] = c0;
      series[start + 1] = c1;
      series[start + 2] = c2;
      break;
    }
    case "rising-three-methods": {
      let p = trendUp(series, start, 2, rng);
      const bigOpen = p;
      const bigClose = p + 3.2;
      series[start] = candle(bigOpen, bigClose + 0.2, bigOpen - 0.15, bigClose);
      let cur = bigClose - 0.2;
      for (let i = 1; i <= 3; i++) {
        const open = cur;
        const close = open - randBetween(rng, 0.35, 0.7);
        series[start + i] = candle(open, open + 0.15, close - 0.1, close);
        cur = close;
      }
      const lastOpen = cur + 0.1;
      const lastClose = bigClose + 0.9;
      series[start + 4] = candle(lastOpen, lastClose + 0.15, lastOpen - 0.1, lastClose);
      break;
    }
    case "falling-three-methods": {
      let p = trendDown(series, start, 2, rng);
      const bigOpen = p;
      const bigClose = p - 3.2;
      series[start] = candle(bigOpen, bigOpen + 0.15, bigClose - 0.2, bigClose);
      let cur = bigClose + 0.2;
      for (let i = 1; i <= 3; i++) {
        const open = cur;
        const close = open + randBetween(rng, 0.35, 0.7);
        series[start + i] = candle(open, close + 0.1, open - 0.15, close);
        cur = close;
      }
      const lastOpen = cur - 0.1;
      const lastClose = bigClose - 0.9;
      series[start + 4] = candle(lastOpen, lastOpen + 0.1, lastClose - 0.15, lastClose);
      break;
    }
    case "bullish-separating-lines": {
      const p = trendUp(series, start, 2, rng);
      const open = p + 0.8;
      const c1 = candle(open, open + 0.2, open - 1.6, open - 1.4);
      const c2 = candle(open, open + 1.8, open - 0.15, open + 1.6);
      series[start] = c1;
      series[start + 1] = c2;
      break;
    }
    case "bearish-separating-lines": {
      const p = trendDown(series, start, 2, rng);
      const open = p - 0.8;
      const c1 = candle(open, open + 1.6, open - 0.2, open + 1.4);
      const c2 = candle(open, open + 0.15, open - 1.8, open - 1.6);
      series[start] = c1;
      series[start + 1] = c2;
      break;
    }
    case "three-mountains": {
      let p = trendUp(series, start, 3, rng);
      const peak = p + 2.5;
      const valley = peak - 2.2;
      const shape = [0.6, 1.4, 2.5, 1.2, 0.3, 1.3, 2.45, 1.1, 0.25, 1.35, 2.4, 0.8];
      for (let i = 0; i < barsNeeded; i++) {
        const target = valley + shape[i] * ((peak - valley) / 2.5);
        const open = p;
        const close = target;
        series[start + i] = candle(
          open,
          Math.max(open, close) + 0.25,
          Math.min(open, close) - 0.25,
          close
        );
        p = close;
      }
      break;
    }
    case "three-rivers": {
      let p = trendDown(series, start, 3, rng);
      const trough = p - 2.5;
      const ridge = trough + 2.2;
      const shape = [0.6, 1.4, 2.5, 1.2, 0.3, 1.3, 2.45, 1.1, 0.25, 1.35, 2.4, 0.8];
      for (let i = 0; i < barsNeeded; i++) {
        const target = ridge - shape[i] * ((ridge - trough) / 2.5);
        const open = p;
        const close = target;
        series[start + i] = candle(
          open,
          Math.max(open, close) + 0.25,
          Math.min(open, close) - 0.25,
          close
        );
        p = close;
      }
      break;
    }
    case "rounding-top": {
      let p = trendUp(series, start, 3, rng);
      const mid2 = (barsNeeded - 1) / 2;
      for (let i = 0; i < barsNeeded; i++) {
        const t = (i - mid2) / mid2;
        const target = p + 1.2 - t * t * 3.2;
        const open = (_h = (_g = series[start + i - 1]) == null ? void 0 : _g.close) != null ? _h : p;
        const close = target;
        series[start + i] = candle(
          open,
          Math.max(open, close) + 0.2,
          Math.min(open, close) - 0.2,
          close
        );
      }
      break;
    }
    case "rounding-bottom": {
      let p = trendDown(series, start, 3, rng);
      const mid2 = (barsNeeded - 1) / 2;
      let prev = p;
      for (let i = 0; i < barsNeeded; i++) {
        const t = (i - mid2) / mid2;
        const target = p - 1.2 + t * t * 3.2;
        const open = prev;
        const close = target;
        series[start + i] = candle(
          open,
          Math.max(open, close) + 0.2,
          Math.min(open, close) - 0.2,
          close
        );
        prev = close;
      }
      break;
    }
    case "tower-top": {
      let p = trendUp(series, start, 1, rng);
      for (let i = 0; i < 4; i++) {
        const open = p;
        const close = open + 1.4;
        series[start + i] = candle(open, close + 0.15, open - 0.1, close);
        p = close;
      }
      series[start + 4] = candle(p + 0.2, p + 0.4, p - 2.8, p - 2.5);
      series[start + 5] = candle(p - 2.4, p - 2.2, p - 3.4, p - 3.2);
      break;
    }
    case "tower-bottom": {
      let p = trendDown(series, start, 1, rng);
      for (let i = 0; i < 4; i++) {
        const open = p;
        const close = open - 1.4;
        series[start + i] = candle(open, open + 0.1, close - 0.15, close);
        p = close;
      }
      series[start + 4] = candle(p - 0.2, p + 2.8, p - 0.4, p + 2.5);
      series[start + 5] = candle(p + 2.4, p + 3.4, p + 2.2, p + 3.2);
      break;
    }
    case "spinning-top": {
      const base = (_j = (_i = series[start - 1]) == null ? void 0 : _i.close) != null ? _j : 100;
      series[start] = candle(base - 0.25, base + 1.2, base - 1.2, base + 0.25);
      break;
    }
    case "high-wave": {
      const base = (_l = (_k = series[start - 1]) == null ? void 0 : _k.close) != null ? _l : 100;
      series[start] = candle(base - 0.1, base + 2.8, base - 2.8, base + 0.1);
      break;
    }
    case "bullish-marubozu": {
      const p = trendUp(series, start, 2, rng);
      series[start] = candle(p, p + 2.4, p, p + 2.4);
      break;
    }
    case "bearish-marubozu": {
      const p = trendDown(series, start, 2, rng);
      series[start] = candle(p, p, p - 2.4, p - 2.4);
      break;
    }
    case "bullish-belt-hold": {
      const p = trendDown(series, start, 4, rng);
      series[start] = candle(p, p + 2.6, p, p + 2.5);
      break;
    }
    case "bearish-belt-hold": {
      const p = trendUp(series, start, 4, rng);
      series[start] = candle(p, p, p - 2.6, p - 2.5);
      break;
    }
    case "tweezers-top": {
      const p = trendUp(series, start, 3, rng);
      const hi = p + 1.8;
      series[start] = candle(p, hi, p - 0.2, p + 1.5);
      series[start + 1] = candle(p + 1.4, hi, p + 0.2, p + 0.4);
      break;
    }
    case "tweezers-bottom": {
      const p = trendDown(series, start, 3, rng);
      const lo = p - 1.8;
      series[start] = candle(p, p + 0.2, lo, p - 1.5);
      series[start + 1] = candle(p - 1.4, p - 0.2, lo, p - 0.4);
      break;
    }
    case "bullish-harami-cross": {
      const p = trendDown(series, start, 3, rng);
      const c1 = candle(p, p + 0.2, p - 2.4, p - 2.2);
      const mid2 = (c1.open + c1.close) / 2;
      series[start] = c1;
      series[start + 1] = candle(mid2, mid2 + 0.5, mid2 - 0.5, mid2 + 0.02);
      break;
    }
    case "bearish-harami-cross": {
      const p = trendUp(series, start, 3, rng);
      const c1 = candle(p, p + 2.4, p - 0.2, p + 2.2);
      const mid2 = (c1.open + c1.close) / 2;
      series[start] = c1;
      series[start + 1] = candle(mid2, mid2 + 0.5, mid2 - 0.5, mid2 - 0.02);
      break;
    }
    case "morning-doji-star": {
      const p = trendDown(series, start, 3, rng);
      const c1 = candle(p, p + 0.2, p - 2.2, p - 2);
      const doj = c1.close - 0.7;
      const c2 = candle(doj, doj + 0.35, doj - 0.35, doj + 0.02);
      const c3 = candle(c2.close + 0.2, c1.open + 0.2, c2.low, c1.open - 0.3);
      series[start] = c1;
      series[start + 1] = c2;
      series[start + 2] = c3;
      break;
    }
    case "evening-doji-star": {
      const p = trendUp(series, start, 3, rng);
      const c1 = candle(p, p + 2.2, p - 0.2, p + 2);
      const doj = c1.close + 0.7;
      const c2 = candle(doj, doj + 0.35, doj - 0.35, doj - 0.02);
      const c3 = candle(c2.close - 0.2, c2.high, c1.open - 0.2, c1.open + 0.3);
      series[start] = c1;
      series[start + 1] = c2;
      series[start + 2] = c3;
      break;
    }
    case "abandoned-baby-bullish": {
      const p = trendDown(series, start, 3, rng);
      const c1 = candle(p, p + 0.15, p - 2, p - 1.8);
      const doj = c1.low - 0.9;
      const c2 = candle(doj, doj + 0.25, doj - 0.25, doj);
      const c3 = candle(c2.high + 0.7, c1.open + 0.1, c2.high + 0.5, c1.open - 0.4);
      series[start] = c1;
      series[start + 1] = c2;
      series[start + 2] = c3;
      break;
    }
    case "abandoned-baby-bearish": {
      const p = trendUp(series, start, 3, rng);
      const c1 = candle(p, p + 2, p - 0.15, p + 1.8);
      const doj = c1.high + 0.9;
      const c2 = candle(doj, doj + 0.25, doj - 0.25, doj);
      const c3 = candle(c2.low - 0.7, c2.low - 0.5, c1.open - 0.1, c1.open + 0.4);
      series[start] = c1;
      series[start + 1] = c2;
      series[start + 2] = c3;
      break;
    }
    case "matching-low": {
      const p = trendDown(series, start, 3, rng);
      const close = p - 1.6;
      series[start] = candle(p, p + 0.15, close - 0.2, close);
      series[start + 1] = candle(close + 0.8, close + 1, close - 0.15, close);
      break;
    }
    case "homing-pigeon": {
      const p = trendDown(series, start, 3, rng);
      const c1 = candle(p, p + 0.15, p - 2.4, p - 2.2);
      const mid2 = (c1.open + c1.close) / 2;
      series[start] = c1;
      series[start + 1] = candle(mid2 + 0.35, mid2 + 0.45, mid2 - 0.35, mid2 - 0.25);
      break;
    }
    case "kicking-bullish": {
      const p = trendDown(series, start, 2, rng);
      series[start] = candle(p, p, p - 2.2, p - 2.2);
      const o2 = p - 2.2 + 1;
      series[start + 1] = candle(o2, o2 + 2.4, o2, o2 + 2.4);
      break;
    }
    case "kicking-bearish": {
      const p = trendUp(series, start, 2, rng);
      series[start] = candle(p, p + 2.2, p, p + 2.2);
      const o2 = p + 2.2 - 1;
      series[start + 1] = candle(o2, o2, o2 - 2.4, o2 - 2.4);
      break;
    }
    case "two-crows": {
      const p = trendUp(series, start, 3, rng);
      const c1 = candle(p, p + 2.2, p - 0.1, p + 2);
      const c2 = candle(c1.high + 0.4, c1.high + 0.7, c1.close + 0.2, c1.close + 0.35);
      const c3 = candle(c2.open + 0.3, c2.open + 0.4, c1.open + 0.4, c1.open + 0.6);
      series[start] = c1;
      series[start + 1] = c2;
      series[start + 2] = c3;
      break;
    }
    case "upside-gap-two-crows": {
      const p = trendUp(series, start, 3, rng);
      const c1 = candle(p, p + 2, p - 0.1, p + 1.8);
      const c2 = candle(c1.high + 0.5, c1.high + 0.8, c1.high + 0.2, c1.high + 0.3);
      const c3 = candle(c2.close - 0.1, c2.high + 0.1, c2.open - 0.9, c2.open - 0.7);
      series[start] = c1;
      series[start + 1] = c2;
      series[start + 2] = c3;
      break;
    }
    case "tri-star-bullish": {
      const p = trendDown(series, start, 3, rng);
      series[start] = candle(p, p + 0.5, p - 0.5, p + 0.02);
      series[start + 1] = candle(p - 0.8, p - 0.4, p - 1.2, p - 0.78);
      series[start + 2] = candle(p - 0.2, p + 0.4, p - 0.6, p - 0.18);
      break;
    }
    case "tri-star-bearish": {
      const p = trendUp(series, start, 3, rng);
      series[start] = candle(p, p + 0.5, p - 0.5, p - 0.02);
      series[start + 1] = candle(p + 0.8, p + 1.2, p + 0.4, p + 0.82);
      series[start + 2] = candle(p + 0.2, p + 0.6, p - 0.2, p + 0.22);
      break;
    }
    case "stick-sandwich": {
      const p = trendDown(series, start, 3, rng);
      const close = p - 1.5;
      series[start] = candle(p, p + 0.1, close - 0.2, close);
      series[start + 1] = candle(close - 0.2, close + 1.4, close - 0.4, close + 1.2);
      series[start + 2] = candle(close + 1, close + 1.1, close - 0.15, close);
      break;
    }
    case "on-neck": {
      const p = trendDown(series, start, 3, rng);
      const c1 = candle(p, p + 0.15, p - 2.2, p - 2);
      series[start] = c1;
      series[start + 1] = candle(c1.low - 0.5, c1.low + 0.15, c1.low - 0.6, c1.low + 0.05);
      break;
    }
    case "in-neck": {
      const p = trendDown(series, start, 3, rng);
      const c1 = candle(p, p + 0.15, p - 2.2, p - 2);
      series[start] = c1;
      series[start + 1] = candle(c1.close - 0.6, c1.close + 0.35, c1.close - 0.7, c1.close + 0.25);
      break;
    }
    case "thrusting": {
      const p = trendDown(series, start, 3, rng);
      const c1 = candle(p, p + 0.15, p - 2.4, p - 2.2);
      const close2 = c1.close + (c1.open - c1.close) * 0.35;
      series[start] = c1;
      series[start + 1] = candle(c1.close - 0.5, close2 + 0.15, c1.close - 0.6, close2);
      break;
    }
    case "upside-tasuki-gap": {
      let p = trendUp(series, start, 2, rng);
      const c1 = candle(p, p + 1.2, p - 0.1, p + 1.1);
      const c2 = candle(c1.high + 0.5, c1.high + 1.5, c1.high + 0.4, c1.high + 1.3);
      const c3 = candle(c2.close - 0.1, c2.close + 0.1, c1.high + 0.15, c1.high + 0.35);
      series[start] = c1;
      series[start + 1] = c2;
      series[start + 2] = c3;
      break;
    }
    case "downside-tasuki-gap": {
      let p = trendDown(series, start, 2, rng);
      const c1 = candle(p, p + 0.1, p - 1.2, p - 1.1);
      const c2 = candle(c1.low - 0.5, c1.low - 0.4, c1.low - 1.5, c1.low - 1.3);
      const c3 = candle(c2.close + 0.1, c1.low - 0.15, c2.close - 0.1, c1.low - 0.35);
      series[start] = c1;
      series[start + 1] = c2;
      series[start + 2] = c3;
      break;
    }
    case "advance-block": {
      let p = trendUp(series, start, 2, rng);
      series[start] = candle(p, p + 1.8, p - 0.1, p + 1.7);
      series[start + 1] = candle(p + 1.5, p + 2.6, p + 1.4, p + 2.2);
      series[start + 2] = candle(p + 2.1, p + 3.2, p + 2, p + 2.35);
      break;
    }
    case "deliberation": {
      let p = trendUp(series, start, 2, rng);
      series[start] = candle(p, p + 1.8, p - 0.1, p + 1.7);
      series[start + 1] = candle(p + 1.6, p + 3.3, p + 1.5, p + 3.2);
      const star = p + 3.5;
      series[start + 2] = candle(star, star + 0.4, star - 0.3, star + 0.1);
      break;
    }
    case "mat-hold": {
      let p = trendUp(series, start, 2, rng);
      const bigOpen = p;
      const bigClose = p + 3;
      series[start] = candle(bigOpen, bigClose + 0.15, bigOpen - 0.1, bigClose);
      series[start + 1] = candle(bigClose + 0.3, bigClose + 1, bigClose + 0.2, bigClose + 0.9);
      let cur = bigClose + 0.8;
      for (let i = 2; i <= 3; i++) {
        const open = cur;
        const close = open - 0.45;
        series[start + i] = candle(open, open + 0.1, close - 0.1, close);
        cur = close;
      }
      series[start + 4] = candle(cur + 0.1, bigClose + 1.5, cur, bigClose + 1.4);
      break;
    }
    case "three-line-strike-bullish": {
      let p = trendDown(series, start, 1, rng);
      for (let i = 0; i < 3; i++) {
        const open = p;
        const close = open - 1;
        series[start + i] = candle(open, open + 0.1, close - 0.1, close);
        p = close;
      }
      const firstOpen = series[start].open;
      series[start + 3] = candle(p - 0.2, firstOpen + 0.3, p - 0.3, firstOpen + 0.2);
      break;
    }
    case "three-line-strike-bearish": {
      let p = trendUp(series, start, 1, rng);
      for (let i = 0; i < 3; i++) {
        const open = p;
        const close = open + 1;
        series[start + i] = candle(open, close + 0.1, open - 0.1, close);
        p = close;
      }
      const firstOpen = series[start].open;
      series[start + 3] = candle(p + 0.2, p + 0.3, firstOpen - 0.3, firstOpen - 0.2);
      break;
    }
    case "breakaway-bullish": {
      let p = trendDown(series, start, 2, rng);
      const c1 = candle(p, p + 0.1, p - 2, p - 1.9);
      series[start] = c1;
      series[start + 1] = candle(c1.low - 0.6, c1.low - 0.5, c1.low - 1.4, c1.low - 1.3);
      series[start + 2] = candle(c1.low - 1.2, c1.low - 1, c1.low - 1.7, c1.low - 1.5);
      series[start + 3] = candle(c1.low - 1.4, c1.low - 0.9, c1.low - 1.6, c1.low - 1.1);
      series[start + 4] = candle(c1.low - 1, c1.open - 0.2, c1.low - 1.2, c1.open - 0.4);
      break;
    }
    case "breakaway-bearish": {
      let p = trendUp(series, start, 2, rng);
      const c1 = candle(p, p + 2, p - 0.1, p + 1.9);
      series[start] = c1;
      series[start + 1] = candle(c1.high + 0.6, c1.high + 1.4, c1.high + 0.5, c1.high + 1.3);
      series[start + 2] = candle(c1.high + 1.2, c1.high + 1.7, c1.high + 1, c1.high + 1.5);
      series[start + 3] = candle(c1.high + 1.4, c1.high + 1.6, c1.high + 0.9, c1.high + 1.1);
      series[start + 4] = candle(c1.high + 1, c1.high + 1.2, c1.open + 0.2, c1.open + 0.4);
      break;
    }
    case "break-low-rally": {
      let p = trendDown(series, start, 4, rng);
      const support = p;
      for (let i = 0; i < 4; i++) {
        const open = support + randBetween(rng, 0.2, 0.8);
        const close = support + randBetween(rng, 0.1, 0.6);
        series[start + i] = candle(open, Math.max(open, close) + 0.3, support - 0.08, close);
      }
      series[start + 4] = candle(support + 0.3, support + 0.9, support - 1.5, support + 0.55);
      break;
    }
    case "break-high-fall": {
      let p = trendUp(series, start, 4, rng);
      const resist = p;
      for (let i = 0; i < 4; i++) {
        const open = resist - randBetween(rng, 0.2, 0.8);
        const close = resist - randBetween(rng, 0.1, 0.6);
        series[start + i] = candle(open, resist + 0.08, Math.min(open, close) - 0.3, close);
      }
      series[start + 4] = candle(resist - 0.3, resist + 1.5, resist - 0.9, resist - 0.55);
      break;
    }
    default:
      break;
  }
  let last = series[end].close;
  for (let i = end + 1; i < Math.min(n, end + 3); i++) {
    const open = last;
    const close = open + randBetween(rng, -0.6, 0.6);
    series[i] = candle(open, Math.max(open, close) + 0.3, Math.min(open, close) - 0.3, close);
    last = close;
  }
  return { series, start, end };
}
function toChartCandles(series, startDate = "2024-01-01") {
  const base = new Date(startDate);
  return series.map((c, i) => {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return {
      time: `${yyyy}-${mm}-${dd}`,
      open: c.open,
      high: c.high,
      low: c.low,
      close: c.close
    };
  });
}
function buildPatternDemo(patternId, seed, length) {
  var _a, _b;
  const bars = (_b = (_a = getPatternById(patternId)) == null ? void 0 : _a.bars) != null ? _b : 1;
  const len = length != null ? length : Math.max(40, bars + 24);
  const base = generateBaseSeries(seed, len, 100);
  const at = randInt(createRng(seed + 9), 10, Math.max(10, len - bars - 4));
  return embedPattern(base, patternId, at, seed);
}
function createIdentifySeries(patternId, seed, length) {
  var _a, _b;
  const bars = (_b = (_a = getPatternById(patternId)) == null ? void 0 : _a.bars) != null ? _b : 1;
  const len = length != null ? length : Math.max(36, bars + 20);
  const base = generateBaseSeries(seed, len, randBetween(createRng(seed), 80, 140));
  const at = randInt(createRng(seed + 3), 8, Math.max(8, len - bars - 4));
  return embedPattern(base, patternId, at, seed);
}

// src/lib/kline/detect.ts
function body(c) {
  return Math.abs(c.close - c.open);
}
function range(c) {
  return Math.max(c.high - c.low, 1e-9);
}
function upperWick(c) {
  return c.high - Math.max(c.open, c.close);
}
function lowerWick(c) {
  return Math.min(c.open, c.close) - c.low;
}
function isBull(c) {
  return c.close > c.open;
}
function isBear(c) {
  return c.close < c.open;
}
function mid(c) {
  return (c.open + c.close) / 2;
}
function isDojiLike(c, ar) {
  return body(c) <= range(c) * 0.12 && range(c) >= ar * 0.5;
}
function bodyInside(inner, outer) {
  const oTop = Math.max(outer.open, outer.close);
  const oBot = Math.min(outer.open, outer.close);
  const iTop = Math.max(inner.open, inner.close);
  const iBot = Math.min(inner.open, inner.close);
  return iTop <= oTop && iBot >= oBot && body(inner) < body(outer) * 0.65;
}
function bodyTop(c) {
  return Math.max(c.open, c.close);
}
function bodyBot(c) {
  return Math.min(c.open, c.close);
}
function sma(series, end, n) {
  if (end + 1 < n) return null;
  let sum = 0;
  for (let i = end - n + 1; i <= end; i++) sum += series[i].close;
  return sum / n;
}
function avgVol(series, end, n) {
  const start = Math.max(0, end - n + 1);
  let sum = 0;
  let count = 0;
  for (let i = start; i <= end; i++) {
    const v = series[i].volume;
    if (v && v > 0) {
      sum += v;
      count += 1;
    }
  }
  return count ? sum / count : 0;
}
function avgRange(series, end, n = 10) {
  const start = Math.max(0, end - n + 1);
  let sum = 0;
  let count = 0;
  for (let i = start; i <= end; i++) {
    sum += range(series[i]);
    count += 1;
  }
  return sum / Math.max(count, 1);
}
function trendScore(series, end, lookback = 8) {
  const start = Math.max(0, end - lookback);
  if (end <= start) return 0;
  return series[end].close - series[start].close;
}
function push(out, series, patternId, patternName, side, start, end, message) {
  const c = series[end];
  out.push({
    patternId,
    patternName,
    side,
    start,
    end,
    time: c.time,
    price: c.close,
    message,
    needsConfirm: false,
    confirmed: true,
    confluence: []
  });
}
function detectAt(series, i) {
  const out = [];
  if (i < 1) return out;
  const c = series[i];
  const p = series[i - 1];
  const ar = avgRange(series, i);
  const trend = trendScore(series, i - 1);
  const b = body(c);
  const r = range(c);
  if (isDojiLike(c, ar)) {
    let nearbyDoji = 0;
    for (let j = Math.max(0, i - 8); j < i; j++) {
      if (isDojiLike(series[j], ar)) nearbyDoji += 1;
    }
    const crowded = nearbyDoji >= 3;
    const uw = upperWick(c);
    const lw = lowerWick(c);
    if (uw >= r * 0.62 && lw <= r * 0.12 && trend > ar) {
      push(out, series, "gravestone-doji", "\u5893\u7891\u5341\u5B57\u7EBF", "sell", i, i, "\u9AD8\u4F4D\u5893\u7891\u5341\u5B57\uFF0C\u51B2\u9AD8\u56DE\u5410\uFF0C\u5173\u6CE8\u5356\u70B9");
    } else if (lw >= r * 0.62 && uw <= r * 0.12 && trend < -ar) {
      push(out, series, "dragonfly-doji", "\u873B\u8713\u5341\u5B57\u7EBF", "buy", i, i, "\u4F4E\u4F4D\u873B\u8713\u5341\u5B57\uFF0C\u4E0B\u63A2\u88AB\u62C9\u56DE\uFF0C\u987B\u770B\u6B21\u65E5\u786E\u8BA4");
    } else if (uw >= r * 0.28 && lw >= r * 0.28 && r >= ar * 0.9) {
      const side = trend > ar ? "sell" : trend < -ar ? "buy" : "neutral";
      push(
        out,
        series,
        "long-legged-doji",
        "\u957F\u817F\u5341\u5B57\u7EBF",
        side,
        i,
        i,
        "\u957F\u817F\u5341\u5B57\uFF08\u9EC4\u5305\u8F66\u592B\uFF09\uFF0C\u591A\u7A7A\u5267\u70C8\u62C9\u952F\uFF0C\u89C2\u5BDF\u53D8\u76D8"
      );
    } else if (!crowded && trend > ar * 2) {
      const afterWhite = isBull(p) && body(p) >= ar * 0.85;
      push(
        out,
        series,
        "doji",
        "\u5317\u65B9\u5341\u5B57\u7EBF",
        "sell",
        i,
        i,
        afterWhite ? "\u957F\u9633\u4E4B\u540E\u51FA\u73B0\u5341\u5B57\u7EBF\uFF0C\u9876\u90E8\u8B66\u544A\u66F4\u5F3A\uFF0C\u987B\u770B\u6B21\u65E5" : "\u4E0A\u6DA8\u4E2D\u7684\u5341\u5B57\u7EBF\uFF08\u5317\u65B9\u5341\u5B57\u7EBF\uFF09\uFF0C\u4E70\u76D8\u72B9\u8C6B\uFF0C\u987B\u770B\u6B21\u65E5"
      );
    } else if (!crowded && trend < -ar * 2) {
      push(out, series, "doji", "\u5341\u5B57\u7EBF", "neutral", i, i, "\u4E0B\u8DCC\u4E2D\u5341\u5B57\u7EBF\u4F5C\u5E95\u90E8\u4FE1\u53F7\u8F83\u5F31\uFF0C\u987B\u7B49\u6B21\u65E5\u786E\u8BA4");
    }
  }
  const lowerOk = lowerWick(c) >= b * 2 || lowerWick(c) >= b * 1.6 && upperWick(c) <= r * 0.08 && b <= r * 0.35;
  const umbrella = lowerOk && upperWick(c) <= b * 0.45 && b >= ar * 0.12 && b <= r * 0.45 && r >= ar * 0.7 && bodyTop(c) >= c.low + r * 0.62;
  if (umbrella) {
    if (trend < -ar * 1.5) {
      push(out, series, "hammer", "\u9524\u5B50\u7EBF", "buy", i, i, "\u4E0B\u8DCC\u540E\u4F1E\u5F62\u7EBF\uFF08\u9524\u5B50\uFF09\uFF0C\u4E0B\u5F71\u663E\u793A\u627F\u63A5\uFF0C\u987B\u770B\u6B21\u65E5\u786E\u8BA4");
    } else if (trend > ar * 1.5) {
      push(out, series, "hanging-man", "\u4E0A\u540A\u7EBF", "sell", i, i, "\u4E0A\u6DA8\u540E\u4F1E\u5F62\u7EBF\uFF08\u4E0A\u540A\uFF09\uFF0C\u5C3C\u68EE\u5F3A\u8C03\u987B\u7B49\u6B21\u65E5\u786E\u8BA4");
    }
  }
  const starWick = upperWick(c) >= b * 2 && lowerWick(c) <= b * 0.4 && b >= ar * 0.12 && b <= r * 0.45 && r >= ar * 0.7 && bodyBot(c) <= c.high - r * 0.62;
  if (starWick) {
    if (trend > ar * 1.5) {
      push(out, series, "shooting-star", "\u6D41\u661F\u5F62\u6001", "sell", i, i, "\u4E0A\u6DA8\u540E\u6D41\u661F\u5F62\u6001\uFF0C\u4E0A\u65B9\u53D7\u963B\uFF0C\u6B21\u65E5\u8D70\u5F31\u66F4\u6709\u6548");
    } else if (trend < -ar * 1.5) {
      push(out, series, "inverted-hammer", "\u5012\u9524\u5B50\u5F62\u6001", "buy", i, i, "\u4E0B\u8DCC\u540E\u5012\u9524\u5B50\uFF0C\u5C3C\u68EE\u5F3A\u8C03\u5FC5\u987B\u6B21\u65E5\u786E\u8BA4");
    }
  }
  if (isBull(c) && lowerWick(c) <= r * 0.05 && b >= ar * 0.8 && trend < -ar) {
    push(out, series, "bullish-belt-hold", "\u770B\u6DA8\u6349\u8170\u5E26\u7EBF", "buy", i, i, "\u4F4E\u5F00\u540E\u5F3A\u52BF\u6536\u9633\uFF0C\u6349\u8170\u5E26\u7EBF\u4E70\u70B9");
  }
  if (isBear(c) && upperWick(c) <= r * 0.05 && b >= ar * 0.8 && trend > ar) {
    push(out, series, "bearish-belt-hold", "\u770B\u8DCC\u6349\u8170\u5E26\u7EBF", "sell", i, i, "\u9AD8\u5F00\u540E\u5F3A\u52BF\u6536\u9634\uFF0C\u6349\u8170\u5E26\u7EBF\u5356\u70B9");
  }
  const engulfBull = isBear(p) && isBull(c) && !isDojiLike(p, ar) && body(p) >= ar * 0.35 && c.open <= p.close && c.close >= p.open && body(c) > body(p) * 1.05 && trend < -ar * 0.4;
  const engulfBear = isBull(p) && isBear(c) && !isDojiLike(p, ar) && body(p) >= ar * 0.35 && c.open >= p.close && c.close <= p.open && body(c) > body(p) * 1.05 && trend > ar * 0.4;
  if (engulfBull) {
    push(out, series, "bullish-engulfing", "\u770B\u6DA8\u541E\u6CA1\u5F62\u6001", "buy", i - 1, i, "\u9633\u7EBF\u62B1\u4F4F\u524D\u9634\uFF0C\u53CD\u8F6C\u4E70\u70B9\u4FE1\u53F7");
  }
  if (engulfBear) {
    push(out, series, "bearish-engulfing", "\u770B\u8DCC\u541E\u6CA1\u5F62\u6001", "sell", i - 1, i, "\u9634\u7EBF\u62B1\u4F4F\u524D\u9633\uFF0C\u53CD\u8F6C\u5356\u70B9\u4FE1\u53F7");
  }
  if (!engulfBull && !engulfBear && body(p) >= ar * 0.7 && bodyInside(c, p)) {
    const cross = isDojiLike(c, ar);
    if (isBear(p) && trend < -ar) {
      push(
        out,
        series,
        cross ? "bullish-harami-cross" : "bullish-harami",
        cross ? "\u770B\u6DA8\u5341\u5B57\u5B55\u7EBF\u5F62\u6001" : "\u770B\u6DA8\u5B55\u7EBF\u5F62\u6001",
        "buy",
        i - 1,
        i,
        cross ? "\u5927\u9634\u540E\u5341\u5B57\u5B55\u7EBF\uFF0C\u7A7A\u5934\u52A8\u80FD\u663E\u8457\u51CF\u5F31" : "\u5927\u9634\u540E\u5B55\u7EBF\uFF0C\u4E0B\u8DCC\u52A8\u80FD\u51CF\u5F31\uFF0C\u5173\u6CE8\u4E70\u70B9"
      );
    } else if (isBull(p) && trend > ar) {
      push(
        out,
        series,
        cross ? "bearish-harami-cross" : "bearish-harami",
        cross ? "\u770B\u8DCC\u5341\u5B57\u5B55\u7EBF\u5F62\u6001" : "\u770B\u8DCC\u5B55\u7EBF\u5F62\u6001",
        "sell",
        i - 1,
        i,
        cross ? "\u5927\u9633\u540E\u5341\u5B57\u5B55\u7EBF\uFF0C\u4E70\u76D8\u4FE1\u5FC3\u52A8\u6447" : "\u5927\u9633\u540E\u5B55\u7EBF\uFF0C\u4E0A\u6DA8\u52A8\u80FD\u51CF\u5F31\uFF0C\u5173\u6CE8\u5356\u70B9"
      );
    }
  }
  const piercing = isBear(p) && isBull(c) && c.open < p.low && c.close > mid(p) && c.close < p.open;
  const darkCloud = isBull(p) && isBear(c) && c.open > p.high && c.close < mid(p) && c.close > p.open;
  if (piercing) {
    push(out, series, "piercing-line", "\u523A\u900F\u5F62\u6001", "buy", i - 1, i, "\u4F4E\u5F00\u540E\u6536\u590D\u524D\u9634\u4E00\u534A\u4EE5\u4E0A\uFF0C\u4E70\u70B9\u4FE1\u53F7");
  }
  if (darkCloud) {
    push(out, series, "dark-cloud-cover", "\u4E4C\u4E91\u76D6\u9876\u5F62\u6001", "sell", i - 1, i, "\u9AD8\u5F00\u540E\u8DCC\u7834\u524D\u9633\u4E00\u534A\uFF0C\u5356\u70B9\u4FE1\u53F7");
  }
  const meet = Math.abs(c.close - p.close) <= ar * 0.1;
  if (!piercing && isBear(p) && isBull(c) && c.open < p.close && meet && trend < -ar) {
    push(out, series, "bullish-counterattack", "\u770B\u6DA8\u53CD\u51FB\u7EBF\u5F62\u6001", "buy", i - 1, i, "\u4F4E\u5F00\u6536\u81F3\u524D\u6536\u9644\u8FD1\uFF08\u7EA6\u4F1A\u7EBF\uFF09\uFF0C\u5173\u6CE8\u4E70\u70B9");
  }
  if (!darkCloud && isBull(p) && isBear(c) && c.open > p.close && meet && trend > ar) {
    push(out, series, "bearish-counterattack", "\u770B\u8DCC\u53CD\u51FB\u7EBF\u5F62\u6001", "sell", i - 1, i, "\u9AD8\u5F00\u6536\u81F3\u524D\u6536\u9644\u8FD1\uFF08\u7EA6\u4F1A\u7EBF\uFF09\uFF0C\u5173\u6CE8\u5356\u70B9");
  }
  if (Math.abs(p.high - c.high) <= ar * 0.08 && trend > ar && isBear(c)) {
    push(out, series, "tweezers-top", "\u5E73\u5934\u9876\u90E8\u5F62\u6001", "sell", i - 1, i, "\u8FDE\u7EED\u76F8\u8FD1\u9AD8\u70B9\u53D7\u963B\uFF0C\u5E73\u5934\u9876\u90E8\u5173\u6CE8\u5356\u70B9");
  }
  if (Math.abs(p.low - c.low) <= ar * 0.08 && trend < -ar && isBull(c)) {
    push(out, series, "tweezers-bottom", "\u5E73\u5934\u5E95\u90E8\u5F62\u6001", "buy", i - 1, i, "\u8FDE\u7EED\u76F8\u8FD1\u4F4E\u70B9\u83B7\u6491\uFF0C\u5E73\u5934\u5E95\u90E8\u5173\u6CE8\u4E70\u70B9");
  }
  if (i < 2) return out;
  const a = series[i - 2];
  const starSmall = body(p) <= Math.max(body(a), body(c)) * 0.45;
  const starDoji = isDojiLike(p, ar) || body(p) <= range(p) * 0.15;
  const morningGap = bodyTop(p) <= bodyBot(a) + ar * 0.05;
  const eveningGap = bodyBot(p) >= bodyTop(a) - ar * 0.05;
  if (isBear(a) && body(a) >= ar * 0.7 && starSmall && morningGap && isBull(c) && c.close > mid(a) && trend < -ar) {
    if (starDoji) {
      push(out, series, "morning-doji-star", "\u5341\u5B57\u542F\u660E\u661F\u5F62\u6001", "buy", i - 2, i, "\u4E0B\u8DCC\u540E\u5341\u5B57\u542F\u660E\u661F\uFF0C\u7B2C\u4E09\u6839\u5DF2\u5E26\u786E\u8BA4");
    } else {
      push(out, series, "morning-star", "\u542F\u660E\u661F\u5F62\u6001", "buy", i - 2, i, "\u4E0B\u8DCC\u540E\u542F\u660E\u661F\uFF0C\u7B2C\u4E09\u6839\u6DF1\u5165\u7B2C\u4E00\u6839\u5B9E\u4F53");
    }
  }
  if (isBull(a) && body(a) >= ar * 0.7 && starSmall && eveningGap && isBear(c) && c.close < mid(a) && trend > ar) {
    if (starDoji) {
      push(out, series, "evening-doji-star", "\u5341\u5B57\u9EC4\u660F\u661F\u5F62\u6001", "sell", i - 2, i, "\u4E0A\u6DA8\u540E\u5341\u5B57\u9EC4\u660F\u661F\uFF0C\u7B2C\u4E09\u6839\u5DF2\u5E26\u786E\u8BA4");
    } else {
      push(out, series, "evening-star", "\u9EC4\u660F\u661F\u5F62\u6001", "sell", i - 2, i, "\u4E0A\u6DA8\u540E\u9EC4\u660F\u661F\uFF0C\u7B2C\u4E09\u6839\u6DF1\u5165\u7B2C\u4E00\u6839\u5B9E\u4F53");
    }
  }
  if (isDojiLike(a, ar) && isDojiLike(p, ar) && isDojiLike(c, ar)) {
    if (trend < -ar && p.low <= Math.min(a.low, c.low) + ar * 0.05) {
      push(out, series, "tri-star-bullish", "\u770B\u6DA8\u4E09\u661F\u5F62\u6001", "buy", i - 2, i, "\u4E0B\u8DCC\u672B\u7AEF\u4E09\u6839\u5341\u5B57\uFF0C\u7F55\u89C1\u5E95\u90E8\u4E09\u661F");
    } else if (trend > ar && p.high >= Math.max(a.high, c.high) - ar * 0.05) {
      push(out, series, "tri-star-bearish", "\u770B\u8DCC\u4E09\u661F\u5F62\u6001", "sell", i - 2, i, "\u4E0A\u6DA8\u672B\u7AEF\u4E09\u6839\u5341\u5B57\uFF0C\u7F55\u89C1\u9876\u90E8\u4E09\u661F");
    }
  }
  const soldiers = isBull(a) && isBull(p) && isBull(c) && body(a) >= ar * 0.55 && body(p) >= ar * 0.55 && body(c) >= ar * 0.55 && a.close < p.close && p.close < c.close && p.open >= Math.min(a.open, a.close) && p.open <= Math.max(a.open, a.close) && c.open >= Math.min(p.open, p.close) && c.open <= Math.max(p.open, p.close);
  const crows = isBear(a) && isBear(p) && isBear(c) && body(a) >= ar * 0.55 && body(p) >= ar * 0.55 && body(c) >= ar * 0.55 && a.close > p.close && p.close > c.close;
  if (soldiers && trend < ar) {
    push(out, series, "three-white-soldiers", "\u767D\u8272\u4E09\u5175\u633A\u8FDB\u5F62\u6001", "buy", i - 2, i, "\u8FDE\u7EED\u4E09\u6839\u575A\u633A\u9633\u7EBF\uFF0C\u53CD\u8F6C\u4E70\u70B9");
  }
  if (crows && trend > -ar) {
    push(out, series, "three-black-crows", "\u4E09\u53EA\u4E4C\u9E26", "sell", i - 2, i, "\u8FDE\u7EED\u4E09\u6839\u9634\u7EBF\u538B\u5236\uFF0C\u53CD\u8F6C\u5356\u70B9");
  }
  if (isBull(a) && body(a) >= ar * 0.7 && isBear(p) && isBear(c) && p.low > a.high && c.open >= p.open && c.close <= p.close && c.close > a.close && trend > ar) {
    push(out, series, "upside-gap-two-crows", "\u5411\u4E0A\u8DF3\u7A7A\u4E24\u53EA\u4E4C\u9E26", "sell", i - 2, i, "\u9AD8\u4F4D\u8DF3\u7A7A\u53CC\u9E26\uFF0C\u4E70\u76D8\u8DDF\u8FDB\u4E0D\u8DB3");
  }
  const gapUp = c.low - p.high;
  const gapDown = p.low - c.high;
  const minGap = Math.max(ar * 0.18, Math.abs(p.close) * 3e-3);
  if (gapUp >= minGap && trend > ar * 0.4) {
    push(out, series, "rising-window", "\u5411\u4E0A\u7A97\u53E3", "buy", i - 1, i, "\u5411\u4E0A\u8DF3\u7A7A\u7A97\u53E3\uFF0C\u672A\u56DE\u8865\u524D\u591A\u89C6\u4E3A\u652F\u6491");
  }
  if (gapDown >= minGap && trend < -ar * 0.4) {
    push(out, series, "falling-window", "\u5411\u4E0B\u7A97\u53E3", "sell", i - 1, i, "\u5411\u4E0B\u8DF3\u7A7A\u7A97\u53E3\uFF0C\u672A\u56DE\u8865\u524D\u591A\u89C6\u4E3A\u538B\u529B");
  }
  const gapAP = p.low - a.high;
  const gapAPdn = a.low - p.high;
  const sideBySide = Math.abs(body(c) - body(p)) <= Math.max(body(p), ar) * 0.45 && Math.abs(c.open - p.open) <= ar * 0.35;
  if (isBull(a) && gapAP >= minGap && sideBySide && Math.min(p.low, c.low) > a.high && trend > ar * 0.3) {
    push(
      out,
      series,
      "upside-gap-side-by-side",
      "\u5411\u4E0A\u8DF3\u7A7A\u5E76\u5217\u9634\u9633\u7EBF\u5F62\u6001",
      "buy",
      i - 2,
      i,
      "\u8DF3\u7A7A\u540E\u5E76\u5217\u6574\u7406\u4E14\u7F3A\u53E3\u4ECD\u5728\uFF0C\u4E0A\u5347\u6301\u7EED"
    );
  }
  if (isBear(a) && gapAPdn >= minGap && sideBySide && Math.max(p.high, c.high) < a.low && trend < -ar * 0.3) {
    push(
      out,
      series,
      "downside-gap-side-by-side",
      "\u5411\u4E0B\u8DF3\u7A7A\u5E76\u5217\u9634\u9633\u7EBF\u5F62\u6001",
      "sell",
      i - 2,
      i,
      "\u8DF3\u7A7A\u540E\u5E76\u5217\u6574\u7406\u4E14\u7F3A\u53E3\u4ECD\u5728\uFF0C\u4E0B\u964D\u6301\u7EED"
    );
  }
  const sameOpen = Math.abs(c.open - p.open) <= Math.max(ar * 0.08, Math.abs(p.open) * 2e-3);
  if (sameOpen && isBear(p) && isBull(c) && body(c) >= ar * 0.7 && trend > ar * 0.5) {
    push(out, series, "bullish-separating-lines", "\u770B\u6DA8\u5206\u624B\u7EBF\u5F62\u6001", "buy", i - 1, i, "\u540C\u5F00\u76D8\u5206\u624B\u540E\u6536\u9633\uFF0C\u4E0A\u5347\u6301\u7EED");
  }
  if (sameOpen && isBull(p) && isBear(c) && body(c) >= ar * 0.7 && trend < -ar * 0.5) {
    push(out, series, "bearish-separating-lines", "\u770B\u8DCC\u5206\u624B\u7EBF\u5F62\u6001", "sell", i - 1, i, "\u540C\u5F00\u76D8\u5206\u624B\u540E\u6536\u9634\uFF0C\u4E0B\u964D\u6301\u7EED");
  }
  if (i >= 4) {
    const first = series[i - 4];
    const m1 = series[i - 3];
    const m2 = series[i - 2];
    const m3 = series[i - 1];
    const last = c;
    const mids = [m1, m2, m3];
    const small = (bar) => body(bar) <= body(first) * 0.55 && range(bar) <= range(first) * 0.9;
    if (isBull(first) && body(first) >= ar * 0.9 && isBull(last) && body(last) >= ar * 0.8 && last.close > first.close && mids.every(small) && mids.every((bar) => bar.high <= first.high + ar * 0.05 && bar.low >= first.low - ar * 0.05) && mids.some((bar) => isBear(bar) || bar.close < first.close)) {
      push(
        out,
        series,
        "rising-three-methods",
        "\u4E0A\u5347\u4E09\u6CD5\u5F62\u6001",
        "buy",
        i - 4,
        i,
        "\u5927\u9633\u540E\u4E09\u6839\u5C0F\u5B9E\u4F53\u56DE\u8E29\u672A\u7834\uFF0C\u518D\u9633\u7A81\u7834\uFF0C\u4E0A\u5347\u6301\u7EED"
      );
    }
    if (isBear(first) && body(first) >= ar * 0.9 && isBear(last) && body(last) >= ar * 0.8 && last.close < first.close && mids.every(small) && mids.every((bar) => bar.high <= first.high + ar * 0.05 && bar.low >= first.low - ar * 0.05) && mids.some((bar) => isBull(bar) || bar.close > first.close)) {
      push(
        out,
        series,
        "falling-three-methods",
        "\u4E0B\u964D\u4E09\u6CD5\u5F62\u6001",
        "sell",
        i - 4,
        i,
        "\u5927\u9634\u540E\u4E09\u6839\u5C0F\u5B9E\u4F53\u53CD\u5F39\u672A\u7834\uFF0C\u518D\u9634\u7A81\u7834\uFF0C\u4E0B\u964D\u6301\u7EED"
      );
    }
  }
  if (i >= 8) {
    const from = Math.max(0, i - 12);
    let priorLow = Infinity;
    let priorHigh = -Infinity;
    for (let j = from; j < i; j++) {
      priorLow = Math.min(priorLow, series[j].low);
      priorHigh = Math.max(priorHigh, series[j].high);
    }
    const pierce = Math.max(ar * 0.08, Math.abs(c.close) * 2e-3);
    if (Number.isFinite(priorLow) && c.low < priorLow - pierce && c.close > priorLow && isBull(c) && trend < ar * 0.2) {
      push(out, series, "break-low-rally", "\u7834\u4F4E\u53CD\u6DA8\u5F62\u6001", "buy", i, i, "\u523A\u7834\u8FD1\u671F\u4F4E\u70B9\u540E\u6536\u56DE\uFF0C\u5047\u8DCC\u7834\u5173\u6CE8\u4E70\u70B9");
    }
    if (Number.isFinite(priorHigh) && c.high > priorHigh + pierce && c.close < priorHigh && isBear(c) && trend > -ar * 0.2) {
      push(out, series, "break-high-fall", "\u7834\u9AD8\u53CD\u8DCC\u5F62\u6001", "sell", i, i, "\u523A\u7834\u8FD1\u671F\u9AD8\u70B9\u540E\u6536\u56DE\uFF0C\u5047\u7A81\u7834\u5173\u6CE8\u5356\u70B9");
    }
  }
  return out;
}
function scanPatternSignals(series, lookback = 20) {
  if (series.length < 3) return [];
  const from = Math.max(2, series.length - lookback);
  const map = /* @__PURE__ */ new Map();
  for (let i = from; i < series.length; i++) {
    for (const sig of detectAt(series, i)) {
      const key = `${sig.patternId}-${sig.time}-${sig.side}`;
      map.set(key, sig);
    }
  }
  const list = [...map.values()].map((sig) => enrichSignal(series, sig));
  return list.sort((a, b) => {
    const score = (s) => (s.confirmed === true ? 8 : s.confirmed === null ? 3 : 0) + s.confluence.length * 2 + (s.end - s.start);
    if (b.end !== a.end) return b.end - a.end;
    return score(b) - score(a);
  });
}
function enrichSignal(series, sig) {
  var _a;
  const needsConfirm = NISON_NEEDS_CONFIRM.has(sig.patternId);
  const bar = series[sig.end];
  const next = series[sig.end + 1];
  let confirmed = true;
  if (needsConfirm) {
    if (!next) confirmed = null;
    else if (sig.patternId === "hanging-man") {
      confirmed = next.open < Math.min(bar.open, bar.close) || isBear(next) && next.close < bar.close;
    } else if (sig.patternId === "hammer" || sig.patternId === "inverted-hammer" || sig.patternId === "dragonfly-doji") {
      confirmed = isBull(next) && next.close > bar.close;
    } else if (sig.side === "buy") confirmed = next.close > bar.close || isBull(next);
    else if (sig.side === "sell") confirmed = next.close < bar.close || isBear(next);
    else confirmed = null;
  }
  const confluence = [];
  const vol = (_a = bar.volume) != null ? _a : 0;
  const volAvg = avgVol(series, sig.end - 1, 10);
  if (vol > 0 && volAvg > 0 && vol >= volAvg * 1.3) confluence.push("\u653E\u91CF");
  const ma20 = sma(series, sig.end, 20);
  if (ma20 != null) {
    if (sig.side === "buy" && bar.close >= ma20) confluence.push("\u7AD9\u4E0A20\u65E5\u7EBF");
    if (sig.side === "sell" && bar.close <= ma20) confluence.push("\u8DCC\u783420\u65E5\u7EBF");
  }
  const extra = [
    needsConfirm ? confirmed === true ? "\u6B21\u65E5\u5DF2\u786E\u8BA4" : confirmed === false ? "\u6B21\u65E5\u672A\u786E\u8BA4" : "\u5F85\u6B21\u65E5\u786E\u8BA4" : "",
    ...confluence
  ].filter(Boolean);
  const message = extra.length ? `${sig.message}\uFF08${extra.join(" \xB7 ")}\uFF09` : sig.message;
  return { ...sig, needsConfirm, confirmed, confluence, message };
}
function confirmLabel(sig) {
  if (!sig.needsConfirm) return "\u5F62\u6001\u5185\u5B8C\u6210";
  if (sig.confirmed === true) return "\u6B21\u65E5\u5DF2\u786E\u8BA4";
  if (sig.confirmed === false) return "\u6B21\u65E5\u672A\u786E\u8BA4";
  return "\u5F85\u6B21\u65E5\u786E\u8BA4";
}
function sideLabel(side) {
  if (side === "buy") return "\u4E70\u70B9";
  if (side === "sell") return "\u5356\u70B9";
  return "\u89C2\u5BDF";
}

// src/lib/kline/questions.ts
function shuffle(arr, rng) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function createIdentifyQuestion(patternId, seed) {
  const pattern = getPatternById(patternId);
  const { series, start, end } = createIdentifySeries(patternId, seed);
  return {
    type: "identify",
    id: `id-${patternId}-${seed}`,
    patternId,
    ohlc: series,
    answer: { start, end },
    explanation: pattern ? `\u6B63\u786E\u7B54\u6848\u662F\u300C${pattern.name}\u300D\u3002${pattern.psychology}` : "\u8BF7\u5BF9\u7167\u5F62\u6001\u8981\u70B9\u518D\u770B\u4E00\u904D\u3002"
  };
}
function createChoiceQuestion(patternId, seed) {
  const pattern = getPatternById(patternId);
  const rng = createRng(seed);
  const { series, start, end } = createIdentifySeries(patternId, seed);
  const others = shuffle(
    patterns.filter((p) => p.id !== patternId),
    rng
  ).slice(0, 3);
  const options = shuffle(
    [{ id: pattern.id, label: pattern.name }, ...others.map((p) => ({ id: p.id, label: p.name }))],
    rng
  );
  return {
    type: "choice",
    id: `ch-${patternId}-${seed}`,
    patternId,
    ohlc: series,
    answer: { start, end },
    options,
    correctOptionId: pattern.id,
    explanation: `\u8FD9\u662F\u300C${pattern.name}\u300D\u3002${pattern.rules[0]}`
  };
}
function createPracticeSession(patternIds, count = 8, seed = Date.now()) {
  const pool = patternIds === "all" ? patterns.map((p) => p.id) : patternIds;
  const rng = createRng(seed);
  const questions = [];
  for (let i = 0; i < count; i++) {
    const pid = pool[randInt(rng, 0, pool.length - 1)];
    questions.push(createIdentifyQuestion(pid, seed + i * 17 + 3));
  }
  return questions;
}
function createQuizSession(patternIds, count, seed) {
  const rng = createRng(seed);
  const questions = [];
  for (let i = 0; i < count; i++) {
    const pid = patternIds[randInt(rng, 0, patternIds.length - 1)];
    if (i % 3 === 2) {
      questions.push(createChoiceQuestion(pid, seed + i * 31));
    } else {
      questions.push(createIdentifyQuestion(pid, seed + i * 31));
    }
  }
  return questions;
}
function rangesOverlap(a, b) {
  return !(a.end < b.start || b.end < a.start);
}
function judgeIdentify(selected, answer) {
  if (!selected) return false;
  const selStart = Math.min(selected.start, selected.end);
  const selEnd = Math.max(selected.start, selected.end);
  const answerLen = answer.end - answer.start;
  const selLen = selEnd - selStart;
  const cover = selStart <= answer.start && selEnd >= answer.end;
  const tight = selLen <= answerLen + 2;
  const overlapOk = rangesOverlap({ start: selStart, end: selEnd }, answer) && selLen <= Math.max(4, answerLen + 1);
  return cover && tight || selStart === answer.start && selEnd === answer.end || overlapOk;
}
