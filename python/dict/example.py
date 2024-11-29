def Merge(dict1, dict2):
   # 使用**操作符将字典 dict1 和 dict2 合并成一个新的字典
   # 字典结构运算符
   res = {**dict1, **dict2}
   return res
   #js 对象字面量  py 字典 key:value键值对
dict1 = {'name':'杨过', 'address':'中原'}   
dict2 = {'name':"小龙女", 'address':"古墓派" }   
dict3 = Merge(dict1, dict2)
print(dict3)