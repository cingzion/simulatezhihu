import {onMounted, onUnmounted, ref, reactive, toRefs} from 'vue';


// 抽离的功能
export const useMounsePosition = () => {
    const x = ref(0);
    const y = ref(0);

    const updateMouse = (e: MouseEvent): void => {
        x.value = e.pageX;
        y.value = e.pageY;
    };


    onMounted((): void => {
        document.addEventListener('click', updateMouse, false);
    });

    onUnmounted((): void => {
        document.removeEventListener('click', updateMouse, false);
    });

    return {
        x,
        y,
    }

};

//  抽离的功能 改成使用 reactive 
export const useMounsePositionReactive = () => {
    const data = reactive({
        x: 0,
        y: 0,
        updateMouse: (e: MouseEvent ): void => {
            data.x = e.pageX;
            data.y = e.pageY;
        },
        onTed: (): void => {
            onMounted((): void => {
                document.addEventListener('click', data.updateMouse, false);
            });
            onUnmounted((): void => {
                document.removeEventListener('click', data.updateMouse, false);
            });
        }
    });

    data.onTed();

    const dataToRefs = toRefs(data);
    return {
        ...dataToRefs
    }
}