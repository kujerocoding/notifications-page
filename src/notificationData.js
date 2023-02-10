import { nanoid } from "nanoid"

export default[
    {
        id: nanoid(),
        name: 'Mark Webber',
        avatar: 'avatar-mark-webber.webp',
        activity: 'reacted to your recent post',
        objectActivity: 'My first tournament today!',
        message:"",
        isRead: false,
        time: '1m'
    },
    {
        id: nanoid(),
        name: 'Angela',
        avatar: 'avatar-angela-gray.webp',
        activity: 'followed you',
        objectActivity: '',
        message:"",
        isRead: false,
        time: '5m'
    },
    {
        id: nanoid(),
        name: 'Jacob Thompson',
        avatar: 'avatar-jacob-thompson.webp',
        activity: 'has joined your group',
        objectActivity: 'Chess Club',
        message:"",
        isRead: false,
        time: '1 day'
    },
    {
        id: nanoid(),
        name: 'Rizky Hasanuddin',
        avatar: 'avatar-rizky-hasanuddin.webp',
        activity: 'sent you a private message',
        objectActivity: '',
        message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        isRead: false,
        time: '5 days'
    },
    {
        id: nanoid(),
        name: 'Kimberly Smith',
        avatar: 'avatar-kimberly-smith.webp',
        activity: 'commented on your picture',
        objectActivity: "",
        hasObjectImg: true,
        objectImg: '../src/assets/images/image-chess.webp',
        message:"",
        isRead: false,
        time: '1 week'
    },
    {
        id: nanoid(),
        name: 'Nathan Peterson',
        avatar: 'avatar-nathan-peterson.webp',
        activity: 'reacted to your recent post',
        objectActivity: '5 end-games strategies to increase your win rate',
        message:"",
        isRead: false,
        time: '2 weeks'
    },
    {
        id: nanoid(),
        name: 'Anna Kim',
        avatar: 'avatar-anna-kim.webp',
        activity: 'left the group',
        objectActivity: 'Chess Club',
        message:"",
        isRead: false,
        time: '2 weeks'
    }


]