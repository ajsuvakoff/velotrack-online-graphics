
interface AppConfigInterface {
    app: {
        env: string;
        basePath: string;
    },
    telegram: {
        access_token: string;
        chatId: string;
    },
    vk: {
        access_token: string;
        api_version: string;
        description: string;
        wallpost: string;
        is_private: string;
        privacy_view: string;
        privacy_comment: string;
        no_comments: string;
        repeat: string;
        compression: string;
    }
}

export let AppConfig : AppConfigInterface = {
    app: {
        env: 'production',
        basePath: '/mnt/storage/VIDEO_STORAGE/Conference'
    },

    telegram: {
        access_token: '5322691953:AAHeSMtGxSRjQK0E6F77jEa8RQYJXXl2HZQ',
        chatId: '-1001609707127'
    },

    vk: {
        access_token: 'vk1.a.ezHRu7gVlPDWHTN8zwK0poiu3uz_52nfgIc_EKKP0rbbiPsAAp8LlATUuNmQeHa3-yotRpiKlyIbR7l67wCMZmh1Hp7fokN3ArssoEHmMw29J1M6rLwWVNQQlj76aX7ecZmInhEQMHmxYcbPb5dInD_kRDxqj5u0B0-I-tWqKUl4M093_t3hH5YKDJownuee',
        api_version: '5.131', // Это обязательно:)
        description: '', // Описание
        wallpost: '0', // Публиковать на стену
        is_private: '0', // Не использовать ничего кроме "0"
        privacy_view: 'editors', // Настройка приватности для просмотра
        privacy_comment: 'editors', // Настройка приватности комментариев
        no_comments: '0', // Можно отключить комментарии вообще
        repeat: '0', // Повтор видео вкл/выкл по дефолту
        compression: '0' // ???
    }
};
