import { ref } from "@vue/reactivity";

const ColorPickerComposable = () => {
    const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
    let msg = ref("Pick a Color!!!");
    const colorMatch = (value) => {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if (colors[randomNum] === value) {
        msg.value = `You Win!!! [answer: ${colors[randomNum]}]`;
        return;
    }
    msg.value = `You Lose!!! [answer: ${colors[randomNum]}]`;
};
return { colors, msg, colorMatch };
};
export default ColorPickerComposable;