function hello(): void {
    alert("Hello Angular");
}

// function aa(foo: () => void) {
function aa(foo: () => any) {
    let f = foo();
    f.doSomeThing(); // Error，void類型不存在doSomeThing方法，如果此時換成任意類型時則不報錯
}

