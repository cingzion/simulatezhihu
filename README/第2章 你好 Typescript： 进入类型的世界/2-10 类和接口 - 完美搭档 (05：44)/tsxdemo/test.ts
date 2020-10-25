// 2-10 类和接口 - 完美搭档 (05：44)


// 接口
interface Radio {
    switchRadio(trigger: boolean): void;
}

// 测查电池的电量
interface Battery {
    checkBatteryStatus(): void;
}

// 接口之间的继承
interface RadioWithBattery extends Radio {
    checkBatteryStatus(): void;
}

// 实现接口
class Car implements Radio {
    switchRadio(trigger: boolean) {

    }
}

// 实现多个接口，用 逗号
class Cellphone implements Radio, Battery{
    switchRadio(trigger: boolean) {

    }

    checkBatteryStatus() {

    }
}



