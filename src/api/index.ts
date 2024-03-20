import request from "@/requests/index";
import {ElMessage} from "element-plus";

export function getHistoryReport() {
    return request({
        url: '/home/history',
        method: 'get',
    })
}


export function fSearch (keyword: string, page: number) {
    return request({
        url: '/home/fuzzy',
        method: 'post',
        params: {
            keyword: keyword,
            page: page
        }
    })

}

export function jumpToCompany(companyId: number){
    return request({
        url: '/fuzzy/precise',
        method: 'post',
        params: {
           companyId: companyId
        }
    })
}

export function nextPage(keyword : string, page: number){
    return request({
        url: '/fuzzy/next',
        method: 'post',
        params: {
            keyword: keyword,
            page: page
        }
    })

}


export function submitLogin (uname: string, password : string)  {
    return request({
        url: '/user/login',
        method: "post",
        params: {
            uname: uname,
            password: password
        }
        // }).then(response => {
        //     if(response.status === 200){
        //         ElMessage.success('登录成功');
        //
        //         return response;
        //     }else{
        //         if (response.status === 401) {
        //             ElMessage.error('用户名有误');
        //         } else if (response.status === 402) {
        //             ElMessage.error('密码错误');
        //         }
        //         return new Error('登录失败');
        //     }
        //
        // }).catch(error => {
        //     return new Error(error.message)
        // });
    })

}



