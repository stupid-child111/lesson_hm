/**  ODM树ready之后 onLoad晚了  DOMContentLoaded
 * 事件监听
 * 请求...
 * 不出问题 ，最快事件 (比onLoad早)
*/

//常量配置
const MESSAGE_LIMIT = 50;
document.addEventListener('DOMContentLoaded',function(){
    console.log('DOMContentLoaded')
    const backToTopButton = document.getElementById('back-to-top');
    const chatLogElement = document.getElementById('chat-log');
    const conversationListElement = document.getElementById('conversation-list');
    const messageInput = document.getElementById('message');
    const loadingIndicator = document.querySelector('.loading-indicator');
    //scrollTop
    chatLogElement.addEventListener('scroll', () => {
        if(chatLogElement.scrollTop > 300){
            backToTopButton.style.display = 'block';
        }else{
            backToTopButton.style.display = 'none';
        }
    })

    backToTopButton.addEventListener('click', () => {
        chatLogElement.scrollTo({
            top: 0,
            behavior:'smooth',
        });
    })


    //打字机效果
    const typeMessage = (bubble,content,callback) => {
        let index = 0;
        const intervalId = setInterval(() => {
            if(index < content.length){
                //charAt通过下标访问字符
                bubble.textContent += content.charAt(index++);
            }else{
                //严谨，防止内存泄漏
                clearInterval(intervalId)
                if(typeof callback === 'function'){
                    callback()
                }
            }
        },50)
    }

    //添加复制按钮
    const addCopyButton =(messageWrapper,content) => {
        const copyButton = document.createElement('button');
        copyButton.innerHTML ='<i class="fas fa-copy"></i>';
        copyButton.classList.add('copy-button')
        copyButton.addEventListener('click', () => {
            //BOM Brower Object Model 浏览器对象模型
            //导航栏
            //向剪切板中写入内容
            navigator.clipboard.writeText(content)
            .then(() => { 
                alert('内容已经复制到剪切板');
            })
            .catch(err => {
                console.error('无法复制文本',err);
                alert('复制失败，请尝试手动选择并复制')
            })
        })
        messageWrapper.appendChild(copyButton);
    }

    //保存聊天记录
    const saveChatLog = (role,content) => {
        //parse localstorage 存放字符串 想放入json格式对象 存之前 stringify
        //拿出来 parse  
        const chatLog = JSON.parse(localStorage.getItem('chatLog')) || [];
        chatLog.push({
            role,
            content
        })
        localStorage.setItem('chatLog',JSON.stringify(chatLog))
    }

    //添加消息到 chat-log中
    const appendMessage = (role,content,type='save') => {
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('message', role);

        const bubble = document.createElement('div');
        bubble.classList.add('bubble',`${role}-bubble`);
        if(role === 'assistant'){
            //打字机效果 一个个出来  流式输出
            typeMessage(
                bubble,
                content,
                () =>// console.log('------------------')
                addCopyButton(messageWrapper,content))
        }else{
            bubble.textContent = content;
            messageWrapper.appendChild(bubble);
        }
        messageWrapper.appendChild(bubble);
        chatLogElement.appendChild(messageWrapper); 
        chatLogElement.scrollTop = chatLogElement.scrollHeight;
        if(type === 'save'){
        saveChatLog(role,content)//bug原因
        }
    }

    //发送消息，调用接口
    const sendMessage = (message) => {
        //fetch promise 的实例
        return fetch('/chat',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    {'role': 'user',"content":message}
                ],
                temperature: 0.7
            })
        })
        .then(res => 
            // console.log(res.json())
             res.json()).then(data => {
            console.log(data,'///////////')
            return data.message;
        })
        //链式调用
        
    }
    //显示加载中
    const showLoadingIndicator= () => {
        if(loadingIndicator){
            loadingIndicator.style.display = 'block';
        }
    }

    //隐藏加载中
    const hideLoadingIndicator = () => {
        if(loadingIndicator){
            loadingIndicator.style.display = 'none';
        }
    } 
    //发送消息
    document.querySelector('.send-icon').addEventListener('click',async () => {
        const messageText = messageInput.value.trim();

        if(messageText){
            appendMessage('user',messageText);//封装
            messageInput.value = '';
            //LLM接口调用
            try{
                showLoadingIndicator();
                //await 返回promise 的耗时任务 (异步)
                const assistantMessage = await sendMessage(messageText)
                hideLoadingIndicator();
                appendMessage('assistant',assistantMessage);
            }catch(error){
                console.error('发送消息时出错',error);
                appendMessage('assistant','抱歉，我碰到了一个无法解决的问题，无法回复。')
            }
        }
    })
    messageInput.addEventListener('keydown',function(event){
        if(event.key ==='Enter' && !event.shiftKey){//回车 不按下shift
            event.preventDefault();//阻止默认行为 textarea有换行的默认行为
            document.querySelector('.send-icon').click();//触发点击事件
        }
    })

    const loadChatLog = () => {
        const chatLog = JSON.parse(localStorage.getItem('chatLog')) || [];
         //解构
        chatLog.slice(-MESSAGE_LIMIT).forEach(
            ({role,content}) => appendMessage(role,content,'init')
        )
    }
    

    //保存当前对话 to be continue(未完成)
    const saveCurrentConversation = () => {
        const currentChatLog = JSON.parse(localStorage.getItem('chatLog')) || [];
        //存储历史
        const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
        const timestamp = new Date().toLocaleString();
        chatHistory.push({
            //产品需求 实现
            name: `对话 ${chatHistory.length + 1} (${timestamp})`,
            messages: currentChatLog
        })
        localStorage.setItem('chatHistory',JSON.stringify(chatHistory));
    }


    //创建新的对话
    const startNewConversation = () => {
        // console.log('new conversation');
        saveCurrentConversation();
        localStorage.removeItem('chatLog');
        chatLogElement.innerHTML = '';
    }


    const loadConversationList = () => {
        const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
        chatHistory.forEach((conversation,index) => {
            const button = document.createElement('button');  
            button.setAttribute('data-index',index);             // 数据属性
            button.innerHTML = `${conversation.name} <span class="delete-btn" data-index="${index}">X</span>`
            //性能不好
            // button.onclick = function () {
            //     console.log(this.innerHTML);
            // }
            conversationListElement.appendChild(button);
        })
    }


    const loadConversation = (index) => {
        const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
        const conversation = chatHistory[index].messages || [];
        chatLogElement.innerHTML = '';
        conversation.slice(-MESSAGE_LIMIT).forEach(({
            role,
            content
        }) => appendMessage(role,content));
        localStorage.setItem('chatLog',JSON.stringify(conversation));
    }


    const deleteChatHistory = (index) => {   
        //to be continue
    }

    // DOM  level 2
    conversationListElement.addEventListener('click',function(event){
        console.log(event.target);
        const index = event.target.getAttribute('data-index')  || 0;
        //remove history  删除历史
        if(event.target.nodeName === 'SPAN'){
            deleteChatHistory(index);
            return;
        }

        //加载历史
        loadConversation(index); 
    })



    const main = () => {
        loadChatLog();
        loadConversationList();
    };
    main();

    //从局部挂载到全局作用域
    window.startNewConversation = startNewConversation;
    window.saveCurrentConversation = saveCurrentConversation;
})
// // 所有资源加载完后 
// window.addEventListener('load',function(){
//     console.log('加载完成');
    
// });