// 按键名称
enum Enum_Buttons_Key {
    // 按钮
    BUTTON_1 = '串口号',
    BUTTON_2 = '连接',
    BUTTON_3 = '断开',
}
// 按键key值
const Button_Function_map: { [key: string]: { title: string, key: number, clickEvent?: any } } = {
    [Enum_Buttons_Key.BUTTON_1]: {
        title: '串口号', key: 1, clickEvent: (value: any) => {
            console.log('-----------', value);
        },
    },
    [Enum_Buttons_Key.BUTTON_2]: { title: '连接', key: 2 },
    [Enum_Buttons_Key.BUTTON_3]: { title: '断开', key: 3 },
}
const Get_Btn_Property = (param: {}) => {

};

export { Enum_Buttons_Key, Button_Function_map };