import axios from 'axios';
import {logger} from '../logger/logger';
import {AppConfig} from '../appConfig/appConfig';

// read the doc from https://github.com/yagop/node-telegram-bot-api to know how to catch the chatId
const requestUrl = `https://api.telegram.org/bot${AppConfig.telegram.access_token}/sendMessage?chat_id=${AppConfig.telegram.chatId}`

export const telegramSend = (message: any) => axios.post(`${requestUrl}`, `parse_mode=HTML&text=${message}`, {}).catch((err: any) => logger('error', err));
