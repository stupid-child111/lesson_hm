#  talk in data 传统方式和Prompt方式的比较

NBA赛季统计投篮数据 设计一个shot表 设计哪些字段

## 数据化
player_id player_name shot_made(投中) shot_score(3points|2points) game_id  球员
team_id  team_name season_1(2023.03-04)球队 event_type(得分类型 Feed Throw罚球/Rebound篮板)。。。
action_type Layup(上篮) Dunk(扣篮) Jump(跳投) Hoot Shot(勾手)Assist(助攻) Fadeway(后仰跳投)。。。

## 赛季投篮
一切皆可数据化，细致的用数字表达主题(shot)
赛季相关、球队相关、队员相关、得分(得分、动作、原因、结果、zone(区域、距离))
position(位置、投篮位置)、left(MIN，SEC)重要性

## AI 如何帮助我们设计数据表呢？ 
- 数据助理
- 吴恩达的`prompt`(`高亮`) 提示词(提问) enginnering  擅于向AI提问
  - 给定一个角色 role
  - 指定明确的任务
  - 约束必须做什么，不做什么
  - 一步步进行，细化任务
- prompt 的过程其实也是 coding 的过程
- 我想要设计一张nba 赛季投篮数据表，请给出相关字段，字段尽可能详细。
-加入你是以为数据库工程师 设定他的角色
  请你帮我设计一张NBA 赛季投篮数据表 shots 指定任务
  数据表需要满足mysql的约束
  请包含赛季、球队、球员、得分(得分与否、投篮动作、得分原因)、投篮位置、球员位置(如SG)、
  比赛时间，距离结束时间(分、秒)
  其他字段不需要给出
  请返回sql,并给出原因