var name = "刀郎"
var a = {
    name: "薛之谦",
    fun1: function () {
        console.log(this.name);
    },
    fun2: function () {
        setTimeout(function () {
            //this 被指定
            this.fun1();
        }.call(a), 1000)
    }
}

a.fun2();