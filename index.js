var axios = require('axios');

let hooli = function (host, app, source) {
    this.i_host = 'http://localhost:3333'
    this.i_app = 'hooli'
    this.i_source = 'local'

    if (host) {
        this.i_host = host
    }
    if (app) {
        this.i_app = app
    }
    if (source) {
        this.i_source = source
    }

    this.sender = async function (body) {
        try {
            var data = JSON.stringify(body);
            var config = {
                method: 'post',
                url: this.i_host + '/log',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            let response = await axios(config)
            return JSON.stringify(response.data)

        } catch (e) {
            console.error(e)
            throw e

        }

    }

    this.log = async function (text) {
        if (typeof text != 'string') {
            if (typeof text == 'object') {
                text = JSON.stringify(text)
            } else {
                text = String(text)
            }
        }
        try {
            return await this.sender({
                "app": this.i_app,
                "source": this.i_source,
                "type": "log",
                "content": text
            })
        } catch (e) {

        }
    }
    this.info = async function (text) {
        if (typeof text != 'string') {
            if (typeof text == 'object') {
                text = JSON.stringify(text)
            } else {
                text = String(text)
            }
        }
        try {
            return await this.sender({
                "app": this.i_app,
                "source": this.i_source,
                "type": "info",
                "content": text
            })
        } catch (e) {

        }
    }
    this.warn = async function (text) {
        if (typeof text != 'string') {
            if (typeof text == 'object') {
                text = JSON.stringify(text)
            } else {
                text = String(text)
            }
        }
        try {


            return await this.sender({
                "app": this.i_app,
                "source": this.i_source,
                "type": "warn",
                "content": text
            })
        } catch (e) {

        }
    }
    this.error = async function (text) {
        if (typeof text != 'string') {
            if (typeof text == 'object') {
                text = JSON.stringify(text)
            } else {
                text = String(text)
            }
        }
        try {
            return await this.sender({
                "app": this.i_app,
                "source": this.i_source,
                "type": "error",
                "content": text
            })
        } catch (e) {

        }
    }
    this.debug = async function (text) {
        if (typeof text != 'string') {
            if (typeof text == 'object') {
                text = JSON.stringify(text)
            } else {
                text = String(text)
            }
        }
        try {


            return await this.sender({
                "app": this.i_app,
                "source": this.i_source,
                "type": "debug",
                "content": text
            })
        } catch (e) {

        }
    }
    this.request = async function (text) {
        if (typeof text != 'string') {
            if (typeof text == 'object') {
                text = JSON.stringify(text)
            } else {
                text = String(text)
            }
        }
        try {
            return await this.sender({
                "app": this.i_app,
                "source": this.i_source,
                "type": "request",
                "content": text
            })

        } catch (e) {

        }

    }

}

module.exports = hooli
