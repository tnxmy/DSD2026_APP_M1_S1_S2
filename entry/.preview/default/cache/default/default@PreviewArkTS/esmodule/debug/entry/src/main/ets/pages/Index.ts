if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { TAB_ITEMS } from "@normalized:N&&&entry/src/main/ets/model/TabModel&";
import { HomePage } from "@normalized:N&&&entry/src/main/ets/pages/HomePage&";
import { TestPage } from "@normalized:N&&&entry/src/main/ets/pages/TestPage&";
import { RecordPage } from "@normalized:N&&&entry/src/main/ets/pages/RecordPage&";
import { ProfilePage } from "@normalized:N&&&entry/src/main/ets/pages/ProfilePage&";
class Index extends ViewV2 {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda, extraInfo) {
        super(parent, elmtId, extraInfo);
        this.currentIndex = 0;
        this.finalizeConstruction();
    }
    public resetStateVarsOnReuse(params: Object): void {
        this.currentIndex = 0;
    }
    @Local
    currentIndex: number;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({ barPosition: BarPosition.End, index: this.currentIndex });
            Tabs.debugLine("entry/src/main/ets/pages/Index.ets(16:5)", "entry");
            Tabs.barHeight(56);
            Tabs.barMode(BarMode.Fixed);
            Tabs.scrollable(false);
            Tabs.onChange((index: number) => {
                this.currentIndex = index;
            });
            Tabs.width('100%');
            Tabs.height('100%');
            Tabs.backgroundColor({ "id": 125831062, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new HomePage(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 19, col: 9 });
                            ViewV2.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "HomePage" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, 0);
                } });
            TabContent.debugLine("entry/src/main/ets/pages/Index.ets(18:7)", "entry");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new TestPage(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 25, col: 9 });
                            ViewV2.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "TestPage" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, 1);
                } });
            TabContent.debugLine("entry/src/main/ets/pages/Index.ets(24:7)", "entry");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new RecordPage(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 31, col: 9 });
                            ViewV2.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "RecordPage" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, 2);
                } });
            TabContent.debugLine("entry/src/main/ets/pages/Index.ets(30:7)", "entry");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new ProfilePage(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 37, col: 9 });
                            ViewV2.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "ProfilePage" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, 3);
                } });
            TabContent.debugLine("entry/src/main/ets/pages/Index.ets(36:7)", "entry");
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
    }
    /**
     * 底部页签构建器
     */
    TabBuilder(index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 4 });
            Column.debugLine("entry/src/main/ets/pages/Index.ets(57:5)", "entry");
            Column.width('100%');
            Column.height('100%');
            Column.justifyContent(FlexAlign.Center);
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create(TAB_ITEMS[index].icon);
            SymbolGlyph.debugLine("entry/src/main/ets/pages/Index.ets(58:7)", "entry");
            SymbolGlyph.fontSize(24);
            SymbolGlyph.fontColor([this.currentIndex === index ? { "id": 125830995, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" } : { "id": 125830993, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" }]);
        }, SymbolGlyph);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(TAB_ITEMS[index].title);
            Text.debugLine("entry/src/main/ets/pages/Index.ets(64:7)", "entry");
            Text.fontSize(12);
            Text.fontWeight(this.currentIndex === index ? FontWeight.Medium : FontWeight.Regular);
            Text.fontColor(this.currentIndex === index ? { "id": 125830986, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" } : { "id": 125830983, "type": 10001, params: [], "bundleName": "com.example.myapp", "moduleName": "entry" });
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.myapp", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
