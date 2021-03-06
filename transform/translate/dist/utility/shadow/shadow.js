import { ShadowOffset } from "../shadow/shadow_offset.js";
import { ShadowColor } from "../shadow/shadow_color.js";
/**
 * @class Shadow
 * @description
 * 影の設定を行うクラス(使い方はExampleを見てください。)
 * @example
 * let set_shadow_color: ShadowColor = new ShadowColor("#00000050", "#ffffff50");
 * let set_shadow_offset: ShadowOffset = new ShadowOffset(5, 5);
 * let set_shadow_bulr: number = 10;
 *
 * @author ShingoHosoda
 * @copyright ShingoHosoda
 * @license MIT
 */
class Shadow {
    /**
     *
     * @param {ShadowColor} shadow_color - 影の色1と影の色2を設定
     * @param {ShadowOffset} shadow_offset - 影のずらす範囲1と影のずらす範囲2
     * @param {number} shadow_blur - 影のにじみの大きさつまりぼかしの設定
     */
    constructor(shadow_color, shadow_offset, shadow_blur) {
        this.shadow_color = new ShadowColor("", "");
        this.shadow_offset = new ShadowOffset(0, 0);
        this.shadow_blur = 0;
        this.shadow_color = shadow_color;
        this.shadow_offset = shadow_offset;
        this.shadow_blur = shadow_blur;
    }
}
export { Shadow };
