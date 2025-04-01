# RAG retrieval augmented generation

RAG 既检索增强生成，结合外部知识和 LLM 生成，提升回答质量。

知识库 RAG 24年最火AI应用



成为一个真正的AI助手
- 外部知识  (私有知识库:行程，工作安排，账单，客户需求)
- LLM (prompt)
- COT (思维链)  langchain
  - 空闲时间
  - 个人需求 假如是健身
  - 有没有办卡
  - 教练是否空闲 ？ 发邮件 / 短信(通过调用agent)

- 外部知识库  结合  LLM
  LLM 没有训练后的知识
  coze  上传相关的文件  基于这些知识回答

  知识库 + LLM + 硬件  实现一个AI助手

- RAG
  retrieval augmented generation
  先检索知识库(外部) + augmented (增强) + generation (再生成)





RAG 开发方式
检索增强生成  结合外部知识和 LLM 生成，提升回答质量。
专业chatbot

- fs 读取专业知识库
- 怎么制作 prompt template  （prompt 模板）
