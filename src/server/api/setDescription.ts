import FormData from 'form-data';
import {AppConfig} from '../appConfig/appConfig';
import axios, {AxiosResponse} from 'axios';

export function setDescription(groupId: number, videoId: number, desc: string, name: string) {
    return new Promise((resolve, reject) => {

        const formData = new FormData();
        formData.append('access_token', `${AppConfig.vk.access_token}`);
        formData.append('v', `${AppConfig.vk.api_version}`);
        formData.append('owner_id', `-${groupId}`);
        formData.append('video_id', `${videoId}`);
        formData.append('desc', `${desc}`);
        formData.append('name', `${name}`);

        const requestUrl = 'https://api.vk.com/method/video.edit';

        axios.post(`${requestUrl}`, formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
            .then((response: AxiosResponse) => {
                if (response.data.error) {
                    reject(response.data.error.error_msg)
                    console.log(response.data.error)
                } else {
                    resolve(response);
                    console.log(response)
                }
            })
            .catch((err: any) => reject(err));
    });
}
