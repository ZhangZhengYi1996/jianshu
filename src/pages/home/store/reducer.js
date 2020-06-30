import {
    fromJS
} from "immutable";

const defaultStatus = fromJS({
    topicList: [{
        id: 1,
        topic: "社会热点",
        imgUrl: "https://upload.jianshu.io/collections/images/633082/timg_%281%29.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"
    }, {
        id: 2,
        topic: "社会热点",
        imgUrl: "https://upload.jianshu.io/collections/images/633082/timg_%281%29.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"
    }]
});

export default (state = defaultStatus, action) => {
    switch (action.type) {
        default:
            return state;
    }
}