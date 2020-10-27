## 3-8 老瓶新酒 - 生命周期 (07：00)

- Mapping Vue2 to Vue3
    + beforeCreate -> use setup()
    + created -> use setup()
    + beforeMount -> onBeforeMount
    + mounted -> onMounted
    + beforeUpdate -> onBeforeUpdate
    + updatee -> onUpdated
    + beforeDestroy -> onBeforeUnmount
    + destroyed -> onUnmounted
    + activated -> onActivated
    + deactivated -> onDeactivated
    + errorCaptured -> onErrorCaptured

- added
    + onRenderTracked    # 观察数据的变化
    + onRenderTriggered  # 观察数据的变化
