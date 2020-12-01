class ClientAxiosFix {
    transformResult(_url: any, response: any, callback: any) {
        return callback({ ...response, data: JSON.stringify(response.data) });
    }
}
