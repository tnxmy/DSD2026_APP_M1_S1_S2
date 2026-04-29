/**
 * 底部页签数据模型
 */
export class TabItem {
    icon: Resource;
    title: string;
    index: number;
    constructor(icon: Resource, title: string, index: number) {
        this.icon = icon;
        this.title = title;
        this.index = index;
    }
}
/**
 * 底部页签配置
 */
export const TAB_ITEMS: TabItem[] = [
    new TabItem({ "id": 125831534, "type": 40000, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" }, '主页', 0),
    new TabItem({ "id": 125831482, "type": 40000, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" }, '测试', 1),
    new TabItem({ "id": 125831909, "type": 40000, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" }, '记录', 2),
    new TabItem({ "id": 125832135, "type": 40000, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" }, '个人', 3),
];
