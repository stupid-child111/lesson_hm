import Redis from "ioredis";
import { v4 as uuidv4 } from "uuid";

const redis = new Redis()


//key  value   NOSQL  JSON  非关系型数据库
const initialData = {
    "1702459181837": '{"title":"sunt aut","content":"quia et suscipit suscipit recusandae","updateTime":"2023-12-13T09:19:48.837Z"}',
    "1702459182837": '{"title":"qui est","content":"est rerum tempore vitae sequi sint","updateTime":"2023-12-13T09:19:48.837Z"}',
    "1702459188837": '{"title":"ea molestias","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}'
}

//列表查找
export async function getAllNotes() {
    const data = await redis.hgetall("notes")//redis API
    //叫做 collection             mysql 叫做 table
    if (Object.keys(data).length === 0) {
        //redis  需要数据格式  JSON
        await redis.hset("notes", initialData)
    }

    return await redis.hgetall("notes")

}

//CRUD  增删改查
//如果在同一毫秒内多次调用 addNote 函数，可能会生成相同的 uuid。为了避免这种情况，可以使用更专业的 uuid 生成库，如 uuid 库。
export async function addNote(data) {
    //唯一值
    const uuid = uuidv4();//uuid 库
    // const uuid = Date.now().toString();
    await redis.hset("notes",[uuid],data);
}

export async function getNote(uuid) {
    return JSON.parse(await redis.hget("notes",uuid));
}

export async function delNote(uuid) {
    return redis.hdel("notes",uuid);
}

export async function updateNote(uuid,data) {
    await redis.hset("notes",[uuid],data);
}