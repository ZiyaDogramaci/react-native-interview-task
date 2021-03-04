import { IsStringValidAndNotEmpty } from "../utils/helpers";

const MOCK_LOGIN_RESPONSE_TIME = 500;
const MOCK_FEED_RESPONSE_TIME = 150;
const MOCK_SEARCH_RESPONSE_TIME = 250;
const USER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const USER_FEED_DATA = {
    posts : [
        {
            id : 'vp00',
            type : "video",
            postedBy : {
                userName : "Adnan Arıcıoğlu",
                profilePicture : "https://randomuser.me/api/portraits/men/66.jpg"
            },
            message : "Hakiki bal bozulmaz !",
            reactions : 478,
            video : require("../assets/data/video/video0.mp4")
        },
        {
            id : 'imgp00',
            type : "images",
            postedBy : {
                userName : "Ece Akbay",
                profilePicture : "https://randomuser.me/api/portraits/women/43.jpg"
            },
            message : "Drift manyağı yaparım lan sizi ! ayık olun ...",
            reactions : 780,
            images : [
                require("../assets/data/image/image0.jpg"),
                require("../assets/data/image/image1.jpg")
            ]
        },
        {
            id : 'vp01',
            type : "video",
            postedBy : {
                userName : "Zeki Karagöz",
                profilePicture : "https://randomuser.me/api/portraits/men/33.jpg"
            },
            message : "Bir fincan kahve olsam kırk yılı geçtim kırk dk hatrım olur muydu ?",
            reactions : 356,
            video : require("../assets/data/video/video1.mp4")
        },
        {
            id : 'imgp01',
            type : "images",
            postedBy : {
                userName : "Açelya Yalınayak",
                profilePicture : "https://randomuser.me/api/portraits/women/22.jpg"
            },
            message : "Gezmelere doyamadık canımsss ösledim",
            reactions : 4500,
            images : [
                require("../assets/data/image/image2.jpg"),
                require("../assets/data/image/image3.jpg")                
            ]
        },
        {
            id : 'imgp02',
            type : "images",
            postedBy : {
                userName : "Hikmet Altun",
                profilePicture : "https://randomuser.me/api/portraits/men/72.jpg"
            },
            message : "Rampada geçme beni Düzde kepaze ederim seni !",
            reactions : 200,
            images : [
                require("../assets/data/image/image4.jpg"),
                require("../assets/data/image/image5.jpg")
            ]
        },
        {
            id : 'vp02',
            type : "video",
            postedBy : {
                userName : "Aeron Howells",
                profilePicture : "https://randomuser.me/api/portraits/men/27.jpg"
            },
            message : "Dubrovnikten yola çıktı yiğitler. Dubrovnik ülkü ocakları CCC",
            reactions : 3490,
            video : require("../assets/data/video/video2.mp4")
        },
        {
            id : 'vp03',
            type : "video",
            postedBy : {
                userName : "Nerezza Bellucci",
                profilePicture : "https://randomuser.me/api/portraits/women/19.jpg"
            },
            message : "Uzun ince bir yoldayım gidiyorum gündüz gece ...",
            reactions : 29,
            video : require("../assets/data/video/video3.mp4")
        },
        {
            id : 'imgp03',
            type : "images",
            postedBy : {
                userName : "Fuat Höykeli",
                profilePicture : "https://randomuser.me/api/portraits/men/9.jpg"
            },
            message : "Yanıyosun fuat abiiiiii asdasgdsagFDASD",
            reactions : 10000,
            images : [
                require("../assets/data/image/image6.jpg"),
                require("../assets/data/image/image7.jpg")
            ]
        },
        {
            id : 'vp04',
            type : "video",
            postedBy : {
                userName : "Isa Susumu",
                profilePicture : "https://randomuser.me/api/portraits/women/17.jpg"
            },
            message : "Doğu Karadeniz | Artvin Mençuna Şelalesi",
            reactions : 29,
            video : require("../assets/data/video/video4.mp4")
        },
        {
            id : 'imgp04',
            type : "images",
            postedBy : {
                userName : "Yaroslava Pushkina",
                profilePicture : "https://randomuser.me/api/portraits/women/7.jpg"
            },
            message : "Yeni oyuncaklarım nasıl ?",
            reactions : 10000,
            images : [
                require("../assets/data/image/image8.jpg"),
                require("../assets/data/image/image9.jpg")
            ]
        }
    ]
};

export const mockLogin = ({mail, password}) => new Promise((resolve, reject) => 
    setTimeout(() => resolve(USER_TOKEN), MOCK_LOGIN_RESPONSE_TIME)
);

export const mockFeed = ({token}) => new Promise((resolve, reject) => 
    setTimeout(() => resolve(USER_FEED_DATA), MOCK_FEED_RESPONSE_TIME)
);

const SearchResources = (searchText) => {
    let result=[];

    USER_FEED_DATA.posts.forEach(item => {
        /**
         * koşuldaki ilk satırda girilen kelimenin 
         * null, undefined ve boş string durumlarını kontrol ediyor
         * sonraki satırlarda message ve postedBy.userName proplarında geçip geçmediğine bakıyor
         * case insensitive olması için proplar ve searchText lower case e çevrildi
         * 
         */

        if( !IsStringValidAndNotEmpty(searchText) ||
            item.message.toLowerCase().includes(searchText.toLowerCase()) || 
            item.postedBy.userName.toLowerCase().includes(searchText.toLowerCase())){
                    
            if ( item.type === 'video' ) {
                result.push({ 
                    id : 's' + item.id, 
                    type : item.type, 
                    source : item.video 
                });
            } else {
                item.images.forEach((img, index) => {
                    result.push({ 
                        id : ('s' + item.id + '.' + index), 
                        type : 'image',
                        source : img
                    });
                })
            }
        }
    });
    console.log("search results => " + JSON.stringify(result));
    return result;    
};

export const mockSearch = ({token, searchText}) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(SearchResources(searchText))
    , MOCK_SEARCH_RESPONSE_TIME);
});