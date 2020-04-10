/**
 * Created by en20 on 2020/2/25.
 */
// await 暂停
export const sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
