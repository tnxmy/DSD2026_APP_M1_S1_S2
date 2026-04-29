if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
export class ProfilePage extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.isLoggedIn = false;
        this.username = '';
        this.password = '';
        this.showPassword = false;
        this.isLoading = false;
        this.errorMessage = '';
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.isLoggedIn = false;
        this.username = '';
        this.password = '';
        this.showPassword = false;
        this.isLoading = false;
        this.errorMessage = '';
    }
    @Local
    isLoggedIn: boolean;
    @Local
    username: string;
    @Local
    password: string;
    @Local
    showPassword: boolean;
    @Local
    isLoading: boolean;
    @Local
    errorMessage: string;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/ProfilePage.ets(16:5)", "entry");
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor({ "id": 125831061, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            Column.padding({ left: 24, right: 24 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 标题
            Text.create('个人中心');
            Text.debugLine("entry/src/main/ets/pages/ProfilePage.ets(18:7)", "entry");
            // 标题
            Text.fontSize({ "id": 125830965, "type": 10002, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            // 标题
            Text.fontWeight(FontWeight.Bold);
            // 标题
            Text.fontColor({ "id": 125830982, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            // 标题
            Text.margin({ top: 60, bottom: 32 });
        }, Text);
        // 标题
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isLoggedIn) {
                this.ifElseBranchUpdateFunction(0, () => {
                    // 已登录状态
                    this.LoggedInView.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    // 登录表单
                    this.LoginForm.bind(this)();
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    /**
     * 登录表单
     */
    LoginForm(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 16 });
            Column.debugLine("entry/src/main/ets/pages/ProfilePage.ets(43:5)", "entry");
            Column.width('100%');
            Column.margin({ top: 32 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 用户名输入框
            Column.create({ space: 8 });
            Column.debugLine("entry/src/main/ets/pages/ProfilePage.ets(45:7)", "entry");
            // 用户名输入框
            Column.width('100%');
            // 用户名输入框
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('用户名');
            Text.debugLine("entry/src/main/ets/pages/ProfilePage.ets(46:9)", "entry");
            Text.fontSize({ "id": 125830971, "type": 10002, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            Text.fontColor({ "id": 125830983, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: '请输入用户名', text: this.username });
            TextInput.debugLine("entry/src/main/ets/pages/ProfilePage.ets(51:9)", "entry");
            TextInput.width('100%');
            TextInput.height(48);
            TextInput.borderRadius(12);
            TextInput.backgroundColor({ "id": 125831127, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            TextInput.onChange((value) => {
                this.username = value;
                this.errorMessage = '';
            });
        }, TextInput);
        // 用户名输入框
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 密码输入框
            Column.create({ space: 8 });
            Column.debugLine("entry/src/main/ets/pages/ProfilePage.ets(65:7)", "entry");
            // 密码输入框
            Column.width('100%');
            // 密码输入框
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('密码');
            Text.debugLine("entry/src/main/ets/pages/ProfilePage.ets(66:9)", "entry");
            Text.fontSize({ "id": 125830971, "type": 10002, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            Text.fontColor({ "id": 125830983, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/ProfilePage.ets(71:9)", "entry");
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: '请输入密码', text: this.password });
            TextInput.debugLine("entry/src/main/ets/pages/ProfilePage.ets(72:11)", "entry");
            TextInput.width('100%');
            TextInput.height(48);
            TextInput.borderRadius(12);
            TextInput.type(this.showPassword ? InputType.Normal : InputType.Password);
            TextInput.backgroundColor({ "id": 125831127, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            TextInput.onChange((value) => {
                this.password = value;
                this.errorMessage = '';
            });
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 显示/隐藏密码按钮
            Button.createWithChild({ type: ButtonType.Circle });
            Button.debugLine("entry/src/main/ets/pages/ProfilePage.ets(84:11)", "entry");
            // 显示/隐藏密码按钮
            Button.width(40);
            // 显示/隐藏密码按钮
            Button.height(40);
            // 显示/隐藏密码按钮
            Button.backgroundColor(Color.Transparent);
            // 显示/隐藏密码按钮
            Button.margin({ left: -48 });
            // 显示/隐藏密码按钮
            Button.onClick(() => {
                this.showPassword = !this.showPassword;
            });
        }, Button);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create(this.showPassword ? { "id": 125832272, "type": 40000, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" } : { "id": 125832271, "type": 40000, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            SymbolGlyph.debugLine("entry/src/main/ets/pages/ProfilePage.ets(85:13)", "entry");
            SymbolGlyph.fontSize(20);
            SymbolGlyph.fontColor([{ "id": 125830992, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" }]);
        }, SymbolGlyph);
        // 显示/隐藏密码按钮
        Button.pop();
        Row.pop();
        // 密码输入框
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            // 错误提示
            if (this.errorMessage) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.errorMessage);
                        Text.debugLine("entry/src/main/ets/pages/ProfilePage.ets(104:9)", "entry");
                        Text.fontSize({ "id": 125830974, "type": 10002, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
                        Text.fontColor(Color.Red);
                        Text.width('100%');
                        Text.margin({ top: 4 });
                    }, Text);
                    Text.pop();
                });
            }
            // 登录按钮
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 登录按钮
            Button.createWithLabel(this.isLoading ? '登录中...' : '登录');
            Button.debugLine("entry/src/main/ets/pages/ProfilePage.ets(112:7)", "entry");
            // 登录按钮
            Button.width('100%');
            // 登录按钮
            Button.height(48);
            // 登录按钮
            Button.borderRadius(24);
            // 登录按钮
            Button.backgroundColor({ "id": 125830995, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            // 登录按钮
            Button.fontColor(Color.White);
            // 登录按钮
            Button.fontSize({ "id": 125830968, "type": 10002, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            // 登录按钮
            Button.fontWeight(FontWeight.Medium);
            // 登录按钮
            Button.enabled(!this.isLoading && this.username.length > 0 && this.password.length > 0);
            // 登录按钮
            Button.margin({ top: 16 });
            // 登录按钮
            Button.onClick(() => {
                this.handleLogin();
            });
        }, Button);
        // 登录按钮
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 注册链接
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/ProfilePage.ets(127:7)", "entry");
            // 注册链接
            Row.margin({ top: 16 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('还没有账号？');
            Text.debugLine("entry/src/main/ets/pages/ProfilePage.ets(128:9)", "entry");
            Text.fontSize({ "id": 125830971, "type": 10002, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            Text.fontColor({ "id": 125830983, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('立即注册');
            Text.debugLine("entry/src/main/ets/pages/ProfilePage.ets(132:9)", "entry");
            Text.fontSize({ "id": 125830971, "type": 10002, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            Text.fontColor({ "id": 125830986, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            Text.onClick(() => {
                // TODO: 跳转到注册页面
            });
        }, Text);
        Text.pop();
        // 注册链接
        Row.pop();
        Column.pop();
    }
    /**
     * 已登录视图
     */
    LoggedInView(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 16 });
            Column.debugLine("entry/src/main/ets/pages/ProfilePage.ets(150:5)", "entry");
            Column.width('100%');
            Column.alignItems(HorizontalAlign.Center);
            Column.margin({ top: 32 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 头像
            Circle.create({ width: 80, height: 80 });
            Circle.debugLine("entry/src/main/ets/pages/ProfilePage.ets(152:7)", "entry");
            // 头像
            Circle.fill({ "id": 125830992, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
        }, Circle);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 用户名
            Text.create(this.username);
            Text.debugLine("entry/src/main/ets/pages/ProfilePage.ets(156:7)", "entry");
            // 用户名
            Text.fontSize({ "id": 125830965, "type": 10002, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            // 用户名
            Text.fontWeight(FontWeight.Bold);
            // 用户名
            Text.fontColor({ "id": 125830982, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
        }, Text);
        // 用户名
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 欢迎语
            Text.create('欢迎回来！');
            Text.debugLine("entry/src/main/ets/pages/ProfilePage.ets(162:7)", "entry");
            // 欢迎语
            Text.fontSize({ "id": 125830971, "type": 10002, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            // 欢迎语
            Text.fontColor({ "id": 125830983, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
        }, Text);
        // 欢迎语
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 退出登录按钮
            Button.createWithLabel('退出登录');
            Button.debugLine("entry/src/main/ets/pages/ProfilePage.ets(167:7)", "entry");
            // 退出登录按钮
            Button.width('100%');
            // 退出登录按钮
            Button.height(48);
            // 退出登录按钮
            Button.borderRadius(24);
            // 退出登录按钮
            Button.backgroundColor({ "id": 125831127, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            // 退出登录按钮
            Button.fontColor({ "id": 125830982, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            // 退出登录按钮
            Button.fontSize({ "id": 125830968, "type": 10002, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
            // 退出登录按钮
            Button.fontWeight(FontWeight.Medium);
            // 退出登录按钮
            Button.margin({ top: 32 });
            // 退出登录按钮
            Button.onClick(() => {
                this.handleLogout();
            });
        }, Button);
        // 退出登录按钮
        Button.pop();
        Column.pop();
    }
    /**
     * 处理登录
     */
    private handleLogin(): void {
        if (this.username.length === 0) {
            this.errorMessage = '请输入用户名';
            return;
        }
        if (this.password.length === 0) {
            this.errorMessage = '请输入密码';
            return;
        }
        this.isLoading = true;
        // 模拟登录请求
        setTimeout(() => {
            this.isLoading = false;
            // 简单验证：用户名和密码都不为空即登录成功
            if (this.username.length >= 3 && this.password.length >= 6) {
                this.isLoggedIn = true;
                this.errorMessage = '';
            }
            else {
                this.errorMessage = '用户名至少3位，密码至少6位';
            }
        }, 1000);
    }
    /**
     * 处理退出登录
     */
    private handleLogout(): void {
        this.isLoggedIn = false;
        this.username = '';
        this.password = '';
        this.errorMessage = '';
    }
    rerender() {
        this.updateDirtyElements();
    }
}
